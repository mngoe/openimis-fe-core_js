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
import {getMenuText, prepareMenuEntries} from "../helpers/utils"






function getMenus(modulesManager, key, rights, menuVariant, history, intl) {
  // Get backend overrides
  const backendMenuConfigs = modulesManager.getConf("fe-core", "menus", []);
  const routes = modulesManager.getRoutes()
  // get default entries
  const menuEntries = modulesManager.getMenuEntries();
  const unsortedMenuEntries = backendMenuConfigs.length > 0 ? backendMenuConfigs : menuEntries;
  // Normalize and validate each menu config. Both module contributions
  // and backend configs are expected to use { id, name, icon, submenus }
  // shape (matching the backend's moduleConfiguration schema).
  unsortedMenuEntries.forEach(config => {
    if (!config.contributionKey) {
      config.contributionKey = config.id;  // e.g. "individual.MainMenu"
    }
    if (!config.submenus && !config.contributionKey) {
      console.warn(`Menu ${config.id} has no submenus or valid contributionKey.`);
    }
    config.name = getMenuText(config.name, intl);
  });
  // Sort by position (default 99 if missing; stable for duplicates)
  const sortedMenuConfigs = unsortedMenuEntries.sort((a, b) => (a.position || 99) - (b.position || 99));
  const mainMenuVariant = "icon_text"
  // Get all menu entries for active menu detection
  const activeMenuId = findActiveMenuId(sortedMenuConfigs, routes);

  // Process each menu config into a MainMenuContribution component
  const menuComponents = sortedMenuConfigs.filter(m => m.name !== undefined)
    .map((config) => {
      const filteredSubmenus = prepareMenuEntries(rights, intl, config.submenus, routes);

      // Skip empty menus
      if (!filteredSubmenus.length) return null;

      // Resolve icon
      const IconComponent = GetIconComponent(config.icon);


      return (
        <MainMenuContribution
          key={config.id}
          mainMenuVariant={mainMenuVariant}
          menuVariant={menuVariant}
          header={config.name}
          menuId={config.id}
          modulesManager={modulesManager}
          rights={rights}
          history={history}
          entries={filteredSubmenus}
          icon={IconComponent}
          isInitiallyOpen={menuVariant === "Drawer" && config.id === activeMenuId}
        />
      );
    })
    .filter(Boolean);

  return menuComponents;
}

// Returns the id of the parent menu whose submenus include the entry matching
// the current URL path. Used to auto-expand that menu on load (PR #282).
// Backend submenus carry only an `id`; module-contributed submenus carry a
// `route`. For backend ones we resolve the route through the routes map.
const findActiveMenuId = (menuConfigs, routes) => {
  for (const menuConfig of menuConfigs) {
    if (!menuConfig.submenus) continue;
    const matched = menuConfig.submenus.find((submenu) => {
      const path = submenu.route || routes[submenu.id]?.path;
      if (!path) return false;
      const normalized = path.startsWith("/") ? path : `/${path}`;
      return menuEntryMatchesLocationPath({ route: normalized });
    });
    if (matched) return menuConfig.id;
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
