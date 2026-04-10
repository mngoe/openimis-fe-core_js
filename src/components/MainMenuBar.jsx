import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { injectIntl } from "react-intl";
import { useModulesManager } from "../helpers/modules";
import { ErrorBoundary } from "@openimis/fe-core";
import { useToast } from "../helpers/ToastContext";
import { menuEntryMatchesLocationPath} from "../helpers/utils";
import MainMenuContribution from "./generics/MainMenuContribution";
import GetIconComponent from "../helpers/icons";

function mergeMenuConfigs(moduleConfigs, backendConfigs) {
  try {
    if (!Array.isArray(backendConfigs)) {
      console.error("Malformed backend menus: expected array, got", backendConfigs);
      return moduleConfigs;  // Fallback to modules
    }

    // Create a map of backend configs by id for quick lookup
    const backendMap = new Map(backendConfigs.map(config => [config.id, config]));

    // Start with module configs as base
    const merged = [...moduleConfigs];

    // Apply backend overrides
    merged.forEach(config => {
      const backendOverride = backendMap.get(config.id);
      if (backendOverride) {
        // Merge: backend properties override module properties
        Object.assign(config, backendOverride);
      }
    });

    // Add any backend configs that don't exist in modules
    backendConfigs.forEach(backendConfig => {
      if (!merged.some(config => config.id === backendConfig.id)) {
        merged.push(backendConfig);
      }
    });

    return merged;
  } catch (error) {
    console.error("Error merging menu configs:", error, { moduleConfigs, backendConfigs });
    return moduleConfigs;  // Fallback
  }
}

function getMenus(modulesManager, key, rights, menuVariant, history, intl) {
  // Collect all declarative menu configs from modules
  const moduleMenuConfigs = modulesManager.getContribs("fe-core.menus");

  // Get backend overrides
  const backendMenuConfigs = modulesManager.getConf("fe-core", "menus", []);

  // Merge: modules as base, backend as overrides
  const menuConfigs = mergeMenuConfigs(moduleMenuConfigs, backendMenuConfigs);

  // Default contributionKey to id for all configs (backend/module); override if specified
  menuConfigs.forEach(config => {
    if (!config.contributionKey) {
      config.contributionKey = config.id;  // Use id as key to pull submenus, e.g., "individual.MainMenu"
    }
    if (!config.entries && !config.contributionKey) {
      console.warn(`Menu ${config.id} has no entries or valid contributionKey.`);
    }
  });

  // Sort by position (default 99 if missing; stable for duplicates)
  const sortedMenuConfigs = menuConfigs.sort((a, b) => (a.position || 99) - (b.position || 99));

  // Get all menu entries for active menu detection
  const menuEntries = modulesManager.getMenuEntries();
  const activeMenuId = findActiveMenuId(sortedMenuConfigs, menuEntries);

  // Process each menu config into a MainMenuContribution component
  const menuComponents = sortedMenuConfigs
    .map((config) => {
      // Collect base entries from config
      let entries = [...(config.entries || [])];

      // Add contributions from other modules if contributionKey is specified
      if (config.contributionKey) {
        const contributedEntries = modulesManager.getContribs(config.contributionKey);
        entries = [...entries, ...contributedEntries];
      }

      // Fallback: If no contributions, generate entries from submenus
      if (entries.length === 0 && config.submenus && Array.isArray(config.submenus)) {
        entries = config.submenus.map(submenu => ({
          id: submenu.id,
          position: submenu.position || 99,
          icon: typeof submenu.icon === 'string' ? GetIconComponent(submenu.icon) : submenu.icon,
          route: deriveRoute(config.id, submenu.id),  // e.g., /clientRegistry/individual.groups
          text: intl.formatMessage({ id: submenu.id, defaultMessage: deriveText(submenu.id) }),  // Derive text from id
          rights: submenu.rights || deriveRights(config.id, submenu.id),  // e.g., ['clientRegistry.individual.groups']
          filter: submenu.rights ? (rights) => rights.some(r => submenu.rights.includes(r)) : () => true
        }));
        //console.warn(`Generated entries from submenus for new menu ${config.id}.`);
      }

      // If still empty, warn
      if (entries.length === 0) {
        console.warn(`New main menu ${config.id} has no entries or contributionKey submenus.`);
      }

      // Filter entries by rights and convert ico n strings to components
      const filteredEntries = entries
        .filter((entry) => !entry.filter || entry.filter(rights))
        .map((entry) => ({
          ...entry,
          icon: typeof entry.icon === 'string' ? GetIconComponent(entry.icon) : entry.icon
        }));

      // Skip empty menus
      if (!filteredEntries.length) return null;

      // Resolve icon
      const IconComponent = typeof config.icon === 'string' ? GetIconComponent(config.icon) : config.icon;

      return (
        <MainMenuContribution
          key={config.id}
          menuVariant={menuVariant}
          header={config.name} // Will be translated by MainMenuContribution
          menuId={config.id}
          modulesManager={modulesManager}
          rights={rights}
          history={history}
          entries={filteredEntries}
          icon={IconComponent}
          isInitiallyOpen={menuVariant === "Drawer" && config.id === activeMenuId}
        />
      );
    })
    .filter(Boolean);

  // BACKWARD COMPATIBILITY: Include old-style core.MainMenu components
  // that don't have a matching fe-core.menus config
  const oldStyleMenus = modulesManager.getContribs(key);
  const existingMenuIds = new Set(sortedMenuConfigs.map(config => config.id));
  const oldStyleComponents = oldStyleMenus
    .filter(menu => !existingMenuIds.has(menu.name))
    .map(menu => menu.component || menu)
    .filter(Boolean);

  // Combine new declarative menus with old-style components
  const allComponents = [...menuComponents, ...oldStyleComponents];

  return allComponents;
}

const deriveRoute = (menuId, submenuId) => {
  const module = menuId.replace('.mainMenu', '');
  return `/${module}/${submenuId}`;
};

const deriveText = (submenuId) => {
  // Simple derivation: capitalize and space camelCase
  return submenuId.split('.').pop().replace(/([A-Z])/g, ' $1').trim();
};

const deriveRights = (menuId, submenuId) => {
  const module = menuId.replace('.mainMenu', '');
  return [`${module}.${submenuId}`];
};

const findActiveMenuId = (menuConfigs, menuEntries) => {
  const matchingEntry = menuEntries.find(menuEntryMatchesLocationPath);

  if (!matchingEntry) return null;

  // Find which menu config contains this entry
  for (const menuConfig of menuConfigs) {
    if (menuConfig.entries?.some(entry => entry.id === matchingEntry.id)) {
      return menuConfig.id;
    }
  }
  return null;
};

const MainMenuBar = ({ children = null, contributionKey, reverse = false, menuVariant, intl, ...delegated }) => {
  const modulesManager = useModulesManager();
  const toast = useToast();
  const history = useHistory();
  const rights = useSelector((state) => state.core?.user?.i_user?.rights || []);
  const components = useMemo(() => {
    const comps = getMenus(modulesManager, contributionKey, rights, menuVariant, history, intl);
      if (reverse) {
        comps.reverse();
      }
      return comps;
    }, [contributionKey, reverse, rights, menuVariant, history, intl]
  );

  return (
    <>
      {children}
      {components.map((item, idx) => {
        // Already a rendered React element (from fe-core.menus configs)
        if (React.isValidElement(item)) {
          return React.cloneElement(item, {
            key: `${contributionKey}_${idx}`,
            menuVariant,
            ...delegated
          });
        }
        // Component reference (from old-style core.MainMenu)
        const Comp = item;
        return (
          <Comp
            key={`${contributionKey}_${idx}`}
            menuVariant={menuVariant}
            {...delegated}
          />
        );
      })}
    </>
  );
};

export default injectIntl(MainMenuBar);
