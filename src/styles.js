import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    validIcon: {
      color: "green",
    },
    invalidIcon: {
      color: theme.palette.error.main,
    },
  }));