# Rights management (`helpers/rights.js`)

How to check, in the frontend, that the current user is allowed to do something.

- [TL;DR](#tldr)
- [The two bags of rights](#the-two-bags-of-rights)
- [Which check for which place](#which-check-for-which-place)
- [Assigning the rights: the role page](#assigning-the-rights-the-role-page)
- [API](#api)
- [Recipes](#recipes)
- [Migrating from `rights.includes(...)`](#migrating-from-rightsincludes)
- [Where the data comes from](#where-the-data-comes-from)
- [Design notes](#design-notes)

## TL;DR

```js
import { hasPerms, hasPermsAnywhere, hasBusinessAccess, useHasPerms } from "@openimis/fe-core";

hasPerms(RIGHT_CLAIM_UPDATE);                       // may the user do it, globally?
hasPermsAnywhere(RIGHT_CLAIM_UPDATE);               // may the user do it *somewhere*?
hasPerms(RIGHT_CLAIM_UPDATE, {                      // may the user do it on *that* object?
  accessRequirements: ["location.healthfacility", hfUuid],
});
hasPerms(RIGHT_CLAIM_UPDATE, {                      // ... acting as its claim admin?
  accessRequirements: ["location.healthfacility", hfUuid, "CLAIM_ADMIN"],
});
hasBusinessAccess(["location.healthfacility", hfUuid]);   // is the user linked there at all?
```

No user, no `props.rights`, no `mapStateToProps` needed: the current user is read from
the redux store. In a function component prefer the hook, `useHasPerms(RIGHT_CLAIM_UPDATE)`,
so the component re-renders if the user changes.

## The two bags of rights

This mirrors the backend, `core.User.has_perms` in `openimis-be-core_py`. Since the
User Business Access (UBA) feature, a right is attached to a role in one of two bags,
the `uba` flag on `RoleRight`:

| Bag | `RoleRight.uba` | Meaning |
| --- | --- | --- |
| **global** | `False` | granted everywhere, the classic openIMIS right |
| **UBA** | `True` | granted **only** on the business objects the user holds a valid `UserBusinessAccess` link on (their health facility, their policy holder, ...) |

The two are disjoint: a UBA-only right is deliberately *absent* from the global bag, so
the naive `rights.includes(right)` answers "no" for it — which is correct globally, and
wrong the moment the question is about one specific object.

A UBA grant is **two independent questions**:

1. the **right** is in the user's UBA bag — it comes from `RoleRight` over the roles the
   user holds *now*, so revoking a role empties it, and
2. the user has a valid **`UserBusinessAccess` link** on the instance, under one of the
   credentials the caller demands.

A link carries no right. Its `link_type` is the *credential* the user acts under on that
object — `CLAIM_ADMIN`, or a deployment's own `HF_ACCOUNTANT` — a code registered through
`core.uba_link_types` by the module that owns the model it is held on, **not** an openIMIS
role: roles are deployment data that get renamed and duplicated, a code is stable, and the
same person may hold several credentials on one object (one row each). `CLAIM_ADMIN` and
`ENROLMENT` are declared by the **location** module, which owns the health facility and the
village; core only keeps their codes.

```
                  hasPerms(right, accessRequirements?)
                                 |
                   right in the global bag (uba = False)?
                        /                        \
                     yes                          no
                      |                            |
                   granted            a business map was passed?
                                          /                \
                                        no                 yes
                                         |                   |
                                      denied     right in the UBA bag?
                                                     /            \
                                                   no             yes
                                                    |               |
                                                 denied    link on that instance,
                                                           under a demanded credential?
                                                              /            \
                                                            yes             no
                                                             |               |
                                                          granted         denied
```

The full proposal, including the backend side and the migration plan, is in
`openimis-dev-tools/docs/feature-role-right-uba.md`.

## Which check for which place

This is the part to get right: the frontend asks several different questions, and only
one of them is the backend `has_perms`.

| Place | Question | Use |
| --- | --- | --- |
| Main menu entry, route guard, page-level "should I render this searcher at all" | "does the user hold that right *somewhere*?" | `hasPermsAnywhere` |
| A button / a field / an action bound to **one** object (this claim, this health facility) | "does the user hold that right *on that object*?" | `hasPerms(right, { accessRequirements })` |
| An unscoped action (a global mutation, an admin screen, a batch on everything) | "does the user hold that right globally?" | `hasPerms(right)` |

Why `hasPermsAnywhere` for navigation: a clerk whose claim rights are UBA-only holds
nothing in the global bag, so a strict `hasPerms` would hide the whole claim section and
make the feature unreachable. Navigation stays permissive, the object-level check (and
ultimately the backend) is what refuses.

Never treat a frontend check as enforcement. It decides what is *shown*; the backend
`has_perms` / `check_permissions` decides what is *allowed*.

## Assigning the rights: the role page

`pages/Role.js` shows **two** dual lists, one per bag, both the same UI
(`components/RoleRightsPanel.js`, parameterized by the `rightsField` it edits):

| Panel | Bag | Field on the edited role | Mutation input |
| --- | --- | --- | --- |
| *Rights granted everywhere* | `RoleRight.uba = false` | `roleRights` | `rightsId` |
| *Rights granted only where the user is linked* | `RoleRight.uba = true` | `ubaRoleRights` | `ubaRightsId` |

The role rights query carries the `uba` flag, and the page splits the rows into the two
lists; saving sends both inputs, each bag being reset independently by the backend. The
lists are independent, so the **same right may sit in both** — that is a legitimate
configuration (global everywhere, and still valid on a linked object), and it is stored
as two `RoleRight` rows. An emptied list is sent as `[]`, which clears that bag; a bag
the client does not send at all is left untouched.

Adding a panel of your own for a third bag would only mean another
`<RoleRightsPanel rightsField="..." />` wrapper, like `RoleUbaRightsPanel`.

### Credentials, instead of role tests

"Is this user a claim administrator" used to be answered by looking for a role - its name,
or the system role id attaching a health facility injected. It is now a credential
question, and the same helpers answer it:

```js
hasUserLinkType(user, "CLAIM_ADMIN");                    // holds that credential somewhere
useHasUserLinkType("ENROLMENT");                         // ... the current user, reactively
getUserBusinessAccessesOf(user, "CLAIM_ADMIN");       // the links themselves
getUserBusinessAccessReferences(user, "CLAIM_ADMIN"); // { model, objectId } to resolve
```

The codes belong to the **backend** registry (`core.uba_link_types`), not to a list kept
here: a module declaring its own credential then shows up everywhere without a frontend
change. Read them with `useUbaLinkTypes(businessObjectModel?)`, which returns
`{ linkTypes, isLoading, error, labelOf }`, labelled for the current language -
`core.uba.link_type.<code>` from the deployment's translations when it carries one
(`ubaLinkTypeLabelKey`, `formatUbaLinkTypeLabel`), the registry's own label otherwise. A
module that has to *name* a credential in its own code keeps that single code in its own
constants, the way the claim module does with `UBA_LINK_TYPE_CLAIM_ADMIN`.

Never test a role name or an `isSystem` value for access: an implementer renames roles, and
a custom role can never carry a system id, which is the coupling UBA exists to remove.

`ubaLinkTypes` returns a `params` object next to `code`, `label` and `models`: what the
declaring module said about the credential beyond the models it may be used on, notably how
it sits in the location tree (`location_type` for a credential held on a location itself,
`location_field` for one held on a model hanging off one). It is there so the *backend* row
filter can work out, from the path a queryset already travels, where the linked object sits
- no call site, and no client, has to spell that out. Read it if it helps you render
something; do not re-implement the scoping it describes, because the rows have already been
narrowed server side.

### Naming a business object

A business map names its object the way the backend does: `<app_label>.<model>` plus an
identifier. Rendering that object - the health facility a link points at, say - is the job
of the **business object registry** (`helpers/business-objects.js`): the module owning a
type registers the picker selecting one, the projection querying one and the GraphQL type
naming it. `BusinessObjectPicker` renders whatever is registered, and `useBusinessObjects`
turns stored `{ model, objectId }` references back into objects - one batched query, an
aliased relay `node` per reference, so an object is named from the same data everywhere
rather than from a label computed elsewhere. Its pure pieces are exported as well:
`formatBusinessObjectsQuery`, `parseBusinessObjectsResult`, `businessObjectNodeId` and
`businessObjectReferenceKey`, the key the returned map is keyed by. A generic screen therefore never switches on
the model label, and a module adding a credential on its own model only has to register
that model.

## API

Everything is exported from `@openimis/fe-core`.

### Checks

| Function | Answers |
| --- | --- |
| `hasPerms(perms, options?)` | does the user hold **every** right of `perms`? (`has_perms` semantics) |
| `hasAnyPerms(perms, options?)` | does the user hold **any** right of `perms`? |
| `hasPermsAnywhere(perms, options?)` | same as `hasPerms`, the UBA bag counting as a whole, without looking at any link |
| `hasAnyPermsInRange(from, to, options?)` | does the user hold any right in `[from, to]`? Replaces `rights.filter((r) => r >= X && r <= Y).length` |
| `hasBusinessAccess(accessRequirements, options?)` | does the user hold a link on that object, under a demanded credential? The link half alone, no right involved |
| `hasUserLinkType(user, linkTypes)` | does the user hold one of those credentials on any object? Replaces "has the claim admin / enrolment officer role" |
| `getGrantedRights(options?)` | the rights granted, the ones the business map unlocks included |

`perms` is one right id or a list of them, numbers or strings.

### Options

| Option | Default | Meaning |
| --- | --- | --- |
| `user` | the current user, from the store | the user to check. Pass `null` to check nobody (always denies) |
| `rights` | the user's global bag | the global bag, when the caller already holds it (a `props.rights`, a menu `filter(rights)`) |
| `accessRequirements` | none | the business map(s) opening the UBA path: which instance(s), and optionally the credential(s) demanded, see below |
| `any` | `false` | require any of `perms` instead of all of them |
| `anywhere` | `false` | count the whole UBA bag, no link needed (what `hasPermsAnywhere` sets) |

### Hooks

Reactive counterparts, to be preferred in function components:

`useHasPerms(perms, options?)`, `useHasPermsAnywhere(perms, options?)`,
`useHasAnyPerms(perms, options?)`, `useHasAnyPermsInRange(from, to, options?)`,
`useHasBusinessAccess(accessRequirements, options?)`, `useUserBusinessAccesses(linkTypes)`,
`useHasUserLinkType(linkTypes)`, `useUbaLinkTypes(businessObjectModel?)` (the registry of
credentials, labelled for the current language), `useRights()` (the global bag),
`useCurrentUser()`.

### Reading the user

`getUserRights(user?)`, `getUserUbaRights(user?)`, `getUserBusinessAccesses(user?)`,
`getUserBusinessAccessesOf(user, linkTypes)`, `getUserBusinessAccessReferences(user, linkTypes, model?)`,
`isImisAdmin(user?)`, `getCurrentUser()`, `selectCurrentUser(state)`,
`selectUserRights(state)`. Normalizers, mirroring their backend namesakes:
`normalizeAccessRequirements(accessRequirements)`, `normalizeLinkTypes(linkTypes)`.

`selectUserRights` is the drop-in for the boilerplate every module repeats:

```js
// before
const mapStateToProps = (state) => ({
  rights: !!state.core && !!state.core.user && !!state.core.user.i_user ? state.core.user.i_user.rights : [],
});
// after
const mapStateToProps = (state) => ({ rights: selectUserRights(state) });
```

### The business map (`accessRequirements`)

Same shapes as the backend `access_requirements`, plus an object form for readability.
The optional third element is the **credential demanded**, one code or a list of them:

```js
["location.healthfacility", hfUuid]                                  // any credential there
["location.healthfacility", hfUuid, "CLAIM_ADMIN"]                // that one only
["location.healthfacility", hfUuid, ["HF_ACCOUNTANT", "CLAIM_ADMIN"]]   // any of them
[null, hfUuid, "CLAIM_ADMIN"]                                     // model: ask the registry
[["location.healthfacility", hfUuid], ["claim.claim", claimUuid]]    // several objects
{ objectId: hfUuid, linkTypes: ["CLAIM_ADMIN"] }                  // the object form
{ model: "location.healthfacility", id: hfUuid, linkTypes: ["CLAIM_ADMIN"] }
```

The model label is the Django `<app_label>.<model>`, lowercase, exactly as the backend
expects it. It is **optional when the map demands a credential**: the registry
(`core.uba_link_types`) declares which models a credential may be used on, so a call site
naming the credential does not have to repeat them — the backend resolves them from the
registry, the frontend matches the link whatever the type of the object it points at. The
object reference is the uuid or the primary key, either matches. Link type codes are
matched **verbatim**, case included, since they are registry keys — the frontend has no
copy of the registry and takes whatever code the call site names. A map whose reference is
`null` / `undefined` / `""` is ignored (typical of a record not saved yet), so the check
falls back to the global bag alone.

> The third element used to be a list of right ids restricting what the map covered.
> It is now the link type; a map is "this operation demands acting as X here".

## Recipes

### Main menu

A menu entry declaring a `filter`, which receives the global bag — hence `{ rights }`,
the UBA bag being read from the store (this one is the core module's own entry,
`src/index.js`):

```js
"admin.MainMenu": [
  {
    text: <FormattedMessage module="core" id="roleManagement.label" />,
    icon: <AccountBox />,
    route: "/" + ROUTE_ROLES,
    filter: (rights) => hasPerms(RIGHT_ROLE_SEARCH, { rights }),   // admin screen: global
  },
],
```

A menu component building its own entries (`ClaimMainMenu` and friends), where the range
helper takes `anywhere` since a menu is a navigation level gate:

```js
if (hasAnyPermsInRange(RIGHT_ADD, RIGHT_SUBMIT, { rights, anywhere: true })) {
  entries.push({ text: ..., icon: <Keyboard />, route: "/claim/healthFacilities" });
}
```

### Function component

```js
const ClaimActions = ({ claim }) => {
  const canSubmit = useHasPerms(RIGHT_CLAIM_SUBMIT, {
    // any credential on that health facility
    accessRequirements: ["location.healthfacility", claim?.healthFacility?.uuid],
  });
  const canReview = useHasPerms(RIGHT_CLAIM_REVIEW, {
    // ... or acting as the claim administrator of it
    accessRequirements: ["location.healthfacility", claim?.healthFacility?.uuid, "CLAIM_ADMIN"],
  });
  return canSubmit ? <SubmitButton claim={claim} /> : null;
};
```

Demand a credential only when the operation really is bound to it. `hasBusinessAccess`
(and `useHasBusinessAccess`) answers the link half alone, which is what a "you are the
claim admin of this facility" hint or a default value needs — not a permission check.

### Class component

Both work, with the same result:

```js
// with the rights it already receives through props
if (!hasPerms(RIGHT_CLAIM_LOAD, { rights: this.props.rights })) return null;

// without touching mapStateToProps at all
if (!hasPerms(RIGHT_CLAIM_LOAD)) return null;
```

Note that a class component only re-renders on a user change if it does subscribe to it
(`rights` in `mapStateToProps`). In practice the user is loaded once at boot, before the
pages render, so the global form is fine — but a screen that must react to a user change
should keep `rights` in props.

### Route guard

The `core.Router` contribution accepts `requiredRights`, checked by
`src/components/PermissionCheck.js` before rendering the route. Being a navigation level
gate, it counts both bags:

```js
hasAnyPerms(requiredRights, { rights: userRights, anywhere: true })
```

A route whose right the user only holds where they are linked therefore opens, and the
page refuses action by action instead of a blanket 403.

### Outside of React

`hasPerms` is a plain function reading the store on each call, so it also works in a
saga/thunk, a `modulesManager` helper or any non-React code — no provider, no hook.

## Migrating from `rights.includes(...)`

| Before | After |
| --- | --- |
| `rights.includes(RIGHT_ADD)` | `hasPerms(RIGHT_ADD, { rights })` |
| `!!rights.filter((r) => r === RIGHT_LOAD).length` | `hasPerms(RIGHT_LOAD, { rights })` |
| `!!rights.filter((r) => r >= RIGHT_ADD && r <= RIGHT_SUBMIT).length` | `hasAnyPermsInRange(RIGHT_ADD, RIGHT_SUBMIT, { rights })` |
| `requiredRights.some((r) => userRights.includes(r))` | `hasAnyPerms(requiredRights, { rights: userRights })` |
| `rights.includes(RIGHT_X)` **in a menu entry or a route guard** | `hasPermsAnywhere(RIGHT_X, { rights })` |
| `rights.includes(RIGHT_X)` **for an action on one object** | `hasPerms(RIGHT_X, { rights, accessRequirements })` |

Then, for each converted call site, ask the question of the
[table above](#which-check-for-which-place): a navigation gate becomes
`hasPermsAnywhere`, an object-bound action gets an `accessRequirements`. Keeping
`{ rights }` in the options is optional; it only keeps the component subscribed to the
store the way it already is.

### Worked example: the claim page

`claim/src/pages/HealthFacilitiesPage.js` is the reference conversion. It used to ask
whether the user held a role *named* "Claim Administrator" and refuse everything
otherwise. It now keeps the two questions apart:

```js
// who: the credential, used only to preselect the admin and their facility
isClaimAdmin = () => hasUserLinkType(this.props.user, UBA_LINK_TYPE_CLAIM_ADMIN);

// where a right may apply: the facility being looked at, else the ones they are linked to
claimAdminAccessRequirements = () =>
  claimHealthFacility?.uuid
    ? [{ objectId: claimHealthFacility.uuid, linkTypes: UBA_LINK_TYPE_CLAIM_ADMIN }]
    : getUserBusinessAccessReferences(user, UBA_LINK_TYPE_CLAIM_ADMIN)
        .map(({ model, objectId }) => [model, objectId, UBA_LINK_TYPE_CLAIM_ADMIN]);

// may they: every action on the page goes through this
canOnHealthFacility = (perms) =>
  hasPerms(perms, { rights, accessRequirements: this.claimAdminAccessRequirements() });
```

Holding the credential grants nothing by itself: a claim admin without `RIGHT_ADD` in
either bag is refused, and a user holding it globally does not have to be a claim admin at
all. Only the page level gate and the visibility of the "new claim" button use the
`anywhere` form, so the page stays reachable for someone whose claim rights are UBA-only.

## Where the data comes from

`hasPerms` reads the current user, `state.core.user`, as served by
`/core/users/current_user/` (`CORE_USERS_CURRENT_USER_RESP`). Both camelCase (GraphQL)
and snake_case (REST) keys are accepted, at the root of the user object or under
`i_user` / `iUser`:

| Field | Status | Used for |
| --- | --- | --- |
| `rights` | served | the global bag |
| `uba_rights` | served | the UBA bag, hence `hasPermsAnywhere` |
| `is_imis_admin` | **not served yet** | the administrator bypass, simply not applied while it is missing |

The **links** are not on that payload: they have their own query. The `core.Boot`
contribution `LoadUserBusinessAccesses` fires `fetchCurrentUserBusinessAccesses` once the
user is known, and again after a change of user. Reading one's own credentials needs no
privilege: the backend scopes `userBusinessAccess` to the current user for anybody without
the right to manage the links of others, and returns only the links that actually count
(active, within their validity window), so what the frontend sees is what grants.

They land in `state.core.userBusinessAccesses` (`CORE_USER_BUSINESS_ACCESSES_*`, selector
`selectUserBusinessAccesses`), and `getUserBusinessAccesses` reads them from there **for
the current user only** - matched by id, so the slice never lends its links to somebody
else. A user object that carries its own links wins over the store, which is how a screen
holding another user - the admin user form - checks that user instead:

```js
{
  is_imis_admin: false,
  i_user: { rights: [101101], uba_rights: [111001, 111002] },
  business_accesses: [
    {
      content_type: "location.healthfacility",   // or businessObjectModel, or a graphene
      object_id: "17",                           //   { appLabel, model }
      object_uuid: "6c1f0b2a-...",
      link_type: "CLAIM_ADMIN",                  // the credential, a registry code
      active: true,
    },
  ],
}
```

A link never carries rights, so there is nothing per-link to merge: the row answers
"linked, under that credential", the UBA bag answers "may exercise that right where
linked".

Consequences worth keeping in mind:

- a business map only grants once that query has come back, and grants nothing at all for
  a user whose links failed to load. Navigation level gates must therefore use
  `hasPermsAnywhere`, and the backend stays the authority on object level decisions - not
  only in principle: a list the frontend receives has already been narrowed to the objects
  the user holds a credential on, `Model.get_queryset` AND'ing the UBA narrowing into the
  district filter for GraphQL and the REST/FHIR API alike. A denied object level check
  hides a button, it does not hide a row that would otherwise have leaked;
- the administrator bypass waits for `is_imis_admin` on the payload.

## Design notes

- **The user is global, not a prop.** `rightsMiddleware` (contributed by the core module,
  `src/middlewares.js`) captures the redux store, and `getCurrentUser()` reads
  `state.core.user` on every call, so an answer is never stale. It also means no module
  has to thread the user through its props, which is the point: a check reads like the
  backend one. `setCurrentUser(user)` is the fallback for the contexts with no store
  (tests, scripts).
- **Right ids are compared as strings.** openIMIS rights are numeric ids while django
  perms are strings; normalizing both sides avoids `111001 !== "111001"` surprises.
- **`normalizeAccessRequirements` mirrors its backend namesake** on purpose: the same map,
  written once, is valid on both sides — a page can pass it to the helper and to the
  mutation.
- **The link and the right are kept apart**, as in the backend: `hasBusinessAccess` never
  looks at a right, and the UBA bag never looks at an instance. Once a demanded link is
  found on the instance, the *whole* UBA bag applies there — the frontend does not try to
  guess a per-link subset, because there is none to guess.
- **Link type codes are not lowercased**, unlike model labels and object references: they
  are keys of the backend registry, which matches them verbatim.
- **No enforcement, no caching.** The helpers are pure functions over the store; nothing
  is memoized, because a check is a couple of set lookups and any cache would be one more
  thing to invalidate when the user changes.
