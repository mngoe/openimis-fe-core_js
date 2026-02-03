import React, { Component, Fragment } from "react";
import { injectIntl } from "react-intl";
import _debounce from "lodash/debounce";

import { Grid, Paper, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import { YoutubeSearchedFor as ResetFilterIcon, Search as DefaultSearchIcon } from "@mui/icons-material";

import SearcherActionButton from "./SearcherActionButton";
import { DEFAULT_DEBOUNCE_TIME, ENTER_KEY } from "../../constants";
import { formatMessage } from "../../helpers/i18n";
import AdvancedFiltersDialog from "../dialogs/AdvancedFiltersDialog";
import FormattedMessage from "./FormattedMessage";

const StyledSearcherPane = styled('div')(({ theme }) => ({
  '& .paper': {
    ...theme.paper?.body,
    width: '100%',
    maxWidth: '100%',
    overflow: 'hidden',
    boxSizing: 'border-box',
  },
  '& .paperHeader': { 
    ...theme.paper?.header, 
    display: "flex", 
    justifyContent: "flex-end", 
    alignItems: "center",
    gap: theme.spacing?.(1),
  },
  '& .paperHeaderTitle': theme.paper?.title,
  '& .paperHeaderAction': { 
    ...theme.paper?.action, 
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center" 
  },
  '& .paperDivider': theme.paper?.divider,
}));

class SearcherPane extends Component {
  constructor(props) {
    super(props);
    const { refresh = () => {}, reset = () => {} } = this.props;
    this.debouncedRefresh = _debounce(refresh, DEFAULT_DEBOUNCE_TIME);
    this.debouncedReset = _debounce(reset, DEFAULT_DEBOUNCE_TIME);
  }

  handleKeyDown = (event) => {
    if (event.key === ENTER_KEY) {
      this.debouncedRefresh();
    }
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  render() {
    const {
      module,
      del,
      title = "search.title",
      split = 8,
      filterPane,
      filters,
      resultsPane = null,
      reset,
      refresh,
      actions,
      isCustomFiltering = false,
      objectForCustomFiltering = null,
      additionalCustomFilterParams = null,
      moduleName = null,
      objectType = null,
      setAppliedCustomFilters = null,
      appliedCustomFilters = null,
      onChangeFilters,
      appliedFiltersRowStructure = null,
      setAppliedFiltersRowStructure = null,
      applyNumberCircle = null,
    } = this.props;
    return (
      <StyledSearcherPane>
        <Paper className="paper">
          <Grid container sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
            <Grid container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 1 }}>
              <Grid size={{ xs: split }} className="paperHeaderTitle">
                <FormattedMessage module={module} id={title} />
              </Grid>
              <Grid size={{ xs: 12 - split }} className="paperHeader" sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
                {(!!actions || !!refresh) && (
                  <>
                    {isCustomFiltering === true ? (
                      <AdvancedFiltersDialog
                        object={objectForCustomFiltering}
                        additionalParams={additionalCustomFilterParams}
                        moduleName={moduleName}
                        objectType={objectType}
                        setAppliedCustomFilters={setAppliedCustomFilters}
                        appliedCustomFilters={appliedCustomFilters}
                        onChangeFilters={onChangeFilters}
                        appliedFiltersRowStructure={appliedFiltersRowStructure}
                        setAppliedFiltersRowStructure={setAppliedFiltersRowStructure}
                        applyNumberCircle={applyNumberCircle}
                        searchCriteria={filters}
                        deleteFilter={del}
                      />
                    ) : (
                      <></>
                    )}
                    {!!actions &&
                      actions.map((a, idx) => (
                        <SearcherActionButton
                          key={`action-${idx}`}
                          onClick={a.action}
                          startIcon={a.icon}
                          label={a.label || ''}
                        />
                      ))}
                    {!!reset && (
                      <SearcherActionButton
                        key="action-reset"
                        startIcon={<ResetFilterIcon />}
                        onClick={this.debouncedReset}
                        label={formatMessage(this.props.intl, module, "resetFilterTooltip")}
                      />
                    )}
                    {!!refresh && (
                      <SearcherActionButton
                        key="action-refresh"
                        startIcon={<DefaultSearchIcon />}
                        onClick={this.debouncedRefresh}
                        label={formatMessage(this.props.intl, module, "refreshFilterTooltip")}
                      />
                    )}
                  </>
                )}
              </Grid>
            </Grid>
            {!!filterPane && (
              <Fragment>
                <Grid size={{ xs: 12 }} className="paperDivider">
                  <Divider />
                </Grid>
                {filterPane}
              </Fragment>
            )}
            {!!resultsPane && (
              <Fragment>
                <Grid size={{ xs: 12 }} className="paperDivider">
                  <Divider />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  {resultsPane}
                </Grid>
              </Fragment>
            )}
          </Grid>
        </Paper>
      </StyledSearcherPane>
    );
  }
}

export { StyledSearcherPane };
export default injectIntl(SearcherPane);
