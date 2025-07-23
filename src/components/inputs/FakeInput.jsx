import React, { Component } from "react";
import { withTheme, withStyles } from "@mui/material/styles";
import { FormControl, InputBase } from "@mui/material";

const styles = (theme) => ({
  fakeInput: theme.fakeInput,
});

class FakeInput extends Component {
  _onKeyDown = (e) => {
    if (e.keyCode === 13 && !!this.props.onSelect) {
      this.props.onSelect();
      e.stopPropagation();
    }
  };

  render() {
    const { classes, onSelect, ...others } = this.props;
    return (
      <FormControl>
        <InputBase
          className={classes.fakeInput}
          inputProps={{
            onKeyDown: (e) => this._onKeyDown(e),
            readOnly: true,
          }}
          {...others}
        />
      </FormControl>
    );
  }
}

export default withTheme(withStyles(styles)(FakeInput));
