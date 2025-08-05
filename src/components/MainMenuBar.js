import React, { useMemo } from "react";
import * as Icons from "@material-ui/icons";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useModulesManager } from "../helpers/modules";
import { menuEntryMatchesLocationPath } from "../helpers/utils";
import MainMenuContribution from "./generics/MainMenuContribution";

function getMenus(modulesManager, key, rights, menuVariant) {
  const menus = modulesManager.getContribs(key);
  const menuConfig = modulesManager.getConf("fe-core", "menus", []);
  const menuEntries = modulesManager.getMenuEntries();
  const activeMenuId = findActiveMenuId(menuConfig, menuEntries);

  if (menuConfig?.length) {
    const unmatchedMenus = getUnmatchedMenus(menuConfig, menus, rights, modulesManager, menuVariant, activeMenuId);
    let menuToProcess = [...menus, ...unmatchedMenus];
    menuToProcess = filterNoConfig(menuToProcess, menuConfig);
    menuToProcess = attachIconsAndSetInitialOpen(menuToProcess, menuConfig, menuVariant, activeMenuId);
    const sortedMenus = sortMenus(menuToProcess, menuConfig);
    return processMenu(sortedMenus);
  }

  return processMenu(menus);
}

function filterNoConfig(menus, menuConfig) {
  const menusWithConfig = menuConfig.map(config => config.id);
  return menus.filter((menu) => menusWithConfig.includes(menu.name));
}

function attachIconsAndSetInitialOpen(menus, menuConfig, menuVariant, activeMenuId) {
  return menus.map(menu => {
    const configMatch = menuConfig.find(config => config.id === menu.name);
    const IconComponent = configMatch?.icon ? Icons[configMatch.icon] : null;

    return {
      ...menu,
      component: (props) => (
        <menu.component
          {...props}
          icon={IconComponent &&<IconComponent />}
          isInitiallyOpen={menuVariant === "Drawer" && configMatch.id === activeMenuId}
        />
      )
    };
  });
}

function getUnmatchedMenus(menuConfig, menus, rights, modulesManager, menuVariant, activeMenuId) {
  const existingIds = menus
    .filter((menu) => typeof menu === 'object')
    .map((menu) => menu.name);
  const history = useHistory();

  const unmatchedConfigs = menuConfig.filter((config) => !existingIds.includes(config.id));

  return unmatchedConfigs
    .map((config) => {
      if (config.filter && !config.filter(rights)) {
        return null;
      }

      const IconComponent = config.icon && Icons[config.icon] ? Icons[config.icon] : null;

      return {
        name: config.id,
        component: () => (
          <MainMenuContribution
            menuVariant={menuVariant}
            header={config.name}
            menuId={config.id}
            modulesManager={modulesManager}
            rights={rights}
            history={history}
            entries={[]}
            icon={IconComponent ? <IconComponent /> : null}
            isInitiallyOpen={menuVariant === "Drawer" && config.id === activeMenuId}
          />
        ),
      };
    })
    .filter(Boolean);
}

function processMenu(menus) {
  return menus
    .map((menu) => menu?.component || menu)
    .filter(Boolean);
};

function sortMenus(menus, menuConfig) {
  const positionMap = new Map(menuConfig.map(config => [config.id, config.position]));

  return menus.sort((a, b) => {
    const aPos = positionMap.get(typeof a === 'object' ? a.name : a) ?? Infinity;
    const bPos = positionMap.get(typeof b === 'object' ? b.name : b) ?? Infinity;
    return aPos - bPos;
  });
}

const findActiveMenuId = (menuConfig, menuEntries, pathname) => {
  const matchingEntry = menuEntries.find(menuEntryMatchesLocationPath);

  if (!matchingEntry) return null;

  // Then find which parent menu contains this entry
  for (const menu of menuConfig) {
    if (menu.submenus?.some(submenu => submenu.id === matchingEntry.id)) {
      return menu.id;
    }
  }
  return null;
};

const MainMenuBar = ({ children = null, contributionKey, reverse = false, menuVariant, ...delegated }) => {
  const modulesManager = useModulesManager();
  const rights = useSelector((state) => state.core?.user?.i_user?.rights || []);
  const components = useMemo(() => {
    const comps = getMenus(modulesManager, contributionKey, rights, menuVariant);
      if (reverse) {
        comps.reverse();
      }
      return comps;
    }, [contributionKey, reverse, rights, menuVariant]
  );

  return (
    <>
      {children}
      {components.map((Comp, idx) => {
        return (
          <Comp
            key={`${contributionKey}_${idx}`}
            {...delegated}
          />
        )
      })}
    </>
  );
};

export default MainMenuBar;
