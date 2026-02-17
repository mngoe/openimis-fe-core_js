import React, { useMemo } from "react";
import * as Icons from "@mui/icons-material";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { injectIntl } from "react-intl";
import { useModulesManager } from "../helpers/modules";
import { ErrorBoundary } from "@openimis/fe-core";
import { useToast } from "../helpers/ToastContext";
import { menuEntryMatchesLocationPath } from "../helpers/utils";
import MainMenuContribution from "./generics/MainMenuContribution";

function mergeMenuConfigs(moduleConfigs, backendConfigs) {
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
}

function getMenus(modulesManager, key, rights, menuVariant, history, intl) {
  // Collect all declarative menu configs from modules
  const moduleMenuConfigs = modulesManager.getContribs("fe-core.menus");

  // Get backend overrides
  const backendMenuConfigs = modulesManager.getConf("fe-core", "menus", []);

  // Merge: modules as base, backend as overrides
  const menuConfigs = mergeMenuConfigs(moduleMenuConfigs, backendMenuConfigs);

  // Sort by position
  const sortedMenuConfigs = menuConfigs.sort((a, b) => (a.position || 0) - (b.position || 0));

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

      // Filter entries by rights and convert icon strings to components
      const filteredEntries = entries
        .filter((entry) => !entry.filter || entry.filter(rights))
        .map((entry) => ({
          ...entry,
          icon: typeof entry.icon === 'string' && Icons[entry.icon]
            ? React.createElement(Icons[entry.icon])
            : entry.icon
        }));

      // Skip empty menus
      if (!filteredEntries.length) return null;

      // Resolve icon
      const IconComponent = config.icon && Icons[config.icon] ? Icons[config.icon] : null;

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
          icon={IconComponent ? <IconComponent /> : null}
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
