import React from "react";

import RoleRightsPanel from "./RoleRightsPanel";

/**
 * The second rights list of the role page: the UBA bag (`RoleRight.uba = true`), whose
 * rights are granted only on the business objects the user holds a UserBusinessAccess
 * link on. Same UI as the global list, it just edits the other bag - see
 * `docs/rights.md`.
 */
const RoleUbaRightsPanel = (props) => (
  <RoleRightsPanel
    {...props}
    rightsField="ubaRoleRights"
    titleKey="roleManagement.role.ubaRights"
    subtitleKey="roleManagement.role.ubaRights.hint"
    availableRightsKey="roleManagement.role.availableUbaRights"
    chosenRightsKey="roleManagement.role.chosenUbaRights"
    filterKey="roleManagement.role.ubaRightsFilter"
  />
);

export default RoleUbaRightsPanel;
