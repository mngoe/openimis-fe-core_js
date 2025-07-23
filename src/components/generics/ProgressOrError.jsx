import React, { Component, Fragment } from "react";
import { withTheme, withStyles } from "@mui/material/styles";
import { CircularProgress } from "@mui/material";
import Error from "./Error";

const styles = (theme) => ({
  progress: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    align: "center",
  },
});

class ProgressOrError extends Component {
  render() {
    const { classes, progress, error, size } = this.props;
    return (
      <Fragment>
        {!!progress && <CircularProgress size={size} className={classes.progress} />}
        {!progress && !!error && <Error error={error} />}
      </Fragment>
    );
  }
}

export default withTheme(withStyles(styles)(ProgressOrError));
