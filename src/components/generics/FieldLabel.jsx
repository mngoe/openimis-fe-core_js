import React, { Component } from "react";
import { injectIntl } from "react-intl";
import { withTheme, withStyles } from "@mui/material/styles";
import { Typography } from "@mui/material";
import FormattedMessage from "./FormattedMessage";

const styles = (theme) => ({
  label: theme.typography.label,
});

class FieldLabel extends Component {
  render() {
    const { classes, module, id } = this.props;
    return (
      <Typography className={classes.label} variant="caption">
        <FormattedMessage module={module} id={id} />
      </Typography>
    );
  }
}

export default injectIntl(withTheme(withStyles(styles)(FieldLabel)));
