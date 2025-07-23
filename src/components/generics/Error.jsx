import React, { Fragment } from "react";
import withStyles from "@mui/styles/withStyles";
import { Typography, Divider } from "@mui/material";

const styles = (theme) => ({
  error: {
    padding: theme.spacing(2),
  },
  errorHeader: {
    color: theme.palette.error.main,
  },
  errorDetail: {
    color: theme.palette.error.main,
  },
});

function Error(props) {
  const { classes, error } = props;
  return (
    <div className={classes.error}>
      <Typography variant="h6" className={classes.errorHeader}>
        {error.code} {error.code && ": "} {error.message}
      </Typography>
      {!!error.detail && (
        <Fragment>
          <Divider />
          <Typography variant="body1" className={classes.errorDetail}>
            {error.detail}
          </Typography>
        </Fragment>
      )}
    </div>
  );
}

export default withStyles(styles)(Error);
