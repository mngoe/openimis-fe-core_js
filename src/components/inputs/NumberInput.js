import React, { Component } from "react";
import TextInput from "./TextInput";
import { injectIntl } from "react-intl";
import { formatMessage, formatMessageWithValues } from "../../helpers/i18n";
import { withModulesManager } from "@openimis/fe-core";
import FormattedNumberInput from "./FormattedNumberInput";

class NumberInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdited: false,
    };
    this.defaultNumberOfDecimals = props.modulesManager.getConf("fe-core", "numberOfDecimals", 2)
    this.thousandSeparator = props.modulesManager.getConf("fe-core", "thousandSeparator", "fr")
  }

  getNumberOfDecimals = () => {
    return this.props.numberOfDecimals ?? this.defaultNumberOfDecimals;
  }

  handleKeyPress = (event) => {
    if (event.key === "." && this.getNumberOfDecimals() === 0) {
      event.preventDefault();
    }
  };

  formatInput = (value, displayZero, displayNa) => {
    if (!value) {
      if (displayNa && !this.state.isEdited) {
        return formatMessage(this.props.intl, this.props.module, "core.NumberInput.notApplicable");
      }
      return displayZero && value === 0 ? "0" : "";
    }

    const numericValue = Number(value);

    if (isNaN(numericValue)) return "";

    const decimals = this.getNumberOfDecimals();
    if (decimals > 0) {
      if (typeof value === "string" && value.includes(".") && value.split(".")[1].length > 0) {
        return parseFloat(value).toFixed(decimals);
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
      displayZero = false,
      displayNa = false,
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

    const numberOfDecimals = this.getNumberOfDecimals();

    return (
      <>
        {!!this.thousandSeparator ? (
          <FormattedNumberInput
            {...this.props}
            thousandSeparator={this.thousandSeparator}
            numberOfDecimals={numberOfDecimals}
          />
        ) : (
          <TextInput
            {...others}
            module={module}
            value={value}
            error={err}
            inputProps={inputProps}
            formatInput={(v) => this.formatInput(v, displayZero, displayNa)}
            onFocus={() => this.setState({ isEdited: true })}
            onBlur={() => this.handleNaBlur()}
          />
        )}
      </>
    );
  }
}

export default withModulesManager(injectIntl(NumberInput));