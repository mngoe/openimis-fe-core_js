# openIMIS Frontend Core reference module

This repository holds the files of the openIMIS Frontend Core reference module.
It is dedicated to be deployed as a module of [openimis-fe_js](https://github.com/openimis/openimis-fe_js) and provides

- openIMIS core mechanisms (authentication,...)
- openIMIS core components (Application iteself, MainMenu, JournalDrawer,...)
- openIMIS ModulesManager (loading, configuring and wiring all modules)
- many Generic components to be (re)used in other (business-focused) openimis components
- various helpers (building GraphQL queries, checking user rights,...)

[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/openimis/openimis-fe-core_js.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/openimis/openimis-fe-core_js/alerts/)

## Core Components

- `App`: application pages container (all openIMIS pages are loaded within that container)
- `AppWrapper`: wrapping main menu around each application page
- `JournalDrawer`: side bar in which mutation journal is displayed
- `AlertDialog`: pop up (modal) dialog to display an alert message (one 'ok' button)
- `ConfirmDialog`: pop up (modal) dialog to display a confirmation message (with 'cancel' / 'confirm' buttons)
- `SelectDialog`: pop up (modal) dialog to display a message and take an action between two options (yes/no, do/do not, continue/go back) - with editable (through the props) button labels, message content and dialog title, without using Redux store and actions
- `FataError`: page for non-recoverable backend access errors
- `Help`: main menu entry for Help (link to manual)
- `Logout`: main menu entry to logout
- `KeepLegacyAlive`: component to be registered in core.Boot contribution to keep legacy openIMIS session alive while interacting with new openIMIS pages
- `ErrorPage`: displays error messages with status, title, and optional logo. Includes navigation button to the homepage.
- `PermissionCheck`: controls access to a route based on user rights (403 error). Renders content if the user has any of the required rights - counting the rights they only hold where they are linked, a route being a navigation level gate - otherwise shows `ForbiddenPage`.
- `LoadUserBusinessAccesses`: `core.Boot` component loading the UserBusinessAccess links of the current user (renders nothing)
- `ForbiddenPage`: shown when a user lacks permission to access a specific page or resource. Displays an access denied message.
- `NotFoundPage`: appears when a user visits a non-existent route (404 error). Informs the user that the page is unavailable and suggests navigation option.
- `InternalServerErrorPage`: displays a message for a 500 Internal Server Error, informing users of a server-side issue in the application.

## Generic Components (to be reused along business-focused components)

- `MainMenuContribution`: generic class for main menu specific contributions (with route,...)
- `AutoSuggestion`: generic suggest-as-you-type (text)input field

  Note: cope with both pre-fetched (cached) suggestion list and query as you type (with debounce)

- `ConstantBasePicker`: fixed list select input field
- `Picker`: dialog-based (i.e. with search criteria) picker (handles pagination,...)
- `Contributions`: generic component to open business components for contributions
- `ControlledField`: field that is skipped based on module configuration
- `TextInput`,`NumberInput`, `AmountInput` & `SelectInput`: generic input components for the various data types
- `ValidatedTextInput`: generic input component which checks the uniqueness of entered data and gives the appropriate information about it
- `FieldLabel`: formatting a label in a form
- `FormattedMessage`: translated text (module/key)
- `ProgressOrError`: display progress during component's asynchronous calls... and hide or diaply error message when asynchronous call returns
- `Searcher`: generic searcher page (with criteria form and result table)
- `SearcherActionButton`: represents an action button used within a search interface.
- `Form`: generic form. Manage dirty state, displays add/save button,...
- `Table`: generic table. Headers (with -sort-actions), rows, optional setting - showOrdinalNumber that will show column with ordinal number as first column, ...
- `BusinessObjectPicker`: picks one object of a `<app_label>.<model>` type through whichever picker its module registered, so a generic screen naming objects by their content type needs no knowledge of them (cfr. the *business objects* helper)

## Helpers

### redux actions helpers

- `journalize`: helper to trigger the `CORE_MUTATION_ADD` action (which register a mutation in the journal)
- `fetchCurrentUserBusinessAccesses`: load the UserBusinessAccess links of the current user, what the UBA rights are granted through
- `graphql`: helper to send the GraphQL queries (HTTP POST) and dispatch appropriate actions to redux
- `coreAlert`: helper to open the alert modal pop (cfr. AlertDialog)
- `coreConfirm`: helper to open the confirm modal pop (cfr. ConfirmDialog)

### rights

- `hasPerms`: does the user hold that right? The frontend counterpart of the backend `has_perms`
- `hasPermsAnywhere`: does the user hold that right *somewhere*? The navigation level check (main menu, route guard)
- `hasAnyPerms`, `hasAnyPermsInRange`: any of those rights / any right in a range
- `hasBusinessAccess`: is the user linked to that business object, under the demanded credential (UBA link type)?
- `hasUserLinkType`: does the user hold that credential anywhere? The replacement for "has the claim administrator / enrolment officer role"
- `useUbaLinkTypes`, `ubaLinkTypeLabelKey`, `formatUbaLinkTypeLabel`: the credentials (UBA link types) of the backend registry, labelled for the current language - a deployment translates one by adding `core.uba.link_type.<code>` to its own file, the registry's label being the fallback
- `useHasPerms`, `useHasPermsAnywhere`, `useHasBusinessAccess`, `useHasUserLinkType`, `useUserBusinessAccesses`, `useRights`, `useCurrentUser`: the reactive counterparts, for function components
- `selectUserRights`: the `state.core.user.i_user.rights` selector, to be used in `mapStateToProps`

  Note: no user has to be passed, it is read from the redux store. Rights come in two bags since the
  User Business Access feature (globally granted vs. granted only on the objects the user is linked to),
  which changes *which* check a call site needs: **[read `docs/rights.md`](docs/rights.md)** before using them.

### business objects

- `registerBusinessObject`: declare, for a Django `<app_label>.<model>` type, the published picker selecting one, the projection querying one and the translation key naming the type. A module may also contribute a `core.businessObject.<app_label>.<model>` ref instead of importing the registry
- `getBusinessObject`, `getBusinessObjectModels`, `getBusinessObjectProjection`, `formatBusinessObjectLabel`, `businessObjectId`: read it back
- `useBusinessObjects` / `useBusinessObject`: name stored `{ model, objectId }` references, one batched query using the relay `node` field and each type's projection
- `formatBusinessObjectsQuery`, `parseBusinessObjectsResult`, `businessObjectNodeId`, `businessObjectReferenceKey`: the pure pieces of that resolution

  Note: read by `BusinessObjectPicker` and by the user business accesses (UBA) screens, where an object is only known by its content type and id. Core seeds `location.healthfacility` and `location.location`.

### api

- `formatQuery`: helper to format a simple GraphQL query (filters and projections)
- `formatPageQuery`: helper to format a GraphQL query (filters and projections), with pagination (edges and node)
- `formatPageQueryWithCount`: helper to format a GraphQL query, with pagination and totalCount
- `formatMutation`: helper to format a mutation (with clientMutationId and clientMutationLabel)
- `{de|en}codeId`: decoder|encoder for Graphene specific id mechanism
- `parseData`: navigate thru GraphQL standard edges|node structure and parse data from json to js object
- `pageInfo`: extract GraphQL standard pagination info (hasNextPage,...)
- `dispatchMutation{Req|Resp|Err}`: helper to submit a mutation and wait for response/error
- `formatServerError`: helper to format server error (error 500,...)
- `formatGraphQLError`: helper to format a graphql response returning (standard) error
- `openBlob`: helper to open a Blob (pdf,...) as a result of an asynchronous call

### i18n

- `formatMessage`: provide the translation of a module-prefixed key (fall back on openimis-fe_js/translations/ref.json)
- `formatMessageWithValues`: provide the translation of a module-prefixed key, for messages with vairable parts
- `formatAmount`: format an amount as a string
- `formatDateFromISO`: parse ISO date into (local) datetime

  Note: depends on the selected calendar (Gregorian vs. Nepali)

- `toISODate`: format local date to ISO format

  Note: depends on the selected calendar (Gregorian vs. Nepali)

### JSON handler

- `createFieldsBasedOnJSON`: Creates additional fields from a JSON string and returns an array of field objects.
- `renderInputComponent`: Renders the appropriate input component based on the field type and value.

### navigation

- `withHistory`: helper to inject history to any openIMIS component (allow navigation)
- `historyPush`: helper to push a new route to openIMIS navigation

### modules

- `withModulesManager`: helper to inject modulesManager to any openiMIS component

## Available Contribution Points

- `core.Boot`: register components that should be mounted at application start. It allows business modules to load cache at application startup, register to redux events (even when module not yet accessed),... The components registered for this contribution should not render any HTML (render should return null)
- `core.AppBar`: ability to add entries in the AppBar (known usage: insuree Enquiry component)
- `core.MainMenu`: ability to add main menu entries from modules (known usage: claim, insuree,...)
- `core.Router`: ability to register routes in client-side routing (known usage: claim, insuree,...)
- `core.UnauthenticatedRouter`: ability to register routes in client-side routing for pages that don't require user authentication
- `core.LoginPage`: ability to add components to the menu login page

## Contributions

- `core.Boot` - KeepLegacyAlive: contributing to own contribution point in order to register the component that pings the Legacy openIMIS application to prevent session timeout while in the new part.
- `core.Boot` - LoadUserBusinessAccesses: loading the UBA links of the current user, needed by every right check scoped to a business object
- `middlewares`: `authMiddleware` (dispatch `CORE_AUTH_ERR` on a 401) and `rightsMiddleware` (give the [rights helpers](docs/rights.md) access to the current user)
- `core.Router`: registering `roles`, `roles/role` routes in openIMIS client-side router
- `admin.MainMenu`:

  **Roles Management** (`roleManagement.label` translation key)

## Published Components

- `core.DatePicker`, configured date picker (Gregorian vs. Nepali)
- `core.YearPicker`, pick a year within a range
- `core.MonthPicker`, contant-based month picker. Translation keys `month.null`, `month.1`,...
- `core.LanguagePicker`, pick from available languages
- `core.WarningBox`, simple alert component to show warnings or messages, with options to customize its look and size.

## Dispatched Redux Actions

- `CORE_ALERT{_CLEAR}`: display/close the AlertDialog modal pop up
- `CORE_CONFIRM{_CLEAR}`: display/close the ConfirmDialog modal pop up
- `CORE_USERS_CURRENT_USER_{REQ|RESP|ERR}`: retrieve authenticated info (language, rights,...)
- `CORE_MUTATION_{ADD|REQ|RESP|ERR}`: mutation lifecycle (request,...)
- `CORE_HISTORICAL_MUTATIONS_{REQ|RESP|ERR}`: retrieve mutations from previous sessions (init JournalDrawer)
- `CORE_ROLE_MUTATION_{REQ|ERR}`: sending a mutation on Role
- `CORE_ROLES_{REQ|RESP|ERR}`: retrieve Roles
- `CORE_MODULEPERMISSIONS_{REQ|RESP|ERR}`: retrieve permissions of all modules
- `CORE_LANGUAGES_{REQ|RESP|ERR}`: retrieve available languages and their codes
- `CORE_ROLE_{REQ|RESP|ERR}`: retrieve a single Role
- `CORE_ROLERIGHTS_{REQ|RESP|ERR}`: retrieve rights/permissions of a single Role
- `CORE_USER_BUSINESS_ACCESSES_{REQ|RESP|ERR}`: retrieve the UBA links of the current user
- `CORE_CREATE_ROLE_RESP`: receive a result of create Role mutation
- `CORE_UPDATE_ROLE_RESP`: receive a result of update Role mutation
- `CORE_DUPLICATE_ROLE_RESP`: receive a result of duplicate Role mutation
- `CORE_DELETE_ROLE_RESP`: receive a result of delete Role mutation
- `CORE_CALENDAR_TYPE_TOGGLE`: set calendar switch status between gregorian and other calendar

## Other Modules Listened Redux Actions

None

## Configurations Options

- `datePicker`: the concrete date picker to publish as `core.DatePicker` component ("ad"= Gregorian DatePicker, "ne"= Nepali calendar date picker )
- `useDynPermalinks`: use ?dyn=<Base64-URL> when opening in new tab (prevent sending client-side routes to server while) (Default: false)
- `core.JournalDrawer.pollInterval`: poll interval (in ms) to check for mutation status once submitted (Default: 2000)
- `core.KeepLegacyAlive.pollInterval`: poll interval (in ms) to send the ping to legacy openIMIS (to prevent session timeout). (Default: 300000 = 5')
- `journalDrawer.pageSize`: page size when loading (historical) mutations (Default: `5`)
- `AutoSuggestion.limitDisplay`: threshold to limit the number of items in the auto suggestions (adding 'more options...' message), default: 10
- `AmountInput.currencyPosition`: position of the currency for the AmountInput. Choices are `start` and `end` (default: `start`)
- `menuLeft`: position menu in the Drawer component on the left site of the application
- `calendarSwitch`: enable calendar switcher toggle on the navbar of the webpage. Currently supports nepali calendar. Default false.
- `secondCalendarFormatting`: formatting options for second calendar (both picker and display), default: "DD-MM-YYYY"
- `secondCalendarFormattingLang`: formatting language for second calendar (when displayed as saved data, not in pickers), default: "en"
- `redirectToCoreMISConfluenceUrl`: clicking on questionmark icon will take you to coreMIS confluence page, default openIMIS manual
- `App.economicUnitConfig`:
  In the specified configuration, when the parameter is set to **true**, it necessitates that users are associated with an Economic Unit. If a user lacks this association, a modal will be displayed to prompt them to establish it. Until the user is linked to a unit, their only authorized action is to log out. The default configuration is **false**.
- `LogoutButton.showMPassProvider`: when activated, routes the user to the saml logout page for secure session termination
- `LoginPage.showMPassProvider`: redirects users to the saml login page, facilitating access to mPass-protected resources
- `secondCalendarType`: type of secondary calendar picker (if enabled), default "nepali"
- `secondCalendarLocale`: locale for secondary calendar picker (if enabled), default "nepali_en"
