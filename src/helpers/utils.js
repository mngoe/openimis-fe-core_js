export const ensureArray = (maybeArray) => {
  if (Array.isArray(maybeArray)) {
    return maybeArray;
  } else if (maybeArray !== null && maybeArray !== undefined) {
    return [maybeArray];
  } else {
    return [];
  }
};

export function getTimeDifferenceInDaysFromToday(dateToCheck) {
  const currentDate = new Date();
  return getTimeDifferenceInDays(dateToCheck, currentDate);
}

export const prepareForComparison = (stateRole, propsRole, roleRights) => {
  const tempStateRole = { ...stateRole };
  delete tempStateRole.roleRights;

  const tempPropsRole = { ...propsRole, isSystem: !!propsRole?.isSystem };

  const tempRoleRights = roleRights?.map((right) => right?.rightId);

  return {
    stateRole: tempStateRole,
    propsRole: tempPropsRole,
    convertedRoleRights: tempRoleRights || [],
  };
};

export const redirectToSamlLogout = (e) => {
  e.preventDefault();
  localStorage.clear();
  const redirectToURL = new URL(`${window.location.origin}${baseApiUrl}${SAML_LOGOUT_PATH}`);

  window.location.href = redirectToURL.href;
};
