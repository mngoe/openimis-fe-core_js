import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { injectIntl } from 'react-intl';
import _ from "lodash";
import { withTheme, withStyles } from "@material-ui/core/styles";
import {
    Grid,
    Paper,
    Divider,
    IconButton,
    Typography,
    Button,
    Menu,
    MenuItem,
    CircularProgress,
} from "@material-ui/core";
import MoreHoriz from "@material-ui/icons/MoreHoriz";
import SortIcon from "@material-ui/icons/UnfoldMore";
import SortAscIcon from "@material-ui/icons/ExpandLess";
import SortDescIcon from "@material-ui/icons/ExpandMore";
import SearcherPane from "./SearcherPane";
import Contributions from "./Contributions";
import FormattedMessage from "./FormattedMessage";
import ProgressOrError from "./ProgressOrError";
import Table from "./Table";
import withModulesManager from "../../helpers/modules";
import { formatMessage } from "../../helpers/i18n";
import { cacheFilters } from "../../actions";

const styles = theme => ({
    root: {
        width: "100%"
    },
    paper: theme.paper.body,
    paperHeader: theme.paper.header,
    paperHeaderTitle: theme.paper.title,
    paperHeaderMessage: theme.paper.message,
    paperHeaderAction: theme.paper.action,
    paperDivider: theme.paper.divider,
    tableHeaderAction: theme.table.headerAction,
    processing: {
        margin: theme.spacing(1)
    }
});

class SelectionPane extends Component {
    render() {
        const { module, selectionMessage, selection } = this.props;
        if (!selectionMessage || !selection || !selection.length) return null;
        return (
            <Typography>
                <FormattedMessage
                    module={module}
                    id={selectionMessage}
                    values={{
                        count: <b>{selection.length}</b>,
                    }}
                />
            </Typography>
        )
    }
}

class SelectionMenu extends Component {

    state = {
        anchorEl: null,
    }

    openMenu = (e) => this.setState({ anchorEl: e.currentTarget })

    closeMenu = (e) => this.setState({ anchorEl: null })

    action = (a) => {
        this.setState(
            { anchorEl: null },
            e => this.props.triggerAction(a)
        )
    }

    renderButtons = (entries) => (
        <Fragment>
            {entries.map((i, idx) => (
                <Grid key={`selectionsButtons-${idx}`} item className={this.props.classes.paperHeaderAction}>
                    <Button onClick={e => this.action(i.action)}>{i.text}</Button>
                </Grid>
            ))}
        </Fragment>
    )

    renderMenu = (entries) => {
        return (
            <Grid item className={this.props.classes.paperHeaderAction}>
                <Grid container alignItems="center">
                    <Grid item className={this.props.classes.paperHeader}>
                        <IconButton onClick={this.openMenu}><MoreHoriz /></IconButton>
                    </Grid>
                </Grid>
                {!!this.state.anchorEl && (
                    <Menu
                        open={!!this.state.anchorEl}
                        anchorEl={this.state.anchorEl}
                        onClose={this.closeMenu}
                    >
                        {entries.map((i, idx) => (
                            <MenuItem key={`selectionsMenu-${idx}`} onClick={e => this.action(i.action)}>{i.text}</MenuItem>
                        ))}
                    </Menu>
                )}
            </Grid>
        )
    }

    render() {
        const { intl, classes, canSelectAll, selection, clearSelected, selectAll, actions = [], processing } = this.props;
        if (!actions.length) return null;
        if (processing) {
            return (
                <CircularProgress className={classes.processing} size={24} />
            )
        }
        let entries = [];
        let selectionCount = selection.length;
        if (!!selectionCount) {
            entries.push({ text: formatMessage(intl, "claim", "clearSelected"), action: clearSelected });
        }
        if (!!canSelectAll && canSelectAll(this.props.selection)) {
            entries.push({ text: formatMessage(intl, "claim", "selectAll"), action: selectAll });
        }
        actions.forEach(a => {
            if (a.enabled(selection)) {
                entries.push({ text: formatMessage(intl, "claim", a.label), action: a.action });
            }
        });
        if (entries.length > 2) {
            return this.renderMenu(entries);
        } else {
            return this.renderButtons(entries);
        }
    }
}

const StyledSelectionMenu = injectIntl(withTheme(withStyles(styles)(SelectionMenu)))

class Searcher extends Component {

    state = {
        filters: {},
        orderBy: null,
        page: 0,
        pageSize: this.props.defaultPageSize || 10,
        afterCursor: null,
        beforeCursor: null,
        selection: [],
        selectAll: 0,
        clearAll: 0,
        menuAnchor: null,
    }

    componentDidMount() {
        var filters = this.props.filtersCache[this.props.cacheFiltersKey] || this.props.defaultFilters || {}
        this.setState((state, props) => ({
            filters,
            orderBy: props.defaultOrderBy,
        }),
            e => this.applyFilters()
        );
    }

    filtersToQueryParams = () => {
        if (this.props.filtersToQueryParams) return this.props.filtersToQueryParams(this.state);
        let prms = Object.keys(this.state.filters)
            .filter(f => !!this.state.filters[f]['filter'])
            .map(f => this.state.filters[f]['filter']);
        prms.push(`first: ${this.state.pageSize}`);
        if (!!this.state.afterCursor) {
            prms.push(`after: "${this.state.afterCursor}"`)
        }
        if (!!this.state.beforeCursor) {
            prms.push(`before: "${this.state.beforeCursor}"`)
        }
        if (!!this.state.orderBy) {
            prms.push(`orderBy: ["${this.state.orderBy}"]`);
        }
        return prms;
    }

    onChangeFilters = (fltrs) => {
        let filters = { ...this.state.filters };
        fltrs.forEach(filter => {
            if (filter.value === null) {
                delete (filters[filter.id]);
            } else {
                filters[filter.id] = { value: filter.value, filter: filter.filter };
            }
        });
        this.setState(
            { filters },
            e => this.applyFilters()
        )
    }

    _cacheAndApply = () => {
        var filters = this.filtersToQueryParams();
        if (!!this.props.cacheFiltersKey) {
            this.props.cacheFilters(this.props.cacheFiltersKey, this.state.filters)
            this.props.fetch(filters)
        } else {
            this.props.fetch(filters)
        }
    }

    applyFilters = () => {
        this.setState((state, props) => ({
            page: 0,
            afterCursor: null,
            beforeCursor: null,
            clearAll: state.clearAll + 1,
        }),
            this._cacheAndApply
        )
    }

    deleteFilter = (filter) => {
        let fltrs = this.state.filters;
        delete (fltrs[filter]);
        this.setState({
            filters: fltrs,
            page: 0,
            afterCursor: null,
            beforeCursor: null,
        },
            this._cacheAndApply
        )
    }

    clearSelected = (e) => {
        this.setState((state, props) => ({ clearAll: state.clearAll + 1 }))
    }

    selectAll = (e) => {
        this.setState({ selectAll: this.state.selectAll + 1 })
    }

    onChangeSelection = selection => {
        this.setState({ selection });
    }

    onChangeRowsPerPage = (cnt) => {
        this.setState(
            {
                pageSize: cnt,
                page: 0,
                afterCursor: null,
                beforeCursor: null,
            },
            e => this.props.fetch(this.filtersToQueryParams())
        )
    }

    onChangePage = (page, nbr) => {
        if (nbr > this.state.page) {
            this.setState((state, props) => ({
                page: state.page + 1,
                beforeCursor: null,
                afterCursor: props.itemsPageInfo.endCursor,
            }),
                e => this.props.fetch(this.filtersToQueryParams())
            )
        } else if (nbr < this.state.page) {
            this.setState((state, props) => ({
                page: state.page - 1,
                beforeCursor: props.itemsPageInfo.startCursor,
                afterCursor: null,
            }),
                e => this.props.fetch(this.filtersToQueryParams())
            )
        }
    }

    openMenu = (event) => {
        this.setState({ menuAnchor: event.currentTarget });
    }

    closeMenu = () => {
        this.setState({ menuAnchor: null });
    }

    triggerAction = a => {
        let s = [...this.state.selection]
        this.setState((state, props) => ({
            selection: [],
            clearAll: state.clearAll + 1
        }),
            e => a(s));
    }


    sort = attr => {
        this.setState({ orderBy: attr },
            e => this.props.fetch(this.filtersToQueryParams()))
    }

    formatSorter = (attr, asc = true) => {
        if (!this.props.sorts) return null;
        if (this.state.orderBy === attr) {
            return (
                <IconButton size="small" onClick={e => this.sort('-' + attr)}>
                    <SortAscIcon size={24} />
                </IconButton>)
        } else if (this.state.orderBy === '-' + attr) {
            return (
                <IconButton size="small" onClick={e => this.sort(attr)} >
                    <SortDescIcon size={24} />
                </IconButton>)
        } else {
            return (
                <IconButton size="small" onClick={e => asc ? this.sort(attr) : this.sort('-' + attr)}>
                    <SortIcon size={24} />
                </IconButton>)
        }
    }

    headerActions = (filters) => {
        if (!!this.props.headerActions) return this.props.headerActions(filters);
        if (!!this.props.sorts) {
            return this.props.sorts(filters)
                .map(s => !!s ? () => this.formatSorter(s[0], s[1]) : () => null);
        }
        return [];
    }

    render() {
        const { classes, module,
            canSelectAll = null, contributionKey = null,
            FilterPane, FilterExt, filterPaneContributionsKey = null,
            tableTitle, rowIdentifier, rowsPerPageOptions,
            rowLocked = () => false,
            rowHighlighted = () => false,
            rowHighlightedAlt = () => false,
            rowDisabled = () => false,
            selectionMessage = null,
            preHeaders = null,
            headers = null,
            aligns = null,
            items, itemsPageInfo, fetchingItems, fetchedItems, errorItems,
            itemFormatters,
            onDoubleClick, actions, processing = false,
            withSelection = null,
        } = this.props;
        return (
            <Fragment>
                {!!FilterPane && (
                    <SearcherPane
                        module={module}
                        refresh={this.applyFilters}
                        del={this.deleteFilter}
                        filters={this.state.filters}
                        filterPane={
                            <FilterPane
                                filters={this.state.filters}
                                onChangeFilters={this.onChangeFilters}
                                FilterExt={FilterExt}
                                filterPaneContributionsKey={filterPaneContributionsKey}
                            />}
                    />
                )}
                {!!contributionKey && <Contributions contributionKey={contributionKey} />}
                <Paper className={classes.paper}>
                    <Grid container>
                        <ProgressOrError progress={fetchingItems} error={errorItems} />
                        {!!fetchedItems && !errorItems && (
                            <Fragment>
                                <Grid item xs={8}>
                                    <Grid container alignItems="center" className={classes.paperHeader}>
                                        <Grid item xs={8} className={classes.paperHeaderTitle}>
                                            {tableTitle}
                                        </Grid>
                                        <Grid item xs={4} className={classes.paperHeaderMessage}>
                                            <SelectionPane
                                                module={module}
                                                selectionMessage={selectionMessage}
                                                selection={this.state.selection}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={4}>
                                    <Grid container direction="row" justify="flex-end">
                                        <StyledSelectionMenu
                                            canSelectAll={canSelectAll}
                                            selection={this.state.selection}
                                            items={items}
                                            clearSelected={this.clearSelected}
                                            selectAll={this.selectAll}
                                            triggerAction={this.triggerAction}
                                            actions={actions}
                                            processing={processing}
                                        />
                                    </Grid>

                                </Grid>
                                <Grid item xs={12} className={classes.paperDivider}>
                                    <Divider />
                                </Grid>
                                <Grid item xs={12}>
                                    <Table
                                        module={module}
                                        preHeaders={!!preHeaders && preHeaders(this.state.selection)}
                                        headers={headers(this.state.filters)}
                                        headerActions={this.headerActions(this.state.filters)}
                                        aligns={!!aligns && aligns()}
                                        itemFormatters={itemFormatters(this.state.filters)}
                                        rowLocked={i => rowLocked(this.state.selection, i)}
                                        rowHighlighted={i => rowHighlighted(this.state.selection, i)}
                                        rowHighlightedAlt={i => rowHighlightedAlt(this.state.selection, i)}
                                        rowDisabled={i => rowDisabled(this.state.selection, i)}
                                        items={items}
                                        withPagination={true}
                                        withSelection={withSelection}
                                        itemIdentifier={rowIdentifier}
                                        selection={this.state.selection}
                                        selectAll={this.state.selectAll}
                                        clearAll={this.state.clearAll}
                                        onChangeSelection={this.onChangeSelection}
                                        onDoubleClick={onDoubleClick}
                                        page={this.state.page}
                                        pageSize={this.state.pageSize}
                                        count={itemsPageInfo.totalCount}
                                        onChangePage={this.onChangePage}
                                        rowsPerPageOptions={rowsPerPageOptions}
                                        onChangeRowsPerPage={this.onChangeRowsPerPage}
                                    />
                                </Grid>
                            </Fragment>
                        )}
                    </Grid>
                </Paper>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    filtersCache: !!state.core && state.core.filtersCache
})

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        { cacheFilters },
        dispatch);
};

export default withModulesManager(
    injectIntl(withTheme(
        withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Searcher)
        ))));
