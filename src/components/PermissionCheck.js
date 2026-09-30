import React from "react";

import ForbiddenPage from "./ForbiddenPage";
import { hasAnyPerms } from "../helpers/rights";

const PermissionCheck = ({ userRights, requiredRights, children, ...props }) => {
  const hasAccess = () => {
    // NOTE: Currently, the route is accessible to all users if 'requiredRights' are not specified.
    // This default behavior is subject to change in future iterations.

    // TODO: Implement a more restrictive access policy where, by default, a route will require
    // specific rights to be accessible. This will ensure tighter security.

    if (!Array.isArray(requiredRights)) {
      return true;
    }

    if (requiredRights.length === 0) {
      return false;
    }

    // navigation level gate: a right the user only holds where they are linked opens the
    // route too, the page being responsible for checking each action on its object
    return hasAnyPerms(requiredRights, { rights: userRights, anywhere: true });
  };

  return hasAccess() ? children : <ForbiddenPage {...props} />;
};

export default PermissionCheck;
