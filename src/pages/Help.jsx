import React from "react";

import { IconButton, Tooltip } from "@mui/material";
import { styled } from "@mui/material/styles";
import { HelpOutline } from "@mui/icons-material";
import { useModulesManager } from "../helpers/modules";
import { CORE_MIS_CONFLUENCE_URL, DEFAULT_URL, MODULE_NAME } from "../constants";
import { useTranslations } from "../helpers/i18n";

const StyledHelp = styled('div')(({ theme }) => ({
  '& .button': {
    margin: theme.spacing(2),
    color: theme.palette.secondary.main,
  },
}));

const Help = () => {
  const modulesManager = useModulesManager();
  const { formatMessage } = useTranslations(MODULE_NAME, modulesManager);
  const isCoreMISHelp = modulesManager.getConf("fe-core", "redirectToCoreMISConfluenceUrl", false);
  const url = isCoreMISHelp ? CORE_MIS_CONFLUENCE_URL : DEFAULT_URL;
  const onClick = () => {
    window.open(url);
  };

  return (
    <StyledHelp>
      <Tooltip title={formatMessage("core.tooltip.help")}>
        <IconButton className="button" onClick={onClick}>
          <HelpOutline />
        </IconButton>
      </Tooltip>
    </StyledHelp>
  );
};

export default Help;
