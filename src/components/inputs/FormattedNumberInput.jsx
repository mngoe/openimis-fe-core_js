import React, { Component } from "react";
import { styled } from "@mui/material/styles";
import TextInput from "./TextInput";
import { injectIntl } from "react-intl";
import { formatMessage, formatMessageWithValues } from "../../helpers/i18n";
import withModulesManager from "../../helpers/modules";

const StyledFormattedNumberInput = styled("div")(({ theme }) => ({}));

class FormattedNumberInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdited: false,
      rawValue: props.value != null ? this.formatNumber(props.value, props.intl) : "",
    };
    this.pricesAreDecimal = props.modulesManager.getConf("fe-core", "pricesAreDecimal", true);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value && !this.state.isEdited) {
      this.setState({
        rawValue: this.props.value != null ? this.formatNumber(this.props.value, this.props.intl) : "",
      });
    }
  }

  formatNumber = (value, intl) => {
    if (value == null || isNaN(value)) return "";
    return new Intl.NumberFormat(this.props.thousandSeparator, {
      minimumFractionDigits: this.props.pricesAreDecimal ? this.props.numberOfDecimals : 0,
      maximumFractionDigits: this.props.pricesAreDecimal ? this.props.numberOfDecimals : 0,
    }).format(value);
  };

  handleKeyPress = (event) => {
    const { allowDecimals = true } = this.props;

    if (event.key === "." && !allowDecimals) {
      event.preventDefault();
    }
  };

  handleChange = (val) => {
    const raw = val;
    this.setState({ rawValue: raw });

    const normalized = raw.replace(/\s/g, "").replace(",", ".");
    const value = parseFloat(normalized);
    this.props.onChange(isNaN(value) ? undefined : value);
  };

  formatInput = (value, displayZero, displayNa, decimal) => {
    if (!value) {
      if (displayNa && !this.state.isEdited) {
        return formatMessage(this.props.intl, this.props.module, "core.NumberInput.notApplicable");
      }
      return displayZero && value === 0 ? "0" : "";
    }

    const numericValue = Number(value);

    if (isNaN(numericValue)) return "";

    if (decimal) {
      if (typeof value === "string" && value.includes(".") && value.split(".")[1].length > 2) {
        return parseFloat(value).toFixed(2);
      }
      return value;
    }

    return parseFloat(value);
  };

  handleNaBlur = () => {
    if ((isNaN(this.props.value) || this.props.value === "") && this.state.isEdited) {
      this.props.onChange(undefined);
    }
    this.setState({ isEdited: false });
  };

  render() {
    const {
      intl,
      module = "core",
      min = null,
      max = null,
      value,
      error,
      thousandSeparator,
      numberOfDecimals,
      pricesAreDecimal,
      displayZero = false,
      displayNa = false,
      allowDecimals = this.pricesAreDecimal,
      ...others
    } = this.props;
    let inputProps = { ...this.props.inputProps, type: "number", onKeyPress: this.handleKeyPress };
    let err = error;

    if (min !== null) {
      inputProps.min = min;
      if (value < min)
        err = formatMessageWithValues(intl, module, "validation.minValue", {
          value,
          min,
        });
    }
    if (max !== null) {
      inputProps.max = max;
      if (value > max)
        err = formatMessageWithValues(intl, module, "validation.maxValue", {
          value,
          max,
        });
    }

    return (
      <StyledFormattedNumberInput>
        <TextInput
          {...others}
          module={module}
          value={this.state.rawValue}
          error={err}
          inputProps={inputProps}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          formatInput={(v) => this.formatInput(v, displayZero, displayNa, allowDecimals)}
          onFocus={this.handleFocus} // this.setState({ isEdited: true })}
        />
      </StyledFormattedNumberInput>
    );
  }
}

export { StyledFormattedNumberInput };
export default withModulesManager(injectIntl(FormattedNumberInput));
