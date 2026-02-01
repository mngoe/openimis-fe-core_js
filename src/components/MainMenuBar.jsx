import React, { useMemo } from "react";
import * as Icons from "@mui/icons-material";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useModulesManager } from "../helpers/modules";
import { ErrorBoundary } from "@openimis/fe-core";
import MainMenuContribution from "./generics/MainMenuContribution";

function getMenus(modulesManager, key, rights, menuVariant) {
  const menus = modulesManager.getContribs(key);
  const menuConfig = modulesManager.getConf("fe-core", "menus", []);
  
  if (menuConfig?.length) {
    const unmatchedMenus = getUnmatchedMenus(menuConfig, menus, rights, modulesManager, menuVariant);
    let menuToProcess = [...menus, ...unmatchedMenus];
    menuToProcess = attachIcons(menuToProcess, menuConfig);
    const sortedMenus = sortMenus(menuToProcess, menuConfig);
    return processMenu(sortedMenus);
  }

  return processMenu(menus);
}

function attachIcons(menus, menuConfig) {
  return menus.map(menu => {
    const configMatch = menuConfig.find(config => config.id === menu.name);

    if (configMatch?.icon) {
      const IconComponent = Icons[configMatch.icon] ? Icons[configMatch.icon] : null;

      if (IconComponent) {
        return {
          ...menu,
          component: (props) => <menu.component {...props} icon={<IconComponent />} />
        };
      }
    }
    
    return menu;
  });
}

function getUnmatchedMenus(menuConfig, menus, rights, modulesManager, menuVariant) {
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
  const filteredMenus = menus.filter((menu) => {
    const menuId = typeof menu === 'object' ? menu.name : menu;
    return menuConfig.some(config => config.id === menuId);
  });

  const updatedMenus = filteredMenus.map((menu) => {
    const menuId = typeof menu === 'object' ? menu.name : menu;
    const configMatch = menuConfig.find(config => config.id === menuId);
    if (configMatch && typeof menu === 'object') {
      return { ...menu, ...configMatch };
    }
    return menu;
  });
  return updatedMenus.sort((a, b) => a.position - b.position);
}

const MainMenuBar = ({ children = null, contributionKey, reverse = false, menuVariant, ...delegated }) => {
  const modulesManager = useModulesManager();
  const rights = useSelector((state) => state.core?.user?.i_user?.rights || []);
  const components = useMemo(() => {
    try {
      const components = getMenus(modulesManager, contributionKey, rights, menuVariant);
      // Validate that we have valid components
      const validComponents = components.filter(comp => comp && typeof comp === 'function');
      if (reverse) {
        validComponents.reverse();
      }
      return validComponents;
    } catch (error) {
      console.error('Error loading menu components:', error);
      return [];
    }
  }, [contributionKey, reverse, rights, menuVariant]);
  
  return (
    <>
      {children}
      {components.map((Comp, idx) => {
        return (
          <ErrorBoundary key={`${contributionKey}_${idx}`} fallback={<div>Menu component failed to load</div>}>
            <Comp modulesManager={modulesManager} menuVariant={menuVariant} {...delegated} />
          </ErrorBoundary>
        );
        }
      )}
    </>
  );
};

export default MainMenuBar;
