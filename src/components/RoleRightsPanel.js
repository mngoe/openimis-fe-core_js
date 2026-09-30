import React, { Fragment } from "react";
import clsx from "clsx";
import { FormPanel, ProgressOrError, FormattedMessage, formatMessage } from "@openimis/fe-core";
import {
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  ListSubheader,
  Typography,
  IconButton,
  TextField,
  Tooltip,
  InputAdornment,
} from "@material-ui/core";
import { injectIntl } from "react-intl";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withTheme, withStyles } from "@material-ui/core/styles";
import { fetchModulesPermissions } from "../actions";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ClearIcon from "@material-ui/icons/Clear";
import SearchIcon from "@material-ui/icons/Search";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import { formatModuleLabel } from "../helpers/role-label-formatter";
import {
  buildRightsCatalog,
  groupByModule,
  matchesRightsFilter,
  toRightId,
  uniqueRightIds,
  unknownRightEntry,
} from "../helpers/role-rights-catalog";

/**
 * Dual list assigning rights to a role. The rights of a role sit in two bags, told
 * apart by `RoleRight.uba` (see `docs/rights.md`): this panel edits one of them, named
 * by `rightsField`, so the page stacks it twice - once for the global bag, once for the
 * UBA one (`RoleUbaRightsPanel`). A right may sit in both.
 *
 * One row per right id (see `helpers/role-rights-catalog.js`), grouped by module. A right
 * of the role no module declares any more is still listed as chosen, so it can be removed.
 */
const DEFAULT_LABELS = {
  rightsField: "roleRights",
  titleKey: "roleManagement.role.globalRights",
  subtitleKey: "roleManagement.role.globalRights.hint",
  availableRightsKey: "roleManagement.role.availableRights",
  chosenRightsKey: "roleManagement.role.chosenRights",
  filterKey: "roleManagement.role.rightsFilter",
};

const styles = (theme) => ({
  item: theme.paper.item,
  paper: theme.paper.paper,
  paperHeader: theme.paper.header,
  list: {
    width: "100%",
    height: "500px",
    position: "relative",
    overflow: "auto",
  },
  listSection: {
    backgroundColor: "inherit",
  },
  listSectionItems: {
    backgroundColor: "inherit",
    padding: 0,
  },
  listSubheader: {
    backgroundColor: theme.palette.background.paper,
    fontWeight: "bold",
    lineHeight: "32px",
  },
  filter: {
    width: "100%",
  },
  listItemText: {
    textTransform: "none",
  },
  reversedArrow: {
    transform: "rotate(180deg)",
  },
  panelTitle: {
    display: "flex",
    flexDirection: "column",
  },
  panelSubtitle: {
    opacity: 0.8,
  },
  listTitle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "5px",
  },
});

class RoleRightsPanel extends FormPanel {
  constructor(props) {
    super(props);
    this.state = {
      filterValue: "",
    };
  }

  /** The bag this panel edits: `roleRights` (global) or `ubaRoleRights`. */
  rightsField = () => this.props.rightsField ?? DEFAULT_LABELS.rightsField;

  /** The rights currently in that bag, as numbers, each once. */
  chosenRights = () => uniqueRightIds(this.props.edited[this.rightsField()]);

  updateChosenRights = (rights) =>
    this.props.onEditedChanged({ ...this.props.edited, [this.rightsField()]: uniqueRightIds(rights) });

  label = (key) => this.props[key] ?? DEFAULT_LABELS[key];

  componentDidMount() {
    if (!this.props.fetchedModulePermissions) {
      this.props.fetchModulesPermissions();
    }
  }

  selectRight = (rightId) => this.updateChosenRights([...this.chosenRights(), rightId]);

  unselectRight = (rightId) =>
    this.updateChosenRights(this.chosenRights().filter((id) => id !== toRightId(rightId)));

  /**
   * Looked up in `intl.messages` rather than through `formatMessage`: most rights have no
   * translation, and react-intl logs an error for each miss, which on a page listing every
   * right (twice, on each render) floods the console and freezes the page.
   */
  translateRight = (moduleName, permsName) => {
    const translationId = `${moduleName}.${permsName}`;
    return this.props.intl.messages[translationId] ? this.props.intl.formatMessage({ id: translationId }) : null;
  };

  /** Rebuilt only when the permissions or the locale change, not on each keystroke. */
  catalog = () => {
    const { modulePermissions, intl } = this.props;
    if (this.catalogPermissions !== modulePermissions || this.catalogMessages !== intl.messages) {
      this.catalogPermissions = modulePermissions;
      this.catalogMessages = intl.messages;
      this.catalogEntries = buildRightsCatalog(modulePermissions, this.translateRight);
    }
    return this.catalogEntries;
  };

  /** The available and chosen entries matching the filter. */
  filteredEntries = () => {
    const chosen = new Set(this.chosenRights());
    const catalog = this.catalog();
    const known = new Set(catalog.map((entry) => entry.id));
    const otherModule = formatMessage(this.props.intl, "core", "roleManagement.role.otherRights");
    const unknown = [...chosen].filter((id) => !known.has(id)).map((id) => unknownRightEntry(id, otherModule));
    const matches = (entry) => matchesRightsFilter(entry, this.state.filterValue);
    return {
      available: catalog.filter((entry) => !chosen.has(entry.id) && matches(entry)),
      chosen: [...catalog.filter((entry) => chosen.has(entry.id)), ...unknown].filter(matches),
    };
  };

  selectAllFilteredPerms = () =>
    this.updateChosenRights([...this.chosenRights(), ...this.filteredEntries().available.map((entry) => entry.id)]);

  removeAllChosenPerms = () => {
    const removed = new Set(this.filteredEntries().chosen.map((entry) => entry.id));
    this.updateChosenRights(this.chosenRights().filter((id) => !removed.has(id)));
  };

  renderEntries = (entries, onPick, PickIcon) => {
    const { classes, isReadOnly } = this.props;
    return groupByModule(entries).map(({ module, entries: moduleEntries }) => (
      <li key={`module-${module}`} className={classes.listSection}>
        <ul className={classes.listSectionItems}>
          <ListSubheader className={classes.listSubheader}>
            {moduleEntries[0].unknown ? module : formatModuleLabel(module)}
          </ListSubheader>
          {moduleEntries.map((entry) => (
            <ListItem
              button
              divider
              key={`right-${entry.id}`}
              disabled={!!isReadOnly}
              onClick={() => onPick(entry.id)}
            >
              <ListItemText
                className={classes.listItemText}
                primary={entry.labels[0]}
                secondary={[`#${entry.id}`, ...entry.labels.slice(1)].join(" · ")}
              />
              <ListItemSecondaryAction>
                <IconButton onClick={() => onPick(entry.id)} disabled={!!isReadOnly}>
                  <PickIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </ul>
      </li>
    ));
  };

  render() {
    const {
      intl,
      classes,
      isReadOnly,
      fetchingModulePermissions,
      fetchedModulePermissions,
      errorModulePermissions,
      fetchingRoleRights,
      fetchedRoleRights,
      errorRoleRights,
      roleUuid,
    } = this.props;
    const { filterValue } = this.state;
    const isReady = !!fetchedModulePermissions && (!!roleUuid ? !!fetchedRoleRights : true);
    const { available, chosen } = isReady ? this.filteredEntries() : { available: [], chosen: [] };
    const progress = (
      <ProgressOrError
        progress={fetchingModulePermissions || fetchingRoleRights}
        error={errorModulePermissions || errorRoleRights}
      />
    );
    return (
      <Fragment>
        <Paper className={classes.paper}>
          <Grid container className={classes.paperHeader}>
            <Grid item xs={12} className={clsx(classes.item, classes.panelTitle)}>
              <Typography variant="h6">
                <FormattedMessage module="core" id={this.label("titleKey")} />
              </Typography>
              <Typography variant="caption" className={classes.panelSubtitle}>
                <FormattedMessage module="core" id={this.label("subtitleKey")} />
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} className={classes.item}>
              <TextField
                className={classes.filter}
                variant="outlined"
                label={formatMessage(intl, "core", this.label("filterKey"))}
                helperText={formatMessage(intl, "core", "roleManagement.role.rightsFilter.hint")}
                value={filterValue}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                  endAdornment: !!filterValue && (
                    <InputAdornment position="end">
                      <IconButton size="small" onClick={() => this.setState({ filterValue: "" })}>
                        <ClearIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                onChange={(e) => this.setState({ filterValue: e.target.value })}
              />
            </Grid>
          </Grid>
          <Grid container justify="space-between" alignItems="flex-start">
            <Grid item xs={6} className={classes.item}>
              <Grid className={classes.listTitle}>
                <Typography variant="h6">
                  <FormattedMessage module="core" id={this.label("availableRightsKey")} /> ({available.length})
                </Typography>
                <Tooltip title={<FormattedMessage module="core" id="roleManagement.role.addAllFilteredPerms" />}>
                  <span>
                    <IconButton
                      color="primary"
                      disabled={!!isReadOnly || !available.length}
                      onClick={this.selectAllFilteredPerms}
                    >
                      <DoubleArrowIcon />
                    </IconButton>
                  </span>
                </Tooltip>
              </Grid>
              <Paper>
                <List className={classes.list} subheader={<li />}>
                  {progress}
                  {isReady && this.renderEntries(available, this.selectRight, ArrowForwardIcon)}
                </List>
              </Paper>
            </Grid>
            <Grid item xs={6} className={classes.item}>
              <Grid className={classes.listTitle}>
                <Tooltip title={<FormattedMessage module="core" id="roleManagement.role.removeAllPerms" />}>
                  <span>
                    <IconButton
                      color="primary"
                      disabled={!!isReadOnly || !chosen.length}
                      onClick={this.removeAllChosenPerms}
                    >
                      <DoubleArrowIcon className={classes.reversedArrow} />
                    </IconButton>
                  </span>
                </Tooltip>
                <Typography variant="h6">
                  <FormattedMessage module="core" id={this.label("chosenRightsKey")} /> ({chosen.length})
                </Typography>
              </Grid>
              <Paper>
                <List className={classes.list} subheader={<li />}>
                  {progress}
                  {isReady && this.renderEntries(chosen, this.unselectRight, ArrowBackIcon)}
                </List>
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  rights: !!state.core && !!state.core.user && !!state.core.user.i_user ? state.core.user.i_user.rights : [],
  fetchingModulePermissions: state.core.fetchingModulePermissions,
  fetchedModulePermissions: state.core.fetchedModulePermissions,
  modulePermissions: state.core.modulePermissions,
  errorModulePermissions: state.core.errorModulePermissions,
  fetchingRoleRights: state.core.fetchingRoleRights,
  fetchedRoleRights: state.core.fetchedRoleRights,
  errorRoleRights: state.core.errorRoleRights,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchModulesPermissions }, dispatch);
};

export default injectIntl(withTheme(withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(RoleRightsPanel))));
