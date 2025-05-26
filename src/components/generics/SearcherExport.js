import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { MenuItem, Tooltip, Button, Typography } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import GetAppIcon from "@material-ui/icons/GetApp";

import { EXPORT_FILE_FORMATS } from "../../constants";
import { formatMessage } from "../../helpers/i18n";
import { injectIntl } from "react-intl";
import {
  closeExportColumnsDialog,
  openExportColumnsDialog,
} from "../../actions";
import ExportColumnsDialog from "../dialogs/ExportColumnsDialog";

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

function SearcherExport(props) {
  const {
    intl,
    rights,
    selection,
    filters,
    exportFetch,
    exportFields,
    exportFieldsColumns,
    chooseExportableColumns,
    label = null,
    selectWithCheckbox,
    downloadWithIconButton,
    displayClearAllColsButton,
  } = props;

  const [exportStatus, setExport] = useState(0);
  const dispatch = useDispatch();
  const isExportColumnsDialogOpen = useSelector(
    (state) => state.core?.isExportColumnsDialogOpen
  );

  const enabled = selection => exportStatus === 0;

  const exportData = (fields = exportFields, columns = exportFieldsColumns) => {
    const prms = Object.keys(filters)
      .filter((f) => !!filters[f]["filter"])
      .map((f) => filters[f]["filter"]);

    prms.push(`fields: ${JSON.stringify(fields)}`);
    prms.push(`fieldsColumns: "${JSON.stringify(columns).replace(/\"/g, '\\"')}"`);
    exportFetch(prms);
  };

  const handleExportData = () => {
    if (chooseExportableColumns) {
      dispatch(openExportColumnsDialog());
    } else {
      exportData();
    }
  };

  const handleColumnFiltering = (fields, columns) => {
    exportData(fields, columns);
  };

  const parseToDialogColumns = (columns, fields) => {
    return fields.reduce((dialogColumns, field) => {
      if (!(field in dialogColumns)) {
        dialogColumns[field] = field.startsWith("json_ext__")
          ? field.replace(/^json_ext__/, "")
          : field;
      }
      return dialogColumns;
    }, { ...columns });
  };

  const entries = [
    {
      text: label || formatMessage(intl, "core", "exportSearchResult"),
      icon: <GetAppIcon />,
      action: handleExportData,
    },
  ];

  return (
    <>
      {chooseExportableColumns && (
        <ExportColumnsDialog
          confirmState={isExportColumnsDialogOpen}
          onConfirm={() => dispatch(closeExportColumnsDialog())}
          onClose={() => dispatch(closeExportColumnsDialog())}
          module="core"
          getFilteredFieldsAndColumn={handleColumnFiltering}
          columns={parseToDialogColumns(exportFieldsColumns, exportFields)}
          exportFileFormat={exportFileFormat}
          setExportFileFormat={setExportFileFormat}
          exportFileFormats={exportFileFormats}
          chooseFileFormat={chooseFileFormat}
          chooseExportableColumns={chooseExportableColumns}
          displayClearAllColsButton={displayClearAllColsButton}
        />
      )}

      <div style={{ display: enabled(selection) ? "block" : "none" }}>
        {entries.map((item, idx) => (
          <Tooltip title={formatMessage(intl, "core", "exportSearchResult.tooltip")}>
            <div key={`selectionsMenu-export-${idx}`}>
              {downloadWithIconButton ? (
                <Button
                  onClick={(e) => item.action()}
                  disabled={!enabled(selection)}
                  variant="contained"
                  color="primary"
                  startIcon={item.icon}
                >
                  <Typography variant="body2"> {item.text} </Typography>
                </Button>
              ) : (
                <MenuItem onClick={(e) => item.action()} disabled={!enabled(selection)}>
                  {item.text}
                </MenuItem>
              )}
            </div>
          </Tooltip>
        ))}
      </div>
    </>
  );
}

export default injectIntl(withStyles(styles)(SearcherExport));
