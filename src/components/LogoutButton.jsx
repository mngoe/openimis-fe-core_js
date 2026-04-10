import React from "react";
import { useDispatch } from "react-redux";

import { IconButton, Tooltip } from "@mui/material";
import { styled } from "@mui/material/styles";
import GetIconComponent from "../helpers/icons";

import { MODULE_NAME } from "../constants";
import { useHistory } from "../helpers/history";
import { useModulesManager } from "../helpers/modules";
import { onLogout, redirectToSamlLogout } from "../helpers/utils";
import { useTranslations } from "../helpers/i18n";
const ExitToApp = GetIconComponent("ExitToApp");


const StyledLogoutButton = styled("div")(({ theme }) => ({
  "& .button": {
    color: theme.palette.secondary.main,
  },
}));

const LogoutButton = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const modulesManager = useModulesManager();
  const { formatMessage } = useTranslations(MODULE_NAME, modulesManager);
  const mPassLogout = modulesManager.getConf("fe-core", "LogoutButton.showMPassProvider", false);
  const onClick = async (e) => {
    if (mPassLogout) {
      redirectToSamlLogout(e);
    } else {
      await redirectToImisLogout();
    }
  };

  const redirectToImisLogout = async () => {
    await onLogout(dispatch);
    history.push("/");
  };

  return (
    <StyledLogoutButton>
      <Tooltip title={formatMessage("core.tooltip.logout")}>
        <IconButton className="button" onClick={onClick}>
          <ExitToApp />
        </IconButton>
      </Tooltip>
    </StyledLogoutButton>
  );
};

export default LogoutButton;
