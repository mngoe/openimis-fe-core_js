import { baseApiUrl, logout } from "../actions";
import { SAML_LOGOUT_PATH } from "../constants";

export const ensureArray = (maybeArray) => {
  if (Array.isArray(maybeArray)) {
    return maybeArray;
  } else if (maybeArray !== null && maybeArray !== undefined) {
    return [maybeArray];
  } else {
    return [];
  }
};

/**
 * Split the role and its rights into what the Role page compares to detect a change.
 * The rights of a role sit in two bags, told apart by `RoleRight.uba`: the global one
 * and the one only granted through a UserBusinessAccess link (see `docs/rights.md`).
 */
export const prepareForComparison = (stateRole, propsRole, roleRights) => {
  const tempStateRole = { ...stateRole };
  delete tempStateRole.roleRights;
  delete tempStateRole.ubaRoleRights;

  const tempPropsRole = { ...propsRole, isSystem: !!propsRole?.isSystem };

  const rightIdsOfBag = (uba) => roleRights?.filter((right) => !!right?.uba === uba).map((right) => right?.rightId);

  return {
    stateRole: tempStateRole,
    propsRole: tempPropsRole,
    convertedRoleRights: rightIdsOfBag(false) || [],
    convertedUbaRoleRights: rightIdsOfBag(true) || [],
  };
};

export function getTimeDifferenceInDays(_firstDate, _secondDate) {
  let firstDate = new Date(_firstDate);
  let secondDate = new Date(_secondDate);
  const timeDelta = firstDate.getTime() - secondDate.getTime();
  const timeInDays = Math.ceil(timeDelta / (1000 * 60 * 60 * 24));

  return timeInDays;
}
export function getTimeDifferenceInDaysFromToday(dateToCheck) {
  const currentDate = new Date();
  return getTimeDifferenceInDays(dateToCheck, currentDate);
}

export const onLogout = async (dispatch) => {
  localStorage.clear();
  await dispatch(logout());
};

export const redirectToSamlLogout = (e) => {
  e.preventDefault();
  localStorage.clear();
  const redirectToURL = new URL(`${window.location.origin}${baseApiUrl}${SAML_LOGOUT_PATH}`);

  window.location.href = redirectToURL.href;
};
