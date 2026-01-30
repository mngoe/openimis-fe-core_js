import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom';
import * as Icons from "@mui/icons-material";
import PropTypes from "prop-types";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Divider, List, IconButton, MenuList, MenuItem, Button, Popper, Paper, ClickAwayListener } from "@mui/material";
import withModulesManager from "../../helpers/modules";

const StyledMainMenu = styled('div')(({ theme }) => ({
  '& .panel': {
    margin: "0 !important",
    padding: 0,
  },
  '& .drawerHeading': {
    fontSize: theme.menu.drawer.fontSize,
    fontWeight: theme.menu.drawer.fontWeight,
    color: theme.menu.drawer.textColor,
  },

  '& .MuiListItem-root': {
    color: theme.menu.drawer.textColor,
  },
  '& .MuiListItemIcon-root': {
    color: theme.menu.drawer.textColor,
    minWidth: 36,
  },
  '& .MuiListItemText-root .MuiTypography-root': {
    color: theme.menu.drawer.textColor,
  },
  '& .drawerDivider': {
    // width: 100
  },
  '& .menuHeading': {
    fontSize: theme.menu.appBar.fontSize,
    color: theme.palette.secondary.main,
    textTransform: "none",
    whiteSpace: "nowrap",
    display: "inline-flex",
    alignItems: "center",
    lineHeight: 1,
    padding: theme.spacing(0, 1),
    // minWidth: 0,
  },
  '& .appBarMenuPaper': {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
  },
  '& .popper': {
    zIndex: 1500,
  },

  
  '& .appBarMenuPaper .MuiListItemText-primary': {
    color: theme.palette.text.primary,
  },
  '& .appBarMenuPaper .MuiListItemIcon-root': {
    color: theme.palette.text.primary,
  },
}));

const Accordion = styled(MuiAccordion)({
  boxShadow: "none",
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
  "&$expanded": {
    margin: "auto",
  },
});

const AccordionSummary = styled(MuiAccordionSummary)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.secondary.main,
  minHeight: 56,
  "&$expanded": {
    minHeight: 56,
  },
  "& .MuiAccordionSummary-content": {
    margin: "0",
    padding: "0",
    alignItems: 'center',
    justifyContent: 'start',
    "&$expanded": {
      margin: "0",
    },
    color: theme.palette.secondary.main
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  display: "block",
}));

const getIconComponent = (iconName) => {
  const IconComponent = Icons[iconName];
  if (IconComponent) {
    return <IconComponent />;
  }
  return null;
};

function fetchSubmenuConfig(modulesManager, allEntries, entries, menuId, rights) {
  const menuConfig = modulesManager.getConf("fe-core", "menus", []);
  const isMenuConfigEmpty = !(menuConfig?.length);
  const submenuMapping = {};
  const menuIcons = {}; 
  const copyOfEntries = entries;

  if (!isMenuConfigEmpty) {
    menuConfig
      .filter(menu => menu.id == menuId)
      .forEach(menu => {
        (menu.submenus || []).forEach(submenu => {
          submenuMapping[submenu.id] = submenu.position;
          if (submenu.icon) {
            menuIcons[submenu.id] = submenu.icon;
          }
        });
      });

    const updatedEntries = allEntries
      .map(entry => {
        const customIcon = menuIcons[entry.id];
        return {
          ...entry,
          position: submenuMapping[entry.id] || null,
          icon: customIcon ? getIconComponent(customIcon) : entry.icon,
        };
      })
      .filter(entry => entry.position !== null)
      .sort((a, b) => a.position - b.position);

    const uniqueEntries = new Map();
    updatedEntries.forEach(entry => {
      if (!uniqueEntries.has(entry.id)) {
        uniqueEntries.set(entry.id, entry);
      }
    });

    return Array.from(uniqueEntries.values()).filter(entry => {
      return !entry.filter || entry.filter(rights);
    });
  }

  const uniqueEntriesFallback = new Map();
  copyOfEntries.forEach(entry => {
    if (!uniqueEntriesFallback.has(entry.id)) {
      uniqueEntriesFallback.set(entry.id, entry);
    }
  });

  return Array.from(uniqueEntriesFallback.values());
}

class MainMenuContribution extends Component {
  state = {
    expanded: false,
    anchorRef: React.createRef(),
  };

  toggleExpanded = (event) => {
    this.setState({ expanded: !this.state.expanded });
  };



  appBarMenu = (entries) => {
    return (
      <StyledMainMenu>
        <Button ref={this.state.anchorRef} onClick={this.toggleExpanded} className="menuHeading">
          {this.props.header}
          <ExpandMoreIcon />
        </Button>
        <Popper
          className="popper"
          open={this.state.expanded}
          anchorEl={this.state.anchorRef.current}
          placement="bottom-start"
          disablePortal={false}
          style={{ zIndex: 2000 }}
        >
          <Paper className="appBarMenuPaper" id={`${this.props.header}-menu-list`}>
            <ClickAwayListener onClickAway={this.toggleExpanded}>
              <MenuList>
                {entries.map((entry, idx) => (
                  <div key={`${this.props.header}_${idx}_menuItem`}>
                    <MenuItem component={Link} to={entry.route} onClick={this.toggleExpanded}>
                      <ListItemIcon>{entry.icon}</ListItemIcon>
                      <ListItemText primary={entry.text}/>
                    </MenuItem>
                    {entry.withDivider && (
                      <Divider
                        key={`${this.props.header}_${idx}_divider`}
                        className="drawerDivider"
                      />
                    )}
                  </div>
                ))}
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Popper>
      </StyledMainMenu>
    );
  };
   
  drawerMenu = (entries) => {
    return (
      <StyledMainMenu>
      <Accordion className="panel" expanded={this.state.expanded} onChange={this.toggleExpanded}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} id={`${this.props.header}-header`}>
          <IconButton>{this.props.icon}</IconButton>
          <Typography className="drawerHeading">{this.props.header}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List component="nav">
            {entries.map((entry, idx) => (
              <Fragment key={`${this.props.header}_${idx}`}>
                <ListItem
                  button
                  key={`${this.props.header}_${idx}_item`}
                  component={Link}
                  to={entry.route}
                  onClick={this.toggleExpanded}
                >
                  {entry.icon && <ListItemIcon>{entry.icon}</ListItemIcon>}
                  <ListItemText primary={entry.text}/>
                </ListItem>
                {entry.withDivider && (
                  <Divider key={`${this.props.header}_${idx}_divider`} className="drawerDivider" />
                )}
              </Fragment>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
      </StyledMainMenu>
    );
  };

  render() {
    const { menuVariant, modulesManager } = this.props;
    const allEntries = modulesManager.getMenuEntries();
    const updatedEntries = fetchSubmenuConfig(
      modulesManager, allEntries, this.props.entries, this.props.menuId, this.props.rights
    );
    if (menuVariant === "AppBar") {
      return this.appBarMenu(updatedEntries);
    } else {
      return this.drawerMenu(updatedEntries);
    }
  }
}

MainMenuContribution.propTypes = {
  header: PropTypes.string.isRequired,
  entries: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
  menuId: PropTypes.string.isRequired,
};

export { StyledMainMenu };
export default withModulesManager(MainMenuContribution);
