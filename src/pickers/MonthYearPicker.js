import React, { Component } from "react";
import moment from "moment";
import { withTheme, withStyles } from "@material-ui/core/styles";
import { injectIntl } from "react-intl";
import { FormControl } from "@material-ui/core";
import { DatePicker as MUIDatePicker } from "@material-ui/pickers";
import { formatMessage, toISODate } from "../helpers/i18n";

const styles = (theme) => ({
  label: {
    color: theme.palette.primary.main,
  },
});

function fromISODate(s) {
  if (!s) return null;
  return moment(s).toDate();
}

class MonthYearPicker extends Component {
  state = { value: null };

  componentDidMount() {
    this.setState((state, props) => ({ value: props.value || null }));
  }

  componentDidUpdate(prevState, prevProps, snapshot) {
    if (prevState.value !== this.props.value) {
      this.setState((state, props) => ({ value: fromISODate(props.value) }));
    }
  }

  monthYearChange = (date) => {
    if (date) {
      const monthYear = moment(date).format("YYYY-MM");
      this.setState({ value: date }, () => this.props.onChange(monthYear));
    } else {
      this.setState({ value: null }, () => this.props.onChange(null));
    }
  };

  render() {
    const {
      intl,
      classes,
      disablePast,
      module,
      label,
      readOnly = false,
      required = false,
      fullWidth = true,
      reset,
      ...otherProps
    } = this.props;

    return (
      <FormControl fullWidth={fullWidth}>
        <MUIDatePicker
          {...otherProps}
          views={["year", "month"]}
          disabled={readOnly}
          required={required}
          clearable
          value={this.state.value}
          InputLabelProps={{
            className: classes.label,
          }}
          label={!!label ? formatMessage(intl, module, label) : null}
          onChange={this.monthYearChange}
          reset={reset}
          disablePast={disablePast}
        />
      </FormControl>
    );
  }
}

export default injectIntl(withTheme(withStyles(styles)(MonthYearPicker)));
