import React, { useMemo } from "react";
import { useTheme, alpha, styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Redirect, useHistory } from "../helpers/history";
import { useModulesManager } from "../helpers/modules";
import LogoutButton from "./LogoutButton";
import Help from "../pages/Help";
import clsx from "clsx";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  Divider,
  Tooltip,
  Button,
  ClickAwayListener,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Contributions from "./generics/Contributions";
import FormattedMessage from "./generics/FormattedMessage";
import MainMenuBar from "./MainMenuBar";
import JournalDrawer from "./JournalDrawer";
import { useBoolean, useAuthentication } from "../helpers/hooks";
import LanguageQuickPicker from "../pickers/LanguageQuickPicker";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Switch } from "@mui/material";
import { useTranslations } from "../helpers/i18n";
import { DEFAULT } from "../constants";

export const APP_BAR_CONTRIBUTION_KEY = "core.AppBar";
export const MAIN_MENU_CONTRIBUTION_KEY = "core.MainMenu";
export const MAIN_SEARCHER_CONTRIBUTION_KEY = "core.MainSearcher";
export const ECONOMIC_UNIT_BUTTON_CONTRIBUTION_KEY =
  "policyholder.EconomicUnitChangeButton";

const StyledRequireAuth = styled("div")(({ theme }) => ({
  display: "flex",
  "& .grow": {
    flexGrow: 1,
  },
  "& .logo": {
    verticalAlign: "middle",
    margin: theme.typography.title.fontSize / 2,
    maxHeight: theme.typography.title.fontSize * 2,
  },
  "& .appBar": {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflow: "visible",
    zIndex: theme.zIndex.appBar,
    minHeight: "auto",
  },
  "& .MuiToolbar-root": {
    flexWrap: "wrap",
    rowGap: theme.spacing(1),
    columnGap: theme.spacing(2),
    minHeight: "64px !important",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      minHeight: "80px !important", 
    },
  },
  "& .appBarDrawer": {
    margin: theme.spacing(-1, 0, -1, 0),
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    zIndex: theme.zIndex.appBar,
    minHeight: "auto",
  },

  "& .toolbarDrawer": {
    color: theme.palette.secondary.main,
  },

  "& .toolbarDrawerLogout": {
    color: theme.palette.text.primary,
    button: {
      margin: theme.spacing(2),
      color: theme.palette.text.primary,
    },
  },

  "& .appBarShift": {
    width: `calc(100% - ${theme.menu.drawer.width})`,
    marginLeft: theme.menu.drawer.width,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  "& .menuButton": {
    margin: theme.spacing(0, 1, 0, 1),
    padding: 0,
  },
  "& .hide": {
    display: "none",
  },
  "& .toolbar": {
    minHeight: theme.spacing(16),
    paddingTop: theme.spacing(3),
    marginTop: theme.spacing(22), 
  },
  "& .drawerRoot": {
    [theme.breakpoints.up("sm")]: {
      width: theme.menu.drawer.width,
      flexShrink: 0,
    },
    // backgroundColor: theme.menu.drawer.backgroundColor,
  },
  "& .drawerPaper": {
    width: theme.menu.drawer.width,
    flexShrink: 0,
    backgroundColor: theme.menu.drawer.backgroundColor,
    color: theme.menu.drawer.textColor,
  },

  "& .drawerHeader": {
    ...theme.mixins.toolbar,
    margin: theme.spacing(1, 0, 1, 0),
    backgroundColor: theme.menu.drawer.backgroundColor,
  },
  "& .content": {
    flexGrow: 1,
    paddingTop: theme.spacing(18),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.down("md")]: {
      paddingTop: theme.spacing(25),
    },
  },
  "& .contentShift": {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: theme.menu.drawer.width,
  },
  "& main": {
    paddingTop: theme.spacing(22),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      paddingTop: theme.spacing(25),
    },
  },
  "& .appName": {
    color: theme.palette.secondary.main,
    textTransform: "none",
    fontSize: theme.typography.title.fontSize,
  },
  "& .appVersionsBox": {
    padding: 0,
    margin: 0,
    minWidth: theme.typography.title.fontSize / 2,
  },
  "& .appVersions": {
    color: theme.palette.secondary.main,
    fontSize: theme.typography.title.fontSize / 2,
    verticalAlign: "text-bottom",
    marginRight: theme.spacing(2),
  },
  "& .search": {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  "& .searchIcon": {
    width: theme.spacing(9),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  "& .inputRoot": {
    color: "inherit",
    width: "100%",
  },
  "& .inputInput": {
    padding: theme.spacing(1, 1, 1, 10),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200,
      },
    },
  },

  "& .drawerContainer": {
    overflow: "auto",
  },
  "& .contentShiftLeftSideMenu": {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingTop: theme.spacing(22),
    [theme.breakpoints.down("md")]: {
      paddingTop: theme.spacing(25),
    },
  },
  "& .jrnlContentShift": {
    // marginLeft: theme.menu.drawer.width,
    position: "relative",
    zIndex: 1,
    paddingTop: theme.spacing(22), 
    [theme.breakpoints.down("md")]: {
      paddingTop: theme.spacing(25), 
    },
  },
}));

const RequireAuth = (props) => {
  const {
    children,
    logo,
    disableTextLogo,
    redirectTo,
    isSecondaryCalendar,
    setSecondaryCalendar,
    onEconomicDialogOpen,
    ...others
  } = props;

  const [isOpen, setOpen] = useBoolean();
  const [isDrawerOpen, setDrawerOpen] = useBoolean();
  const theme = useTheme();
  const history = useHistory();
  const modulesManager = useModulesManager();
  const auth = useAuthentication();
  const cfg = children.props.modulesManager.cfg;
  const calendarSwitch = modulesManager.getConf(
    "fe-core",
    "allowSecondCalendar",
    false
  );
  const isWorker = modulesManager.getConf(
    "fe-core",
    "isWorker",
    DEFAULT.IS_WORKER
  );
  const showJournalSidebar = modulesManager.getConf(
    "fe-core",
    "showJournalSidebar",
    DEFAULT.SHOW_JOURNAL_SIDEBAR
  );

  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const isAppBarMenu = useMemo(
    () => theme.menu?.variant?.toUpperCase() === "APPBAR",
    [theme.menu?.variant]
  );

  if (!auth.isAuthenticated) {
    return <Redirect to={redirectTo} />;
  }

  if (cfg["openimis-fe-core_js"]?.menuLeft === true) {
    return (
      <StyledRequireAuth>
        <AppBar position="fixed" className="appBarDrawer">
          <Toolbar className="toolbarDrawer">
            <Contributions {...others} contributionKey={APP_BAR_CONTRIBUTION_KEY}>
              <div className="grow" />
            </Contributions>
            <LogoutButton className="toolbarDrawerLogout" />
            <Help />
          </Toolbar>
        </AppBar>
        <Drawer
          className="drawerRoot"
          variant="permanent"
          PaperProps={{ className: "drawerPaper" }}
          anchor="left"
        >
          <Button
            className="appName"
            onClick={() => (window.location.href = "/front")}
          >
            {isAppBarMenu && isSmUp && (
              <img className="logo" src={logo} alt="Logo of openIMIS" />
            )}
            {!disableTextLogo && (
              <FormattedMessage
                module="core"
                id="appName"
                defaultMessage={<FormattedMessage id="root.appName" />}
              />
            )}
            {isSmUp && (
              <Tooltip title={modulesManager.getModulesVersions().join(", ")}>
                <Typography variant="caption" className="appVersions">
                  {modulesManager.getOpenIMISVersion()}
                </Typography>
              </Tooltip>
            )}
          </Button>
          <div className="drawerContainer"></div>
          <MainMenuBar
            {...others}
            menuVariant="Drawer"
            contributionKey={MAIN_MENU_CONTRIBUTION_KEY}
          >
            <Divider />
          </MainMenuBar>
          <div />
        </Drawer>
        <JournalDrawer
          open={isDrawerOpen}
          handleDrawer={setDrawerOpen.toggle}
        />
        <div className="toolbar" />
        <main className="contentShiftLeftSideMenu">{children}</main>
      </StyledRequireAuth>
    );
  }

  const { formatMessage } = useTranslations("core", modulesManager);
  return (
    <StyledRequireAuth>
      <AppBar
        position="fixed"
        className={clsx({
          appBarShift: isOpen && isMdUp,
          appBar: showJournalSidebar,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={setOpen.toggle}
            className={clsx("menuButton", (isOpen || isMdUp) && "hide")}
          >
            <MenuIcon />
          </IconButton>
          <Button className="appName" onClick={() => history.push("/")}>
            {isAppBarMenu && isSmUp && (
              <img className="logo" src={logo} alt="Logo of openIMIS" />
            )}
            {!disableTextLogo && (
              <FormattedMessage
                module="core"
                id="appName"
                defaultMessage={<FormattedMessage id="root.appName" />}
              />
            )}
          </Button>
          {isSmUp && (
            <Tooltip title={modulesManager.getModulesVersions().join(", ")}>
              <Typography variant="caption" className="appVersions">
                {modulesManager.getOpenIMISVersion()}
              </Typography>
            </Tooltip>
          )}
          {isAppBarMenu && isSmUp && (
            <MainMenuBar
              {...others}
              menuVariant="AppBar"
              contributionKey={MAIN_MENU_CONTRIBUTION_KEY}
            >
              <div onClick={setOpen.off} />
            </MainMenuBar>
          )}
          {isWorker ? (
            <div className="grow" />
          ) : (
            <Contributions {...others} contributionKey={APP_BAR_CONTRIBUTION_KEY}>
              <div className="grow" />
            </Contributions>
          )}
          {!!calendarSwitch && (
            <FormControlLabel
              control={
                <Switch
                  color="secondary"
                  checked={isSecondaryCalendar}
                  onChange={setSecondaryCalendar.toggle}
                />
              }
              label={formatMessage("core.calendarSwitcher")}
              labelPlacement="start"
            />
          )}
          <LanguageQuickPicker />
          <Contributions
            contributionKey={ECONOMIC_UNIT_BUTTON_CONTRIBUTION_KEY}
            onEconomicDialogOpen={onEconomicDialogOpen}
          />
          <LogoutButton />
          <Help />
        </Toolbar>
      </AppBar>
      {isOpen && (
        <ClickAwayListener onClickAway={setOpen.off}>
          <nav className="drawerRoot">
            <Drawer
              className="drawerRoot"
              variant="persistent"
              anchor="left"
              open={isOpen}
              PaperProps={{ className: "drawerPaper" }}
            >
              <MainMenuBar
                {...others}
                menuVariant="Drawer"
                contributionKey={MAIN_MENU_CONTRIBUTION_KEY}
              >
                <Divider />
              </MainMenuBar>
            </Drawer>
          </nav>
        </ClickAwayListener>
      )}
      {showJournalSidebar && (
        <JournalDrawer open={isDrawerOpen} handleDrawer={setDrawerOpen.toggle} />
      )}
      <div className="toolbar" />
      <main
        className={clsx({
          jrnlContentShift: isDrawerOpen,
          content: showJournalSidebar,
        })}
      >
        {children}
      </main>
    </StyledRequireAuth>
  );
};

export default RequireAuth;
