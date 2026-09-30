import { ensureArray } from "./utils";

/**
 * Right management helpers: the frontend counterpart of `core.User.has_perms`
 * (openimis-be-core_py).
 *
 *    hasPerms(RIGHT_CLAIM_ADD)                        the global bag (uba = False)
 *    hasPerms(RIGHT_CLAIM_ADD, {                      + a UserBusinessAccess link on
 *      accessRequirements: ["location.healthfacility", hfUuid],          that object
 *    })                                               (optional 3rd element: the
 *                                                     credential(s) demanded, e.g.
 *                                                     "HF_CLAIM_ADMIN")
 *    hasPermsAnywhere(RIGHT_CLAIM_ADD)                global OR UBA bag
 *
 * Rights sit in two disjoint bags since the User Business Access feature: the global
 * one, granted everywhere, and the UBA one, granted only on the business objects the
 * user holds a `UserBusinessAccess` link on. Which of the three checks above a call
 * site needs is *the* question to get right, and `hasPermsAnywhere` is the answer for
 * navigation level gates (main menu, route guard, searcher).
 *
 * A link carries no right: it says which *credential* (`link_type`, a code registered
 * in `core.uba_link_types`) the user holds on the instance. So the UBA branch is two
 * independent questions, `hasBusinessAccess` and the UBA bag.
 *
 * ==> Read `docs/rights.md`: the two bags, which check for which place, the recipes,
 *     the accepted business map shapes and the payload fields still missing.
 *
 * The user is optional in every function: it is read from the redux store (see
 * `rightsMiddleware`), so a check needs no prop, no selector and no hook, and reads
 * like its backend counterpart. Function components should still prefer the reactive
 * `useHasPerms` & co (`helpers/hooks.js`) to re-render on a user change.
 *
 * Both camelCase (GraphQL) and snake_case (REST) keys are accepted, at the root of the
 * user or under `i_user` / `iUser`.
 */

const RIGHTS_KEYS = ["rights"];
const UBA_RIGHTS_KEYS = ["ubaRights", "uba_rights"];
const BUSINESS_ACCESSES_KEYS = ["businessAccesses", "business_accesses"];
const IMIS_ADMIN_KEYS = ["isImisAdmin", "is_imis_admin", "isSuperuser", "is_superuser"];

// rights are numeric ids, django perms are strings: compare them as strings
const rightKey = (right) => String(right).trim().toLowerCase();

const rightKeys = (rights) => new Set(ensureArray(rights).map(rightKey));

// uuids and pks are compared case insensitively, link type codes are not: they are
// registry keys (`core.uba_link_types`), and the registry matches them verbatim
const objectRefKey = (ref) => String(ref).trim().toLowerCase();

const linkTypeKey = (code) => String(code).trim();

/** Mirrors `core.uba_link_types.normalize_link_types`: one code or a list of them. */
export function normalizeLinkTypes(linkTypes) {
  return ensureArray(linkTypes)
    .map(linkTypeKey)
    .filter((code) => code.length);
}

/** First of `keys` found on the user, at its root or on its interactive user. */
const userAttr = (user, keys) => {
  for (const holder of [user, user?.i_user, user?.iUser]) {
    if (!holder) continue;
    for (const key of keys) {
      if (holder[key] !== undefined && holder[key] !== null) return holder[key];
    }
  }
  return undefined;
};

/** `<app_label>.<model>`, from the string or from a graphene ContentType. */
const modelLabel = (model) => {
  if (!model) return null;
  if (typeof model === "object") {
    const appLabel = model.appLabel ?? model.app_label;
    const name = model.model ?? model.name;
    return appLabel && name ? `${appLabel}.${name}`.toLowerCase() : null;
  }
  return String(model).toLowerCase();
};

/*
 * The current user, globally.
 *
 * The store is registered by `rightsMiddleware` (contributed by the core module),
 * and read on every call so that the answer is never stale. `setCurrentUser` is the
 * fallback for the contexts where there is no store (tests, scripts, ...).
 */
let boundStore = null;
let boundUser = null;

export function registerRightsStore(store) {
  boundStore = store;
}

export function setCurrentUser(user) {
  boundUser = user;
}

export function getCurrentUser() {
  if (boundStore) return selectCurrentUser(boundStore.getState());
  return boundUser;
}

export const selectCurrentUser = (state) => state?.core?.user ?? null;

/**
 * The UserBusinessAccess links of the current user, as loaded by the `core.Boot`
 * contribution: the current user payload does not carry them, so this is where the UBA
 * path of `hasPerms` reads them from.
 */
export const selectUserBusinessAccesses = (state) => state?.core?.userBusinessAccesses ?? [];

/** Drop-in replacement for the `state.core.user.i_user.rights` mapStateToProps boilerplate. */
export const selectUserRights = (state) => getUserRights(selectCurrentUser(state));

/** The global bag. `user` may also be the rights array itself. */
export function getUserRights(user) {
  const resolved = resolveUser(user);
  if (!resolved) return [];
  if (Array.isArray(resolved)) return resolved;
  return ensureArray(userAttr(resolved, RIGHTS_KEYS));
}

/** The UBA bag: rights granted only on the objects the user is linked to. */
export function getUserUbaRights(user) {
  const resolved = resolveUser(user);
  if (!resolved || Array.isArray(resolved)) return [];
  return ensureArray(userAttr(resolved, UBA_RIGHTS_KEYS));
}

/**
 * The `UserBusinessAccess` links of the user, normalized: the ones the payload carries,
 * or the ones loaded in the store when the user asked about is the current one - the
 * `current_user` payload has no links, they come from their own query.
 */
export function getUserBusinessAccesses(user) {
  const resolved = resolveUser(user);
  if (!resolved || Array.isArray(resolved)) return [];
  let raw = ensureArray(userAttr(resolved, BUSINESS_ACCESSES_KEYS));
  if (!raw.length && isCurrentUser(resolved)) {
    raw = selectUserBusinessAccesses(boundStore?.getState());
  }
  return raw.map(normalizeBusinessAccess).filter((access) => access && access.active !== false);
}

/** Is that the user the session is about ? Only their links are in the store. */
function isCurrentUser(user) {
  const current = getCurrentUser();
  if (!current || !user) return false;
  if (current === user) return true;
  return Boolean(current.id && user.id && String(current.id) === String(user.id));
}

export function isImisAdmin(user) {
  const resolved = resolveUser(user);
  if (!resolved || Array.isArray(resolved)) return false;
  return Boolean(userAttr(resolved, IMIS_ADMIN_KEYS));
}

function resolveUser(user) {
  return user === undefined ? getCurrentUser() : user;
}

function normalizeBusinessAccess(access) {
  if (!access) return null;
  const model = modelLabel(
    access.businessObjectModel ?? access.business_object_model ?? access.contentType ?? access.content_type ?? access.model,
  );
  const refs = [access.objectId, access.object_id, access.objectUuid, access.object_uuid, access.uuid, access.id]
    .filter((ref) => ref !== undefined && ref !== null && ref !== "")
    .map(objectRefKey);
  if (!refs.length) return null;
  const linkType = access.linkType ?? access.link_type;
  return {
    model,
    refs: new Set(refs),
    // the identifier the link stores, the one a business object reference needs
    objectId: access.objectId ?? access.object_id ?? null,
    // the credential the user acts under on that object, a `core.uba_link_types` code.
    // A link never carries rights: those stay on RoleRight, i.e. in the UBA bag.
    linkType: linkType ? linkTypeKey(linkType) : null,
    active: access.active,
  };
}

/**
 * The links of the user under one of `linkTypes` - a code or a list of them, all of the
 * links when none is demanded.
 */
export function getUserBusinessAccessesOf(user, linkTypes) {
  const demanded = normalizeLinkTypes(linkTypes);
  const accesses = getUserBusinessAccesses(user);
  if (!demanded.length) return accesses;
  return accesses.filter((access) => demanded.includes(access.linkType));
}

/**
 * Does the user hold one of `linkTypes` on any business object ? The replacement for
 * "does the user have the claim administrator role": a credential, not a role, and the
 * question a screen asks before offering something the link is the condition of.
 */
export function hasUserLinkType(user, linkTypes) {
  return getUserBusinessAccessesOf(user, linkTypes).length > 0;
}

/**
 * The objects the user is linked to under `linkTypes`, as `{ model, objectId }`
 * references - what `useBusinessObjects` turns back into objects. `model` restricts to
 * one business object type.
 */
export function getUserBusinessAccessReferences(user, linkTypes, model = null) {
  const wanted = model ? String(model).toLowerCase() : null;
  return getUserBusinessAccessesOf(user, linkTypes)
    .filter((access) => access.objectId && (!wanted || access.model === wanted))
    .map((access) => ({ model: access.model, objectId: access.objectId }));
}

/**
 * Normalize the business map(s), mirroring `core.models.user_business_access
 * .normalize_access_requirements`. Returns `[{ model, ref, linkTypes }]`, `linkTypes`
 * being empty when the map accepts any credential on the instance.
 *
 * The model is optional when the map demands a credential: the backend registry already
 * declares which models that credential may be used on, so `[null, hfUuid, "CLAIM_ADMIN"]`
 * - or `{ objectId: hfUuid, linkTypes: "CLAIM_ADMIN" }` - asks the same question without
 * the caller repeating the model.
 */
export function normalizeAccessRequirements(accessRequirements) {
  if (!accessRequirements) return [];
  // a map is either an array starting with the model label (null when the credential
  // says it), or the object form: anything else is a list of maps
  const isSingleMap =
    !Array.isArray(accessRequirements) ||
    accessRequirements[0] === null ||
    typeof accessRequirements[0] === "string";
  const maps = isSingleMap ? [accessRequirements] : accessRequirements;
  const normalized = [];
  for (const businessMap of maps) {
    let model;
    let objectRef;
    let linkTypes;
    if (Array.isArray(businessMap)) {
      if (businessMap.length < 2) {
        console.warn("Ignoring invalid business map", businessMap);
        continue;
      }
      [model, objectRef, linkTypes] = businessMap;
    } else if (businessMap && typeof businessMap === "object") {
      model = businessMap.model ?? businessMap.contentType ?? businessMap.content_type;
      objectRef = businessMap.id ?? businessMap.uuid ?? businessMap.objectId ?? businessMap.object_id;
      linkTypes = businessMap.linkTypes ?? businessMap.linkType ?? businessMap.link_type;
    } else {
      console.warn("Ignoring invalid business map", businessMap);
      continue;
    }
    if (objectRef === undefined || objectRef === null || objectRef === "") {
      // nothing to scope the check on, e.g. a record not saved yet
      continue;
    }
    normalized.push({
      model: modelLabel(model),
      ref: objectRefKey(objectRef),
      linkTypes: normalizeLinkTypes(linkTypes),
    });
  }
  return normalized;
}

/**
 * Does the user hold a valid link on one of the business objects of the map(s), under
 * one of the credentials it demands ? Mirrors `UserBusinessAccess.has_access`, and says
 * nothing about the rights: that is the caller's other half of the question.
 */
export function hasBusinessAccess(accessRequirements, options = {}) {
  const businessMaps = normalizeAccessRequirements(accessRequirements);
  if (!businessMaps.length) return false;
  const accesses = getUserBusinessAccesses("user" in options ? options.user : undefined);
  return accesses.some((access) => businessMaps.some((businessMap) => accessMatches(access, businessMap)));
}

function accessMatches(access, businessMap) {
  // a map naming neither the model nor the credential demands nothing: it would match a
  // link on any object sharing that identifier, so it matches none
  if (!businessMap.model && !businessMap.linkTypes.length) return false;
  if (access.model && businessMap.model && access.model !== businessMap.model) return false;
  if (!access.refs.has(businessMap.ref)) return false;
  // an empty demand accepts any credential on the instance
  return !businessMap.linkTypes.length || businessMap.linkTypes.includes(access.linkType);
}

/**
 * The rights granted to the user, the ones a matching business map unlocks included.
 * Options: `{ user, rights, accessRequirements, anywhere }` (see `hasPerms`).
 */
export function getGrantedRights(options = {}) {
  const user = "user" in options ? options.user : undefined;
  // deduplicated by key but returned as they were written: a caller handing the result to
  // its own `rights.includes(RIGHT_ADD)` must find the numeric ids it knows, not their
  // string form. The comparisons below go through `rightKey` and take either.
  const seen = new Set();
  const granted = [];
  const add = (rights) =>
    ensureArray(rights).forEach((right) => {
      const key = rightKey(right);
      if (seen.has(key)) return;
      seen.add(key);
      granted.push(right);
    });
  add(options.rights ?? getUserRights(user));
  // the link and the right are two independent questions: the link says which credential
  // the user holds on the instance, the UBA bag which rights they may exercise where they
  // are linked. So once a demanded link is there, the whole UBA bag counts.
  if (options.anywhere || hasBusinessAccess(options.accessRequirements, { user })) {
    add(getUserUbaRights(user));
  }
  return granted;
}

/**
 * Does the user hold **every** right of `perms` ? (`has_perms` semantics)
 *
 * @param perms a right id, or a list of them
 * @param options.user the user to check, defaults to the current one
 * @param options.rights the global bag, when the caller already holds it (`props.rights`)
 * @param options.accessRequirements the business map(s) opening the UBA path
 * @param options.any true to require any of `perms` instead of all of them
 * @param options.anywhere true to count the UBA bag as a whole, without any link
 */
export function hasPerms(perms, options = {}) {
  const required = ensureArray(perms).map(rightKey);
  if (!required.length) return true;
  if (isImisAdmin("user" in options ? options.user : undefined)) return true;
  const granted = new Set(getGrantedRights(options).map(rightKey));
  return options.any ? required.some((right) => granted.has(right)) : required.every((right) => granted.has(right));
}

/** Does the user hold **any** right of `perms` ? */
export function hasAnyPerms(perms, options = {}) {
  return hasPerms(perms, { ...options, any: true });
}

/**
 * Does the user hold `perms` **somewhere**: in the global bag, or in the UBA bag on
 * whichever object they are linked to ? The navigation level check (main menu entry,
 * route guard, searcher): a page a UBA-only right opens must stay reachable, the
 * object level check then being `hasPerms(..., { accessRequirements })` or, until
 * the links reach the frontend, the backend rejecting the call.
 */
export function hasPermsAnywhere(perms, options = {}) {
  return hasPerms(perms, { ...options, anywhere: true });
}

/**
 * Does the user hold any right in the `[from, to]` range ? Replaces the
 * `rights.filter((r) => r >= RIGHT_ADD && r <= RIGHT_SUBMIT).length` pattern.
 */
export function hasAnyPermsInRange(from, to, options = {}) {
  if (isImisAdmin("user" in options ? options.user : undefined)) return true;
  return getGrantedRights(options).some((right) => {
    const rightId = Number(right);
    return !Number.isNaN(rightId) && rightId >= from && rightId <= to;
  });
}
