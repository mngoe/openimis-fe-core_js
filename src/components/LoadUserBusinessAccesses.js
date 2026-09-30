import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCurrentUserBusinessAccesses } from "../actions";

/**
 * Loads the UserBusinessAccess links of the user once they are known, and again after a
 * change of user. They are what the UBA rights are granted through, so every screen
 * asking `hasPerms(right, { accessRequirements })` needs them in the store - which is why
 * this is a `core.Boot` contribution rather than a page level fetch.
 *
 * The backend scopes the query to the current user unless they hold the right to manage
 * the links of everybody, in which case the user id keeps it to their own.
 *
 * Renders nothing.
 */
const LoadUserBusinessAccesses = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.core?.user?.id ?? null);

  useEffect(() => {
    if (userId) {
      dispatch(fetchCurrentUserBusinessAccesses(userId));
    }
  }, [userId]);

  return null;
};

export default LoadUserBusinessAccesses;
