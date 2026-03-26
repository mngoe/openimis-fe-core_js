import React, { Component } from "react";
import { injectIntl } from "react-intl";
import { connect } from "react-redux";
import {
  LocationCity,
  Healing,
  HealingOutlined,
  LocalHospital,
  LocalPharmacy,
  LocalPharmacyOutlined,
  Person,
  People,
  PinDrop,
  Tune,
} from "@mui/icons-material";
import { formatMessage, MainMenuContribution, withModulesManager } from "@openimis/fe-core";
import {
  RIGHT_PRODUCTS,
  RIGHT_HEALTHFACILITIES,
  RIGHT_PRICELISTMS,
  RIGHT_PRICELISTMI,
  RIGHT_MEDICALSERVICES,
  RIGHT_MEDICALITEMS,
  // RIGHT_ENROLMENTOFFICER,
  // RIGHT_CLAIMADMINISTRATOR,
  RIGHT_USERS,
  RIGHT_LOCATIONS,
} from "../constants";

const ADMIN_MAIN_MENU_CONTRIBUTION_KEY = "admin.MainMenu";
const ADMIN_VOUCHER_MAIN_MENU_CONTRIBUTION_KEY = "admin.voucher.MainMenu";

class AdminMainMenu extends Component {

  render() {
    const { rights } = this.props;
    const entries = [];

    entries.push(
      ...this.props.modulesManager
        .getContribs(ADMIN_MAIN_MENU_CONTRIBUTION_KEY)
        .filter((c) => !c.filter || c.filter(rights)),
    );

    if (!entries.length) return null;
    return (
      <MainMenuContribution
        {...this.props}
        header={formatMessage(this.props.intl, "admin", "mainMenu")}
        icon={<LocationCity />}
        entries={entries}
        menuId="AdminMainMenu"
      />
    );
  }
}

const mapStateToProps = (state) => ({
  rights: !!state.core && !!state.core.user && !!state.core.user.i_user ? state.core.user.i_user.rights : [],
});

export { ADMIN_MAIN_MENU_CONTRIBUTION_KEY };
export default withModulesManager(injectIntl(connect(mapStateToProps)(AdminMainMenu)));
