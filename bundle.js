'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var _extends$1 = require('@babel/runtime/helpers/extends');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var _objectWithoutProperties = require('@babel/runtime/helpers/objectWithoutProperties');
var React = require('react');
var reactRedux = require('react-redux');
var reactIntl = require('react-intl');
var reactRouterDom = require('react-router-dom');
var core = require('@material-ui/core');
var styles$w = require('@material-ui/core/styles');
var _classCallCheck = require('@babel/runtime/helpers/classCallCheck');
var _createClass = require('@babel/runtime/helpers/createClass');
var _possibleConstructorReturn = require('@babel/runtime/helpers/possibleConstructorReturn');
var _getPrototypeOf = require('@babel/runtime/helpers/getPrototypeOf');
var _inherits = require('@babel/runtime/helpers/inherits');
var PropTypes = require('prop-types');
var _Helmet = require('react-helmet');
var withWidth = require('@material-ui/core/withWidth');
var reactRouter = require('react-router');
var _asyncToGenerator = require('@babel/runtime/helpers/asyncToGenerator');
var _regeneratorRuntime = require('@babel/runtime/regenerator');
var icons = require('@material-ui/icons');
var reduxApiMiddleware = require('redux-api-middleware');
var uuid = require('lodash-uuid');
var _$1 = require('lodash');
var SortIcon = require('@material-ui/icons/UnfoldMore');
var SortAscIcon = require('@material-ui/icons/ExpandLess');
var ExpandMoreIcon = require('@material-ui/icons/ExpandMore');
var moment = require('moment');
var _toConsumableArray = require('@babel/runtime/helpers/toConsumableArray');
var NepaliDate = require('nepali-date-converter');
var feCore = require('@openimis/fe-core');
var clsx = require('clsx');
var MenuIcon = require('@material-ui/icons/Menu');
var redux = require('redux');
var ChevronLeftIcon = require('@material-ui/icons/ChevronLeft');
var ChevronRightIcon = require('@material-ui/icons/ChevronRight');
var MoreIcon = require('@material-ui/icons/KeyboardArrowDown');
var CheckIcon = require('@material-ui/icons/CheckCircleOutline');
var ErrorIcon = require('@material-ui/icons/ErrorOutline');
var FormControlLabel = require('@material-ui/core/FormControlLabel');
var withStyles = require('@material-ui/core/styles/withStyles');
var ArrowDropDownIcon = require('@material-ui/icons/ArrowDropDown');
var ArrowRightIcon = require('@material-ui/icons/ArrowRight');
var styles$x = require('@material-ui/styles');
var ArrowBackIcon = require('@material-ui/icons/ArrowBack');
var Autosuggest = require('react-autosuggest');
var ClearIcon = require('@material-ui/icons/Clear');
var SearchIcon = require('@material-ui/icons/Search');
var lab = require('@material-ui/lab');
var AddIcon = require('@material-ui/icons/Add');
var SaveIcon = require('@material-ui/icons/SaveAlt');
var CheckOutlinedIcon = require('@material-ui/icons/CheckOutlined');
var ErrorOutlineOutlinedIcon = require('@material-ui/icons/ErrorOutlineOutlined');
var MuiAccordion = require('@material-ui/core/Accordion');
var MuiAccordionDetails = require('@material-ui/core/AccordionDetails');
var MuiAccordionSummary = require('@material-ui/core/AccordionSummary');
var Typography = require('@material-ui/core/Typography');
var ListItem = require('@material-ui/core/ListItem');
var ListItemIcon = require('@material-ui/core/ListItemIcon');
var ListItemText = require('@material-ui/core/ListItemText');
var DeleteIcon = require('@material-ui/icons/Delete');
var MoreHoriz = require('@material-ui/icons/MoreHoriz');
var _debounce = require('lodash/debounce');
var Button = require('@material-ui/core/Button');
var Dialog = require('@material-ui/core/Dialog');
var DialogActions = require('@material-ui/core/DialogActions');
var DialogContent = require('@material-ui/core/DialogContent');
var DialogTitle = require('@material-ui/core/DialogTitle');
var Grid = require('@material-ui/core/Grid');
var FilterListIcon = require('@material-ui/icons/FilterList');
var pickers = require('@material-ui/pickers');
var DatePicker = require('react-multi-date-picker');
var gregorian = require('react-date-object/calendars/gregorian');
var gregorian_en = require('react-date-object/locales/gregorian_en');
var AccountBox = require('@material-ui/icons/AccountBox');
var EditIcon = require('@material-ui/icons/Edit');
var SupervisedUserCircleIcon = require('@material-ui/icons/SupervisedUserCircle');
var ArrowForwardIcon = require('@material-ui/icons/ArrowForward');
var DoubleArrowIcon = require('@material-ui/icons/DoubleArrow');
var _typeof = require('@babel/runtime/helpers/typeof');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
var _extends__default = /*#__PURE__*/_interopDefaultLegacy(_extends$1);
var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
var _objectWithoutProperties__default = /*#__PURE__*/_interopDefaultLegacy(_objectWithoutProperties);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var React__namespace = /*#__PURE__*/_interopNamespace(React);
var _classCallCheck__default = /*#__PURE__*/_interopDefaultLegacy(_classCallCheck);
var _createClass__default = /*#__PURE__*/_interopDefaultLegacy(_createClass);
var _possibleConstructorReturn__default = /*#__PURE__*/_interopDefaultLegacy(_possibleConstructorReturn);
var _getPrototypeOf__default = /*#__PURE__*/_interopDefaultLegacy(_getPrototypeOf);
var _inherits__default = /*#__PURE__*/_interopDefaultLegacy(_inherits);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var _Helmet__default = /*#__PURE__*/_interopDefaultLegacy(_Helmet);
var withWidth__default = /*#__PURE__*/_interopDefaultLegacy(withWidth);
var _asyncToGenerator__default = /*#__PURE__*/_interopDefaultLegacy(_asyncToGenerator);
var _regeneratorRuntime__default = /*#__PURE__*/_interopDefaultLegacy(_regeneratorRuntime);
var uuid__default = /*#__PURE__*/_interopDefaultLegacy(uuid);
var ___default = /*#__PURE__*/_interopDefaultLegacy(_$1);
var SortIcon__default = /*#__PURE__*/_interopDefaultLegacy(SortIcon);
var SortAscIcon__default = /*#__PURE__*/_interopDefaultLegacy(SortAscIcon);
var ExpandMoreIcon__default = /*#__PURE__*/_interopDefaultLegacy(ExpandMoreIcon);
var moment__default = /*#__PURE__*/_interopDefaultLegacy(moment);
var _toConsumableArray__default = /*#__PURE__*/_interopDefaultLegacy(_toConsumableArray);
var NepaliDate__default = /*#__PURE__*/_interopDefaultLegacy(NepaliDate);
var clsx__default = /*#__PURE__*/_interopDefaultLegacy(clsx);
var MenuIcon__default = /*#__PURE__*/_interopDefaultLegacy(MenuIcon);
var ChevronLeftIcon__default = /*#__PURE__*/_interopDefaultLegacy(ChevronLeftIcon);
var ChevronRightIcon__default = /*#__PURE__*/_interopDefaultLegacy(ChevronRightIcon);
var MoreIcon__default = /*#__PURE__*/_interopDefaultLegacy(MoreIcon);
var CheckIcon__default = /*#__PURE__*/_interopDefaultLegacy(CheckIcon);
var ErrorIcon__default = /*#__PURE__*/_interopDefaultLegacy(ErrorIcon);
var FormControlLabel__default = /*#__PURE__*/_interopDefaultLegacy(FormControlLabel);
var withStyles__default = /*#__PURE__*/_interopDefaultLegacy(withStyles);
var ArrowDropDownIcon__default = /*#__PURE__*/_interopDefaultLegacy(ArrowDropDownIcon);
var ArrowRightIcon__default = /*#__PURE__*/_interopDefaultLegacy(ArrowRightIcon);
var ArrowBackIcon__default = /*#__PURE__*/_interopDefaultLegacy(ArrowBackIcon);
var Autosuggest__default = /*#__PURE__*/_interopDefaultLegacy(Autosuggest);
var ClearIcon__default = /*#__PURE__*/_interopDefaultLegacy(ClearIcon);
var SearchIcon__default = /*#__PURE__*/_interopDefaultLegacy(SearchIcon);
var AddIcon__default = /*#__PURE__*/_interopDefaultLegacy(AddIcon);
var SaveIcon__default = /*#__PURE__*/_interopDefaultLegacy(SaveIcon);
var CheckOutlinedIcon__default = /*#__PURE__*/_interopDefaultLegacy(CheckOutlinedIcon);
var ErrorOutlineOutlinedIcon__default = /*#__PURE__*/_interopDefaultLegacy(ErrorOutlineOutlinedIcon);
var MuiAccordion__default = /*#__PURE__*/_interopDefaultLegacy(MuiAccordion);
var MuiAccordionDetails__default = /*#__PURE__*/_interopDefaultLegacy(MuiAccordionDetails);
var MuiAccordionSummary__default = /*#__PURE__*/_interopDefaultLegacy(MuiAccordionSummary);
var Typography__default = /*#__PURE__*/_interopDefaultLegacy(Typography);
var ListItem__default = /*#__PURE__*/_interopDefaultLegacy(ListItem);
var ListItemIcon__default = /*#__PURE__*/_interopDefaultLegacy(ListItemIcon);
var ListItemText__default = /*#__PURE__*/_interopDefaultLegacy(ListItemText);
var DeleteIcon__default = /*#__PURE__*/_interopDefaultLegacy(DeleteIcon);
var MoreHoriz__default = /*#__PURE__*/_interopDefaultLegacy(MoreHoriz);
var _debounce__default = /*#__PURE__*/_interopDefaultLegacy(_debounce);
var Button__default = /*#__PURE__*/_interopDefaultLegacy(Button);
var Dialog__default = /*#__PURE__*/_interopDefaultLegacy(Dialog);
var DialogActions__default = /*#__PURE__*/_interopDefaultLegacy(DialogActions);
var DialogContent__default = /*#__PURE__*/_interopDefaultLegacy(DialogContent);
var DialogTitle__default = /*#__PURE__*/_interopDefaultLegacy(DialogTitle);
var Grid__default = /*#__PURE__*/_interopDefaultLegacy(Grid);
var FilterListIcon__default = /*#__PURE__*/_interopDefaultLegacy(FilterListIcon);
var DatePicker__default = /*#__PURE__*/_interopDefaultLegacy(DatePicker);
var gregorian__default = /*#__PURE__*/_interopDefaultLegacy(gregorian);
var gregorian_en__default = /*#__PURE__*/_interopDefaultLegacy(gregorian_en);
var AccountBox__default = /*#__PURE__*/_interopDefaultLegacy(AccountBox);
var EditIcon__default = /*#__PURE__*/_interopDefaultLegacy(EditIcon);
var SupervisedUserCircleIcon__default = /*#__PURE__*/_interopDefaultLegacy(SupervisedUserCircleIcon);
var ArrowForwardIcon__default = /*#__PURE__*/_interopDefaultLegacy(ArrowForwardIcon);
var DoubleArrowIcon__default = /*#__PURE__*/_interopDefaultLegacy(DoubleArrowIcon);
var _typeof__default = /*#__PURE__*/_interopDefaultLegacy(_typeof);

function _callSuper$B(t, o, e) { return o = _getPrototypeOf__default["default"](o), _possibleConstructorReturn__default["default"](t, _isNativeReflectConstruct$B() ? Reflect.construct(o, e || [], _getPrototypeOf__default["default"](t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct$B() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$B = function _isNativeReflectConstruct() { return !!t; })(); }
var modulesManagerCtx = /*#__PURE__*/React__default["default"].createContext(null);
// Since we can't reach the frontend package we have to rely on the old context API to get
// the modules manager and propagate it using the new API
var ModulesManagerProvider = modulesManagerCtx.Provider;
var useModulesManager = function useModulesManager() {
  var value = React__default["default"].useContext(modulesManagerCtx);
  return value;
};
function withModulesManager(C) {
  var _ManagedComponent;
  return _ManagedComponent = /*#__PURE__*/function (_Component) {
    function ManagedComponent() {
      _classCallCheck__default["default"](this, ManagedComponent);
      return _callSuper$B(this, ManagedComponent, arguments);
    }
    _inherits__default["default"](ManagedComponent, _Component);
    return _createClass__default["default"](ManagedComponent, [{
      key: "render",
      value: function render() {
        var modulesManager = this.context.modulesManager;
        return /*#__PURE__*/React__default["default"].createElement(C, _extends__default["default"]({}, this.props, {
          modulesManager: modulesManager
        }));
      }
    }]);
  }(React.Component), _defineProperty__default["default"](_ManagedComponent, "contextTypes", {
    modulesManager: PropTypes__default["default"].object.isRequired
  }), _ManagedComponent;
}

function withHistory(C) {
  console.warn("[Deprecated]: Prefer using directly the `useHistory` hook to get the history");
  return function (props) {
    var history = reactRouter.useHistory();
    return /*#__PURE__*/React__default["default"].createElement(C, _extends__default["default"]({}, props, {
      history: history
    }));
  };
}
function _historyPush(mm, history, route, asNewTab) {
  if (asNewTab) {
    var hasDynLink = mm.getConf("fe-core", "useDynPermalinks", false);
    var link = history.createHref({
      pathname: route
    });
    window.open(hasDynLink ? "/?dyn=".concat(btoa(link)) : link);
  } else {
    history.push(route);
  }
}
function historyPush(mm, history, route, params) {
  var newTab = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  _historyPush(mm, history, "/".concat(mm.getRef(route)).concat(!!params ? "/" + params.join("/") : ""), newTab);
}

var DEFAULT_DEBOUNCE_TIME = 500;
var DEFAULT_PAGE_SIZE = 10;
var ROWS_PER_PAGE_OPTIONS = [10, 20, 50, 100];
var CONTAINS_LOOKUP = "Icontains";
var LANGUAGE_EN = "en";
var QUERY_STRING_DUPLICATE = "duplicate";
var RIGHT_ROLE_SEARCH = 122001;
var RIGHT_ROLE_CREATE = 122002;
var RIGHT_ROLE_UPDATE = 122003;
var RIGHT_ROLE_DELETE = 122004;
var RIGHT_ROLE_DUPLICATE = 122005;
var MODULE_NAME = "core";
var USER_ACTIVITY_REPORT_ACTION_INSERT = "I";
var USER_ACTIVITY_REPORT_ACTION_UPDATE = "U";
var USER_ACTIVITY_REPORT_ACTION_DELETE = "D";
var USER_ACTIVITY_REPORT_ACTIONS = [USER_ACTIVITY_REPORT_ACTION_INSERT, USER_ACTIVITY_REPORT_ACTION_UPDATE, USER_ACTIVITY_REPORT_ACTION_DELETE];
var USER_ACTIVITY_REPORT_ENTITY_CLAIM = "Claim";
var USER_ACTIVITY_REPORT_ENTITY_BATCH_RUN = "BatchRun";
var USER_ACTIVITY_REPORT_ENTITY_CLAIM_ADMIN = "ClaimAdmin";
var USER_ACTIVITY_REPORT_ENTITY_LOCATION = "Location";
var USER_ACTIVITY_REPORT_ENTITY_EXTRACT = "Extract";
var USER_ACTIVITY_REPORT_ENTITY_FAMILY = "Family";
var USER_ACTIVITY_REPORT_ENTITY_FEEDBACK = "Feedback";
var USER_ACTIVITY_REPORT_ENTITY_LOC_HF = "HealthFacility";
var USER_ACTIVITY_REPORT_ENTITY_INSUREE = "Insuree";
var USER_ACTIVITY_REPORT_ENTITY_ITEM = "Item";
var USER_ACTIVITY_REPORT_ENTITY_OFFICER = "Officer";
var USER_ACTIVITY_REPORT_ENTITY_PAYER = "Payer";
var USER_ACTIVITY_REPORT_ENTITY_PHOTO = "InsureePhoto";
var USER_ACTIVITY_REPORT_ENTITY_PL_ITEM = "ItemsPricelist";
var USER_ACTIVITY_REPORT_ENTITY_PL_SERVICE = "ServicesPricelist";
var USER_ACTIVITY_REPORT_ENTITY_PL_ITEM_DETAILS = "ItemsPricelistDetail";
var USER_ACTIVITY_REPORT_ENTITY_PL_SERVICE_DETAILS = "ServicesPricelistDetail";
var USER_ACTIVITY_REPORT_ENTITY_POLICY = "Policy";
var USER_ACTIVITY_REPORT_ENTITY_PREMIUM = "Premium";
var USER_ACTIVITY_REPORT_ENTITY_PRODUCT = "Product";
var USER_ACTIVITY_REPORT_ENTITY_PRODUCT_ITEM = "ProductItem";
var USER_ACTIVITY_REPORT_ENTITY_PRODUCT_SERVICE = "ProductService";
var USER_ACTIVITY_REPORT_ENTITY_RELATIVE_DISTRIBUTION = "RelativeDistribution";
var USER_ACTIVITY_REPORT_ENTITY_SERVICE = "Service";
var USER_ACTIVITY_REPORT_ENTITY_USER = "InteractiveUser";
var USER_ACTIVITY_REPORT_ENTITY_USER_DISTRICT = "UserDistrict";
var STORAGE_KEY_SECONDARY_CALENDAR = "isSecondaryCalendarEnabled";
var DEFAULT_SETTINGS = {
  SECOND_CALENDAR_FORMAT: "DD-MM-YYYY",
  SECOND_CALENDAR_LANG: "en"
};
var USER_ACTIVITY_REPORT_ENTITIES = [USER_ACTIVITY_REPORT_ENTITY_BATCH_RUN, USER_ACTIVITY_REPORT_ENTITY_CLAIM, USER_ACTIVITY_REPORT_ENTITY_CLAIM_ADMIN, USER_ACTIVITY_REPORT_ENTITY_EXTRACT, USER_ACTIVITY_REPORT_ENTITY_FAMILY, USER_ACTIVITY_REPORT_ENTITY_FEEDBACK, USER_ACTIVITY_REPORT_ENTITY_LOCATION, USER_ACTIVITY_REPORT_ENTITY_LOC_HF, USER_ACTIVITY_REPORT_ENTITY_INSUREE, USER_ACTIVITY_REPORT_ENTITY_ITEM, USER_ACTIVITY_REPORT_ENTITY_OFFICER, USER_ACTIVITY_REPORT_ENTITY_PAYER, USER_ACTIVITY_REPORT_ENTITY_PHOTO, USER_ACTIVITY_REPORT_ENTITY_PL_ITEM, USER_ACTIVITY_REPORT_ENTITY_PL_SERVICE, USER_ACTIVITY_REPORT_ENTITY_PL_ITEM_DETAILS, USER_ACTIVITY_REPORT_ENTITY_PL_SERVICE_DETAILS, USER_ACTIVITY_REPORT_ENTITY_POLICY, USER_ACTIVITY_REPORT_ENTITY_PREMIUM, USER_ACTIVITY_REPORT_ENTITY_PRODUCT, USER_ACTIVITY_REPORT_ENTITY_PRODUCT_ITEM, USER_ACTIVITY_REPORT_ENTITY_PRODUCT_SERVICE, USER_ACTIVITY_REPORT_ENTITY_RELATIVE_DISTRIBUTION, USER_ACTIVITY_REPORT_ENTITY_SERVICE, USER_ACTIVITY_REPORT_ENTITY_USER, USER_ACTIVITY_REPORT_ENTITY_USER_DISTRICT];

// consts relate do custom filters
var BOOL_OPTIONS = [{
  value: "True",
  label: "True"
}, {
  value: "False",
  label: "False"
}];
var CLEARED_STATE_FILTER = {
  field: "",
  filter: "",
  type: "",
  value: ""
};
var CUSTOM_FILTERS = "customFilters";
var INTEGER = "integer";
var NUMBER = "number";
var STRING = "string";
var BOOLEAN = "boolean";
var DATE = "date";
var FIELD_TYPES = {
  INTEGER: INTEGER,
  NUMBER: NUMBER,
  STRING: STRING,
  BOOLEAN: BOOLEAN,
  DATE: DATE
};
var WHITE_SPACE = " ";
var DOUBLE_UNDERSCORE = "__";
var GLOBAL_UNDERSCORE = /_/g;
var EQUALS_SIGN = "=";
var CLAIM_STATS_ORDER = ["submitted", "checked", "processed", "valuated", "rejected", "items_passed", "items_rejected", "services_passed", "services_rejected"];
var CORE_MIS_CONFLUENCE_URL = "https://openimis.atlassian.net/wiki/spaces/OP/pages/3531407380/Project+2022.T3+CORE-MIS+Merger";
var DEFAULT_URL = "https://docs.openimis.org/";
var SAML_LOGIN_PATH = "/msystems/saml/login/";
var SAML_LOGOUT_PATH = "/msystems/saml/logout/";
var RIGHT_VIEW_EU_MODAL = 203000;
var ENTER_KEY = "Enter";
var DEFAULT = {
  IS_WORKER: false
};

function ownKeys$p(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$p(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$p(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$p(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _entityAndFilters(entity, filters) {
  return "".concat(entity).concat(!!filters && filters.length ? "(".concat(filters.join(","), ")") : "");
}
function _pageAndEdges(projections) {
  return "\n    pageInfo { hasNextPage, hasPreviousPage, startCursor, endCursor}\n    edges\n    {\n      node\n      {\n        ".concat(projections.join(","), "\n      }\n    }");
}
function formatQuery(entity, filters, projections) {
  return "\n    {\n      ".concat(_entityAndFilters(entity, filters), "\n      ").concat(!!projections ? "{\n        ".concat(projections.join(","), "\n      }") : "", "\n    }");
}
function formatNodeQuery(entityGQLType, nodeId) {
  var projections = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ["id"];
  return "\n  {\n    node (id: \"".concat(nodeId, "\") {\n      ...on ").concat(entityGQLType, " {\n        ").concat(projections.join(','), "\n      }\n    }\n  }\n  ");
}
function formatPageQuery(entity, filters, projections) {
  return "\n    {\n      ".concat(_entityAndFilters(entity, filters), "\n      {\n        ").concat(_pageAndEdges(projections), "\n      }\n    }");
}
function formatPageQueryWithCount(entity, filters, projections) {
  return "\n    {\n      ".concat(_entityAndFilters(entity, filters), "\n      {\n        totalCount\n        ").concat(_pageAndEdges(projections), "\n      }\n    }");
}
function formatGQLString(str) {
  if (!str) return str;
  return str.replace(/[\"]/g, '\\"').replace(/[\\]/g, "\\\\").replace(/[\/]/g, "\\/").replace(/[\b]/g, "\\b").replace(/[\f]/g, "\\f").replace(/[\n]/g, "\\n").replace(/[\r]/g, "\\r").replace(/[\t]/g, "\\t");
}
function formatMutation(operationName, input, clientMutationLabel, clientMutationDetails) {
  var clientMutationId = uuid__default["default"].uuid();
  var payload = "\n    mutation {\n      ".concat(operationName, "(\n        input: {\n          clientMutationId: \"").concat(clientMutationId, "\"\n          clientMutationLabel: \"").concat(clientMutationLabel, "\"\n          ").concat(!!clientMutationDetails ? "clientMutationDetails: ".concat(JSON.stringify(clientMutationDetails)) : "", "\n          ").concat(input.trim(), "\n        }\n      ) {\n        clientMutationId\n        internalId\n      }\n    }");
  return {
    clientMutationId: clientMutationId,
    payload: payload
  };
}
function decodeId(id) {
  if (/^\d+$/.test(id)) return id;else return atob(id).split(":")[1];
}
function encodeId(modulesManager, type, id) {
  return btoa("".concat(modulesManager.getRef(type), ":").concat(id));
}
function parseData(data) {
  if (!data) return [];
  return data["edges"].map(function (e) {
    return e["node"];
  });
}
function dispatchMutationReq(state, action) {
  return _objectSpread$p(_objectSpread$p({}, state), {}, {
    submittingMutation: true,
    mutation: action.meta
  });
}
function dispatchMutationResp(state, service, action) {
  var mutation = state.mutation;
  mutation.id = action.payload.data[service].internalId;
  return _objectSpread$p(_objectSpread$p({}, state), {}, {
    submittingMutation: false,
    mutation: mutation
  });
}
function dispatchMutationErr(state, action) {
  return _objectSpread$p(_objectSpread$p({}, state), {}, {
    alert: JSON.stringify(action.payload)
  });
}
function pageInfo(data) {
  if (!data) return {};
  return _objectSpread$p({
    totalCount: data["totalCount"]
  }, data["pageInfo"]);
}
function formatServerError(payload) {
  return {
    code: payload.status,
    message: payload.statusText,
    detail: !!payload.response && payload.response.errors ? payload.response.errors.map(function (e) {
      return e.message;
    }).join("; ") : null
  };
}
function formatGraphQLError(payload) {
  return !payload.errors ? null : {
    code: "Data error",
    message: "Server returned data error status",
    detail: payload.errors.map(function (e) {
      return e.message;
    }).join("; ")
  };
}
function openBlob(data, filename, mime) {
  var a = document.createElement("a");
  a.style = "display: none";
  var blob = new Blob([data], {
    type: "application/".concat(mime)
  });
  var url = window.URL.createObjectURL(blob);
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  setTimeout(function () {
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }, 100);
}
function sort(orderBy, attr) {
  var asc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var targetSort = null;
  if (orderBy === attr) {
    targetSort = "-" + attr;
  } else if (orderBy === "-" + attr) {
    targetSort = attr;
  } else {
    targetSort = asc ? attr : "-" + attr;
  }
  return targetSort;
}
function formatSorter(orderBy, attr, asc) {
  if (orderBy === attr) {
    return /*#__PURE__*/React__default["default"].createElement(core.IconButton, {
      size: "small"
    }, /*#__PURE__*/React__default["default"].createElement(SortAscIcon__default["default"], {
      size: 24
    }));
  } else if (orderBy === "-" + attr) {
    return /*#__PURE__*/React__default["default"].createElement(core.IconButton, {
      size: "small"
    }, /*#__PURE__*/React__default["default"].createElement(ExpandMoreIcon__default["default"], {
      size: 24
    }));
  } else {
    return /*#__PURE__*/React__default["default"].createElement(core.IconButton, {
      size: "small"
    }, /*#__PURE__*/React__default["default"].createElement(SortIcon__default["default"], {
      size: 24
    }));
  }
}

function ownKeys$o(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$o(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$o(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$o(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var ROLE_FULL_PROJECTION = function ROLE_FULL_PROJECTION() {
  return ["id", "uuid", "name", "altLanguage", "isSystem", "isBlocked", "validityFrom", "validityTo"];
};
var ROLERIGHT_FULL_PROJECTION = function ROLERIGHT_FULL_PROJECTION() {
  return ["rightId"];
};
var LANGUAGE_FULL_PROJECTION = function LANGUAGE_FULL_PROJECTION() {
  return ["name", "code", "sortOrder"];
};
var MODULEPERMISSION_FULL_PROJECTION = function MODULEPERMISSION_FULL_PROJECTION() {
  return ["modulePermsList{moduleName, permissions{permsName, permsValue}}"];
};
var CUSTOM_FILTER_FULL_PROJECTION = function CUSTOM_FILTER_FULL_PROJECTION() {
  return ["type", "code", "possibleFilters {field, filter, type}"];
};
function fetchCustomFilter(params) {
  var payload = formatQuery("customFilters", params, CUSTOM_FILTER_FULL_PROJECTION());
  return graphql(payload, "FETCH_CUSTOM_FILTER");
}
function getApiUrl() {
  var _process$env$REACT_AP;
  var _baseApiUrl = (_process$env$REACT_AP = process.env.REACT_APP_API_URL) !== null && _process$env$REACT_AP !== void 0 ? _process$env$REACT_AP : "/api";
  if (_baseApiUrl.indexOf("/") !== 0) {
    _baseApiUrl = "/".concat(_baseApiUrl);
  }
  return _baseApiUrl;
}
var baseApiUrl = getApiUrl();
function getCsrfToken() {
  var _csrfCookie$split$;
  var CSRF_TOKEN_NAME = 'csrftoken';
  var CSRF_NOT_FOUND = null;
  var cookies = document.cookie;
  var cookieArray = cookies.split('; ');
  var csrfCookie = cookieArray.find(function (cookie) {
    return cookie.startsWith(CSRF_TOKEN_NAME);
  });
  return (_csrfCookie$split$ = csrfCookie === null || csrfCookie === void 0 ? void 0 : csrfCookie.split('=')[1]) !== null && _csrfCookie$split$ !== void 0 ? _csrfCookie$split$ : CSRF_NOT_FOUND;
}
function apiHeaders() {
  var headers = {
    "Content-Type": "application/json"
  };
  return headers;
}
function cacheFilters(key, filters) {
  return function (dispatch) {
    dispatch({
      type: "CORE_CACHE_FILTER",
      payload: _defineProperty__default["default"]({}, key, filters)
    });
  };
}
function resetCacheFilters(key) {
  return function (dispatch) {
    dispatch({
      type: "CORE_CACHE_FILTER_RESET",
      payload: key
    });
  };
}
function journalize(mutation, meta) {
  return function (dispatch) {
    mutation.status = 0;
    dispatch({
      type: "CORE_MUTATION_ADD",
      payload: mutation,
      meta: meta
    });
  };
}
function graphql(payload) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "GRAPHQL_QUERY";
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var req = type + "_REQ";
  var resp = type + "_RESP";
  var err = type + "_ERR";
  if (Array.isArray(type)) {
    var _type = _slicedToArray__default["default"](type, 3);
    req = _type[0];
    resp = _type[1];
    err = _type[2];
  }
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee(dispatch) {
      var response;
      return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return dispatch(fetch$1({
              endpoint: "".concat(baseApiUrl, "/graphql"),
              method: "POST",
              body: JSON.stringify({
                query: payload
              }),
              types: [{
                type: req,
                meta: params
              }, {
                type: resp,
                meta: params
              }, {
                type: err,
                meta: params
              }]
            }));
          case 3:
            response = _context.sent;
            if (response.error) {
              dispatch(coreAlert(formatServerError(response.payload)));
            }
            return _context.abrupt("return", response);
          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);
          case 11:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 8]]);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}
function graphqlWithVariables(operation, variables) {
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "GRAPHQL_QUERY";
  var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var customHeaders = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  var req, resp, err;
  if (Array.isArray(type)) {
    var _type2 = _slicedToArray__default["default"](type, 3);
    req = _type2[0];
    resp = _type2[1];
    err = _type2[2];
  } else {
    req = type + "_REQ";
    resp = type + "_RESP";
    err = type + "_ERR";
  }
  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee2(dispatch) {
      var response;
      return _regeneratorRuntime__default["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return dispatch(fetch$1({
              endpoint: "".concat(baseApiUrl, "/graphql"),
              method: "POST",
              body: JSON.stringify({
                query: operation,
                variables: variables
              }),
              headers: _objectSpread$o({}, customHeaders),
              types: [{
                type: req,
                meta: params
              }, {
                type: resp,
                meta: params
              }, {
                type: err,
                meta: params
              }]
            }));
          case 2:
            response = _context2.sent;
            return _context2.abrupt("return", response);
          case 4:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
}
function prepareMutation(operation, input) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  if (!params.clientMutationId) {
    params.clientMutationId = uuid__default["default"].uuid();
  }
  var variables = {
    input: _objectSpread$o(_objectSpread$o({}, input), params)
  };
  return {
    operation: operation,
    variables: variables,
    clientMutationId: params.clientMutationId
  };
}
function waitForMutation(clientMutationId) {
  return /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee3(dispatch) {
      var attempts, res, _response$payload$dat, response;
      return _regeneratorRuntime__default["default"].wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            attempts = 0;
          case 1:
            if (!res) {
              _context3.next = 4;
              break;
            }
            _context3.next = 4;
            return new Promise(function (resolve) {
              return setTimeout(resolve, 100 * attempts);
            });
          case 4:
            _context3.next = 6;
            return dispatch(graphqlWithVariables("\n        query ($clientMutationId: String) {\n          mutationLogs (clientMutationId: $clientMutationId) {\n            edges {\n              node {\n                status\n                clientMutationId\n                jsonContent\n                error\n              }\n            }\n          }\n        }\n      ", {
              clientMutationId: clientMutationId
            }));
          case 6:
            response = _context3.sent;
            if (!response.error) {
              _context3.next = 9;
              break;
            }
            return _context3.abrupt("return", null);
          case 9:
            res = (_response$payload$dat = response.payload.data.mutationLogs) === null || _response$payload$dat === void 0 || (_response$payload$dat = _response$payload$dat.edges[0]) === null || _response$payload$dat === void 0 ? void 0 : _response$payload$dat.node;
          case 10:
            if ((!res || res.status === 0) && attempts++ < 10) {
              _context3.next = 1;
              break;
            }
          case 11:
            if (res && res.status === 1 && res.error) {
              res.error = JSON.parse(res.error);
            }
            return _context3.abrupt("return", res);
          case 13:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
}
function graphqlMutation(mutation, variables) {
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "CORE_TRIGGER_MUTATION";
  var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var wait = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
  var customHeaders = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
  var clientMutationId;
  if (variables !== null && variables !== void 0 && variables.input) {
    clientMutationId = uuid__default["default"].uuid();
    variables.input.clientMutationId = clientMutationId;
  }
  return /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee4(dispatch) {
      var response, _response$payload;
      return _regeneratorRuntime__default["default"].wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return dispatch(graphqlWithVariables(mutation, variables, type, params, customHeaders));
          case 2:
            response = _context4.sent;
            if (!clientMutationId) {
              _context4.next = 10;
              break;
            }
            dispatch(fetchMutation(clientMutationId));
            if (!wait) {
              _context4.next = 9;
              break;
            }
            return _context4.abrupt("return", dispatch(waitForMutation(clientMutationId)));
          case 9:
            return _context4.abrupt("return", response === null || response === void 0 || (_response$payload = response.payload) === null || _response$payload === void 0 ? void 0 : _response$payload.data);
          case 10:
            return _context4.abrupt("return", response);
          case 11:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function (_x4) {
      return _ref4.apply(this, arguments);
    };
  }();
}
function fetch$1(config) {
  return /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee5(dispatch) {
      return _regeneratorRuntime__default["default"].wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt("return", dispatch(_defineProperty__default["default"]({}, reduxApiMiddleware.RSAA, _objectSpread$o(_objectSpread$o({}, config), {}, {
              headers: _objectSpread$o({
                "Content-Type": "application/json"
              }, config.headers)
            }))));
          case 1:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return function (_x5) {
      return _ref5.apply(this, arguments);
    };
  }();
}
function loadUser() {
  return fetch$1({
    endpoint: "".concat(baseApiUrl, "/core/users/current_user/"),
    method: "GET",
    types: ["CORE_USERS_CURRENT_USER_REQ", "CORE_USERS_CURRENT_USER_RESP", "CORE_USERS_CURRENT_USER_ERR"]
  });
}
function login(credentials) {
  return /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee6(dispatch) {
      var mutation, csrfToken, _response$payload2, _action$payload$respo, _action$payload, response, errorMessage, action, _action$payload$respo2, _action$payload2, _action;
      return _regeneratorRuntime__default["default"].wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            if (!credentials) {
              _context6.next = 23;
              break;
            }
            mutation = "mutation authenticate($username: String!, $password: String!) {\n            tokenAuth(username: $username, password: $password) {\n              refreshExpiresIn\n            }\n          }";
            csrfToken = getCsrfToken();
            _context6.prev = 3;
            _context6.next = 6;
            return dispatch(graphqlMutation(mutation, credentials, ["CORE_AUTH_LOGIN_REQ", "CORE_AUTH_LOGIN_RESP", "CORE_AUTH_ERR"], {}, false, {
              "X-CSRFToken": csrfToken
            }));
          case 6:
            response = _context6.sent;
            if (!(((_response$payload2 = response.payload) === null || _response$payload2 === void 0 || (_response$payload2 = _response$payload2.errors) === null || _response$payload2 === void 0 ? void 0 : _response$payload2.length) > 0)) {
              _context6.next = 11;
              break;
            }
            errorMessage = response.payload.errors[0].message;
            dispatch(authError({
              message: errorMessage
            }));
            return _context6.abrupt("return", {
              loginStatus: "CORE_AUTH_ERR",
              message: errorMessage
            });
          case 11:
            _context6.next = 13;
            return dispatch(loadUser());
          case 13:
            action = _context6.sent;
            return _context6.abrupt("return", {
              loginStatus: action.type,
              message: (_action$payload$respo = action === null || action === void 0 || (_action$payload = action.payload) === null || _action$payload === void 0 || (_action$payload = _action$payload.response) === null || _action$payload === void 0 ? void 0 : _action$payload.detail) !== null && _action$payload$respo !== void 0 ? _action$payload$respo : ""
            });
          case 17:
            _context6.prev = 17;
            _context6.t0 = _context6["catch"](3);
            dispatch(authError({
              message: _context6.t0.message
            }));
            return _context6.abrupt("return", {
              loginStatus: "CORE_AUTH_ERR",
              message: _context6.t0.message
            });
          case 21:
            _context6.next = 29;
            break;
          case 23:
            _context6.next = 25;
            return dispatch(refreshAuthToken());
          case 25:
            _context6.next = 27;
            return dispatch(loadUser());
          case 27:
            _action = _context6.sent;
            return _context6.abrupt("return", {
              loginStatus: _action.type,
              message: (_action$payload$respo2 = _action === null || _action === void 0 || (_action$payload2 = _action.payload) === null || _action$payload2 === void 0 || (_action$payload2 = _action$payload2.response) === null || _action$payload2 === void 0 ? void 0 : _action$payload2.detail) !== null && _action$payload$respo2 !== void 0 ? _action$payload$respo2 : "Error occurred while loading user."
            });
          case 29:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[3, 17]]);
    }));
    return function (_x6) {
      return _ref6.apply(this, arguments);
    };
  }();
}
function refreshAuthToken() {
  return function (dispatch) {
    var mutation = "\n    mutation refreshAuthToken {\n      refreshToken {\n        refreshExpiresIn\n      }\n    }\n  ";
    return dispatch(graphqlMutation(mutation, {}, "CORE_AUTH_REFRESH_TOKEN"));
  };
}
function initialize() {
  return /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee7(dispatch) {
      return _regeneratorRuntime__default["default"].wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return dispatch(login());
          case 2:
            return _context7.abrupt("return", dispatch({
              type: "CORE_INITIALIZED"
            }));
          case 3:
          case "end":
            return _context7.stop();
        }
      }, _callee7);
    }));
    return function (_x7) {
      return _ref7.apply(this, arguments);
    };
  }();
}
function authError(error) {
  return {
    type: "CORE_AUTH_ERR",
    payload: error
  };
}
function logout() {
  return /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee8(dispatch, getState) {
      var mutation;
      return _regeneratorRuntime__default["default"].wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            mutation = "\n      mutation logout {\n        deleteTokenCookie {\n          deleted\n        }\n        deleteRefreshTokenCookie {\n          deleted\n        }\n      }\n    ";
            _context8.next = 3;
            return dispatch(graphqlMutation(mutation, {}));
          case 3:
            return _context8.abrupt("return", dispatch({
              type: "CORE_AUTH_LOGOUT"
            }));
          case 4:
          case "end":
            return _context8.stop();
        }
      }, _callee8);
    }));
    return function (_x8, _x9) {
      return _ref8.apply(this, arguments);
    };
  }();
}
function fetchMutation(clientMutationId) {
  var payload = formatPageQuery("mutationLogs", ["clientMutationId: \"".concat(clientMutationId, "\"")], ["id", "status", "error", "clientMutationId", "clientMutationLabel", "clientMutationDetails", "requestDateTime",
  // "jsonExt",
  "autogeneratedCode"]);
  return graphql(payload, "CORE_MUTATION");
}
function fetchHistoricalMutations(pageSize, afterCursor) {
  var filters = ["first: ".concat(pageSize)];
  if (!!afterCursor) {
    filters.push("after: \"".concat(afterCursor, "\""));
  }
  filters.push("orderBy: \"-request_date_time\"");
  var payload = formatPageQuery("mutationLogs", filters, ["id", "status", "error", "clientMutationId", "clientMutationLabel", "clientMutationDetails", "requestDateTime"
  // "jsonExt",
  ]);
  return graphql(payload, "CORE_HISTORICAL_MUTATIONS");
}
function coreAlert(titleOrObject, message, detail) {
  var payload;
  if (___default["default"].isObject(titleOrObject)) {
    payload = titleOrObject;
  } else {
    payload = {
      title: titleOrObject,
      message: message,
      detail: detail
    };
  }
  return function (dispatch) {
    dispatch({
      type: "CORE_ALERT",
      payload: payload
    });
  };
}
function clearAlert() {
  return function (dispatch) {
    dispatch({
      type: "CORE_ALERT_CLEAR"
    });
  };
}
function coreConfirm(title, message) {
  return function (dispatch) {
    dispatch({
      type: "CORE_CONFIRM",
      payload: {
        title: title,
        message: message
      }
    });
  };
}
function clearConfirm(confirmed) {
  return function (dispatch) {
    dispatch({
      type: "CORE_CONFIRM_CLEAR",
      payload: confirmed
    });
  };
}
function openExportColumnsDialog() {
  return function (dispatch) {
    dispatch({
      type: "CORE_OPEN_EXPORT_COLUMNS_DIALOG"
    });
  };
}
function closeExportColumnsDialog() {
  return function (dispatch) {
    dispatch({
      type: "CORE_CLOSE_EXPORT_COLUMNS_DIALOG"
    });
  };
}
function fetchRoles(params) {
  var payload = formatPageQueryWithCount("role", params, ROLE_FULL_PROJECTION());
  return graphql(payload, "CORE_ROLES");
}
function fetchRole(params) {
  var payload = formatPageQuery("role", params, ROLE_FULL_PROJECTION());
  return graphql(payload, "CORE_ROLE");
}
function fetchRoleRights(params) {
  var payload = formatPageQuery("roleRight", params, ROLERIGHT_FULL_PROJECTION());
  return graphql(payload, "CORE_ROLERIGHTS");
}
function fetchModulesPermissions() {
  var payload = formatQuery("modulesPermissions", null, MODULEPERMISSION_FULL_PROJECTION());
  return graphql(payload, "CORE_MODULEPERMISSIONS");
}
function fetchLanguages() {
  var payload = formatQuery("languages", null, LANGUAGE_FULL_PROJECTION());
  return graphql(payload, "CORE_LANGUAGES");
}
function formatRoleGQL(role) {
  return "\n        ".concat(!!role.uuid ? "uuid: \"".concat(role.uuid, "\"") : "", "\n        ").concat(!!role.name ? "name: \"".concat(formatGQLString(role.name), "\"") : "", "\n        ").concat(!!role.altLanguage ? "altLanguage: \"".concat(formatGQLString(role.altLanguage), "\"") : "", "\n        ").concat(role.isSystem !== null ? "isSystem: ".concat(role.isSystem) : "", "\n        ").concat(role.isBlocked !== null ? "isBlocked: ".concat(role.isBlocked) : "", "\n        ").concat(!!role.roleRights ? "rightsId: [".concat(role.roleRights.join(","), "]") : "", "\n    ");
}
function createRole(role, clientMutationLabel) {
  var mutation = formatMutation("createRole", formatRoleGQL(role), clientMutationLabel);
  var requestedDateTime = new Date();
  return graphql(mutation.payload, ["CORE_ROLE_MUTATION_REQ", "CORE_CREATE_ROLE_RESP", "CORE_ROLE_MUTATION_ERR"], {
    clientMutationId: mutation.clientMutationId,
    clientMutationLabel: clientMutationLabel,
    requestedDateTime: requestedDateTime
  });
}
function updateRole(role, clientMutationLabel) {
  var mutation = formatMutation("updateRole", formatRoleGQL(role), clientMutationLabel);
  var requestedDateTime = new Date();
  return graphql(mutation.payload, ["CORE_ROLE_MUTATION_REQ", "CORE_UPDATE_ROLE_RESP", "CORE_ROLE_MUTATION_ERR"], {
    clientMutationId: mutation.clientMutationId,
    clientMutationLabel: clientMutationLabel,
    requestedDateTime: requestedDateTime
  });
}
function deleteRole(role, clientMutationLabel) {
  var clientMutationDetails = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var roleUuids = "uuids: [\"".concat(role.uuid, "\"]");
  var mutation = formatMutation("deleteRole", roleUuids, clientMutationLabel, clientMutationDetails);
  var requestedDateTime = new Date();
  return graphql(mutation.payload, ["CORE_ROLE_MUTATION_REQ", "CORE_DELETE_ROLE_RESP", "CORE_ROLE_MUTATION_ERR"], {
    clientMutationId: mutation.clientMutationId,
    clientMutationLabel: clientMutationLabel,
    requestedDateTime: requestedDateTime
  });
}
function saveCurrentPaginationPage(page, afterCursor, beforeCursor, module) {
  return function (dispatch) {
    dispatch({
      type: "CORE_PAGINATION_PAGE",
      payload: {
        page: page,
        afterCursor: afterCursor,
        beforeCursor: beforeCursor,
        module: module
      }
    });
  };
}
function clearCurrentPaginationPage() {
  return function (dispatch) {
    dispatch({
      type: "CORE_PAGINATION_PAGE_CLEAR"
    });
  };
}
function toggleCurrentCalendarType(isSecondaryCalendarEnabled) {
  return function (dispatch) {
    dispatch({
      type: "CORE_CALENDAR_TYPE_TOGGLE",
      payload: {
        isSecondaryCalendarEnabled: isSecondaryCalendarEnabled
      }
    });
  };
}

function ownKeys$n(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$n(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$n(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$n(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var ensureArray = function ensureArray(maybeArray) {
  if (Array.isArray(maybeArray)) {
    return maybeArray;
  } else if (maybeArray !== null && maybeArray !== undefined) {
    return [maybeArray];
  } else {
    return [];
  }
};
var prepareForComparison = function prepareForComparison(stateRole, propsRole, roleRights) {
  var tempStateRole = _objectSpread$n({}, stateRole);
  delete tempStateRole.roleRights;
  var tempPropsRole = _objectSpread$n(_objectSpread$n({}, propsRole), {}, {
    isSystem: !!(propsRole !== null && propsRole !== void 0 && propsRole.isSystem)
  });
  var tempRoleRights = roleRights === null || roleRights === void 0 ? void 0 : roleRights.map(function (right) {
    return right === null || right === void 0 ? void 0 : right.rightId;
  });
  return {
    stateRole: tempStateRole,
    propsRole: tempPropsRole,
    convertedRoleRights: tempRoleRights || []
  };
};
function getTimeDifferenceInDays(_firstDate, _secondDate) {
  var firstDate = new Date(_firstDate);
  var secondDate = new Date(_secondDate);
  var timeDelta = firstDate.getTime() - secondDate.getTime();
  var timeInDays = Math.ceil(timeDelta / (1000 * 60 * 60 * 24));
  return timeInDays;
}
function getTimeDifferenceInDaysFromToday(dateToCheck) {
  var currentDate = new Date();
  return getTimeDifferenceInDays(dateToCheck, currentDate);
}
var onLogout = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee(dispatch) {
    return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          localStorage.clear();
          _context.next = 3;
          return dispatch(logout());
        case 3:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function onLogout(_x) {
    return _ref.apply(this, arguments);
  };
}();
var redirectToSamlLogout = function redirectToSamlLogout(e) {
  e.preventDefault();
  localStorage.clear();
  var redirectToURL = new URL("".concat(window.location.origin).concat(baseApiUrl).concat(SAML_LOGOUT_PATH));
  window.location.href = redirectToURL.href;
};

function formatDateFromISO$2(mm, intl, date) {
  if (!date) return "";
  return moment__default["default"](date).format(mm.getConf("fe-core", "dateFormat", "YYYY-MM-DD"));
}

function formatDateTimeFromISO$1(mm, intl, date) {
  if (!date) return "";
  var momentDate = moment__default["default"](date);
  if (momentDate.isValid()) {
    return momentDate.format(mm.getConf("fe-core", "dateTimeFormat", "YYYY-MM-DD HH:mm:ss"));
  } else {
    return moment__default["default"](date).format(mm.getConf("fe-core", "dateTimeFormat", "YYYY-MM-DD HH:mm:ss"));
  }
}

function formatDateFromISO$1(date, intl, formattingOptions) {
  if (!date) return "";
  // this nepali-date-converter only supports dates up to this date, it will crash whole site if this date is exceeded
  // added as a safeguard, other solution is probably needed
  // TODO remove after nepal component change
  if (date > new Date("2090/12/30")) {
    date = new Date("2090/12/30");
  }
  try {
    var _NepaliDate;
    return (_NepaliDate = new NepaliDate__default["default"](new Date(date))).format.apply(_NepaliDate, _toConsumableArray__default["default"](formattingOptions));
  } catch (error) {
    console.warn("[FORMAT DATE ERROR]: ", error);
    return formatMessage(intl, MODULE_NAME, "core.NeDateFormatter.dateOutOfRange");
  }
}

//formatting with values is expansive.. so let's have separated methods
function formatMessage(intl, module, id) {
  if (!!intl.messages["".concat(module, ".").concat(id)]) {
    return intl.formatMessage({
      id: "".concat(module, ".").concat(id)
    });
  } else {
    return intl.formatMessage({
      id: "".concat(id)
    });
  }
}
function formatMessageWithValues(intl, module, id, values) {
  if (!!intl.messages["".concat(module, ".").concat(id)]) {
    return intl.formatMessage({
      id: "".concat(module, ".").concat(id)
    }, values);
  } else {
    return intl.formatMessage({
      id: "".concat(id)
    }, values);
  }
}
function formatAmount(intl, amount) {
  return "".concat(intl.formatMessage({
    id: "currency"
  }), " ").concat(amount || 0);
}
function formatDateFromISO(mm, intl, date) {
  var isSecondaryCalendar = JSON.parse(localStorage.getItem(STORAGE_KEY_SECONDARY_CALENDAR));
  if (isSecondaryCalendar) {
    var secondCalendarFormatting = mm.getConf("fe-core", "secondCalendarFormatting", DEFAULT_SETTINGS.SECOND_CALENDAR_FORMAT);
    var secondCalendarFormattingLang = mm.getConf("fe-core", "secondCalendarFormattingLang", DEFAULT_SETTINGS.SECOND_CALENDAR_LANG);
    return formatDateFromISO$1(date, intl, [secondCalendarFormatting, secondCalendarFormattingLang]);
  }
  return formatDateFromISO$2(mm, intl, date);
}
function formatDateTimeFromISO(mm, intl, date) {
  return formatDateTimeFromISO$1(mm, intl, date);
}
function toISODate(d) {
  if (!d) return null;
  return moment__default["default"](d).format().slice(0, 10);
}
function toISODateTime(d) {
  if (!d) return null;
  return moment__default["default"](d).toISOString().slice(0, 19);
}
function withTooltip(c, t) {
  var placement = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "bottom";
  return !!t ? /*#__PURE__*/React__default["default"].createElement(core.Tooltip, {
    title: t,
    placement: placement
  }, c) : c;
}
function useTranslations(moduleName, modulesManager) {
  // TODO: Take modulesManager from the context (once it has been refactored in @openimis/fe)
  var intl = reactIntl.useIntl();
  return {
    formatDateFromISO: formatDateFromISO.bind(null, modulesManager, intl),
    formatDateTimeFromISO: formatDateTimeFromISO.bind(null, modulesManager, intl),
    formatAmount: formatAmount.bind(null, intl),
    formatMessage: moduleName ? formatMessage.bind(null, intl, moduleName) : formatMessage.bind(null, intl),
    formatMessageWithValues: moduleName ? formatMessageWithValues.bind(null, intl, moduleName) : formatMessageWithValues.bind(null, intl)
  };
}

var useStyles$6 = styles$w.makeStyles(function (theme) {
  return {
    button: {
      margin: theme.spacing(2),
      color: theme.palette.secondary.main
    }
  };
});
var LogoutButton = function LogoutButton() {
  var history = reactRouter.useHistory();
  var dispatch = reactRedux.useDispatch();
  var modulesManager = useModulesManager();
  var _useTranslations = useTranslations(MODULE_NAME, modulesManager),
    formatMessage = _useTranslations.formatMessage;
  var mPassLogout = modulesManager.getConf("fe-core", "LogoutButton.showMPassProvider", false);
  var onClick = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee(e) {
      return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!mPassLogout) {
              _context.next = 4;
              break;
            }
            redirectToSamlLogout(e);
            _context.next = 6;
            break;
          case 4:
            _context.next = 6;
            return redirectToImisLogout();
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function onClick(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var redirectToImisLogout = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee2() {
      return _regeneratorRuntime__default["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return onLogout(dispatch);
          case 2:
            history.push("/");
          case 3:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function redirectToImisLogout() {
      return _ref2.apply(this, arguments);
    };
  }();
  var classes = useStyles$6();
  return /*#__PURE__*/React__default["default"].createElement(core.Tooltip, {
    title: formatMessage("core.tooltip.logout")
  }, /*#__PURE__*/React__default["default"].createElement(core.IconButton, {
    className: classes.button,
    onClick: onClick
  }, /*#__PURE__*/React__default["default"].createElement(icons.ExitToApp, null)));
};

var styles$v = function styles(theme) {
  return {
    button: {
      margin: theme.spacing(2),
      color: theme.palette.secondary.main
    }
  };
};
var Help = function Help(_ref) {
  var classes = _ref.classes;
  var modulesManager = feCore.useModulesManager();
  var _useTranslations = useTranslations(MODULE_NAME, modulesManager),
    formatMessage = _useTranslations.formatMessage;
  var isCoreMISHelp = modulesManager.getConf("fe-core", "redirectToCoreMISConfluenceUrl", false);
  var url = isCoreMISHelp ? CORE_MIS_CONFLUENCE_URL : DEFAULT_URL;
  var onClick = function onClick() {
    window.open(url);
  };
  return /*#__PURE__*/React__default["default"].createElement(core.Tooltip, {
    title: formatMessage("core.tooltip.help")
  }, /*#__PURE__*/React__default["default"].createElement(core.IconButton, {
    className: classes.button,
    onClick: onClick
  }, /*#__PURE__*/React__default["default"].createElement(icons.HelpOutline, null)));
};
var Help$1 = styles$w.withStyles(styles$v)(Help);

var _excluded$d = ["children", "contributionKey", "reverse"];
function getComponents(modulesManager, key) {
  var contributions = modulesManager.getContribs(key);
  return contributions.map(function (contrib) {
    return typeof contrib === "string" ? modulesManager.getRef(contrib) : contrib;
  }).filter(Boolean);
}
var Contributions = function Contributions(_ref) {
  var _ref$children = _ref.children,
    children = _ref$children === void 0 ? null : _ref$children,
    contributionKey = _ref.contributionKey,
    _ref$reverse = _ref.reverse,
    reverse = _ref$reverse === void 0 ? false : _ref$reverse,
    delegated = _objectWithoutProperties__default["default"](_ref, _excluded$d);
  var modulesManager = useModulesManager();
  var components = React.useMemo(function () {
    var components = getComponents(modulesManager, contributionKey);
    if (reverse) {
      components.reverse();
    }
    return components;
  }, [contributionKey, reverse]);
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, children, components.map(function (Comp, idx) {
    return /*#__PURE__*/React__default["default"].createElement(Comp, _extends__default["default"]({
      key: "".concat(contributionKey, "_").concat(idx),
      modulesManager: modulesManager
    }, delegated));
  }));
};

function _callSuper$A(t, o, e) { return o = _getPrototypeOf__default["default"](o), _possibleConstructorReturn__default["default"](t, _isNativeReflectConstruct$A() ? Reflect.construct(o, e || [], _getPrototypeOf__default["default"](t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct$A() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$A = function _isNativeReflectConstruct() { return !!t; })(); }
var FormattedMessage = /*#__PURE__*/function (_Component) {
  function FormattedMessage() {
    _classCallCheck__default["default"](this, FormattedMessage);
    return _callSuper$A(this, FormattedMessage, arguments);
  }
  _inherits__default["default"](FormattedMessage, _Component);
  return _createClass__default["default"](FormattedMessage, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        intl = _this$props.intl,
        module = _this$props.module,
        id = _this$props.id,
        values = _this$props.values;
      if (!!intl.messages["".concat(module, ".").concat(id)]) {
        return /*#__PURE__*/React__default["default"].createElement(reactIntl.FormattedMessage, {
          id: "".concat(module, ".").concat(id),
          values: values
        }, this.props.children);
      } else {
        return /*#__PURE__*/React__default["default"].createElement(reactIntl.FormattedMessage, {
          id: "".concat(id),
          values: values
        }, this.props.children);
      }
    }
  }]);
}(React.Component);
var FormattedMessage$1 = reactIntl.injectIntl(FormattedMessage);

function _callSuper$z(t, o, e) { return o = _getPrototypeOf__default["default"](o), _possibleConstructorReturn__default["default"](t, _isNativeReflectConstruct$z() ? Reflect.construct(o, e || [], _getPrototypeOf__default["default"](t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct$z() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$z = function _isNativeReflectConstruct() { return !!t; })(); }
function ownKeys$m(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$m(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$m(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$m(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var styles$u = function styles(theme) {
  return {
    toolbar: {
      minHeight: 80
    },
    drawer: {
      width: theme.jrnlDrawer.width,
      flexShrink: 0,
      whiteSpace: "nowrap"
    },
    drawerOpen: {
      width: theme.jrnlDrawer.open.width,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    drawerClose: _defineProperty__default["default"]({
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      overflowX: "hidden",
      width: theme.jrnlDrawer.close.width
    }, theme.breakpoints.up("sm"), {
      width: theme.spacing(9) + 1
    }),
    jrnlItem: theme.jrnlDrawer.item,
    jrnlItemDetail: theme.jrnlDrawer.itemDetail,
    jrnlItemDetailsError: _objectSpread$m(_objectSpread$m({}, theme.jrnlDrawer.itemDetail), {}, {
      color: theme.palette.error.main,
      whiteSpace: 'normal',
      overflowWrap: 'break-word'
    }),
    jrnlItemDetailText: theme.jrnlDrawer.itemDetailText,
    jrnlIconClickable: {
      cursor: "pointer"
    },
    jrnlIcon: {
      paddingLeft: theme.spacing(1)
    },
    jrnlErrorItem: {
      color: theme.palette.error.main
    },
    jrnlErrorIcon: {
      paddingLeft: theme.spacing(1),
      color: theme.palette.error.main
    },
    messagePopover: {
      width: 350
    },
    groupMessagePanel: {
      width: "100%",
      margin: 0,
      padding: 0
    },
    errorPanel: {
      width: "100%",
      color: theme.palette.error.main
    },
    messagePanel: {
      width: "100%",
      margin: theme.spacing(1)
    },
    centerText: {
      textAlign: 'center'
    },
    boldCenterText: {
      textAlign: 'center',
      fontWeight: 'bold'
    }
  };
};
var Messages = /*#__PURE__*/function (_Component) {
  function Messages() {
    var _this;
    _classCallCheck__default["default"](this, Messages);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper$z(this, Messages, [].concat(args));
    _defineProperty__default["default"](_this, "state", {
      groupExpanded: false,
      expanded: false
    });
    _defineProperty__default["default"](_this, "handleGroupChange", function (panel) {
      return function (event, newExpanded) {
        event.stopPropagation();
        _this.setState({
          groupExpanded: newExpanded ? panel : false
        });
      };
    });
    _defineProperty__default["default"](_this, "handleChange", function (panel) {
      return function (event, newExpanded) {
        event.stopPropagation();
        _this.setState({
          expanded: newExpanded ? panel : false
        });
      };
    });
    _defineProperty__default["default"](_this, "formatSingleMessage", function (message, idx) {
      if (message.hasOwnProperty("message")) {
        return /*#__PURE__*/React__default["default"].createElement(core.Accordion, {
          key: "message-".concat(idx, "-panel"),
          expanded: message.hasOwnProperty("detail") && _this.state.expanded === "message-".concat(idx),
          onChange: _this.handleChange("message-".concat(idx)),
          className: _this.props.classes.errorPanel
        }, /*#__PURE__*/React__default["default"].createElement(core.AccordionSummary, {
          id: "message-".concat(idx, "-header"),
          expandIcon: message.hasOwnProperty("detail") && /*#__PURE__*/React__default["default"].createElement(ExpandMoreIcon__default["default"], null)
        }, /*#__PURE__*/React__default["default"].createElement(core.Typography, {
          variant: "caption"
        }, message.hasOwnProperty("code") ? "[".concat(message.code, "] ") : "", message.message)), message.hasOwnProperty("detail") && /*#__PURE__*/React__default["default"].createElement(core.AccordionDetails, null, /*#__PURE__*/React__default["default"].createElement(core.Typography, {
          variant: "caption"
        }, message.detail)));
      } else if (message.hasOwnProperty("clientMutationLabel")) {
        return /*#__PURE__*/React__default["default"].createElement(core.Grid, {
          key: "message-".concat(idx, "-panel"),
          item: true,
          className: _this.props.classes.messagePanel
        }, message.clientMutationLabel);
      } else {
        return /*#__PURE__*/React__default["default"].createElement(core.Grid, {
          key: "message-".concat(idx, "-panel"),
          item: true
        }, JSON.stringify(message));
      }
    });
    _defineProperty__default["default"](_this, "formatMessage", function (message, idx) {
      if (message.hasOwnProperty("title")) {
        return /*#__PURE__*/React__default["default"].createElement(core.Accordion, {
          key: "groupMessage-".concat(idx, "-panel"),
          expanded: _this.state.groupExpanded === "groupMessage-".concat(idx),
          onChange: _this.handleGroupChange("groupMessage-".concat(idx)),
          className: _this.props.classes.groupMessagePanel
        }, /*#__PURE__*/React__default["default"].createElement(core.AccordionSummary, {
          id: "groupMessage-".concat(idx, "-header"),
          expandIcon: /*#__PURE__*/React__default["default"].createElement(ExpandMoreIcon__default["default"], null)
        }, /*#__PURE__*/React__default["default"].createElement(core.Typography, {
          variant: "caption"
        }, message.title)), /*#__PURE__*/React__default["default"].createElement(core.AccordionDetails, {
          className: _this.props.classes.groupMessagePanel
        }, /*#__PURE__*/React__default["default"].createElement(core.Grid, {
          container: true,
          spacing: 0
        }, message.list.map(function (m, i) {
          return /*#__PURE__*/React__default["default"].createElement(core.Grid, {
            item: true,
            xs: 12
          }, _this.formatSingleMessage(m, "".concat(idx, ".").concat(i)));
        }))));
      } else {
        return _this.formatSingleMessage(message, idx);
      }
    });
    return _this;
  }
  _inherits__default["default"](Messages, _Component);
  return _createClass__default["default"](Messages, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        classes = _this$props.classes,
        anchorEl = _this$props.anchorEl,
        onClick = _this$props.onClick,
        messages = _this$props.messages;
      if (!messages) return null;
      var stats = messages !== null && messages !== void 0 && messages.jsonExt ? JSON.parse(messages.jsonExt) : {};
      var msgs = [(messages === null || messages === void 0 ? void 0 : messages.error) || messages];
      try {
        msgs = JSON.parse((messages === null || messages === void 0 ? void 0 : messages.error) || messages);
        if (!Array.isArray(msgs)) {
          msgs = [msgs];
        }
      } catch (err) {
        //let's keep the raw message then
      }
      return /*#__PURE__*/React__default["default"].createElement(core.ClickAwayListener, {
        onClickAway: onClick
      }, /*#__PURE__*/React__default["default"].createElement(core.Popover, {
        open: !!anchorEl,
        anchorEl: anchorEl,
        anchorOrigin: {
          vertical: "center",
          horizontal: "left"
        },
        transformOrigin: {
          vertical: "center",
          horizontal: "right"
        },
        onClick: onClick,
        PaperProps: {
          className: classes.messagePopover
        }
      }, (stats === null || stats === void 0 ? void 0 : stats.claim_stats) && /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement(core.Typography, {
        className: classes.boldCenterText
      }, stats.claim_stats["header"]), CLAIM_STATS_ORDER.map(function (key) {
        return stats.claim_stats.hasOwnProperty(key) && /*#__PURE__*/React__default["default"].createElement(core.Typography, {
          className: classes.centerText,
          key: key
        }, "".concat(key.replace(GLOBAL_UNDERSCORE, WHITE_SPACE), ": ").concat(stats.claim_stats[key]));
      })), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        container: true
      }, msgs.map(function (msg, idx) {
        return _this2.formatMessage(msg, idx);
      }))));
    }
  }]);
}(React.Component);
var StyledMessages = styles$w.withTheme(styles$w.withStyles(styles$u)(Messages));
var JournalDrawer = /*#__PURE__*/function (_Component2) {
  function JournalDrawer(props) {
    var _this3;
    _classCallCheck__default["default"](this, JournalDrawer);
    _this3 = _callSuper$z(this, JournalDrawer, [props]);
    _defineProperty__default["default"](_this3, "checkProcessing", function () {
      var clientMutationIds = _this3.state.displayedMutations.filter(function (m) {
        return m.status === 0;
      }).map(function (m) {
        return m.clientMutationId;
      });
      //TODO: change for a "fetchMutationS(ids)"  > requires id_In backend implementation
      clientMutationIds.forEach(function (id) {
        return _this3.props.fetchMutation(id);
      });
    });
    _defineProperty__default["default"](_this3, "more", function (e) {
      _this3.props.fetchHistoricalMutations(_this3.state.pageSize, _this3.state.afterCursor);
    });
    _defineProperty__default["default"](_this3, "showMessages", function (e, m) {
      if (_this3.props.open) {
        return;
      }
      _this3.setState({
        messagesAnchor: e.currentTarget,
        messages: m
      });
    });
    _defineProperty__default["default"](_this3, "hideMessages", function (e) {
      _this3.setState({
        messagesAnchor: null,
        messages: null
      });
    });
    _defineProperty__default["default"](_this3, "handleChange", function (event, newExpanded) {
      event.stopPropagation();
      _this3.setState({
        expanded: newExpanded
      });
    });
    _this3.state = {
      pageSize: props.modulesManager.getConf("fe-core", "journalDrawer.pageSize", 5),
      afterCursor: null,
      hasNextPage: false,
      displayedMutations: [],
      messagesAnchor: null,
      expanded: false
    };
    return _this3;
  }
  _inherits__default["default"](JournalDrawer, _Component2);
  return _createClass__default["default"](JournalDrawer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this4 = this;
      if (!this.props.fetchedHistoricalMutations) {
        this.props.fetchHistoricalMutations(this.state.pageSize, this.state.afterCursor);
      }
      this.setState(function (state, props) {
        return {
          timeoutId: setInterval(_this4.checkProcessing, props.modulesManager.getRef("core.JournalDrawer.pollInterval")),
          displayedMutations: _toConsumableArray__default["default"](props.mutations)
        };
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (prevProps.fetchingHistoricalMutations && !this.props.fetchingHistoricalMutations) {
        this.setState(function (state, props) {
          return {
            displayedMutations: [].concat(_toConsumableArray__default["default"](state.displayedMutations), _toConsumableArray__default["default"](props.mutations)),
            afterCursor: props.mutationsPageInfo.endCursor,
            hasNextPage: props.mutationsPageInfo.hasNextPage
          };
        });
      } else if (!___default["default"].isEqual(prevProps.mutations, this.props.mutations)) {
        this.setState({
          displayedMutations: _toConsumableArray__default["default"](this.props.mutations)
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.state.timeoutId);
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;
      var _this$props2 = this.props,
        theme = _this$props2.theme,
        classes = _this$props2.classes,
        open = _this$props2.open,
        handleDrawer = _this$props2.handleDrawer;
      return /*#__PURE__*/React__default["default"].createElement(core.ClickAwayListener, {
        onClickAway: function onClickAway(e) {
          return open && handleDrawer();
        }
      }, /*#__PURE__*/React__default["default"].createElement("nav", {
        className: classes.drawer
      }, /*#__PURE__*/React__default["default"].createElement(StyledMessages, {
        anchorEl: this.state.messagesAnchor,
        messages: this.state.messages,
        onClick: this.hideMessages
      }), /*#__PURE__*/React__default["default"].createElement(core.Drawer, {
        variant: "permanent",
        anchor: "right",
        className: clsx__default["default"](classes.drawer, _defineProperty__default["default"](_defineProperty__default["default"]({}, classes.drawerOpen, open), classes.drawerClose, !open)),
        classes: {
          paper: clsx__default["default"](_defineProperty__default["default"](_defineProperty__default["default"]({}, classes.drawerOpen, open), classes.drawerClose, !open))
        },
        open: open
      }, /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        container: true,
        className: classes.toolbar,
        justify: "center",
        alignItems: "center"
      }, /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        item: true
      }, /*#__PURE__*/React__default["default"].createElement(core.IconButton, {
        onClick: handleDrawer
      }, open ? /*#__PURE__*/React__default["default"].createElement(ChevronRightIcon__default["default"], null) : /*#__PURE__*/React__default["default"].createElement(ChevronLeftIcon__default["default"], null)))), /*#__PURE__*/React__default["default"].createElement(core.Divider, null), /*#__PURE__*/React__default["default"].createElement(core.List, null, this.state.displayedMutations.map(function (m, idx) {
        return /*#__PURE__*/React__default["default"].createElement(React.Fragment, {
          key: "mutation".concat(idx)
        }, /*#__PURE__*/React__default["default"].createElement(core.ListItem, {
          key: "mutation-label".concat(idx),
          className: classes.jrnlItem
        }, m.status == 0 && /*#__PURE__*/React__default["default"].createElement(core.ListItemIcon, {
          className: classes.jrnlIcon
        }, /*#__PURE__*/React__default["default"].createElement(core.CircularProgress, {
          size: theme.jrnlDrawer.iconSize
        })), /*#__PURE__*/React__default["default"].createElement(core.ListItemIcon, {
          className: clsx__default["default"](m.status === 1 ? classes.jrnlErrorIcon : classes.jrnlIcon, _defineProperty__default["default"]({}, classes.jrnlIconClickable, !open)),
          onClick: function onClick(e) {
            return _this5.showMessages(e, m);
          }
        }, m.status === 1 ? /*#__PURE__*/React__default["default"].createElement(ErrorIcon__default["default"], null) : /*#__PURE__*/React__default["default"].createElement(CheckIcon__default["default"], null)), /*#__PURE__*/React__default["default"].createElement(core.ListItemText, {
          className: m.status === 1 ? classes.jrnlErrorItem : classes.jrnlItem,
          primary: m.clientMutationLabel,
          secondary: moment__default["default"](m.requestDateTime).format("YYYY-MM-DD HH:mm")
        }), !!m.clientMutationDetails && _this5.state.expanded === "detail-".concat(idx) && /*#__PURE__*/React__default["default"].createElement(core.IconButton, {
          onClick: function onClick(e) {
            return _this5.handleChange(e, false);
          }
        }, /*#__PURE__*/React__default["default"].createElement(SortAscIcon__default["default"], null)), !!m.clientMutationDetails && _this5.state.expanded !== "detail-".concat(idx) && /*#__PURE__*/React__default["default"].createElement(core.IconButton, {
          onClick: function onClick(e) {
            return _this5.handleChange(e, "detail-".concat(idx));
          }
        }, /*#__PURE__*/React__default["default"].createElement(ExpandMoreIcon__default["default"], null))), !!m.clientMutationDetails && /*#__PURE__*/React__default["default"].createElement(core.Collapse, {
          key: "mutation-detail".concat(idx),
          "in": !!m.clientMutationDetails && _this5.state.expanded === "detail-".concat(idx),
          timeout: "auto",
          unmountOnExit: true
        }, /*#__PURE__*/React__default["default"].createElement(core.List, {
          component: "div",
          disablePadding: true
        }, function () {
          try {
            var details = JSON.parse(m.clientMutationDetails);
            return details.map(function (detail, detailIndex) {
              return /*#__PURE__*/React__default["default"].createElement(core.ListItemText, {
                className: classes.jrnlItemDetail,
                key: "mdet-".concat(detailIndex),
                primary: detail,
                primaryTypographyProps: {
                  "class": classes.jrnlItemDetailText
                }
              });
            });
          } catch (error) {
            return /*#__PURE__*/React__default["default"].createElement(core.ListItemText, {
              className: classes.jrnlItemDetailsError,
              primaryTypographyProps: {
                "class": classes.jrnlItemDetailText
              },
              primary: "Mutation details not available. ".concat(error)
            });
          }
        }())));
      }), !!this.state.hasNextPage && /*#__PURE__*/React__default["default"].createElement(core.ListItem, {
        key: "more",
        className: classes.jrnlItem
      }, /*#__PURE__*/React__default["default"].createElement(core.IconButton, {
        onClick: this.more,
        className: classes.jrnlIcon
      }, /*#__PURE__*/React__default["default"].createElement(MoreIcon__default["default"], null)))))));
    }
  }]);
}(React.Component);
var mapStateToProps$8 = function mapStateToProps(state, props) {
  return {
    fetchingMutations: state.core.fetchingMutations,
    fetchingHistoricalMutations: state.core.fetchingHistoricalMutations,
    fetchedHistoricalMutations: state.core.fetchedHistoricalMutations,
    mutations: state.core.mutations,
    mutationsPageInfo: state.core.mutationsPageInfo
  };
};
var mapDispatchToProps$9 = function mapDispatchToProps(dispatch) {
  return redux.bindActionCreators({
    fetchMutation: fetchMutation,
    fetchHistoricalMutations: fetchHistoricalMutations
  }, dispatch);
};
var JournalDrawer$1 = withModulesManager(styles$w.withTheme(styles$w.withStyles(styles$u)(reactRedux.connect(mapStateToProps$8, mapDispatchToProps$9)(JournalDrawer))));

function ownKeys$l(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$l(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$l(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$l(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var useDebounceCb = function useDebounceCb(cb) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var _useState = React.useState(),
    _useState2 = _slicedToArray__default["default"](_useState, 2),
    payload = _useState2[0],
    setPayload = _useState2[1];
  var _useState3 = React.useState(false),
    _useState4 = _slicedToArray__default["default"](_useState3, 2),
    enabled = _useState4[0],
    setEnabled = _useState4[1];
  var timeoutRef = React.useRef();
  React.useEffect(function () {
    if (enabled) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(function () {
        return cb.apply(void 0, _toConsumableArray__default["default"](payload));
      }, duration);
    }
    return function () {
      return clearTimeout(timeoutRef.current);
    };
  }, [payload]);
  return function () {
    setEnabled(true);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    setPayload(args);
  };
};

// Ref: https://usehooks.com/usePrevious/
var usePrevious = function usePrevious(value) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  var ref = React.useRef();

  // Store current value in ref
  React.useEffect(function () {
    ref.current = value;
  }, [value]); // Only re-run if value changes

  // Return previous value (happens before update in useEffect above)
  return ref.current;
};
var DEFAULT_CONFIG$1 = {
  type: "GRAPHQL_QUERY",
  skip: false,
  keepStale: false
};
var useGraphqlQuery = function useGraphqlQuery(operation, variables) {
  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  config = _objectSpread$l(_objectSpread$l({}, DEFAULT_CONFIG$1), config);
  var dispatch = reactRedux.useDispatch();
  var _useState5 = React.useState({
      isLoading: !config.skip,
      data: null,
      error: null
    }),
    _useState6 = _slicedToArray__default["default"](_useState5, 2),
    queryState = _useState6[0],
    setQueryState = _useState6[1];
  var _useState7 = React.useState(false),
    _useState8 = _slicedToArray__default["default"](_useState7, 2),
    isMounted = _useState8[0],
    setMounted = _useState8[1];
  var prevVariables = usePrevious(variables !== null && variables !== void 0 ? variables : {});
  var prevOperation = usePrevious(operation);
  function fetchQuery() {
    return _fetchQuery.apply(this, arguments);
  }
  function _fetchQuery() {
    _fetchQuery = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee() {
      var action;
      return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            setQueryState({
              isLoading: true,
              data: config.keepStale ? queryState.data : null,
              error: null
            });
            _context.next = 4;
            return dispatch(graphqlWithVariables(operation, variables, config.type, {
              operation: operation,
              variables: variables
            }));
          case 4:
            action = _context.sent;
            if (action.error) {
              setQueryState({
                error: action.payload,
                isLoading: false,
                data: null
              });
            } else {
              setQueryState({
                error: null,
                isLoading: false,
                data: action.payload.data
              });
            }
            _context.next = 11;
            break;
          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            setQueryState({
              error: _context.t0,
              isLoading: false,
              data: null
            });
          case 11:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 8]]);
    }));
    return _fetchQuery.apply(this, arguments);
  }
  React.useEffect(function () {
    if (!isMounted) return;
    if (operation !== prevOperation || !_.isEqual(variables, prevVariables)) {
      fetchQuery();
    }
  }, [operation, variables]);
  React.useEffect(function () {
    if (!config.skip) {
      fetchQuery();
    }
    setMounted(true);
  }, []);
  return _objectSpread$l(_objectSpread$l({}, queryState), {}, {
    refetch: fetchQuery
  });
};
var DEFAULT_GRAPHQL_MUTATION_CONFIG = {
  wait: true
};
var useGraphqlMutation = function useGraphqlMutation(operation, config) {
  config = _objectSpread$l(_objectSpread$l({}, DEFAULT_GRAPHQL_MUTATION_CONFIG), config);
  var dispatch = reactRedux.useDispatch();
  var _useState9 = React.useState({
      isLoading: false,
      error: null
    }),
    _useState10 = _slicedToArray__default["default"](_useState9, 2),
    state = _useState10[0],
    setState = _useState10[1];
  function mutate(input) {
    if (state.isLoading) {
      console.warn("A mutation is already in progress");
      return;
    }
    setState({
      isLoading: true,
      error: null
    });
    return new Promise( /*#__PURE__*/function () {
      var _ref = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee2(resolve, reject) {
        var _result$error, variables, result, error;
        return _regeneratorRuntime__default["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              variables = {
                input: input
              };
              _context2.next = 4;
              return dispatch(graphqlMutation(operation, variables, config.type, {
                operation: operation,
                input: input
              }, config.wait));
            case 4:
              result = _context2.sent;
              // Handle graphql errors
              error = result === null || result === void 0 || (_result$error = result.error) === null || _result$error === void 0 ? void 0 : _result$error.map(function (err) {
                return err.detail;
              }).join("; ");
              if (!error) {
                _context2.next = 8;
                break;
              }
              throw new Error(error);
            case 8:
              setState({
                isLoading: false,
                error: error
              });
              if (config.onSuccess) {
                resolve(config.onSuccess(result));
              } else {
                resolve(result);
              }
              _context2.next = 16;
              break;
            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](0);
              setState({
                isLoading: false,
                error: _context2.t0
              });
              if (config.onError) {
                reject(config.onError(_context2.t0));
              } else {
                reject(_context2.t0);
              }
            case 16:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 12]]);
      }));
      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
  }
  return {
    isLoading: state.isLoading,
    error: state.error,
    mutate: mutate
  };
};
var useAuthentication = function useAuthentication() {
  var dispatch = reactRedux.useDispatch();
  var user = reactRedux.useSelector(function (state) {
    return state.core.user;
  });
  var isInitialized = reactRedux.useSelector(function (state) {
    return state.core.isInitialized;
  });
  var error = reactRedux.useSelector(function (state) {
    return state.core.authError;
  });
  var refresh = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee3() {
      return _regeneratorRuntime__default["default"].wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return dispatch(refreshAuthToken());
          case 2:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function refresh() {
      return _ref2.apply(this, arguments);
    };
  }();
  return {
    user: user,
    error: error,
    isAuthenticated: Boolean(user),
    isInitialized: isInitialized,
    initialize: function initialize$1() {
      return dispatch(initialize());
    },
    login: function login$1(credentials) {
      return dispatch(login(credentials));
    },
    refresh: refresh,
    logout: function logout$1() {
      return dispatch(logout());
    }
  };
};
var useUserQuery = function useUserQuery() {
  var modulesManager = feCore.useModulesManager();
  var _useGraphqlQuery = useGraphqlQuery("\n    query useUserQuery {\n      user {\n        healthFacility ".concat(modulesManager.getProjection("location.HealthFacilityPicker.projection"), "\n        id\n        username\n        rights\n        email\n        lastName\n        otherNames\n        phone\n        iUser {\n          id\n          uuid\n          language {\n            code\n            name\n          }\n        }\n        claimAdmin {\n          id\n          code\n          uuid\n        }\n        officer {\n          id\n          uuid\n          code\n          dob\n          address\n          location {\n            id\n            uuid\n            code\n            name\n            parent {\n              id\n              uuid\n              code\n              name\n            }\n          }\n        }\n      }\n    }\n  ")),
    data = _useGraphqlQuery.data,
    isLoading = _useGraphqlQuery.isLoading;
  return {
    user: data === null || data === void 0 ? void 0 : data.user,
    isLoading: isLoading
  };
};
var useBoolean = function useBoolean() {
  var defaultValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var _useState11 = React.useState(defaultValue),
    _useState12 = _slicedToArray__default["default"](_useState11, 2),
    bool = _useState12[0],
    setBool = _useState12[1];
  var toggle = React.useCallback(function () {
    return setBool(!bool);
  }, [bool]);
  var on = React.useCallback(function () {
    return setBool(true);
  }, []);
  var off = React.useCallback(function () {
    return setBool(false);
  }, []);
  return [bool, {
    toggle: toggle,
    on: on,
    off: off
  }];
};

var _excluded$c = ["children", "logo", "whiteLogo", "redirectTo", "isSecondaryCalendar", "setSecondaryCalendar", "onEconomicDialogOpen"];
function ownKeys$k(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$k(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$k(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$k(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var APP_BAR_CONTRIBUTION_KEY = "core.AppBar";
var MAIN_MENU_CONTRIBUTION_KEY = "core.MainMenu";
var ECONOMIC_UNIT_BUTTON_CONTRIBUTION_KEY = "policyholder.EconomicUnitChangeButton";
var useStyles$5 = styles$w.makeStyles(function (theme) {
  return _defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"]({
    root: {
      display: "flex"
    },
    grow: {
      flexGrow: 1
    },
    logo: {
      verticalAlign: "middle",
      margin: theme.typography.title.fontSize / 2,
      maxHeight: theme.typography.title.fontSize * 2
    },
    appBar: {
      paddingRight: theme.jrnlDrawer.close.width,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarDrawer: {
      margin: theme.spacing(-1, 0, -1, 0),
      paddingRight: theme.jrnlDrawer.close.width,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      backgroundColor: theme.palette.secondary.second,
      color: theme.palette.text.primary
    },
    toolbarDrawerLogout: {
      color: theme.palette.text.primary,
      button: {
        margin: theme.spacing(2),
        color: theme.palette.text.primary
      }
    },
    appBarShift: {
      width: "calc(100% - ".concat(theme.menu.drawer.width, ")"),
      marginLeft: theme.menu.drawer.width,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    menuButton: {
      margin: theme.spacing(0, 1, 0, 1),
      padding: 0
    },
    autoHideMenuButton: _defineProperty__default["default"]({}, theme.breakpoints.up("md"), {
      display: "none"
    }),
    toolbar: _objectSpread$k(_objectSpread$k({}, theme.mixins.toolbar), {}, {
      marginTop: theme.spacing(2)
    }),
    drawer: _defineProperty__default["default"](_defineProperty__default["default"]({}, theme.breakpoints.up("sm"), {
      width: theme.menu.drawer.width,
      flexShrink: 0
    }), "backgroundColor", theme.menu.drawer.backgroundColor),
    drawerHeader: _objectSpread$k(_objectSpread$k({}, theme.mixins.toolbar), {}, {
      margin: theme.spacing(1, 0, 1, 0),
      backgroundColor: theme.menu.drawer.backgroundColor
    }),
    drawerPaper: {
      width: theme.menu.drawer.width,
      backgroundColor: theme.menu.drawer.backgroundColor
    },
    content: {
      flexGrow: 1,
      paddingRight: theme.jrnlDrawer.close.width - theme.spacing(1),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: theme.menu.drawer.width
    },
    appName: {
      color: theme.palette.secondary.main,
      textTransform: "none",
      fontSize: theme.typography.title.fontSize
    },
    appVersionsBox: {
      padding: 0,
      margin: 0,
      minWidth: theme.typography.title.fontSize / 2
    },
    appVersions: {
      color: theme.palette.secondary.main,
      fontSize: theme.typography.title.fontSize / 2,
      verticalAlign: "text-bottom",
      marginRight: theme.spacing(2)
    },
    search: _defineProperty__default["default"]({
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: styles$w.alpha(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: styles$w.alpha(theme.palette.common.white, 0.25)
      },
      marginLeft: 0,
      width: "100%"
    }, theme.breakpoints.up("sm"), {
      marginLeft: theme.spacing(1),
      width: "auto"
    }),
    searchIcon: {
      width: theme.spacing(9),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    inputRoot: {
      color: "inherit",
      width: "100%"
    },
    inputInput: _defineProperty__default["default"]({
      padding: theme.spacing(1, 1, 1, 10),
      transition: theme.transitions.create("width"),
      width: "100%"
    }, theme.breakpoints.up("sm"), {
      width: 120,
      "&:focus": {
        width: 200
      }
    })
  }, "drawer", _objectSpread$k(_objectSpread$k({}, theme.mixins.toolbar), {}, {
    width: theme.menu.drawer.width,
    flexShrink: 0
  })), "drawerPaper", {
    width: theme.menu.drawer.width,
    backgroundColor: theme.menu.drawer.backgroundColor
  }), "drawerContainer", {
    overflow: 'auto'
  }), "contentShiftLeftSideMenu", {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: theme.menu.drawer.width,
    marginRight: theme.jrnlDrawer.close.width
  });
});
var RequireAuth = function RequireAuth(props) {
  var _cfg$openimisFeCore;
  var children = props.children,
    logo = props.logo,
    whiteLogo = props.whiteLogo,
    redirectTo = props.redirectTo,
    isSecondaryCalendar = props.isSecondaryCalendar,
    setSecondaryCalendar = props.setSecondaryCalendar,
    onEconomicDialogOpen = props.onEconomicDialogOpen,
    others = _objectWithoutProperties__default["default"](props, _excluded$c);
  var _useBoolean = useBoolean(),
    _useBoolean2 = _slicedToArray__default["default"](_useBoolean, 2),
    isOpen = _useBoolean2[0],
    setOpen = _useBoolean2[1];
  var _useBoolean3 = useBoolean(),
    _useBoolean4 = _slicedToArray__default["default"](_useBoolean3, 2),
    isDrawerOpen = _useBoolean4[0],
    setDrawerOpen = _useBoolean4[1];
  var theme = styles$w.useTheme();
  var classes = useStyles$5();
  var history = reactRouter.useHistory();
  var modulesManager = useModulesManager();
  var auth = useAuthentication();
  var cfg = children.props.modulesManager.cfg;
  var calendarSwitch = modulesManager.getConf("fe-core", "allowSecondCalendar", false);
  var isWorker = modulesManager.getConf("fe-core", "isWorker", DEFAULT.IS_WORKER);
  var isAppBarMenu = React.useMemo(function () {
    return theme.menu.variant.toUpperCase() === "APPBAR";
  }, [theme.menu.variant]);
  if (!auth.isAuthenticated) {
    return /*#__PURE__*/React__default["default"].createElement(reactRouterDom.Redirect, {
      to: redirectTo
    });
  }
  if (((_cfg$openimisFeCore = cfg['openimis-fe-core_js']) === null || _cfg$openimisFeCore === void 0 ? void 0 : _cfg$openimisFeCore.menuLeft) === true) {
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(core.AppBar, {
      position: "fixed",
      className: classes.appBarDrawer
    }, /*#__PURE__*/React__default["default"].createElement(core.Toolbar, {
      className: classes.toolbarDrawer
    }, /*#__PURE__*/React__default["default"].createElement(Contributions, _extends__default["default"]({}, others, {
      contributionKey: APP_BAR_CONTRIBUTION_KEY
    }), /*#__PURE__*/React__default["default"].createElement("div", {
      className: classes.grow
    })), /*#__PURE__*/React__default["default"].createElement(LogoutButton, {
      className: classes.toolbarDrawerLogout
    }), /*#__PURE__*/React__default["default"].createElement(Help$1, null))), /*#__PURE__*/React__default["default"].createElement(core.Drawer, {
      className: classes.drawer,
      variant: "permanent",
      classes: {
        paper: classes.drawerPaper
      },
      anchor: "left"
    }, /*#__PURE__*/React__default["default"].createElement(core.Button, {
      className: classes.appName,
      onClick: function onClick(e) {
        return window.location.href = "/front";
      }
    }, isAppBarMenu && /*#__PURE__*/React__default["default"].createElement(core.Hidden, {
      smDown: true,
      implementation: "css"
    }, /*#__PURE__*/React__default["default"].createElement("img", {
      className: classes.logo,
      src: isWorker && !!whiteLogo ? whiteLogo : logo,
      alt: "Logo of openIMIS"
    })), /*#__PURE__*/React__default["default"].createElement(FormattedMessage$1, {
      module: "core",
      id: "appName",
      defaultMessage: /*#__PURE__*/React__default["default"].createElement(FormattedMessage$1, {
        id: "root.appName"
      })
    }), /*#__PURE__*/React__default["default"].createElement(core.Hidden, {
      smDown: true,
      implementation: "css"
    }, /*#__PURE__*/React__default["default"].createElement(core.Tooltip, {
      title: modulesManager.getModulesVersions().join(", ")
    }, /*#__PURE__*/React__default["default"].createElement(core.Typography, {
      variant: "caption",
      className: classes.appVersions
    }, modulesManager.getOpenIMISVersion())))), /*#__PURE__*/React__default["default"].createElement("div", {
      className: classes.drawerContainer
    }), /*#__PURE__*/React__default["default"].createElement(Contributions, _extends__default["default"]({}, others, {
      contributionKey: MAIN_MENU_CONTRIBUTION_KEY,
      menuVariant: "Drawer"
    }), /*#__PURE__*/React__default["default"].createElement(core.Divider, null)), /*#__PURE__*/React__default["default"].createElement("div", null)), /*#__PURE__*/React__default["default"].createElement(JournalDrawer$1, {
      open: isDrawerOpen,
      handleDrawer: setDrawerOpen.toggle
    }), /*#__PURE__*/React__default["default"].createElement("main", {
      className: classes.contentShiftLeftSideMenu
    }, children));
  }
  var _useTranslations = useTranslations(module, modulesManager),
    formatMessage = _useTranslations.formatMessage;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(core.AppBar, {
    position: "fixed",
    className: clsx__default["default"](classes.appBar, _defineProperty__default["default"]({}, classes.appBarShift, isOpen && theme.breakpoints.up("md")))
  }, /*#__PURE__*/React__default["default"].createElement(core.Toolbar, null, /*#__PURE__*/React__default["default"].createElement(core.IconButton, {
    color: "inherit",
    onClick: setOpen.toggle,
    className: clsx__default["default"](classes.menuButton, isAppBarMenu && classes.autoHideMenuButton, isOpen && classes.hide)
  }, /*#__PURE__*/React__default["default"].createElement(MenuIcon__default["default"], null)), /*#__PURE__*/React__default["default"].createElement(core.Button, {
    className: classes.appName,
    onClick: function onClick(e) {
      return history.push("/");
    }
  }, isAppBarMenu && /*#__PURE__*/React__default["default"].createElement(core.Hidden, {
    smDown: true,
    implementation: "css"
  }, /*#__PURE__*/React__default["default"].createElement("img", {
    className: classes.logo,
    src: isWorker && !!whiteLogo ? whiteLogo : logo,
    alt: "Logo of openIMIS"
  })), !isWorker && /*#__PURE__*/React__default["default"].createElement(FormattedMessage$1, {
    module: "core",
    id: "appName",
    defaultMessage: /*#__PURE__*/React__default["default"].createElement(FormattedMessage$1, {
      id: "root.appName"
    })
  })), /*#__PURE__*/React__default["default"].createElement(core.Hidden, {
    smDown: true,
    implementation: "css"
  }, /*#__PURE__*/React__default["default"].createElement(core.Tooltip, {
    title: modulesManager.getModulesVersions().join(", ")
  }, /*#__PURE__*/React__default["default"].createElement(core.Typography, {
    variant: "caption",
    className: classes.appVersions
  }, modulesManager.getOpenIMISVersion()))), isAppBarMenu && /*#__PURE__*/React__default["default"].createElement(core.Hidden, {
    smDown: true,
    implementation: "css"
  }, /*#__PURE__*/React__default["default"].createElement(Contributions, _extends__default["default"]({}, others, {
    menuVariant: "AppBar",
    contributionKey: MAIN_MENU_CONTRIBUTION_KEY
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    onClick: setOpen.off
  }))), isWorker ? /*#__PURE__*/React__default["default"].createElement("div", {
    className: classes.grow
  }) : /*#__PURE__*/React__default["default"].createElement(Contributions, _extends__default["default"]({}, others, {
    contributionKey: APP_BAR_CONTRIBUTION_KEY
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: classes.grow
  })), !!calendarSwitch && /*#__PURE__*/React__default["default"].createElement(FormControlLabel__default["default"], {
    control: /*#__PURE__*/React__default["default"].createElement(core.Switch, {
      color: "secondary",
      checked: isSecondaryCalendar,
      onChange: setSecondaryCalendar.toggle
    }),
    label: formatMessage("core.calendarSwitcher"),
    labelPlacement: "start"
  }), /*#__PURE__*/React__default["default"].createElement(Contributions, {
    contributionKey: ECONOMIC_UNIT_BUTTON_CONTRIBUTION_KEY,
    onEconomicDialogOpen: onEconomicDialogOpen
  }), /*#__PURE__*/React__default["default"].createElement(LogoutButton, null), /*#__PURE__*/React__default["default"].createElement(Help$1, null))), isOpen && /*#__PURE__*/React__default["default"].createElement(core.ClickAwayListener, {
    onClickAway: setOpen.off
  }, /*#__PURE__*/React__default["default"].createElement("nav", {
    className: classes.drawer
  }, /*#__PURE__*/React__default["default"].createElement(core.Drawer, {
    className: classes.drawer,
    variant: "persistent",
    anchor: "left",
    open: isOpen,
    classes: {
      paper: classes.drawerPaper
    }
  }, /*#__PURE__*/React__default["default"].createElement(Contributions, _extends__default["default"]({}, others, {
    contributionKey: MAIN_MENU_CONTRIBUTION_KEY,
    menuVariant: "Drawer"
  }), /*#__PURE__*/React__default["default"].createElement(core.Divider, null))))), /*#__PURE__*/React__default["default"].createElement(JournalDrawer$1, {
    open: isDrawerOpen,
    handleDrawer: setDrawerOpen.toggle
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: classes.toolbar
  }), /*#__PURE__*/React__default["default"].createElement("main", {
    className: clsx__default["default"](classes.content, _defineProperty__default["default"]({}, classes.jrnlContentShift, isDrawerOpen))
  }, children));
};
var RequireAuth$1 = withWidth__default["default"]()(RequireAuth);

var styles$t = function styles(theme) {
  return {
    fatal: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      borderStyle: "solid",
      borderWidth: "thin",
      borderColor: theme.palette.error.secondary,
      padding: theme.spacing(2)
    },
    fatalHeader: {
      color: theme.palette.error.main
    },
    fatalDetail: {
      color: theme.palette.error.main
    }
  };
};
function FatalError(props) {
  var classes = props.classes,
    error = props.error;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: classes.fatal
  }, /*#__PURE__*/React__default["default"].createElement(core.Typography, {
    variant: "h6",
    className: classes.fatalHeader
  }, error.code, ": ", error.message), !!error.detail && /*#__PURE__*/React__default["default"].createElement(React.Fragment, null, /*#__PURE__*/React__default["default"].createElement(core.Divider, null), /*#__PURE__*/React__default["default"].createElement(core.Typography, {
    variant: "body1",
    className: classes.fatalCode
  }, error.detail)));
}
var FatalError$1 = withStyles__default["default"](styles$t)(FatalError);

function _callSuper$y(t, o, e) { return o = _getPrototypeOf__default["default"](o), _possibleConstructorReturn__default["default"](t, _isNativeReflectConstruct$y() ? Reflect.construct(o, e || [], _getPrototypeOf__default["default"](t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct$y() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$y = function _isNativeReflectConstruct() { return !!t; })(); }
var AlertDialog = /*#__PURE__*/function (_Component) {
  function AlertDialog() {
    var _this;
    _classCallCheck__default["default"](this, AlertDialog);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper$y(this, AlertDialog, [].concat(args));
    _defineProperty__default["default"](_this, "state", {
      expanded: false
    });
    _defineProperty__default["default"](_this, "toggleOpen", function () {
      _this.setState({
        expanded: !_this.state.expanded
      });
    });
    return _this;
  }
  _inherits__default["default"](AlertDialog, _Component);
  return _createClass__default["default"](AlertDialog, [{
    key: "render",
    value: function render() {
      var _alert$title, _alert$message;
      var _this$props = this.props,
        intl = _this$props.intl,
        alert = _this$props.alert,
        clearAlert = _this$props.clearAlert;
      return /*#__PURE__*/React__default["default"].createElement(core.Dialog, {
        open: Boolean(alert),
        onClose: function onClose() {
          return clearAlert();
        }
      }, alert && /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(core.DialogTitle, null, (_alert$title = alert.title) !== null && _alert$title !== void 0 ? _alert$title : formatMessage(intl, "core", "FatalError.title")), /*#__PURE__*/React__default["default"].createElement(core.DialogContent, null, /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        container: true
      }, /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        item: true,
        onClick: this.toggleOpen
      }, alert.detail && this.state.expanded && /*#__PURE__*/React__default["default"].createElement(ArrowDropDownIcon__default["default"], null), alert.detail && !this.state.expanded && /*#__PURE__*/React__default["default"].createElement(ArrowRightIcon__default["default"], null)), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        item: true
      }, /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        container: true,
        onClick: this.toggleOpen
      }, ensureArray((_alert$message = alert.message) !== null && _alert$message !== void 0 ? _alert$message : formatMessage(intl, "core", "FatalError.message")).map(function (message, i) {
        return /*#__PURE__*/React__default["default"].createElement(core.Grid, {
          key: "message-".concat(i),
          item: true
        }, /*#__PURE__*/React__default["default"].createElement(core.DialogContentText, null, message));
      })), alert.detail && /*#__PURE__*/React__default["default"].createElement(core.Typography, {
        style: {
          visibility: this.state.expanded ? "visible" : "hidden"
        }
      }, alert.detail))))), /*#__PURE__*/React__default["default"].createElement(core.DialogActions, null, /*#__PURE__*/React__default["default"].createElement(core.Button, {
        onClick: function onClick() {
          return clearAlert();
        },
        color: "primary",
        autoFocus: true
      }, formatMessage(intl, "core", "close"))));
    }
  }]);
}(React.Component);
var mapDispatchToProps$8 = function mapDispatchToProps(dispatch) {
  return redux.bindActionCreators({
    clearAlert: clearAlert
  }, dispatch);
};
var AlertDialog$1 = reactIntl.injectIntl(reactRedux.connect(function (state) {
  return {
    alert: state.core.alert
  };
}, mapDispatchToProps$8)(AlertDialog));

var styles$s = function styles(theme) {
  return {
    primaryButton: theme.dialog.primaryButton,
    secondaryButton: theme.dialog.secondaryButton
  };
};
var ConfirmDialog = function ConfirmDialog(props) {
  var intl = props.intl,
    classes = props.classes,
    confirm = props.confirm,
    onConfirm = props.onConfirm;
  return /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement(core.Dialog, {
    open: !!confirm,
    onClose: function onClose() {
      return onConfirm(false);
    }
  }, (confirm === null || confirm === void 0 ? void 0 : confirm.title) && /*#__PURE__*/React__default["default"].createElement(core.DialogTitle, null, confirm.title), (confirm === null || confirm === void 0 ? void 0 : confirm.message) && /*#__PURE__*/React__default["default"].createElement(core.DialogContent, null, /*#__PURE__*/React__default["default"].createElement(core.DialogContentText, null, confirm.message)), /*#__PURE__*/React__default["default"].createElement(core.DialogActions, null, /*#__PURE__*/React__default["default"].createElement(core.Button, {
    onClick: function onClick() {
      return onConfirm(true);
    },
    autoFocus: true,
    className: classes.primaryButton
  }, formatMessage(intl, "core", "ok")), /*#__PURE__*/React__default["default"].createElement(core.Button, {
    onClick: function onClick() {
      return onConfirm(false);
    },
    className: classes.secondaryButton
  }, formatMessage(intl, "core", "cancel")))));
};
var ConfirmDialog$1 = styles$w.withTheme(styles$w.withStyles(styles$s)(reactIntl.injectIntl(ConfirmDialog)));

var _excluded$b = ["intl", "classes", "module", "label", "readOnly", "error", "startAdornment", "endAdornment", "inputProps", "formatInput", "helperText"];
function _callSuper$x(t, o, e) { return o = _getPrototypeOf__default["default"](o), _possibleConstructorReturn__default["default"](t, _isNativeReflectConstruct$x() ? Reflect.construct(o, e || [], _getPrototypeOf__default["default"](t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct$x() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$x = function _isNativeReflectConstruct() { return !!t; })(); }
var styles$r = function styles(theme) {
  return {
    label: {
      color: theme.palette.primary.main
    },
    // NOTE: This is used to hide the increment/decrement arrows from the number input
    numberInput: {
      '& input[type=number]': {
        '-moz-appearance': 'textfield'
      },
      '& input[type=number]::-webkit-outer-spin-button': {
        '-webkit-appearance': 'none',
        margin: 0
      },
      '& input[type=number]::-webkit-inner-spin-button': {
        '-webkit-appearance': 'none',
        margin: 0
      }
    }
  };
};
var TextInput = /*#__PURE__*/function (_Component) {
  function TextInput() {
    var _this;
    _classCallCheck__default["default"](this, TextInput);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper$x(this, TextInput, [].concat(args));
    _defineProperty__default["default"](_this, "state", {
      value: ""
    });
    _defineProperty__default["default"](_this, "_onChange", function (e) {
      var value = e.target.value;
      if (_this.props.formatInput) {
        value = _this.props.formatInput(value);
      }
      if (value !== _this.state.value) {
        _this.setState({
          value: value
        }, function () {
          return _this.props.onChange && _this.props.onChange(_this.state.value);
        });
      }
    });
    return _this;
  }
  _inherits__default["default"](TextInput, _Component);
  return _createClass__default["default"](TextInput, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var value = this.props.value;
      if (!!this.props.formatInput) {
        value = this.props.formatInput(value);
      }
      if (value !== this.state.value) {
        this.setState({
          value: value
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (prevProps.reset !== this.props.reset || prevProps.value !== this.props.value) {
        var value = this.props.value;
        if (!!this.props.formatInput) {
          value = this.props.formatInput(value);
        }
        if (value !== this.state.value) {
          this.setState({
            value: value
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        intl = _this$props.intl,
        classes = _this$props.classes,
        module = _this$props.module,
        label = _this$props.label,
        _this$props$readOnly = _this$props.readOnly,
        readOnly = _this$props$readOnly === void 0 ? false : _this$props$readOnly,
        _this$props$error = _this$props.error,
        error = _this$props$error === void 0 ? null : _this$props$error,
        _this$props$startAdor = _this$props.startAdornment,
        startAdornment = _this$props$startAdor === void 0 ? null : _this$props$startAdor,
        _this$props$endAdornm = _this$props.endAdornment,
        endAdornment = _this$props$endAdornm === void 0 ? null : _this$props$endAdornm,
        _this$props$inputProp = _this$props.inputProps,
        inputProps = _this$props$inputProp === void 0 ? {} : _this$props$inputProp;
        _this$props.formatInput;
        var helperText = _this$props.helperText,
        others = _objectWithoutProperties__default["default"](_this$props, _excluded$b);
      return /*#__PURE__*/React__default["default"].createElement(core.TextField, _extends__default["default"]({}, others, {
        className: classes.numberInput,
        fullWidth: true,
        disabled: readOnly,
        label: !!label && formatMessage(intl, module, label),
        InputLabelProps: {
          className: classes.label
        },
        InputProps: {
          inputProps: inputProps,
          startAdornment: startAdornment,
          endAdornment: endAdornment
        },
        onChange: this._onChange,
        value: this.state.value,
        error: Boolean(error),
        helperText: error !== null && error !== void 0 ? error : helperText
      }));
    }
  }]);
}(React.Component);
var TextInput$1 = reactIntl.injectIntl(styles$w.withTheme(styles$w.withStyles(styles$r)(TextInput)));

var _g;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var SvgMPassLogoColor = function SvgMPassLogoColor(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 238,
    height: 48
  }, props), _g || (_g = /*#__PURE__*/React__namespace.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#0041DC",
    d: "M62.384 5.496c-6.98-.15-12.247 12.034-14.042 12.034-.284 0-.458-1.337-.62-2.363-.673-4.247-6.686-5.141-5.965-.978.746 4.305 1.957 8.599 6.585 8.599 6.113 0 9.705-11.567 14.042-11.567z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#5BCA13",
    d: "M48.02 16.423C47.075 13.861 47.518 0 39.22 0c-4.653 4.65-2.003 9.64-1.374 7.924.476-1.297.957-2.888 1.374-2.888 1.502 0 1.807 4.987 2.53 9.151.75 4.306 1.966 8.6 6.613 8.6 2.484 0 4.553-1.894 6.425-4.15-4.63 3.348-5.679.736-6.768-2.214"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#0041DC",
    d: "M45.414 4.598C44.237 1.988 42.361 0 39.241 0c-9.336 0-8.839 21.854-9.897 21.854-.065 0-.115-1.975-.269-3.049-.464-3.224-7.532 10.448.27 10.448 4.861 0 5.868-7.639 6.854-14.103.637-4.185 1.7-7.712 2.515-8.934 1.69-2.538 4.56-5.32 6.7-1.618"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#5BCA13",
    d: "M29.29 20.319c-.248-1.508-.786-11.268-7.758-11.268-4.498 0-6.567 3.721-8.309 8.735C9.62 28.158 6.593 43.643 2.161 42.035L0 47.415Q1.608 48 2.861 48c7.007 0 10.372-10.244 13.113-19.4 2.162-7.222 4.08-14.564 5.325-14.564 3.403 0 .233 15.133 8.052 15.133 3.234 0 4.766-3.364 5.72-7.515-1.59 3.364-4.832 4.411-5.78-1.335"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#0041DC",
    d: "M27.798 13.911c-1.052-2.548-2.917-4.86-6.305-4.86-4.49 0-6.555 3.721-8.294 8.735C9.603 28.158 6.581 43.643 2.157 42.035L0 47.415Q1.605 48 2.856 48c6.994 0 10.353-10.244 13.089-19.4 1.842-6.167 3.507-11.877 4.729-13.414 1.012-1.275 4.207-5.589 7.124-1.275"
  }), /*#__PURE__*/React__namespace.createElement("g", {
    fill: "#141414",
    fillRule: "nonzero"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M102.434 6.779h-3.16l-9.4 21.003-9.648-21.003h-3.161v29.612h3.16v-22.5l8.235 17.842h2.704l8.11-17.842v22.5h3.16zM111.002 6.779v29.612h3.16V24.205h7.86c5.366 0 9.15-3.452 9.15-8.734s-3.784-8.692-9.15-8.692zm10.771 2.828c3.702 0 6.239 1.955 6.239 5.864 0 3.91-2.537 5.906-6.239 5.906h-7.61V9.607zM144.897 6.779h-2.662L131.34 36.391h3.369l2.37-6.696h12.934l2.37 6.696h3.37zm-1.331 4.492 5.49 15.679h-11.021zM168.312 6.53c-5.864 0-9.483 3.285-9.483 8.317 0 2.413.79 4.242 2.288 5.573 1.33 1.165 3.077 1.872 5.406 2.246l3.452.5c2.121.332 2.953.623 3.868 1.455.998.873 1.456 2.12 1.456 3.701 0 3.494-2.662 5.49-7.029 5.49-3.327 0-5.615-.749-8.068-3.202l-2.121 2.12c2.745 2.787 5.697 3.91 10.106 3.91 6.197 0 10.23-3.202 10.23-8.4 0-2.455-.914-4.451-2.495-5.823-1.33-1.206-2.62-1.706-5.365-2.121l-3.451-.541c-1.54-.25-2.953-.749-3.868-1.539s-1.331-1.996-1.331-3.452c0-3.327 2.287-5.531 6.28-5.531 3.077 0 5.115.873 6.904 2.578l2.038-2.038c-2.537-2.245-5.033-3.243-8.817-3.243M192.558 6.53c-5.864 0-9.482 3.285-9.482 8.317 0 2.413.79 4.242 2.287 5.573 1.331 1.165 3.078 1.872 5.407 2.246l3.452.5c2.12.332 2.953.623 3.867 1.455.999.873 1.456 2.12 1.456 3.701 0 3.494-2.662 5.49-7.028 5.49-3.328 0-5.615-.749-8.069-3.202l-2.12 2.12c2.744 2.787 5.697 3.91 10.105 3.91 6.197 0 10.231-3.202 10.231-8.4 0-2.455-.915-4.451-2.495-5.823-1.33-1.206-2.62-1.706-5.365-2.121l-3.452-.541c-1.539-.25-2.953-.749-3.868-1.539s-1.33-1.996-1.33-3.452c0-3.327 2.287-5.531 6.28-5.531 3.077 0 5.115.873 6.903 2.578l2.038-2.038c-2.537-2.245-5.032-3.243-8.817-3.243"
  })), /*#__PURE__*/React__namespace.createElement("g", {
    fill: "#5B5757",
    fillRule: "nonzero"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M214.684 15.929h-2.995V36.39h2.995zm.208-9.192h-3.37v3.37h3.37zM237.391 6.779h-2.994v11.562c-1.705-2.121-3.535-2.662-5.781-2.662-2.121 0-3.91.707-4.99 1.788-2.039 2.08-2.496 5.407-2.496 8.693s.457 6.654 2.495 8.692c1.082 1.081 2.87 1.788 4.991 1.788 2.287 0 4.076-.54 5.78-2.662v2.413h2.995zm-8.151 11.562c4.491 0 5.157 3.826 5.157 7.819s-.666 7.818-5.157 7.818c-4.45 0-5.116-3.826-5.116-7.818 0-3.993.666-7.82 5.116-7.82"
  })))));
};

function ownKeys$j(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$j(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$j(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$j(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var useStyles$4 = styles$x.makeStyles(function (theme) {
  return {
    container: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      margin: "auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    paper: theme.paper.paper,
    logo: {
      maxHeight: 100,
      width: 100
    }
  };
});
var LOGIN_PAGE_CONTRIBUTION_KEY = "core.LoginPage";
var LoginPage = function LoginPage(_ref) {
  var logo = _ref.logo;
  var classes = useStyles$4();
  var history = reactRouter.useHistory();
  var modulesManager = useModulesManager();
  var _useTranslations = useTranslations("core.LoginPage", modulesManager),
    formatMessage = _useTranslations.formatMessage;
  var _useState = React.useState({}),
    _useState2 = _slicedToArray__default["default"](_useState, 2),
    credentials = _useState2[0],
    setCredentials = _useState2[1];
  var _useState3 = React.useState({
      loginStatus: "",
      message: null
    }),
    _useState4 = _slicedToArray__default["default"](_useState3, 2),
    serverResponse = _useState4[0],
    setServerResponse = _useState4[1];
  var _useState5 = React.useState(false),
    _useState6 = _slicedToArray__default["default"](_useState5, 2),
    hasMPassError = _useState6[0];
    _useState6[1];
  var auth = useAuthentication();
  var _useState7 = React.useState(false),
    _useState8 = _slicedToArray__default["default"](_useState7, 2),
    isAuthenticating = _useState8[0],
    setAuthenticating = _useState8[1];
  var showMPassProvider = modulesManager.getConf("fe-core", "LoginPage.showMPassProvider", false);
  var isWorker = modulesManager.getConf("fe-core", "isWorker", DEFAULT.IS_WORKER);
  React.useEffect(function () {
    if (auth.isAuthenticated) {
      history.push("/");
    }
  }, []);
  var handleLoginError = function handleLoginError(errorMessage) {
    setServerResponse({
      loginStatus: "CORE_AUTH_ERR",
      message: errorMessage
    });
    setAuthenticating(false);
  };
  var onSubmit = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee(e) {
      var _response$payload, response, loginStatus, message;
      return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            setAuthenticating(true);
            _context.prev = 2;
            _context.next = 5;
            return auth.login(credentials);
          case 5:
            response = _context.sent;
            if (!((_response$payload = response.payload) !== null && _response$payload !== void 0 && (_response$payload = _response$payload.errors) !== null && _response$payload !== void 0 && _response$payload.length)) {
              _context.next = 9;
              break;
            }
            handleLoginError(response.payload.errors[0].message);
            return _context.abrupt("return");
          case 9:
            loginStatus = response.loginStatus, message = response.message;
            setServerResponse({
              loginStatus: loginStatus,
              message: message
            });
            if (loginStatus === "CORE_AUTH_ERR") {
              setAuthenticating(false);
            } else {
              history.push("/");
            }
            _context.next = 17;
            break;
          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](2);
            setAuthenticating(false);
          case 17:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[2, 14]]);
    }));
    return function onSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  var redirectToForgotPassword = function redirectToForgotPassword(e) {
    e.preventDefault();
    history.push("/forgot_password");
  };
  var errorMessages = {
    INCORRECT_CREDENTIALS: formatMessage("core.LoginPage.authError"),
    HF_CONTRACT_INVALID: formatMessage("core.LoginPage.authErrorHealthFacilityContractInvalid"),
    GENERAL: formatMessage("core.LoginPage.authErrorGeneral")
  };
  var getErrorMessage = function getErrorMessage(messageKey) {
    return errorMessages[messageKey] || messageKey;
  };
  var redirectToMPassLogin = function redirectToMPassLogin(e) {
    e.preventDefault();
    var redirectToURL = new URL("".concat(window.location.origin).concat(baseApiUrl).concat(SAML_LOGIN_PATH));
    window.location.href = redirectToURL.href;
  };
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, isAuthenticating && /*#__PURE__*/React__default["default"].createElement(core.Box, {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0
  }, /*#__PURE__*/React__default["default"].createElement(core.LinearProgress, {
    className: "bootstrap"
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    className: classes.container
  }, /*#__PURE__*/React__default["default"].createElement(_Helmet__default["default"], {
    title: formatMessage("pageTitle")
  }), /*#__PURE__*/React__default["default"].createElement(core.Paper, {
    className: classes.paper,
    elevation: 2
  }, /*#__PURE__*/React__default["default"].createElement("form", {
    onSubmit: onSubmit
  }, /*#__PURE__*/React__default["default"].createElement(core.Box, {
    p: 6,
    width: 380
  }, /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    container: true,
    spacing: 2,
    direction: "column",
    alignItems: "stretch"
  }, /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true,
    container: true,
    direction: "row",
    alignItems: "center"
  }, /*#__PURE__*/React__default["default"].createElement("img", {
    className: classes.logo,
    src: logo
  }), !isWorker && /*#__PURE__*/React__default["default"].createElement(core.Box, {
    pl: 2,
    fontWeight: "fontWeightMedium",
    fontSize: "h4.fontSize"
  }, formatMessage("appName"))), showMPassProvider ? /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true
  }, /*#__PURE__*/React__default["default"].createElement(core.Tooltip, {
    title: formatMessage("loginWithMPass")
  }, /*#__PURE__*/React__default["default"].createElement(core.Button, {
    fullWidth: true,
    type: "submit",
    onClick: redirectToMPassLogin
  }, /*#__PURE__*/React__default["default"].createElement(SvgMPassLogoColor, null)))), hasMPassError && /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true
  }, /*#__PURE__*/React__default["default"].createElement(core.Box, {
    color: "error.main"
  }, formatMessage("authMPassError")))) : /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true
  }, /*#__PURE__*/React__default["default"].createElement(TextInput$1, {
    required: true,
    readOnly: isAuthenticating,
    label: formatMessage("username.label"),
    fullWidth: true,
    defaultValue: credentials.username,
    onChange: function onChange(username) {
      return setCredentials(_objectSpread$j(_objectSpread$j({}, credentials), {}, {
        username: username
      }));
    }
  })), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true
  }, /*#__PURE__*/React__default["default"].createElement(TextInput$1, {
    required: true,
    readOnly: isAuthenticating,
    type: "password",
    label: formatMessage("password.label"),
    fullWidth: true,
    onChange: function onChange(password) {
      return setCredentials(_objectSpread$j(_objectSpread$j({}, credentials), {}, {
        password: password
      }));
    }
  })), (serverResponse === null || serverResponse === void 0 ? void 0 : serverResponse.message) && /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true
  }, /*#__PURE__*/React__default["default"].createElement(core.Box, {
    color: "error.main"
  }, getErrorMessage(serverResponse.message))), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true
  }, /*#__PURE__*/React__default["default"].createElement(core.Button, {
    fullWidth: true,
    type: "submit",
    disabled: isAuthenticating || !(credentials.username && credentials.password),
    color: "primary",
    variant: "contained"
  }, formatMessage("loginBtn"))), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true
  }, /*#__PURE__*/React__default["default"].createElement(core.Button, {
    onClick: redirectToForgotPassword
  }, formatMessage("forgotPassword")), /*#__PURE__*/React__default["default"].createElement(Contributions, {
    contributionKey: LOGIN_PAGE_CONTRIBUTION_KEY
  })))))))));
};

var useStyles$3 = styles$x.makeStyles(function (theme) {
  return {
    container: {
      position: "absolute",
      top: "30%",
      left: 0,
      right: 0,
      margin: "auto",
      display: "flex",
      justifyContent: "center"
    },
    paper: theme.paper.paper,
    logo: {
      maxHeight: 100
    }
  };
});
var ForgotPasswordPage = function ForgotPasswordPage(props) {
  var classes = useStyles$3();
  var modulesManager = useModulesManager();
  var _useTranslations = useTranslations("core.ForgotPasswordPage", modulesManager),
    formatMessage = _useTranslations.formatMessage;
  var _useState = React.useState(),
    _useState2 = _slicedToArray__default["default"](_useState, 2),
    username = _useState2[0],
    setUsername = _useState2[1];
  var _useState3 = React.useState(false),
    _useState4 = _slicedToArray__default["default"](_useState3, 2),
    isDone = _useState4[0],
    setDone = _useState4[1];
  var _useGraphqlMutation = useGraphqlMutation("\n    mutation resetPassword($input: ResetPasswordMutationInput!) {\n      resetPassword(input: $input) {\n        clientMutationId\n        success\n        error\n      }\n    }\n  ", {
      wait: false
    }),
    isLoading = _useGraphqlMutation.isLoading,
    mutate = _useGraphqlMutation.mutate;
  var onSubmit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee(e) {
      return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            _context.next = 3;
            return mutate({
              username: username
            });
          case 3:
            _context.next = 5;
            return setDone(true);
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function onSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", {
    className: classes.container
  }, /*#__PURE__*/React__default["default"].createElement(_Helmet__default["default"], {
    title: formatMessage("pageTitle")
  }), /*#__PURE__*/React__default["default"].createElement(core.Paper, {
    className: classes.paper,
    elevation: 2
  }, /*#__PURE__*/React__default["default"].createElement("form", {
    onSubmit: onSubmit
  }, /*#__PURE__*/React__default["default"].createElement(core.Box, {
    p: 3,
    width: 500
  }, !isDone && /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    container: true,
    spacing: 2,
    direction: "column",
    alignItems: "stretch"
  }, /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true
  }, /*#__PURE__*/React__default["default"].createElement("h1", null, formatMessage("recoverTitle"))), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true
  }, /*#__PURE__*/React__default["default"].createElement(core.Typography, null, formatMessage("explanationMessage"))), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true
  }, /*#__PURE__*/React__default["default"].createElement(core.Typography, null, formatMessage("contactAdministrator"))), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true
  }, /*#__PURE__*/React__default["default"].createElement(TextInput$1, {
    required: true,
    readOnly: isLoading,
    label: formatMessage("username.label"),
    fullWidth: true,
    onChange: function onChange(username) {
      return setUsername(username);
    }
  })), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true
  }, /*#__PURE__*/React__default["default"].createElement(core.Button, {
    fullWidth: true,
    type: "submit",
    disabled: !username || isLoading,
    color: "primary",
    variant: "contained"
  }, formatMessage("submitBtn")))), isDone && /*#__PURE__*/React__default["default"].createElement("h1", null, formatMessage("done")))))));
};

function ownKeys$i(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$i(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$i(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$i(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var useStyles$2 = styles$x.makeStyles(function (theme) {
  return {
    container: {
      position: "absolute",
      top: "30%",
      left: 0,
      right: 0,
      margin: "auto",
      display: "flex",
      justifyContent: "center"
    },
    paper: theme.paper.paper,
    logo: {
      maxHeight: 100
    }
  };
});
var SetPasswordPage = function SetPasswordPage() {
  var classes = useStyles$2();
  var history = reactRouter.useHistory();
  var modulesManager = useModulesManager();
  var _useTranslations = useTranslations("core.SetPasswordPage", modulesManager),
    formatMessage = _useTranslations.formatMessage;
  var _useState = React.useState({}),
    _useState2 = _slicedToArray__default["default"](_useState, 2),
    credentials = _useState2[0],
    setCredentials = _useState2[1];
  var _useState3 = React.useState(),
    _useState4 = _slicedToArray__default["default"](_useState3, 2),
    error = _useState4[0],
    setError = _useState4[1];
  var _useGraphqlMutation = useGraphqlMutation("\n      mutation setPassword ($input: SetPasswordMutationInput!) {\n        setPassword(input: $input) {\n          clientMutationId\n          success\n          error\n        }\n      }\n    ", {
      wait: false
    }),
    mutate = _useGraphqlMutation.mutate;
  React.useEffect(function () {
    var search = new URLSearchParams(location.search);
    setCredentials({
      token: search.get("token")
    });
  }, []);
  var onSubmit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee(e) {
      var result;
      return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            if (!isValid) {
              _context.next = 6;
              break;
            }
            _context.next = 4;
            return mutate({
              username: credentials.username,
              token: credentials.token,
              newPassword: credentials.password
            });
          case 4:
            result = _context.sent;
            if (result !== null && result !== void 0 && result.setPassword.success) {
              history.push("/");
            } else {
              setError((result === null || result === void 0 ? void 0 : result.setPassword.error) || formatMessage("error"));
            }
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function onSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var isValid = React.useMemo(function () {
    return credentials.confirmPassword && credentials.password && credentials.password === credentials.confirmPassword && credentials.username && credentials.token;
  }, [credentials]);
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", {
    className: classes.container
  }, /*#__PURE__*/React__default["default"].createElement(_Helmet__default["default"], {
    title: formatMessage("pageTitle")
  }), /*#__PURE__*/React__default["default"].createElement(core.Paper, {
    className: classes.paper,
    elevation: 2
  }, /*#__PURE__*/React__default["default"].createElement("form", {
    onSubmit: onSubmit
  }, /*#__PURE__*/React__default["default"].createElement(core.Box, {
    p: 6,
    width: 450
  }, /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    container: true,
    spacing: 2,
    direction: "column",
    alignItems: "stretch"
  }, /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true
  }, /*#__PURE__*/React__default["default"].createElement(TextInput$1, {
    required: true,
    type: "text",
    label: formatMessage("username.label"),
    fullWidth: true,
    onChange: function onChange(username) {
      return setCredentials(_objectSpread$i(_objectSpread$i({}, credentials), {}, {
        username: username
      }));
    }
  })), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true
  }, /*#__PURE__*/React__default["default"].createElement(TextInput$1, {
    required: true,
    type: "password",
    label: formatMessage("password.label"),
    fullWidth: true,
    onChange: function onChange(password) {
      return setCredentials(_objectSpread$i(_objectSpread$i({}, credentials), {}, {
        password: password
      }));
    }
  })), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true
  }, /*#__PURE__*/React__default["default"].createElement(TextInput$1, {
    required: true,
    type: "password",
    label: formatMessage("confirmPassword.label"),
    fullWidth: true,
    onChange: function onChange(confirmPassword) {
      return setCredentials(_objectSpread$i(_objectSpread$i({}, credentials), {}, {
        confirmPassword: confirmPassword
      }));
    }
  })), error && /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true
  }, /*#__PURE__*/React__default["default"].createElement(core.Box, {
    color: "error.main"
  }, error)), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true
  }, /*#__PURE__*/React__default["default"].createElement(core.Button, {
    fullWidth: true,
    type: "submit",
    disabled: !isValid,
    color: "primary",
    variant: "contained"
  }, formatMessage("submitBtn")))))))));
};

var useStyles$1 = styles$w.makeStyles(function (theme) {
  return {
    container: {
      textAlign: "center",
      height: "70vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    },
    logo: {
      verticalAlign: "middle",
      margin: theme.spacing(2),
      maxHeight: theme.spacing(16)
    },
    title: {
      margin: theme.spacing(2),
      textTransform: "uppercase",
      fontWeight: "bold"
    },
    description: {
      margin: theme.spacing(2),
      fontSize: "18px"
    },
    button: {
      marginTop: theme.spacing(2)
    }
  };
});
var ErrorPage = function ErrorPage(_ref) {
  var status = _ref.status,
    title = _ref.title,
    description = _ref.description,
    logo = _ref.logo,
    back = _ref.back;
  var history = reactRouter.useHistory();
  var classes = useStyles$1();
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: classes.container
  }, logo && /*#__PURE__*/React__default["default"].createElement("img", {
    className: classes.logo,
    src: logo,
    alt: "Logo of openIMIS"
  }), status && /*#__PURE__*/React__default["default"].createElement(core.Typography, {
    variant: "h1",
    className: classes.title
  }, status), /*#__PURE__*/React__default["default"].createElement(core.Typography, {
    variant: "h2",
    className: classes.title
  }, title), /*#__PURE__*/React__default["default"].createElement(core.Typography, {
    variant: "body1",
    className: classes.description
  }, description), back && /*#__PURE__*/React__default["default"].createElement(core.Button, {
    variant: "contained",
    color: "primary",
    size: "large",
    className: classes.button,
    startIcon: /*#__PURE__*/React__default["default"].createElement(ArrowBackIcon__default["default"], null),
    onClick: function onClick() {
      return history.push("/");
    }
  }, back));
};

var NotFoundPage = function NotFoundPage(props) {
  var _useTranslations = useTranslations(MODULE_NAME),
    formatMessage = _useTranslations.formatMessage;
  return /*#__PURE__*/React__default["default"].createElement(ErrorPage, _extends__default["default"]({
    status: 404,
    title: formatMessage("core.NotFoundPage.title"),
    description: formatMessage("core.NotFoundPage.description"),
    back: formatMessage("core.ErrorPage.back")
  }, props));
};

var ForbiddenPage = function ForbiddenPage(props) {
  var _useTranslations = useTranslations(MODULE_NAME),
    formatMessage = _useTranslations.formatMessage;
  return /*#__PURE__*/React__default["default"].createElement(ErrorPage, _extends__default["default"]({
    status: 401,
    title: formatMessage("core.ForbiddenPage.title"),
    description: formatMessage("core.ForbiddenPage.description"),
    back: formatMessage("core.ErrorPage.back")
  }, props));
};

var _excluded$a = ["userRights", "requiredRights", "children"];
var PermissionCheck = function PermissionCheck(_ref) {
  var userRights = _ref.userRights,
    requiredRights = _ref.requiredRights,
    children = _ref.children,
    props = _objectWithoutProperties__default["default"](_ref, _excluded$a);
  var hasAccess = function hasAccess() {
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
    return requiredRights.some(function (right) {
      return userRights === null || userRights === void 0 ? void 0 : userRights.includes(right);
    });
  };
  return hasAccess() ? children : /*#__PURE__*/React__default["default"].createElement(ForbiddenPage, props);
};

var _excluded$9 = ["modulesManager", "id", "pubRef"];
function _callSuper$w(t, o, e) { return o = _getPrototypeOf__default["default"](o), _possibleConstructorReturn__default["default"](t, _isNativeReflectConstruct$w() ? Reflect.construct(o, e || [], _getPrototypeOf__default["default"](t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct$w() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$w = function _isNativeReflectConstruct() { return !!t; })(); }
var PublishedComponent = /*#__PURE__*/function (_Component) {
  function PublishedComponent() {
    _classCallCheck__default["default"](this, PublishedComponent);
    return _callSuper$w(this, PublishedComponent, arguments);
  }
  _inherits__default["default"](PublishedComponent, _Component);
  return _createClass__default["default"](PublishedComponent, [{
    key: "render",
    value: function render() {
      // id kept for backward (< 1.2) compatibility,
      // but prefer using pubRef to prevent any conflict with React default id property
      var _this$props = this.props,
        modulesManager = _this$props.modulesManager,
        id = _this$props.id,
        pubRef = _this$props.pubRef,
        others = _objectWithoutProperties__default["default"](_this$props, _excluded$9);
      var C = modulesManager.getRef(id || pubRef);
      return !!C ? /*#__PURE__*/React__default["default"].createElement(C, others) : null;
    }
  }]);
}(React.Component);
var PublishedComponent$1 = withModulesManager(PublishedComponent);

var _excluded$8 = ["history", "classes", "error", "confirm", "user", "messages", "clearConfirm", "localesManager", "modulesManager", "basename", "toggleCurrentCalendarType", "rights"];
function ownKeys$h(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$h(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$h(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$h(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var ROUTER_CONTRIBUTION_KEY = "core.Router";
var APP_BOOT_CONTRIBUTION_KEY = "core.Boot";
var TRANSLATION_CONTRIBUTION_KEY = "translations";
var ECONOMIC_UNIT_DIALOG_CONTRIBUTION_KEY = "policyholder.EconomicUnitDialog";
var ECONOMIC_UNIT_STORAGE_KEY = "userEconomicUnit";
var styles$q = function styles() {
  return {
    fetching: {
      margin: 0,
      position: "absolute",
      top: "50%",
      left: "50%"
    }
  };
};
var App = function App(props) {
  props.history;
    props.classes;
    var error = props.error,
    confirm = props.confirm,
    user = props.user,
    messages = props.messages,
    clearConfirm = props.clearConfirm,
    localesManager = props.localesManager,
    modulesManager = props.modulesManager,
    _props$basename = props.basename,
    basename = _props$basename === void 0 ? process.env.PUBLIC_URL : _props$basename,
    toggleCurrentCalendarType = props.toggleCurrentCalendarType,
    rights = props.rights,
    others = _objectWithoutProperties__default["default"](props, _excluded$8);
  var economicUnitConfig = modulesManager.getConf("fe-core", "App.economicUnitConfig", false);
  var _useState = React.useState(false),
    _useState2 = _slicedToArray__default["default"](_useState, 2),
    economicUnitDialogOpen = _useState2[0],
    setEconomicUnitDialogOpen = _useState2[1];
  var _useBoolean = useBoolean(true),
    _useBoolean2 = _slicedToArray__default["default"](_useBoolean, 2),
    isSecondaryCalendar = _useBoolean2[0],
    setSecondaryCalendar = _useBoolean2[1];
  var auth = useAuthentication();
  var routes = React.useMemo(function () {
    return modulesManager.getContribs(ROUTER_CONTRIBUTION_KEY);
  }, []);
  var locale = React.useMemo(function () {
    if (user) {
      localesManager.getLocale(user.language);
    }
  }, [user === null || user === void 0 ? void 0 : user.language]);
  var allMessages = React.useMemo(function () {
    var lang;
    if (user) {
      lang = localesManager.getFileNameByLang(user.language);
    } else {
      var _localesManager$getFi;
      lang = (_localesManager$getFi = localesManager.getFileNameByLang(navigator.language)) !== null && _localesManager$getFi !== void 0 ? _localesManager$getFi : "en";
    }
    var msgs = modulesManager.getContribs(TRANSLATION_CONTRIBUTION_KEY).filter(function (msgs) {
      return msgs.key === lang;
    }).reduce(function (allmsgs, msgs) {
      return Object.assign(allmsgs, msgs.messages);
    }, {});
    return _objectSpread$h(_objectSpread$h({}, messages), msgs);
  }, [user === null || user === void 0 ? void 0 : user.language, messages]);
  React.useEffect(function () {
    auth.initialize();
    if (process.env.NODE_ENV == "development") {
      // In development, redirect the browser to the basename if
      // the location is currently the root path
      if (location.pathname === "/") {
        location.replace(basename);
      }
    }
  }, []);
  React.useEffect(function () {
    var userHasModalRight = user !== null && user !== void 0 && user.rights ? user.rights.includes(RIGHT_VIEW_EU_MODAL) : false;
    if (economicUnitConfig && userHasModalRight && auth.isAuthenticated && !localStorage.getItem(ECONOMIC_UNIT_STORAGE_KEY)) {
      setEconomicUnitDialogOpen(true);
    }
    if (!economicUnitConfig || economicUnitConfig && !auth.isAuthenticated) {
      setEconomicUnitDialogOpen(false);
    }
  }, [auth, economicUnitDialogOpen, user]);
  React.useEffect(function () {
    localStorage.setItem("isSecondaryCalendarEnabled", JSON.stringify(!isSecondaryCalendar));
    toggleCurrentCalendarType(!isSecondaryCalendar);
  }, [isSecondaryCalendar]);
  if (error) {
    return /*#__PURE__*/React__default["default"].createElement(FatalError$1, {
      error: error
    });
  }
  if (!auth.isInitialized) return null;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(_Helmet__default["default"], {
    titleTemplate: "%s - openIMIS",
    defaultTitle: "openIMIS"
  }), /*#__PURE__*/React__default["default"].createElement(core.CssBaseline, null), /*#__PURE__*/React__default["default"].createElement(ModulesManagerProvider, {
    value: modulesManager
  }, /*#__PURE__*/React__default["default"].createElement(reactIntl.IntlProvider, {
    locale: locale,
    messages: allMessages
  }, /*#__PURE__*/React__default["default"].createElement(AlertDialog$1, null), /*#__PURE__*/React__default["default"].createElement(ConfirmDialog$1, {
    confirm: confirm,
    onConfirm: clearConfirm
  }), economicUnitConfig ? /*#__PURE__*/React__default["default"].createElement(Contributions, {
    contributionKey: ECONOMIC_UNIT_DIALOG_CONTRIBUTION_KEY,
    open: economicUnitDialogOpen,
    setEconomicUnitDialogOpen: setEconomicUnitDialogOpen,
    onLogout: onLogout
  }) : null, /*#__PURE__*/React__default["default"].createElement(PublishedComponent$1, {
    pubRef: "grievanceSocialProtection.GrievanceConfigurationDialog",
    rights: rights
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "App"
  }, auth.isAuthenticated && /*#__PURE__*/React__default["default"].createElement(Contributions, {
    contributionKey: APP_BOOT_CONTRIBUTION_KEY
  }), /*#__PURE__*/React__default["default"].createElement(reactRouterDom.BrowserRouter, {
    basename: basename
  }, /*#__PURE__*/React__default["default"].createElement(reactRouterDom.Switch, null, /*#__PURE__*/React__default["default"].createElement(reactRouterDom.Route, {
    exact: true,
    path: "/",
    render: function render() {
      return /*#__PURE__*/React__default["default"].createElement(reactRouterDom.Redirect, {
        to: "/home"
      });
    }
  }), /*#__PURE__*/React__default["default"].createElement(reactRouterDom.Route, {
    path: "/login",
    render: function render() {
      return /*#__PURE__*/React__default["default"].createElement(LoginPage, others);
    }
  }), /*#__PURE__*/React__default["default"].createElement(reactRouterDom.Route, {
    path: "/forgot_password",
    render: function render() {
      return /*#__PURE__*/React__default["default"].createElement(ForgotPasswordPage, others);
    }
  }), /*#__PURE__*/React__default["default"].createElement(reactRouterDom.Route, {
    path: "/set_password",
    render: function render() {
      return /*#__PURE__*/React__default["default"].createElement(SetPasswordPage, others);
    }
  }), routes.map(function (route) {
    return /*#__PURE__*/React__default["default"].createElement(reactRouterDom.Route, {
      exact: true,
      key: route.path,
      path: "/" + route.path,
      render: function render(props) {
        return /*#__PURE__*/React__default["default"].createElement(feCore.ErrorBoundary, null, /*#__PURE__*/React__default["default"].createElement(RequireAuth$1, _extends__default["default"]({}, props, others, {
          redirectTo: "/login",
          onEconomicDialogOpen: function onEconomicDialogOpen() {
            return setEconomicUnitDialogOpen(true);
          },
          isSecondaryCalendar: isSecondaryCalendar,
          setSecondaryCalendar: setSecondaryCalendar
        }), /*#__PURE__*/React__default["default"].createElement(PermissionCheck, _extends__default["default"]({
          modulesManager: modulesManager,
          userRights: rights,
          requiredRights: route.requiredRights
        }, others), /*#__PURE__*/React__default["default"].createElement(route.component, _extends__default["default"]({
          modulesManager: modulesManager
        }, props, others)))));
      }
    });
  }), /*#__PURE__*/React__default["default"].createElement(reactRouterDom.Route, {
    render: function render() {
      return /*#__PURE__*/React__default["default"].createElement(NotFoundPage, others);
    }
  })))))));
};
var mapStateToProps$7 = function mapStateToProps(state) {
  var _state$core$user$i_us, _state$core$user, _state$core$user2;
  return {
    rights: (_state$core$user$i_us = (_state$core$user = state.core.user) === null || _state$core$user === void 0 || (_state$core$user = _state$core$user.i_user) === null || _state$core$user === void 0 ? void 0 : _state$core$user.rights) !== null && _state$core$user$i_us !== void 0 ? _state$core$user$i_us : [],
    user: (_state$core$user2 = state.core.user) === null || _state$core$user2 === void 0 ? void 0 : _state$core$user2.i_user,
    error: state.core.error,
    confirm: state.core.confirm
  };
};
var mapDispatchToProps$7 = function mapDispatchToProps(dispatch) {
  return redux.bindActionCreators({
    clearConfirm: clearConfirm,
    toggleCurrentCalendarType: toggleCurrentCalendarType
  }, dispatch);
};
var App$1 = reactRedux.connect(mapStateToProps$7, mapDispatchToProps$7)(styles$w.withTheme(styles$w.withStyles(styles$q)(withModulesManager(App))));

var messages_en = {
	"core.roleManagement.label": "Roles Management",
	"core.roleManagement.searcher.results.title": "{rolesTotalCount} Roles Found",
	"core.roleManagement.roleName": "Role Name",
	"core.roleManagement.altLanguage": "Alternative Language",
	"core.roleManagement.isSystem": "System",
	"core.roleManagement.isBlocked": "Blocked",
	"core.roleManagement.showHistory": "Show Historical",
	"core.roleManagement.dateValidFrom": "Valid from",
	"core.roleManagement.dateValidTo": "Valid to",
	"core.roleManagement.emptyLabel": " ",
	"core.roleManagement.null": "Any",
	"core.roleManagement.true": "True",
	"core.roleManagement.false": "False",
	"core.roleManagement.createButton.tooltip": "Create new Role",
	"core.roleManagement.role.page.title": "Role Details {label}",
	"core.roleManagement.requiredFieldsEmptyError": "* These fields are required",
	"core.roleManagement.saveButton.tooltip.enabled": "Save changes",
	"core.roleManagement.saveButton.tooltip.disabled": "Please fill required fields first",
	"core.roleManagement.role.availableRights": "Available permissions",
	"core.roleManagement.role.addAllFilteredPerms": "Add all filtered permissions",
	"core.roleManagement.role.removeAllPerms": "Remove all filtered permissions",
	"core.roleManagement.role.chosenRights": "Chosen permissions",
	"core.roleManagement.role.rightsFilter": "Filter",
	"core.roleManagement.CreateRole.mutationLabel": "Create Role {label}",
	"core.roleManagement.DeleteRole.mutationLabel": "Delete Role {label}",
	"core.roleManagement.deleteButton.tooltip": "Delete",
	"core.roleManagement.deleteRole.confirm.title": "Are you sure you want to delete {label}?",
	"core.roleManagement.deleteRole.confirm.message": "Deleting data does not mean erasing it from openIMIS database. The data will only be deactivated from the viewed list.",
	"core.roleManagement.UpdateRole.mutationLabel": "Update Role {label}",
	"core.roleManagement.editButton.tooltip": "Edit",
	"core.roleManagement.updateRole.confirm.title": "Save changes in {label}?",
	"core.roleManagement.updateRole.confirm.message": "Are you sure you want to save changes in {label}?",
	"core.roleManagement.DuplicateRole.mutationLabel": "Duplicate Role {label}",
	"core.roleManagement.duplicateButton.tooltip": "Duplicate",
	"core.Autocomplete.loadingText": "Loading...",
	"core.Autocomplete.clearText": "Clear",
	"core.Autocomplete.openText": "Open",
	"core.Autocomplete.closeText": "Close",
	"core.Autocomplete.placeholder": "Search...",
	"core.LoginPage.username.label": "Username",
	"core.LoginPage.password.label": "Password",
	"core.LoginPage.loginBtn": "Log In",
	"core.LoginPage.authError": "The password or the username you've entered is incorrect.",
	"core.LoginPage.authErrorHealthFacilityContractInvalid": "Your contract has expired.",
	"core.LoginPage.authErrorGeneral": "Unknown error.",
	"core.LoginPage.authMPassError": "Login error. Try again.",
	"core.LoginPage.loginWithMPass": "Login with MPass",
	"core.LoginPage.pageTitle": "Log In",
	"core.LoginPage.forgotPassword": "Forgot Password ?",
	"core.ForgotPasswordPage.pageTitle": "Forgot Password ?",
	"core.ForgotPasswordPage.submitBtn": "Submit",
	"core.ForgotPasswordPage.username.label": "Username",
	"core.ForgotPasswordPage.recoverTitle": "Recover your account",
	"core.ForgotPasswordPage.explanationMessage": "Enter your username to be able to recover your account. En e-mail with the instructions will be sent to your e-mail address.",
	"core.ForgotPasswordPage.contactAdministrator": "If you do not receive an e-mail, please check with your administrator.",
	"core.ForgotPasswordPage.done": "Done ! Check your inbox and click on the verification link to reset your password.",
	"core.SetPasswordPage.pageTitle": "Set a new Password",
	"core.SetPasswordPage.username.label": "Username",
	"core.SetPasswordPage.password.label": "Password",
	"core.SetPasswordPage.confirmPassword.label": "Confirm Password",
	"core.SetPasswordPage.error": "Unknown error",
	"core.SetPasswordPage.submitBtn": "Submit",
	"core.table.resultsLoading": "Loading...",
	"core.exportSearchResult": "Export search result",
	"core.exportSearchResult.tooltip": "Export result",
	"LanguagePicker.label": "Language",
	"core.Language.null": "",
	"claim.edit.services.code": "Code",
	"claim.edit.services.name": "Name",
	"claim.edit.services.priceAppro": "Price Appro.",
	"core.NumberInput.notApplicable": "N/A",
	"core.UserActivityReport.dateFrom": "From",
	"core.UserActivityReport.dateTo": "To",
	"core.UserActivityReport.action": "Action",
	"core.UserActivityReport.action.null": "All actions",
	"core.UserActivityReport.action.I": "Insert",
	"core.UserActivityReport.action.U": "Update",
	"core.UserActivityReport.action.D": "Delete",
	"core.UserActivityReport.entity": "Entity",
	"core.UserActivityReport.entity.null": "All entities",
	"core.UserActivityReport.entity.Claim": "Claim",
	"core.UserActivityReport.entity.BatchRun": "Batch Run",
	"core.UserActivityReport.entity.ClaimAdmin": "Claim Admin",
	"core.UserActivityReport.entity.Location": "Location",
	"core.UserActivityReport.entity.Extract": "Extract",
	"core.UserActivityReport.entity.Family": "Family",
	"core.UserActivityReport.entity.Feedback": "Feedback",
	"core.UserActivityReport.entity.HealthFacility": "Health Facility",
	"core.UserActivityReport.entity.Insuree": "Insuree",
	"core.UserActivityReport.entity.Item": "Item",
	"core.UserActivityReport.entity.Officer": "Officer",
	"core.UserActivityReport.entity.Payer": "Payer",
	"core.UserActivityReport.entity.InsureePhoto": "Insuree Photo",
	"core.UserActivityReport.entity.ItemsPricelist": "Items Pricelist",
	"core.UserActivityReport.entity.ServicesPricelist": "Services Pricelist",
	"core.UserActivityReport.entity.ItemsPricelistDetail": "Items Pricelist Detail",
	"core.UserActivityReport.entity.ServicesPricelistDetail": "Services Pricelist Detail",
	"core.UserActivityReport.entity.Policy": "Policy",
	"core.UserActivityReport.entity.Premium": "Premium",
	"core.UserActivityReport.entity.Product": "Product",
	"core.UserActivityReport.entity.ProductItem": "Product Item",
	"core.UserActivityReport.entity.ProductService": "Product Service",
	"core.UserActivityReport.entity.RelativeDistribution": "Relative Distribution",
	"core.UserActivityReport.entity.Service": "Service",
	"core.UserActivityReport.entity.InteractiveUser": "User",
	"core.UserActivityReport.entity.UserDistrict": "User District",
	"core.UserActivityReport.user": "User",
	"core.UserActivityReport.user.null": "All users",
	"core.advancedFilters": "Advanced Filters",
	"core.advancedFilters.field": "Field",
	"core.advancedFilters.filter": "Filter",
	"core.advancedFilters.value": "Value",
	"core.advancedFilters.button.AdvancedFilters": "Advanced Filters",
	"core.advancedFilters.button.addFilters": "Add filter",
	"core.advancedFilters.button.clearAllFilters": "Clear All Filters",
	"core.advancedFilters.button.cancel": "Cancel",
	"core.advancedFilters.button.filter": "Filter",
	"core.RegistersStatusReport.region": "Region",
	"core.RegistersStatusReport.district": "District",
	"core.Table.ordinalNumberHeader": "Number",
	"core.calendarSwitcher": "BS/AD",
	"core.calendar.clearButton": "Clear date",
	"core.calendar.okButton": "Accept",
	"core.calendar.cancelButton": "Cancel",
	"core.exportColumnsDialog.confirmButton": "Ok",
	"core.exportColumnsDialog.cancelButton": "Cancel",
	"core.exportColumnsDialog.clearAllButton": "Clear All",
	"core.exportColumnsDialog.title": "Select columns.",
	"core.NotFoundPage.title": "Page not found",
	"core.NotFoundPage.description": "The requested URL was not found on this server.",
	"core.ErrorPage.back": "Move back to the home page",
	"core.ForbiddenPage.title": "Access Denied",
	"core.ForbiddenPage.description": "Sorry, you are not authorized to access this page.",
	"core.InternalServerErrorPage.title": "Internal Server Error",
	"core.InternalServerErrorPage.description": "The server encountered an internal error or misconfiguration and was unable to complete your request.",
	"core.tooltip.logout": "Log out",
	"core.tooltip.help": "Documentation",
	"core.NeDateFormatter.dateOutOfRange": "DATE_OUT_OF_RANGE",
	"core.AuthorityPicker.label": "Authority",
	"core.AuthorityPicker.placeholder": "Search..."
};

function _callSuper$v(t, o, e) { return o = _getPrototypeOf__default["default"](o), _possibleConstructorReturn__default["default"](t, _isNativeReflectConstruct$v() ? Reflect.construct(o, e || [], _getPrototypeOf__default["default"](t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct$v() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$v = function _isNativeReflectConstruct() { return !!t; })(); }
var KeepLegacyAlive = /*#__PURE__*/function (_Component) {
  function KeepLegacyAlive() {
    var _this;
    _classCallCheck__default["default"](this, KeepLegacyAlive);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper$v(this, KeepLegacyAlive, [].concat(args));
    _defineProperty__default["default"](_this, "keepLegacyAlive", function () {
      fetch("".concat(window.location.origin, "/keepLegacyAlive"));
    });
    return _this;
  }
  _inherits__default["default"](KeepLegacyAlive, _Component);
  return _createClass__default["default"](KeepLegacyAlive, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      this.setState(function (state, props) {
        return {
          timeoutId: setInterval(_this2.keepLegacyAlive, props.modulesManager.getRef("core.KeepLegacyAlive.pollInterval"))
        };
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (!!this.state && !!this.state.timeoutId) {
        clearTimeout(this.state.timeoutId);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);
}(React.Component);
var KeepLegacyAlive$1 = withModulesManager(KeepLegacyAlive);

function _callSuper$u(t, o, e) { return o = _getPrototypeOf__default["default"](o), _possibleConstructorReturn__default["default"](t, _isNativeReflectConstruct$u() ? Reflect.construct(o, e || [], _getPrototypeOf__default["default"](t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct$u() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$u = function _isNativeReflectConstruct() { return !!t; })(); }
var styles$p = function styles(theme) {
  return {
    label: {
      color: theme.palette.primary.main
    },
    formControl: {
      position: "relative"
    },
    iconButton: {
      position: "absolute",
      right: 0,
      padding: "8px"
    }
  };
};
function EmptyComponent() {
  return /*#__PURE__*/React__default["default"].createElement("div", null);
}
var SelectInput = /*#__PURE__*/function (_Component) {
  function SelectInput() {
    var _this;
    _classCallCheck__default["default"](this, SelectInput);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper$u(this, SelectInput, [].concat(args));
    _defineProperty__default["default"](_this, "_onChange", function (e) {
      if (_this.props.value !== e.target.value) {
        _this.props.onChange(JSON.parse(e.target.value));
      }
    });
    _defineProperty__default["default"](_this, "handleClear", function () {
      _this.props.onChange("");
    });
    // When there is a value, we pass a dummy div to effectively hide the default dropdown icon.
    // This allows us to make room for the clear icon without having two icons visible at the same time.
    _defineProperty__default["default"](_this, "renderIconComponent", function () {
      var value = _this.props.value;
      return value ? EmptyComponent : undefined;
    });
    // If there's a value, we render the clear icon. Clicking it calls handleClear, which resets the Select's value.
    _defineProperty__default["default"](_this, "renderEndAdornment", function () {
      var _this$props = _this.props,
        value = _this$props.value,
        classes = _this$props.classes;
      return value ? /*#__PURE__*/React__default["default"].createElement(core.IconButton, {
        onClick: _this.handleClear,
        className: classes.iconButton
      }, /*#__PURE__*/React__default["default"].createElement(ClearIcon__default["default"], null)) : undefined;
    });
    return _this;
  }
  _inherits__default["default"](SelectInput, _Component);
  return _createClass__default["default"](SelectInput, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        classes = _this$props2.classes,
        module = _this$props2.module,
        label = _this$props2.label,
        _this$props2$strLabel = _this$props2.strLabel,
        strLabel = _this$props2$strLabel === void 0 ? null : _this$props2$strLabel,
        _this$props2$withLabe = _this$props2.withLabel,
        withLabel = _this$props2$withLabe === void 0 ? true : _this$props2$withLabe,
        name = _this$props2.name,
        options = _this$props2.options,
        value = _this$props2.value,
        _this$props2$disabled = _this$props2.disabled,
        disabled = _this$props2$disabled === void 0 ? false : _this$props2$disabled,
        _this$props2$readOnly = _this$props2.readOnly,
        readOnly = _this$props2$readOnly === void 0 ? false : _this$props2$readOnly,
        _this$props2$required = _this$props2.required,
        required = _this$props2$required === void 0 ? false : _this$props2$required,
        placeholder = _this$props2.placeholder;
      if (!options) return null;
      var valueStr = null;
      if (!!readOnly) {
        valueStr = options.filter(function (o) {
          return JSON.stringify(o.value) === JSON.stringify(value);
        }).map(function (o) {
          return o.label;
        });
      }
      return /*#__PURE__*/React__default["default"].createElement(React.Fragment, null, !readOnly && /*#__PURE__*/React__default["default"].createElement(core.FormControl, {
        required: required,
        fullWidth: true,
        className: classes.formControl
      }, /*#__PURE__*/React__default["default"].createElement(core.InputLabel, {
        shrink: true,
        className: classes.label
      }, strLabel !== null && strLabel !== void 0 ? strLabel : /*#__PURE__*/React__default["default"].createElement(FormattedMessage$1, {
        module: module,
        id: label
      })), /*#__PURE__*/React__default["default"].createElement(core.Select, _extends__default["default"]({
        readOnly: readOnly,
        inputProps: {
          name: name,
          id: "".concat(uuid__default["default"].uuid(), "-input")
        },
        value: !!value ? JSON.stringify(value) : null,
        onChange: this._onChange,
        IconComponent: this.renderIconComponent(),
        disabled: disabled,
        endAdornment: this.renderEndAdornment(),
        displayEmpty: true
        //NOTE: We want to get rid of default styling (marginTop) if label is not rendered
      }, withLabel ? null : {
        style: {
          marginTop: "0px"
        }
      }), placeholder && /*#__PURE__*/React__default["default"].createElement(core.MenuItem, {
        disabled: true,
        value: ""
      }, /*#__PURE__*/React__default["default"].createElement(FormattedMessage$1, {
        module: module,
        id: placeholder
      })), options.map(function (option, idx) {
        return /*#__PURE__*/React__default["default"].createElement(core.MenuItem, {
          key: "".concat(module, "-").concat(name, "-option-").concat(idx),
          value: JSON.stringify(option.value)
        }, option.label);
      }))), !!readOnly && /*#__PURE__*/React__default["default"].createElement(TextInput$1
      //NOTE: We want to get rid of default styling (marginTop) if label is not rendered
      , _extends__default["default"]({}, withLabel ? {
        label: label
      } : null, {
        fullWidth: true,
        module: module,
        value: valueStr,
        readOnly: true
      })));
    }
  }]);
}(React.Component);
var SelectInput$1 = reactIntl.injectIntl(styles$w.withTheme(styles$w.withStyles(styles$p)(SelectInput)));

function _callSuper$t(t, o, e) { return o = _getPrototypeOf__default["default"](o), _possibleConstructorReturn__default["default"](t, _isNativeReflectConstruct$t() ? Reflect.construct(o, e || [], _getPrototypeOf__default["default"](t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct$t() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$t = function _isNativeReflectConstruct() { return !!t; })(); }
var styles$o = function styles(theme) {
  return {
    paper: {
      margin: theme.spacing(1),
      marginLeft: 0
    },
    header: theme.table.title,
    label: {
      color: theme.palette.primary.main
    },
    textField: {
      width: "100%"
    },
    suggestionContainer: {
      flexGrow: 1,
      position: "relative"
    },
    suggestionInputField: {
      margin: 0,
      border: 0
    },
    suggestionsContainerOpen: {
      position: "absolute",
      top: 42,
      padding: 0,
      margin: 0,
      width: "100%",
      backgroundColor: theme.palette.text.second,
      border: "solid 1px grey",
      zIndex: theme.zIndex.modal
    },
    suggestion: {
      display: "block",
      cursor: "pointer",
      padding: "10px 20px"
    },
    suggestionsList: {
      listStyleType: "none",
      margin: 0,
      padding: 0
    },
    suggestionHighlighted: {
      color: theme.palette.text.second,
      backgroundColor: theme.palette.text.primary
    }
  };
};
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
var INIT_STATE$1 = {
  value: "",
  suggestions: [],
  selected: null
};
var MORE = "__THE_MORE_FAKE_OPTION__";
var AutoSuggestion = /*#__PURE__*/function (_Component) {
  function AutoSuggestion(_props) {
    var _this;
    _classCallCheck__default["default"](this, AutoSuggestion);
    _this = _callSuper$t(this, AutoSuggestion, [_props]);
    _defineProperty__default["default"](_this, "state", INIT_STATE$1);
    _defineProperty__default["default"](_this, "_allItems", function () {
      var _this$props = _this.props,
        preValues = _this$props.preValues,
        items = _this$props.items;
      return [].concat(_toConsumableArray__default["default"](preValues !== null && preValues !== void 0 ? preValues : []), _toConsumableArray__default["default"](items !== null && items !== void 0 ? items : []));
    });
    _defineProperty__default["default"](_this, "onClear", function (e) {
      _this.setState({
        value: null,
        selected: null
      }, function (e) {
        return !!_this.props.onClear ? _this.props.onClear() : _this.props.onSuggestionSelected(null);
      });
    });
    _defineProperty__default["default"](_this, "_onAutoselectChange", function (event, _ref) {
      var newValue = _ref.newValue;
        _ref.method;
      _this.setState({
        value: newValue
      });
    });
    _defineProperty__default["default"](_this, "onSuggestionsFetchRequested", function (_ref2) {
      var value = _ref2.value;
      if (!!_this.props.getSuggestions) {
        _this.props.getSuggestions(value);
      } else {
        _this.setState({
          suggestions: _this._getSuggestions(value)
        });
      }
    });
    _defineProperty__default["default"](_this, "onSuggestionsClearRequested", function () {
      _this.setState({
        suggestions: _this._truncate(_this._allItems())
      });
    });
    _defineProperty__default["default"](_this, "_truncate", function (suggestions) {
      if (_this.limitDisplay > 0 && suggestions.length > _this.limitDisplay) {
        suggestions = suggestions.slice(0, _this.limitDisplay);
        suggestions.push(MORE);
      }
      return suggestions;
    });
    _defineProperty__default["default"](_this, "_getSuggestions", function (value) {
      if (!value || !value.trim()) {
        return _this._truncate(_this._allItems());
      }
      var escapedValue = escapeRegexCharacters(value.trim());
      if (escapedValue === "") {
        return [];
      }
      var regex = new RegExp(escapedValue, "i");
      var lookup = _this.props.lookup;
      if (!lookup) {
        lookup = function lookup(i) {
          return _this.props.getSuggestionValue(i);
        };
      }
      return _this._truncate(_this._allItems().filter(function (i) {
        return regex.test(lookup(i));
      }));
    });
    _defineProperty__default["default"](_this, "renderInputComponent", function (inputProps) {
      var classes = _this.props.classes;
      return /*#__PURE__*/React__default["default"].createElement(core.FormControl, {
        fullWidth: true
      }, /*#__PURE__*/React__default["default"].createElement(core.TextField, _extends__default["default"]({
        InputLabelProps: {
          className: classes.label
        }
      }, inputProps, {
        InputProps: {
          startAdornment: /*#__PURE__*/React__default["default"].createElement(core.InputAdornment, {
            position: "start"
          }, /*#__PURE__*/React__default["default"].createElement(SearchIcon__default["default"], null)),
          endAdornment: /*#__PURE__*/React__default["default"].createElement(core.InputAdornment, {
            position: "end"
          }, /*#__PURE__*/React__default["default"].createElement(core.IconButton, {
            onClick: _this.onClear
          }, /*#__PURE__*/React__default["default"].createElement(ClearIcon__default["default"], null)))
        }
      })));
    });
    _defineProperty__default["default"](_this, "_shouldRenderSuggestions", function () {
      return _this.state.value !== _this.state.selected;
    });
    _defineProperty__default["default"](_this, "_onSuggestionSelected", function (e, i) {
      _this.setState(function (state, props) {
        return {
          selected: props.getSuggestionValue(i.suggestion)
        };
      }, function (e) {
        return _this.props.onSuggestionSelected(i.suggestion);
      });
    });
    _defineProperty__default["default"](_this, "_onOptionSelected", function (selected) {
      _this.setState({
        selected: selected
      }, function (e) {
        return _this.props.onSuggestionSelected(selected);
      });
    });
    _defineProperty__default["default"](_this, "_render", function (s) {
      var styleCover = {
        marginTop: "-10px",
        marginBottom: "-10px",
        marginLeft: "-20px",
        marginRight: "-20px"
      };
      var styleRevert = {
        marginTop: "10px",
        marginBottom: "10px",
        marginLeft: "20px",
        marginRight: "20px"
      };
      if (s === MORE) {
        return /*#__PURE__*/React__default["default"].createElement("div", {
          style: styleCover,
          onClick: function onClick(e) {
            return e.stopPropagation();
          }
        }, /*#__PURE__*/React__default["default"].createElement("span", {
          style: styleRevert,
          onClick: function onClick(e) {
            return e.stopPropagation();
          }
        }, _this.props.intl.formatMessage({
          id: "autosuggest.more"
        })));
      }
      var render = _this.props.renderSuggestion;
      if (!render) {
        render = function render(s) {
          return /*#__PURE__*/React__default["default"].createElement("span", null, _this.props.getSuggestionValue(s));
        };
      }
      return render(s);
    });
    _defineProperty__default["default"](_this, "renderSelect", function () {
      var _this$props2 = _this.props,
        module = _this$props2.module,
        withNull = _this$props2.withNull,
        nullLabel = _this$props2.nullLabel,
        label = _this$props2.label,
        _this$props2$required = _this$props2.required,
        required = _this$props2$required === void 0 ? false : _this$props2$required,
        getSuggestionValue = _this$props2.getSuggestionValue;
      var _this$state = _this.state,
        suggestions = _this$state.suggestions,
        selected = _this$state.selected;
      var options = suggestions.map(function (r) {
        return {
          value: r,
          label: getSuggestionValue(r)
        };
      });
      if (withNull) {
        options.unshift({
          value: null,
          label: nullLabel
        });
      }
      return /*#__PURE__*/React__default["default"].createElement(SelectInput$1, {
        module: module,
        strLabel: label,
        options: options,
        value: selected,
        onChange: _this._onOptionSelected,
        required: required
      });
    });
    _defineProperty__default["default"](_this, "renderAutoselect", function () {
      var _this$props3 = _this.props,
        classes = _this$props3.classes,
        label = _this$props3.label,
        _this$props3$disabled = _this$props3.disabled,
        disabled = _this$props3$disabled === void 0 ? false : _this$props3$disabled,
        _this$props3$required = _this$props3.required,
        required = _this$props3$required === void 0 ? false : _this$props3$required,
        placeholder = _this$props3.placeholder,
        getSuggestionValue = _this$props3.getSuggestionValue;
      var _this$state2 = _this.state,
        suggestions = _this$state2.suggestions,
        value = _this$state2.value;
      var inputProps = {
        className: classes.suggestionInputField,
        placeholder: placeholder,
        // Value has to be a string
        value: value !== null && value !== void 0 ? value : "",
        label: label,
        disabled: disabled,
        onChange: _this._onAutoselectChange,
        required: required
      };
      return /*#__PURE__*/React__default["default"].createElement(Autosuggest__default["default"], {
        theme: {
          container: classes.suggestionContainer,
          suggestionsContainerOpen: classes.suggestionsContainerOpen,
          suggestionsList: classes.suggestionsList,
          suggestion: classes.suggestion,
          suggestionHighlighted: classes.suggestionHighlighted
        },
        renderInputComponent: _this.renderInputComponent,
        inputProps: inputProps,
        suggestions: suggestions,
        onSuggestionSelected: _this._onSuggestionSelected,
        onSuggestionsFetchRequested: _this.onSuggestionsFetchRequested,
        onSuggestionsClearRequested: _this.onSuggestionsClearRequested,
        getSuggestionValue: getSuggestionValue,
        renderSuggestion: _this._render,
        shouldRenderSuggestions: _this._shouldRenderSuggestions
      });
    });
    _this.limitDisplay = _props.modulesManager.getConf("fe-core", "AutoSuggestion.limitDisplay", 10);
    return _this;
  }
  _inherits__default["default"](AutoSuggestion, _Component);
  return _createClass__default["default"](AutoSuggestion, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      if (!!this.props.value) {
        this.setState(function (state, props) {
          return {
            value: props.getSuggestionValue(props.value),
            selected: props.getSuggestionValue(props.value),
            suggestions: _this2._truncate(_this2._allItems())
          };
        });
      }
      if (!!this.props.items) {
        this.setState({
          suggestions: this._truncate(this._allItems())
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      var _this3 = this;
      if (prevProps.reset !== this.props.reset) {
        this.setState(function (state, props) {
          return {
            suggestions: _this3._truncate(_this3._allItems()),
            value: props.value ? props.getSuggestionValue(props.value) : null,
            selected: props.value ? props.getSuggestionValue(props.value) : null
          };
        });
      } else {
        if (!___default["default"].isEqual(prevProps.value, this.props.value)) {
          this.setState(function (state, props) {
            return {
              suggestions: _this3._truncate(_this3._allItems()),
              value: props.value ? props.getSuggestionValue(props.value) : null,
              selected: props.value ? props.getSuggestionValue(props.value) : null
            };
          });
        } else if (!___default["default"].isEqual(prevProps.items, this.props.items)) {
          this.setState({
            suggestions: this._truncate(this._allItems())
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
        classes = _this$props4.classes,
        label = _this$props4.label,
        _this$props4$readOnly = _this$props4.readOnly,
        readOnly = _this$props4$readOnly === void 0 ? false : _this$props4$readOnly,
        _this$props4$selectTh = _this$props4.selectThreshold,
        selectThreshold = _this$props4$selectTh === void 0 ? null : _this$props4$selectTh;
      var _this$state3 = this.state,
        value = _this$state3.value,
        suggestions = _this$state3.suggestions;
      if (!!readOnly) {
        return /*#__PURE__*/React__default["default"].createElement(core.TextField, {
          label: label,
          className: classes.textField,
          disabled: true,
          value: value
        });
      }
      if (!value && !!selectThreshold && !!suggestions && suggestions.length > 0 && suggestions.length < selectThreshold) {
        return this.renderSelect();
      } else {
        return this.renderAutoselect();
      }
    }
  }]);
}(React.Component);
var AutoSuggestion$1 = reactIntl.injectIntl(withModulesManager(styles$w.withTheme(styles$w.withStyles(styles$o)(AutoSuggestion))));

var styles$n = function styles(theme) {
  return {
    label: {
      color: theme.palette.primary.main
    }
  };
};
var defaultGetOptionSelected = function defaultGetOptionSelected(option, v) {
  return option.id === (v === null || v === void 0 ? void 0 : v.id);
};
var Autocomplete = function Autocomplete(props) {
  var onChange = props.onChange,
    _props$readOnly = props.readOnly,
    readOnly = _props$readOnly === void 0 ? false : _props$readOnly,
    _props$required = props.required,
    required = _props$required === void 0 ? false : _props$required,
    _props$withLabel = props.withLabel,
    withLabel = _props$withLabel === void 0 ? true : _props$withLabel,
    _props$withPlaceholde = props.withPlaceholder,
    withPlaceholder = _props$withPlaceholde === void 0 ? true : _props$withPlaceholde,
    _props$autoHighlight = props.autoHighlight,
    autoHighlight = _props$autoHighlight === void 0 ? true : _props$autoHighlight,
    value = props.value,
    className = props.className,
    minWidth = props.minWidth,
    _props$fullWidth = props.fullWidth,
    fullWidth = _props$fullWidth === void 0 ? true : _props$fullWidth,
    options = props.options,
    isLoading = props.isLoading,
    label = props.label,
    filterOptions = props.filterOptions,
    getOptionLabel = props.getOptionLabel,
    _props$getOptionSelec = props.getOptionSelected,
    getOptionSelected = _props$getOptionSelec === void 0 ? defaultGetOptionSelected : _props$getOptionSelec,
    filterSelectedOptions = props.filterSelectedOptions,
    placeholder = props.placeholder,
    onInputChange = props.onInputChange,
    setCurrentString = props.setCurrentString,
    _props$multiple = props.multiple,
    multiple = _props$multiple === void 0 ? false : _props$multiple,
    renderInput = props.renderInput,
    noOptionsText = props.noOptionsText;
  var modulesManager = useModulesManager();
  var minCharLookup = modulesManager.getConf("fe-admin", "usersMinCharLookup", 2);
  var _useTranslations = useTranslations("core.Autocomplete", modulesManager),
    formatMessage = _useTranslations.formatMessage;
  var _useState = React.useState(false),
    _useState2 = _slicedToArray__default["default"](_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var _useState3 = React.useState(Date.now()),
    _useState4 = _slicedToArray__default["default"](_useState3, 2),
    resetKey = _useState4[0],
    setResetKey = _useState4[1];
  var handleInputChange = useDebounceCb(function (searchString) {
    setCurrentString && setCurrentString(searchString);
    if (open && (!searchString || searchString.length > minCharLookup)) {
      onInputChange(searchString);
    }
  }, modulesManager.getConf("fe-admin", "debounceTime", 400));

  // eslint-disable-next-line no-shadow
  var handleChange = function handleChange(__, value) {
    onChange(value);
  };
  React.useEffect(function () {
    if (open) {
      onInputChange();
    }
  }, [open]);
  React.useEffect(function () {
    setResetKey(Date.now());
  }, [value]);
  return /*#__PURE__*/React__default["default"].createElement(lab.Autocomplete, {
    key: resetKey,
    fullWidth: fullWidth,
    noOptionsText: noOptionsText,
    className: className,
    style: {
      minWidth: minWidth
    },
    loadingText: formatMessage("loadingText"),
    openText: formatMessage("openText"),
    closeText: formatMessage("closeText"),
    clearText: formatMessage("clearText"),
    openOnFocus: true,
    blurOnSelect: !multiple,
    multiple: multiple,
    disabled: readOnly,
    options: options,
    loading: isLoading,
    autoHighlight: autoHighlight,
    open: open,
    onOpen: function onOpen() {
      return setOpen(true);
    },
    onClose: function onClose() {
      return setOpen(false);
    },
    autoComplete: true,
    value: value,
    getOptionLabel: getOptionLabel !== null && getOptionLabel !== void 0 ? getOptionLabel : function (option) {
      return option.label;
    },
    getOptionSelected: getOptionSelected,
    onChange: handleChange,
    filterOptions: filterOptions,
    filterSelectedOptions: filterSelectedOptions,
    onInputChange: function onInputChange(__, query) {
      return handleInputChange(query);
    },
    renderInput: !!renderInput ? renderInput : function (inputProps) {
      return /*#__PURE__*/React__default["default"].createElement(core.TextField, _extends__default["default"]({}, inputProps, {
        variant: "standard",
        required: required,
        InputLabelProps: {
          shrink: value !== undefined
        },
        label: withLabel && (label || formatMessage("label")),
        placeholder: !readOnly && withPlaceholder && (placeholder || formatMessage("placeholder"))
      }));
    }
  });
};
var Autocomplete$1 = styles$w.withTheme(styles$w.withStyles(styles$n)(Autocomplete));

function ownKeys$g(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$g(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$g(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$g(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var useBlockStyles = styles$x.makeStyles(function (theme) {
  return {
    block: _objectSpread$g(_objectSpread$g({}, theme.paper.paper), {}, {
      margin: 0
    }),
    header: _objectSpread$g(_objectSpread$g({}, theme.paper.header), theme.paper.title)
  };
});
var Block = function Block(props) {
  var title = props.title,
    className = props.className,
    _props$titleVariant = props.titleVariant,
    titleVariant = _props$titleVariant === void 0 ? "h5" : _props$titleVariant,
    children = props.children;
  var classes = useBlockStyles();
  return /*#__PURE__*/React__default["default"].createElement(core.Paper, {
    className: clsx__default["default"](classes.block, className)
  }, title && /*#__PURE__*/React__default["default"].createElement(core.Box, {
    className: classes.header
  }, /*#__PURE__*/React__default["default"].createElement(core.Typography, {
    variant: titleVariant
  }, title)), /*#__PURE__*/React__default["default"].createElement(core.Box, {
    overflow: "auto"
  }, /*#__PURE__*/React__default["default"].createElement(core.Box, {
    m: "10px"
  }, children)));
};

function _callSuper$s(t, o, e) { return o = _getPrototypeOf__default["default"](o), _possibleConstructorReturn__default["default"](t, _isNativeReflectConstruct$s() ? Reflect.construct(o, e || [], _getPrototypeOf__default["default"](t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct$s() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$s = function _isNativeReflectConstruct() { return !!t; })(); }
var ControlledField = /*#__PURE__*/function (_Component) {
  function ControlledField() {
    _classCallCheck__default["default"](this, ControlledField);
    return _callSuper$s(this, ControlledField, arguments);
  }
  _inherits__default["default"](ControlledField, _Component);
  return _createClass__default["default"](ControlledField, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        modulesManager = _this$props.modulesManager,
        module = _this$props.module,
        id = _this$props.id,
        field = _this$props.field;
      if (modulesManager.hideField(module, id)) {
        return null;
      }
      return field;
    }
  }]);
}(React.Component);
var ControlledField$1 = withModulesManager(ControlledField);

var styles$m = function styles(theme) {
  return {
    error: {
      padding: theme.spacing(2)
    },
    errorHeader: {
      color: theme.palette.error.main
    },
    errorDetail: {
      color: theme.palette.error.main
    }
  };
};
function Error$1(props) {
  var classes = props.classes,
    error = props.error;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: classes.error
  }, /*#__PURE__*/React__default["default"].createElement(core.Typography, {
    variant: "h6",
    className: classes.errorHeader
  }, error.code, " ", error.code && ": ", " ", error.message), !!error.detail && /*#__PURE__*/React__default["default"].createElement(React.Fragment, null, /*#__PURE__*/React__default["default"].createElement(core.Divider, null), /*#__PURE__*/React__default["default"].createElement(core.Typography, {
    variant: "body1",
    className: classes.errorDetail
  }, error.detail)));
}
var Error$2 = withStyles__default["default"](styles$m)(Error$1);

function _callSuper$r(t, o, e) { return o = _getPrototypeOf__default["default"](o), _possibleConstructorReturn__default["default"](t, _isNativeReflectConstruct$r() ? Reflect.construct(o, e || [], _getPrototypeOf__default["default"](t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct$r() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$r = function _isNativeReflectConstruct() { return !!t; })(); }
var AlertForwarder = /*#__PURE__*/function (_Component) {
  function AlertForwarder() {
    _classCallCheck__default["default"](this, AlertForwarder);
    return _callSuper$r(this, AlertForwarder, arguments);
  }
  _inherits__default["default"](AlertForwarder, _Component);
  return _createClass__default["default"](AlertForwarder, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (prevProps.alert !== this.props.alert && !!this.props.alert) {
        this.props.coreAlert(formatMessage(this.props.intl, "core", "FatalError.title"), formatMessage(this.props.intl, "core", "FatalError.message"), this.props.alert);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);
}(React.Component);
var mapDispatchToProps$6 = function mapDispatchToProps(dispatch) {
  return redux.bindActionCreators({
    coreAlert: coreAlert
  }, dispatch);
};
var AlertForwarder$1 = reactIntl.injectIntl(reactRedux.connect(null, mapDispatchToProps$6)(AlertForwarder));

function _callSuper$q(t, o, e) { return o = _getPrototypeOf__default["default"](o), _possibleConstructorReturn__default["default"](t, _isNativeReflectConstruct$q() ? Reflect.construct(o, e || [], _getPrototypeOf__default["default"](t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct$q() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$q = function _isNativeReflectConstruct() { return !!t; })(); }
var styles$l = function styles(theme) {
  return {
    label: theme.typography.label
  };
};
var FieldLabel = /*#__PURE__*/function (_Component) {
  function FieldLabel() {
    _classCallCheck__default["default"](this, FieldLabel);
    return _callSuper$q(this, FieldLabel, arguments);
  }
  _inherits__default["default"](FieldLabel, _Component);
  return _createClass__default["default"](FieldLabel, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        classes = _this$props.classes,
        module = _this$props.module,
        id = _this$props.id;
      return /*#__PURE__*/React__default["default"].createElement(core.Typography, {
        className: classes.label,
        variant: "caption"
      }, /*#__PURE__*/React__default["default"].createElement(FormattedMessage$1, {
        module: module,
        id: id
      }));
    }
  }]);
}(React.Component);
var FieldLabel$1 = reactIntl.injectIntl(styles$w.withTheme(styles$w.withStyles(styles$l)(FieldLabel)));

var _excluded$7 = ["classes", "module", "back", "add", "addTooltip", "openDirty", "save", "canSave", "saveTooltip", "actions", "fab", "fabAction", "fabTooltip", "title", "titleParams", "HeadPanel", "headPanelContributionsKey", "Panels", "contributedPanelsKey", "additionalTooltips"];
function _callSuper$p(t, o, e) { return o = _getPrototypeOf__default["default"](o), _possibleConstructorReturn__default["default"](t, _isNativeReflectConstruct$p() ? Reflect.construct(o, e || [], _getPrototypeOf__default["default"](t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct$p() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$p = function _isNativeReflectConstruct() { return !!t; })(); }
var styles$k = function styles(theme) {
  return {
    paper: theme.paper.paper,
    paperHeader: theme.paper.header,
    paperHeaderAction: theme.paper.action,
    tooltipContainer: theme.tooltipContainer,
    flexTooltip: theme.flexTooltip
  };
};
var Form = /*#__PURE__*/function (_Component) {
  function Form() {
    var _this;
    _classCallCheck__default["default"](this, Form);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper$p(this, Form, [].concat(args));
    _defineProperty__default["default"](_this, "state", {
      dirty: false,
      saving: false
    });
    _defineProperty__default["default"](_this, "onEditedChanged", function (data) {
      _this.setState({
        dirty: true
      }, function (e) {
        return _this.props.onEditedChanged(data);
      });
    });
    _defineProperty__default["default"](_this, "save", function (data) {
      var _this$props;
      var savingprops = (_this$props = _this.props) === null || _this$props === void 0 ? void 0 : _this$props.saving;
      if (savingprops === null || savingprops == false) {
        savingprops = false;
      }
      _this.setState({
        saving: savingprops == false ? savingprops : true
      }, _this.props.save(data));
    });
    return _this;
  }
  _inherits__default["default"](Form, _Component);
  return _createClass__default["default"](Form, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!!this.props.forcedDirty) {
        this.setState(function (state, props) {
          return {
            dirty: true
          };
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (prevProps.reset !== this.props.reset || prevProps.edited_id !== this.props.edited_id) {
        this.setState({
          dirty: false,
          saving: false
        });
      } else if (!this.state.dirty && !!this.props.forcedDirty) {
        this.setState({
          dirty: true
        });
      } else if (prevProps.update !== this.props.update) {
        this.setState({
          saving: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props2 = this.props,
        classes = _this$props2.classes,
        module = _this$props2.module,
        back = _this$props2.back,
        add = _this$props2.add,
        addTooltip = _this$props2.addTooltip,
        _this$props2$openDirt = _this$props2.openDirty,
        openDirty = _this$props2$openDirt === void 0 ? false : _this$props2$openDirt,
        save = _this$props2.save,
        canSave = _this$props2.canSave,
        saveTooltip = _this$props2.saveTooltip,
        _this$props2$actions = _this$props2.actions,
        actions = _this$props2$actions === void 0 ? [] : _this$props2$actions,
        _this$props2$fab = _this$props2.fab,
        fab = _this$props2$fab === void 0 ? null : _this$props2$fab,
        _this$props2$fabActio = _this$props2.fabAction,
        fabAction = _this$props2$fabActio === void 0 ? null : _this$props2$fabActio,
        _this$props2$fabToolt = _this$props2.fabTooltip,
        fabTooltip = _this$props2$fabToolt === void 0 ? null : _this$props2$fabToolt,
        title = _this$props2.title,
        _this$props2$titlePar = _this$props2.titleParams,
        titleParams = _this$props2$titlePar === void 0 ? [] : _this$props2$titlePar,
        HeadPanel = _this$props2.HeadPanel,
        headPanelContributionsKey = _this$props2.headPanelContributionsKey,
        Panels = _this$props2.Panels,
        _this$props2$contribu = _this$props2.contributedPanelsKey,
        contributedPanelsKey = _this$props2$contribu === void 0 ? null : _this$props2$contribu,
        _this$props2$addition = _this$props2.additionalTooltips,
        additionalTooltips = _this$props2$addition === void 0 ? null : _this$props2$addition,
        others = _objectWithoutProperties__default["default"](_this$props2, _excluded$7);
      var defaultTooltips = [{
        condition: !this.state.dirty && !!add && !save,
        content: /*#__PURE__*/React__default["default"].createElement("span", null, /*#__PURE__*/React__default["default"].createElement(core.Fab, {
          color: "primary",
          onClick: add
        }, /*#__PURE__*/React__default["default"].createElement(AddIcon__default["default"], null))),
        tooltip: addTooltip || formatMessage(this.props.intl, module, "addTooltip")
      }, {
        condition: (!!this.state.dirty || !!openDirty) && !!save,
        content: /*#__PURE__*/React__default["default"].createElement("span", null, /*#__PURE__*/React__default["default"].createElement(core.Fab, {
          color: "primary",
          disabled: !!this.state.saving || !!canSave && !canSave(),
          onClick: function onClick(e) {
            return _this2.save(_this2.props.edited);
          }
        }, /*#__PURE__*/React__default["default"].createElement(SaveIcon__default["default"], null))),
        tooltip: saveTooltip || formatMessage(this.props.intl, module, "saveTooltip")
      }, {
        condition: (!!this.state.dirty || !!openDirty) && !!fab,
        content: /*#__PURE__*/React__default["default"].createElement("span", null, /*#__PURE__*/React__default["default"].createElement(core.Fab, {
          color: "primary",
          onClick: function onClick(e) {
            return fabAction(_this2.props.edited);
          }
        }, fab)),
        tooltip: fabTooltip
      }];
      var allTooltips = [].concat(_toConsumableArray__default["default"](additionalTooltips || []), defaultTooltips);
      var filteredTooltips = allTooltips.filter(function (tooltip) {
        return tooltip.condition;
      });
      return /*#__PURE__*/React__default["default"].createElement(React.Fragment, null, /*#__PURE__*/React__default["default"].createElement("form", {
        noValidate: true,
        autoComplete: "off"
      }, /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        container: true
      }, /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        item: true,
        xs: 12
      }, /*#__PURE__*/React__default["default"].createElement(core.Paper, {
        className: classes.paper
      }, /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        container: true,
        alignItems: "center",
        direction: "row",
        className: classes.paperHeader
      }, /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        item: true,
        xs: 8
      }, /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        container: true,
        alignItems: "center"
      }, !!back && /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        item: true
      }, /*#__PURE__*/React__default["default"].createElement(core.IconButton, {
        onClick: back
      }, /*#__PURE__*/React__default["default"].createElement(ChevronLeftIcon__default["default"], null))), !!title && /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        item: true
      }, /*#__PURE__*/React__default["default"].createElement(core.Typography, {
        variant: "h6"
      }, /*#__PURE__*/React__default["default"].createElement(FormattedMessage$1, {
        module: module,
        id: title,
        values: titleParams
      }))))), !!actions && /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        item: true,
        xs: 4
      }, /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        container: true,
        justify: "flex-end"
      }, actions.map(function (a, idx) {
        if (!!a.onlyIfDirty && !_this2.state.dirty) return null;
        if (!!a.onlyIfNotDirty && !!_this2.state.dirty) return null;
        return /*#__PURE__*/React__default["default"].createElement(core.Grid, {
          item: true,
          key: "form-action-".concat(idx),
          className: classes.paperHeaderAction
        }, withTooltip(!!a.button ? a.button : /*#__PURE__*/React__default["default"].createElement(core.IconButton, {
          onClick: a.doIt,
          disabled: a === null || a === void 0 ? void 0 : a.disabled
        }, a.icon), a.tooltip));
      })))), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        item: true,
        xs: 12
      }, /*#__PURE__*/React__default["default"].createElement(core.Divider, null)), (HeadPanel || headPanelContributionsKey) && /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        item: true,
        xs: 12
      }, !!HeadPanel && /*#__PURE__*/React__default["default"].createElement(HeadPanel, _extends__default["default"]({
        edited: this.props.edited,
        edited_id: this.props.edited_id
      }, others, {
        onEditedChanged: this.onEditedChanged
      })), !!headPanelContributionsKey && /*#__PURE__*/React__default["default"].createElement(Contributions, _extends__default["default"]({}, others, {
        contributionKey: headPanelContributionsKey
      })))))), !!Panels && Panels.map(function (P, idx) {
        return /*#__PURE__*/React__default["default"].createElement(core.Grid, {
          key: "form_panel_".concat(idx),
          item: true,
          xs: 12
        }, /*#__PURE__*/React__default["default"].createElement(P, _extends__default["default"]({
          edited: _this2.props.edited,
          edited_id: _this2.props.edited_id
        }, others, {
          onEditedChanged: _this2.onEditedChanged
        })));
      }), !!contributedPanelsKey && /*#__PURE__*/React__default["default"].createElement(Contributions, _extends__default["default"]({}, this.props, {
        onEditedChanged: this.onEditedChanged,
        contributionKey: contributedPanelsKey
      }))), /*#__PURE__*/React__default["default"].createElement("div", {
        className: classes.tooltipContainer
      }, filteredTooltips.map(function (item, index) {
        return /*#__PURE__*/React__default["default"].createElement("div", {
          className: classes.flexTooltip,
          key: index
        }, withTooltip(item.content, item.tooltip, index === 0 ? 'top' : 'left'));
      })));
    }
  }]);
}(React.Component);
var Form$1 = withHistory(reactIntl.injectIntl(styles$w.withTheme(styles$w.withStyles(styles$k)(Form))));

function ownKeys$f(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$f(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$f(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$f(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _callSuper$o(t, o, e) { return o = _getPrototypeOf__default["default"](o), _possibleConstructorReturn__default["default"](t, _isNativeReflectConstruct$o() ? Reflect.construct(o, e || [], _getPrototypeOf__default["default"](t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct$o() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$o = function _isNativeReflectConstruct() { return !!t; })(); }
var FormPanel = /*#__PURE__*/function (_Component) {
  function FormPanel() {
    var _this;
    _classCallCheck__default["default"](this, FormPanel);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper$o(this, FormPanel, [].concat(args));
    _defineProperty__default["default"](_this, "state", {
      data: {}
    });
    _defineProperty__default["default"](_this, "updateAttributes", function (updates) {
      var data = _objectSpread$f(_objectSpread$f({}, _this.state.data), updates);
      _this.props.onEditedChanged(data);
    });
    _defineProperty__default["default"](_this, "updateAttribute", function (attr, v) {
      return _this.updateAttributes(_defineProperty__default["default"]({}, attr, v));
    });
    _defineProperty__default["default"](_this, "getAttributes", function () {
      return _this.state.data;
    });
    _defineProperty__default["default"](_this, "getAttribute", function (attr) {
      return !!_this.state.data[attr] ? _this.state.data[attr] : null;
    });
    _defineProperty__default["default"](_this, "updateExts", function (updates) {
      var data = _objectSpread$f({}, _this.state.data);
      updates.forEach(function (update) {
        data["jsonExt"][update.attr] = update.v;
      });
      _this.props.onEditedChanged(data);
    });
    _defineProperty__default["default"](_this, "updateExt", function (attr, v) {
      return _this.updateExts([{
        attr: [attr],
        v: v
      }]);
    });
    return _this;
  }
  _inherits__default["default"](FormPanel, _Component);
  return _createClass__default["default"](FormPanel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState(function (state, props) {
        return {
          data: props.edited
        };
      });
    }
  }, {
    key: "_componentDidUpdate",
    value: function _componentDidUpdate(prevProps, prevState, snapshot) {
      if (prevProps.edited_id && !this.props.edited_id || prevProps.reset !== this.props.reset || !___default["default"].isEqual(prevProps.edited, this.props.edited)) {
        this.setState(function (state, props) {
          return {
            data: props.edited
          };
        });
        return true;
      }
      return false;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      this._componentDidUpdate(prevProps, prevState, snapshot);
    }
  }]);
}(React.Component);

function _callSuper$n(t, o, e) { return o = _getPrototypeOf__default["default"](o), _possibleConstructorReturn__default["default"](t, _isNativeReflectConstruct$n() ? Reflect.construct(o, e || [], _getPrototypeOf__default["default"](t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct$n() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$n = function _isNativeReflectConstruct() { return !!t; })(); }
var PagedDataHandler = /*#__PURE__*/function (_Component) {
  function PagedDataHandler() {
    var _this;
    _classCallCheck__default["default"](this, PagedDataHandler);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper$n(this, PagedDataHandler, [].concat(args));
    _defineProperty__default["default"](_this, "state", {
      page: 0,
      pageSize: _this.props.modulesManager.getConf("fe-core", "core.defaultPageSize", 5),
      afterCursor: null,
      beforeCursor: null
    });
    _defineProperty__default["default"](_this, "query", function () {
      var prms = _this.queryPrms();
      if (!_this.state.pageSize || !prms) return;
      prms.push("first: ".concat(_this.state.pageSize));
      if (!!_this.state.afterCursor) {
        prms.push("after: \"".concat(_this.state.afterCursor, "\""));
      }
      if (!!_this.state.beforeCursor) {
        prms.push("before: \"".concat(_this.state.beforeCursor, "\""));
      }
      _this.props.fetch(_this.props.modulesManager, prms);
    });
    _defineProperty__default["default"](_this, "currentPage", function () {
      return _this.state.page;
    });
    _defineProperty__default["default"](_this, "currentPageSize", function () {
      return _this.state.pageSize;
    });
    _defineProperty__default["default"](_this, "onChangeRowsPerPage", function (cnt) {
      _this.setState({
        pageSize: cnt,
        page: 0,
        afterCursor: null,
        beforeCursor: null
      }, function (e) {
        return _this.query();
      });
    });
    _defineProperty__default["default"](_this, "onChangePage", function (page, nbr) {
      if (nbr > _this.state.page) {
        _this.setState(function (state, props) {
          return {
            page: state.page + 1,
            beforeCursor: null,
            afterCursor: props.pageInfo.endCursor
          };
        }, function (e) {
          return _this.query();
        });
      } else if (nbr < _this.state.page) {
        _this.setState(function (state, props) {
          return {
            page: state.page - 1,
            beforeCursor: props.pageInfo.startCursor,
            afterCursor: null
          };
        }, function (e) {
          return _this.query();
        });
      }
    });
    return _this;
  }
  _inherits__default["default"](PagedDataHandler, _Component);
  return _createClass__default["default"](PagedDataHandler, [{
    key: "render",
    value: function render() {
      return null;
    }
  }]);
}(React.Component);

var useStyles = styles$x.makeStyles(function (theme) {
  return {
    validIcon: {
      color: "green"
    },
    invalidIcon: {
      color: theme.palette.error.main
    }
  };
});

var ValidatedTextInput = function ValidatedTextInput(_ref) {
  var action = _ref.action,
    additionalQueryArgs = _ref.additionalQueryArgs,
    autoFocus = _ref.autoFocus,
    className = _ref.className,
    clearAction = _ref.clearAction,
    codeTakenLabel = _ref.codeTakenLabel,
    inputProps = _ref.inputProps,
    isValid = _ref.isValid,
    isValidating = _ref.isValidating,
    itemQueryIdentifier = _ref.itemQueryIdentifier,
    label = _ref.label,
    module = _ref.module,
    onChange = _ref.onChange,
    placeholder = _ref.placeholder,
    readOnly = _ref.readOnly,
    required = _ref.required,
    setValidAction = _ref.setValidAction,
    shouldValidate = _ref.shouldValidate,
    type = _ref.type,
    validationError = _ref.validationError,
    value = _ref.value,
    invalidValueFormatLabel = _ref.invalidValueFormatLabel,
    invalidValueFormat = _ref.invalidValueFormat;
  var modulesManager = feCore.useModulesManager();
  var classes = useStyles();
  var dispatch = reactRedux.useDispatch();
  var _useTranslations = feCore.useTranslations(module, modulesManager),
    formatMessage = _useTranslations.formatMessage;
  var shouldBeValidated = shouldValidate(value);
  var queryVariables = {};
  var checkValidity = function checkValidity(queryVariables) {
    return dispatch(action(modulesManager, queryVariables));
  };
  var checkError = function checkError() {
    if (validationError || !isValidating && !isValid && value) {
      return formatMessage(codeTakenLabel);
    }
    if (invalidValueFormat) {
      return formatMessage(invalidValueFormatLabel);
    }
    return null;
  };
  var error = checkError();
  React.useEffect(function () {
    if (shouldBeValidated) {
      queryVariables[itemQueryIdentifier] = value;
      if (additionalQueryArgs) Object.entries(additionalQueryArgs).map(function (arg) {
        return queryVariables[arg === null || arg === void 0 ? void 0 : arg[0]] = arg === null || arg === void 0 ? void 0 : arg[1];
      });
      if (value) checkValidity(queryVariables);
      return function () {
        return (!value || isValid) && dispatch(clearAction());
      };
    } else {
      !!setValidAction && dispatch(setValidAction());
      return function () {
        return (!value || isValid) && dispatch(clearAction());
      };
    }
  }, [value]);
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, shouldBeValidated ? /*#__PURE__*/React__default["default"].createElement(feCore.TextInput, {
    module: module,
    autoFocus: autoFocus,
    className: className,
    readOnly: readOnly,
    required: required,
    label: label,
    placeholder: placeholder,
    type: type,
    error: error,
    value: value,
    inputProps: inputProps,
    endAdornment: /*#__PURE__*/React__default["default"].createElement(core.InputAdornment, {
      position: "end",
      className: clsx__default["default"](!error && classes.validIcon, error && classes.invalidIcon)
    }, /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, isValidating && value && /*#__PURE__*/React__default["default"].createElement(core.Box, {
      mr: 1
    }, /*#__PURE__*/React__default["default"].createElement(core.CircularProgress, {
      size: 20
    })), value && !error && /*#__PURE__*/React__default["default"].createElement(CheckOutlinedIcon__default["default"], {
      size: 20
    }), value && error && /*#__PURE__*/React__default["default"].createElement(ErrorOutlineOutlinedIcon__default["default"], {
      size: 20
    }))),
    onChange: _$1.debounce(onChange, DEFAULT_DEBOUNCE_TIME)
  }) : /*#__PURE__*/React__default["default"].createElement(feCore.TextInput, {
    module: module,
    label: label,
    autoFocus: autoFocus,
    value: value,
    readOnly: readOnly,
    error: error,
    required: required,
    type: type,
    onChange: _$1.debounce(onChange, DEFAULT_DEBOUNCE_TIME),
    inputProps: inputProps,
    endAdornment: /*#__PURE__*/React__default["default"].createElement(core.InputAdornment, {
      position: "end",
      className: clsx__default["default"](!error && classes.validIcon, error && classes.invalidIcon)
    }, /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, isValidating && value && /*#__PURE__*/React__default["default"].createElement(core.Box, {
      mr: 1
    }, /*#__PURE__*/React__default["default"].createElement(core.CircularProgress, {
      size: 20
    })), value && !error && /*#__PURE__*/React__default["default"].createElement(CheckOutlinedIcon__default["default"], {
      size: 20
    }), value && error && /*#__PURE__*/React__default["default"].createElement(ErrorOutlineOutlinedIcon__default["default"], {
      size: 20
    })))
  }));
};

var ValidatedTextAreaInput = function ValidatedTextAreaInput(_ref) {
  var action = _ref.action,
    additionalQueryArgs = _ref.additionalQueryArgs,
    autoFocus = _ref.autoFocus,
    className = _ref.className,
    clearAction = _ref.clearAction,
    codeTakenLabel = _ref.codeTakenLabel,
    inputProps = _ref.inputProps,
    isValid = _ref.isValid,
    isValidating = _ref.isValidating,
    itemQueryIdentifier = _ref.itemQueryIdentifier,
    label = _ref.label,
    module = _ref.module,
    onChange = _ref.onChange,
    placeholder = _ref.placeholder,
    readOnly = _ref.readOnly,
    required = _ref.required,
    setValidAction = _ref.setValidAction,
    shouldValidate = _ref.shouldValidate,
    type = _ref.type,
    validationError = _ref.validationError,
    value = _ref.value,
    invalidValueFormatLabel = _ref.invalidValueFormatLabel,
    invalidValueFormat = _ref.invalidValueFormat;
  var modulesManager = feCore.useModulesManager();
  var classes = useStyles();
  var dispatch = reactRedux.useDispatch();
  var _useTranslations = feCore.useTranslations(module, modulesManager),
    formatMessage = _useTranslations.formatMessage;
  var shouldBeValidated = shouldValidate(value);
  var queryVariables = {};
  var checkValidity = function checkValidity(queryVariables) {
    return dispatch(action(modulesManager, queryVariables));
  };
  var checkError = function checkError() {
    if (validationError || !isValidating && !isValid && value) {
      return formatMessage(codeTakenLabel);
    }
    if (invalidValueFormat) {
      return formatMessage(invalidValueFormatLabel);
    }
    return null;
  };
  var error = checkError();
  React.useEffect(function () {
    if (shouldBeValidated) {
      queryVariables[itemQueryIdentifier] = value;
      if (additionalQueryArgs) Object.entries(additionalQueryArgs).map(function (arg) {
        return queryVariables[arg === null || arg === void 0 ? void 0 : arg[0]] = arg === null || arg === void 0 ? void 0 : arg[1];
      });
      if (value) checkValidity(queryVariables);
      return function () {
        return (!value || isValid) && dispatch(clearAction());
      };
    } else {
      !!setValidAction && dispatch(setValidAction());
      return function () {
        return (!value || isValid) && dispatch(clearAction());
      };
    }
  }, [value]);
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, shouldBeValidated ? /*#__PURE__*/React__default["default"].createElement(feCore.TextAreaInput, {
    module: module,
    autoFocus: autoFocus,
    className: className,
    readOnly: readOnly,
    required: required,
    label: label,
    placeholder: placeholder,
    type: type,
    error: error,
    value: value,
    inputProps: inputProps,
    endAdornment: /*#__PURE__*/React__default["default"].createElement(core.InputAdornment, {
      position: "end",
      className: clsx__default["default"](!error && classes.validIcon, error && classes.invalidIcon)
    }, /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, isValidating && value && /*#__PURE__*/React__default["default"].createElement(core.Box, {
      mr: 1
    }, /*#__PURE__*/React__default["default"].createElement(core.CircularProgress, {
      size: 20
    })), value && !error && /*#__PURE__*/React__default["default"].createElement(CheckOutlinedIcon__default["default"], {
      size: 20
    }), value && error && /*#__PURE__*/React__default["default"].createElement(ErrorOutlineOutlinedIcon__default["default"], {
      size: 20
    }))),
    onChange: _$1.debounce(onChange, DEFAULT_DEBOUNCE_TIME)
  }) : /*#__PURE__*/React__default["default"].createElement(feCore.TextAreaInput, {
    module: module,
    label: label,
    autoFocus: autoFocus,
    value: value,
    readOnly: readOnly,
    error: error,
    required: required,
    type: type,
    onChange: _$1.debounce(onChange, DEFAULT_DEBOUNCE_TIME),
    inputProps: inputProps,
    endAdornment: /*#__PURE__*/React__default["default"].createElement(core.InputAdornment, {
      position: "end",
      className: clsx__default["default"](!error && classes.validIcon, error && classes.invalidIcon)
    }, /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, isValidating && value && /*#__PURE__*/React__default["default"].createElement(core.Box, {
      mr: 1
    }, /*#__PURE__*/React__default["default"].createElement(core.CircularProgress, {
      size: 20
    })), value && !error && /*#__PURE__*/React__default["default"].createElement(CheckOutlinedIcon__default["default"], {
      size: 20
    }), value && error && /*#__PURE__*/React__default["default"].createElement(ErrorOutlineOutlinedIcon__default["default"], {
      size: 20
    })))
  }));
};

function _callSuper$m(t, o, e) { return o = _getPrototypeOf__default["default"](o), _possibleConstructorReturn__default["default"](t, _isNativeReflectConstruct$m() ? Reflect.construct(o, e || [], _getPrototypeOf__default["default"](t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct$m() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$m = function _isNativeReflectConstruct() { return !!t; })(); }
var TextAreaInput = /*#__PURE__*/function (_Component) {
  function TextAreaInput() {
    _classCallCheck__default["default"](this, TextAreaInput);
    return _callSuper$m(this, TextAreaInput, arguments);
  }
  _inherits__default["default"](TextAreaInput, _Component);
  return _createClass__default["default"](TextAreaInput, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React__default["default"].createElement(TextInput$1, _extends__default["default"]({
        multiline: true
      }, this.props));
    }
  }]);
}(React.Component);

var _excluded$6 = ["intl", "module", "min", "max", "value", "error", "displayZero", "displayNa", "allowDecimals"];
function ownKeys$e(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$e(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$e(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$e(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _callSuper$l(t, o, e) { return o = _getPrototypeOf__default["default"](o), _possibleConstructorReturn__default["default"](t, _isNativeReflectConstruct$l() ? Reflect.construct(o, e || [], _getPrototypeOf__default["default"](t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct$l() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$l = function _isNativeReflectConstruct() { return !!t; })(); }
var NumberInput = /*#__PURE__*/function (_Component) {
  function NumberInput(props) {
    var _this;
    _classCallCheck__default["default"](this, NumberInput);
    _this = _callSuper$l(this, NumberInput, [props]);
    _defineProperty__default["default"](_this, "handleKeyPress", function (event) {
      var _this$props$allowDeci = _this.props.allowDecimals,
        allowDecimals = _this$props$allowDeci === void 0 ? true : _this$props$allowDeci;
      if (event.key === "." && !allowDecimals) {
        event.preventDefault();
      }
    });
    _defineProperty__default["default"](_this, "formatInput", function (value, displayZero, displayNa, decimal) {
      if (!value) {
        if (displayNa && !_this.state.isEdited) {
          return formatMessage(_this.props.intl, _this.props.module, "core.NumberInput.notApplicable");
        }
        return displayZero && value === 0 ? "0" : "";
      }
      var numericValue = Number(value);
      if (isNaN(numericValue)) return "";
      if (decimal) {
        if (typeof value === "string" && value.includes(".") && value.split(".")[1].length > 2) {
          return parseFloat(value).toFixed(2);
        }
        return value;
      }
      return parseFloat(value);
    });
    _defineProperty__default["default"](_this, "handleNaBlur", function () {
      if ((isNaN(_this.props.value) || _this.props.value === "") && _this.state.isEdited) {
        _this.props.onChange(undefined);
      }
      _this.setState({
        isEdited: false
      });
    });
    _this.state = {
      isEdited: false
    };
    return _this;
  }
  _inherits__default["default"](NumberInput, _Component);
  return _createClass__default["default"](NumberInput, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        intl = _this$props.intl,
        _this$props$module = _this$props.module,
        module = _this$props$module === void 0 ? "core" : _this$props$module,
        _this$props$min = _this$props.min,
        min = _this$props$min === void 0 ? null : _this$props$min,
        _this$props$max = _this$props.max,
        max = _this$props$max === void 0 ? null : _this$props$max,
        value = _this$props.value,
        error = _this$props.error,
        _this$props$displayZe = _this$props.displayZero,
        displayZero = _this$props$displayZe === void 0 ? false : _this$props$displayZe,
        _this$props$displayNa = _this$props.displayNa,
        displayNa = _this$props$displayNa === void 0 ? false : _this$props$displayNa,
        _this$props$allowDeci2 = _this$props.allowDecimals,
        allowDecimals = _this$props$allowDeci2 === void 0 ? true : _this$props$allowDeci2,
        others = _objectWithoutProperties__default["default"](_this$props, _excluded$6);
      var inputProps = _objectSpread$e(_objectSpread$e({}, this.props.inputProps), {}, {
        type: "number",
        onKeyPress: this.handleKeyPress
      });
      var err = error;
      if (min !== null) {
        inputProps.min = min;
        if (value < min) err = formatMessageWithValues(intl, module, "validation.minValue", {
          value: value,
          min: min
        });
      }
      if (max !== null) {
        inputProps.max = max;
        if (value > max) err = formatMessageWithValues(intl, module, "validation.maxValue", {
          value: value,
          max: max
        });
      }
      return /*#__PURE__*/React__default["default"].createElement(TextInput$1, _extends__default["default"]({}, others, {
        module: module,
        value: value,
        error: err,
        inputProps: inputProps,
        formatInput: function formatInput(v) {
          return _this2.formatInput(v, displayZero, displayNa, allowDecimals);
        },
        onFocus: function onFocus() {
          return _this2.setState({
            isEdited: true
          });
        },
        onBlur: function onBlur() {
          return _this2.handleNaBlur();
        }
      }));
    }
  }]);
}(React.Component);
var NumberInput$1 = reactIntl.injectIntl(NumberInput);

var _excluded$5 = ["intl", "inputMinValue"];
var AmountInput = function AmountInput(_ref) {
  var intl = _ref.intl,
    _ref$inputMinValue = _ref.inputMinValue,
    inputMinValue = _ref$inputMinValue === void 0 ? 0 : _ref$inputMinValue,
    props = _objectWithoutProperties__default["default"](_ref, _excluded$5);
  var modulesManager = useModulesManager();
  var position = modulesManager.getConf("fe-core", "AmountInput.currencyPosition", "start");
  if (!["start", "end"].includes(position)) {
    throw new Error("Position ".concat(position, " is not accepted. Only 'start' and 'end' are valid options."));
  }
  var extraProps = _defineProperty__default["default"](_defineProperty__default["default"]({}, "".concat(position, "Adornment"), /*#__PURE__*/React__default["default"].createElement(core.InputAdornment, {
    position: position
  }, intl.formatMessage({
    id: "currency"
  }))), "min", inputMinValue);
  return /*#__PURE__*/React__default["default"].createElement(NumberInput$1, _extends__default["default"]({}, props, extraProps));
};
var AmountInput$1 = reactIntl.injectIntl(AmountInput);

var _excluded$4 = ["classes", "onSelect"];
function _callSuper$k(t, o, e) { return o = _getPrototypeOf__default["default"](o), _possibleConstructorReturn__default["default"](t, _isNativeReflectConstruct$k() ? Reflect.construct(o, e || [], _getPrototypeOf__default["default"](t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct$k() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$k = function _isNativeReflectConstruct() { return !!t; })(); }
var styles$j = function styles(theme) {
  return {
    fakeInput: theme.fakeInput
  };
};
var FakeInput = /*#__PURE__*/function (_Component) {
  function FakeInput() {
    var _this;
    _classCallCheck__default["default"](this, FakeInput);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper$k(this, FakeInput, [].concat(args));
    _defineProperty__default["default"](_this, "_onKeyDown", function (e) {
      if (e.keyCode === 13 && !!_this.props.onSelect) {
        _this.props.onSelect();
        e.stopPropagation();
      }
    });
    return _this;
  }
  _inherits__default["default"](FakeInput, _Component);
  return _createClass__default["default"](FakeInput, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        classes = _this$props.classes;
        _this$props.onSelect;
        var others = _objectWithoutProperties__default["default"](_this$props, _excluded$4);
      return /*#__PURE__*/React__default["default"].createElement(core.FormControl, null, /*#__PURE__*/React__default["default"].createElement(core.InputBase, _extends__default["default"]({
        className: classes.fakeInput,
        inputProps: {
          onKeyDown: function onKeyDown(e) {
            return _this2._onKeyDown(e);
          },
          readOnly: true
        }
      }, others)));
    }
  }]);
}(React.Component);
var FakeInput$1 = styles$w.withTheme(styles$w.withStyles(styles$j)(FakeInput));

function _callSuper$j(t, o, e) { return o = _getPrototypeOf__default["default"](o), _possibleConstructorReturn__default["default"](t, _isNativeReflectConstruct$j() ? Reflect.construct(o, e || [], _getPrototypeOf__default["default"](t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct$j() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$j = function _isNativeReflectConstruct() { return !!t; })(); }
var styles$i = function styles(theme) {
  return {
    panel: {
      margin: "0 !important",
      padding: 0
    },
    drawerHeading: {
      fontSize: theme.menu.drawer.fontSize,
      color: theme.menu.drawer.textColor
    },
    drawerDivider: {
      // width: 100
    },
    menuHeading: {
      fontSize: theme.menu.appBar.fontSize,
      color: theme.palette.text.second,
      paddingTop: theme.menu.appBar.fontSize / 2,
      textTransform: "none"
    },
    appBarMenuPaper: {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0
    },
    popper: {
      zIndex: 1200
    }
  };
};
var Accordion = styles$w.withStyles({
  root: {
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0
    },
    "&:before": {
      display: "none"
    },
    "&$expanded": {
      margin: "auto"
    }
  },
  expanded: {}
})(MuiAccordion__default["default"]);
var AccordionSummary = styles$w.withStyles(function (theme) {
  return {
    root: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.secondary.main,
      minHeight: 56,
      "&$expanded": {
        minHeight: 56
      }
    },
    content: {
      margin: "0",
      padding: "0",
      alignItems: 'center',
      justifyContent: 'start',
      "&$expanded": {
        margin: "0"
      },
      color: theme.palette.secondary.main
    },
    expanded: {}
  };
})(MuiAccordionSummary__default["default"]);
var AccordionDetails = styles$w.withStyles(function (theme) {
  return {
    root: {
      padding: theme.spacing(2),
      display: "block"
    }
  };
})(MuiAccordionDetails__default["default"]);
var MainMenuContribution = /*#__PURE__*/function (_Component) {
  function MainMenuContribution() {
    var _this;
    _classCallCheck__default["default"](this, MainMenuContribution);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper$j(this, MainMenuContribution, [].concat(args));
    _defineProperty__default["default"](_this, "state", {
      expanded: false,
      anchorRef: /*#__PURE__*/React__default["default"].createRef()
    });
    _defineProperty__default["default"](_this, "toggleExpanded", function (event) {
      _this.setState({
        expanded: !_this.state.expanded
      });
    });
    _defineProperty__default["default"](_this, "handleMenuClose", function (event) {
      if (_this.state.anchorRef.current && _this.state.anchorRef.current.contains(event.target)) {
        return;
      }
      _this.toggleExpanded(event);
    });
    _defineProperty__default["default"](_this, "handleMenuSelect", function (e, route) {
      // block normal href only for left click
      if (e.type === 'click') {
        e.stopPropagation();
        e.preventDefault();
      }
      _this.toggleExpanded(e);
      _this.redirect(route);
    });
    _defineProperty__default["default"](_this, "appBarMenu", function () {
      return /*#__PURE__*/React__default["default"].createElement(React.Fragment, null, /*#__PURE__*/React__default["default"].createElement(core.Button, {
        ref: _this.state.anchorRef,
        onClick: _this.toggleExpanded,
        className: _this.props.classes.menuHeading
      }, _this.props.header, /*#__PURE__*/React__default["default"].createElement(ExpandMoreIcon__default["default"], null)), /*#__PURE__*/React__default["default"].createElement(core.Popper, {
        className: _this.props.classes.popper,
        open: _this.state.expanded,
        anchorEl: _this.state.anchorRef.current,
        transition: true
      }, function (_ref) {
        var TransitionProps = _ref.TransitionProps,
          placement = _ref.placement;
        return /*#__PURE__*/React__default["default"].createElement(core.Grow, _extends__default["default"]({}, TransitionProps, {
          style: {
            transformOrigin: placement === "bottom" ? "center top" : "center bottom"
          }
        }), /*#__PURE__*/React__default["default"].createElement(core.Paper, {
          className: _this.props.classes.appBarMenuPaper,
          id: "".concat(_this.props.header, "-menu-list")
        }, /*#__PURE__*/React__default["default"].createElement(core.ClickAwayListener, {
          onClickAway: _this.handleMenuClose
        }, /*#__PURE__*/React__default["default"].createElement(core.MenuList, null, _this.props.entries.map(function (entry, idx) {
          return /*#__PURE__*/React__default["default"].createElement("div", {
            key: "".concat(_this.props.header, "_").concat(idx, "_menuItem")
          }, /*#__PURE__*/React__default["default"].createElement(core.MenuItem, {
            onClick: function onClick(e) {
              return _this.handleMenuSelect(e, entry.route);
            },
            component: "a",
            href: "".concat(process.env.PUBLIC_URL || "").concat(entry.route),
            passHref: true
          }, /*#__PURE__*/React__default["default"].createElement(ListItemIcon__default["default"], null, entry.icon), /*#__PURE__*/React__default["default"].createElement(ListItemText__default["default"], {
            primary: entry.text
          })), entry.withDivider && /*#__PURE__*/React__default["default"].createElement(core.Divider, {
            key: "".concat(_this.props.header, "_").concat(idx, "_divider"),
            className: _this.props.classes.drawerDivider
          }));
        })))));
      }));
    });
    _defineProperty__default["default"](_this, "drawerMenu", function () {
      return /*#__PURE__*/React__default["default"].createElement(Accordion, {
        className: _this.props.classes.panel,
        expanded: _this.state.expanded,
        onChange: _this.toggleExpanded
      }, /*#__PURE__*/React__default["default"].createElement(AccordionSummary, {
        expandIcon: /*#__PURE__*/React__default["default"].createElement(ExpandMoreIcon__default["default"], null),
        id: "".concat(_this.props.header, "-header")
      }, /*#__PURE__*/React__default["default"].createElement(core.IconButton, null, _this.props.icon), /*#__PURE__*/React__default["default"].createElement(Typography__default["default"], {
        className: _this.props.classes.drawerHeading
      }, _this.props.header)), /*#__PURE__*/React__default["default"].createElement(AccordionDetails, null, /*#__PURE__*/React__default["default"].createElement(core.List, {
        component: "nav"
      }, _this.props.entries.map(function (entry, idx) {
        return /*#__PURE__*/React__default["default"].createElement(React.Fragment, {
          key: "".concat(_this.props.header, "_").concat(idx)
        }, /*#__PURE__*/React__default["default"].createElement(ListItem__default["default"], {
          button: true,
          key: "".concat(_this.props.header, "_").concat(idx, "_item"),
          onClick: function onClick(e) {
            _this.redirect(entry.route);
          }
        }, /*#__PURE__*/React__default["default"].createElement(ListItemIcon__default["default"], null, entry.icon), /*#__PURE__*/React__default["default"].createElement(ListItemText__default["default"], {
          primary: entry.text
        })), entry.withDivider && /*#__PURE__*/React__default["default"].createElement(core.Divider, {
          key: "".concat(_this.props.header, "_").concat(idx, "_divider"),
          className: _this.props.classes.drawerDivider
        }));
      }))));
    });
    return _this;
  }
  _inherits__default["default"](MainMenuContribution, _Component);
  return _createClass__default["default"](MainMenuContribution, [{
    key: "redirect",
    value: function redirect(route) {
      var _this$props = this.props,
        modulesManager = _this$props.modulesManager,
        history = _this$props.history;
      _historyPush(modulesManager, history, route);
    }
  }, {
    key: "render",
    value: function render() {
      var menuVariant = this.props.menuVariant;
      if (menuVariant === "AppBar") {
        return this.appBarMenu();
      } else {
        return this.drawerMenu();
      }
    }
  }]);
}(React.Component);
MainMenuContribution.propTypes = {
  header: PropTypes__default["default"].string.isRequired,
  entries: PropTypes__default["default"].array.isRequired,
  history: PropTypes__default["default"].object.isRequired
};
var MainMenuContribution$1 = withModulesManager(styles$w.withTheme(styles$w.withStyles(styles$i)(MainMenuContribution)));

function _callSuper$i(t, o, e) { return o = _getPrototypeOf__default["default"](o), _possibleConstructorReturn__default["default"](t, _isNativeReflectConstruct$i() ? Reflect.construct(o, e || [], _getPrototypeOf__default["default"](t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct$i() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$i = function _isNativeReflectConstruct() { return !!t; })(); }
var styles$h = function styles(theme) {
  return {
    progress: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      align: "center"
    }
  };
};
var ProgressOrError = /*#__PURE__*/function (_Component) {
  function ProgressOrError() {
    _classCallCheck__default["default"](this, ProgressOrError);
    return _callSuper$i(this, ProgressOrError, arguments);
  }
  _inherits__default["default"](ProgressOrError, _Component);
  return _createClass__default["default"](ProgressOrError, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        classes = _this$props.classes,
        progress = _this$props.progress,
        error = _this$props.error,
        size = _this$props.size;
      return /*#__PURE__*/React__default["default"].createElement(React.Fragment, null, !!progress && /*#__PURE__*/React__default["default"].createElement(core.CircularProgress, {
        size: size,
        className: classes.progress
      }), !progress && !!error && /*#__PURE__*/React__default["default"].createElement(Error$2, {
        error: error
      }));
    }
  }]);
}(React.Component);
var ProgressOrError$1 = styles$w.withTheme(styles$w.withStyles(styles$h)(ProgressOrError));

function _callSuper$h(t, o, e) { return o = _getPrototypeOf__default["default"](o), _possibleConstructorReturn__default["default"](t, _isNativeReflectConstruct$h() ? Reflect.construct(o, e || [], _getPrototypeOf__default["default"](t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct$h() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$h = function _isNativeReflectConstruct() { return !!t; })(); }
var ProxyPage = /*#__PURE__*/function (_Component) {
  function ProxyPage() {
    _classCallCheck__default["default"](this, ProxyPage);
    return _callSuper$h(this, ProxyPage, arguments);
  }
  _inherits__default["default"](ProxyPage, _Component);
  return _createClass__default["default"](ProxyPage, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        url = _this$props.url,
        marginTop = _this$props.marginTop,
        marginBottom = _this$props.marginBottom,
        marginLeft = _this$props.marginLeft,
        marginRight = _this$props.marginRight;
      var styles = {
        width: "1px",
        minWidth: "100%",
        height: "100vh",
        marginTop: marginTop || "-68px",
        marginBottom: marginBottom || "0px",
        marginLeft: marginLeft || "0px",
        marginRight: marginRight || "0px"
      };
      return /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("iframe", {
        title: url,
        src: url,
        style: styles
      }));
    }
  }]);
}(React.Component);

function _callSuper$g(t, o, e) { return o = _getPrototypeOf__default["default"](o), _possibleConstructorReturn__default["default"](t, _isNativeReflectConstruct$g() ? Reflect.construct(o, e || [], _getPrototypeOf__default["default"](t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct$g() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$g = function _isNativeReflectConstruct() { return !!t; })(); }
var styles$g = function styles(theme) {
  return {
    table: theme.table,
    tableTitle: theme.table.title,
    tableHeader: theme.table.header,
    tableRow: theme.table.row,
    tableLockedRow: theme.table.lockedRow,
    tableLockedCell: theme.table.lockedCell,
    tableHighlightedRow: theme.table.highlightedRow,
    tableHighlightedCell: theme.table.highlightedCell,
    tableHighlightedAltRow: theme.table.highlightedAltRow,
    tableSecondaryHighlightedRow: theme.table.secondaryHighlightedRow,
    tableSecondaryHighlightedCell: theme.table.secondaryHighlightedCell,
    tableHighlightedAltCell: theme.table.highlightedAltCell,
    tableDisabledRow: theme.table.disabledRow,
    tableDisabledCell: theme.table.disabledCell,
    tableFooter: theme.table.footer,
    pager: theme.table.pager,
    left: {
      textAlign: "left"
    },
    right: {
      textAlign: "right"
    },
    center: {
      textAlign: "center"
    },
    clickable: {
      cursor: "pointer"
    },
    loader: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      background: "rgba(0, 0, 0, 0.12)"
    }
  };
};
var Table$2 = /*#__PURE__*/function (_Component) {
  function Table() {
    var _this;
    _classCallCheck__default["default"](this, Table);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper$g(this, Table, [].concat(args));
    _defineProperty__default["default"](_this, "state", {
      selection: {},
      ordinalNumberFrom: null
    });
    _defineProperty__default["default"](_this, "_atom", function (a) {
      return !!a && a.reduce(function (m, i) {
        m[_this.itemIdentifier(i)] = i;
        return m;
      }, {});
    });
    _defineProperty__default["default"](_this, "itemIdentifier", function (i) {
      if (!!_this.props.itemIdentifier) {
        return _this.props.itemIdentifier(i);
      } else {
        return i.uuid;
      }
    });
    _defineProperty__default["default"](_this, "isSelected", function (i) {
      return !!_this.props.withSelection && !!_this.state.selection[_this.itemIdentifier(i)];
    });
    _defineProperty__default["default"](_this, "select", function (i, e) {
      // block normal href only for left click
      if (e.type === "click") {
        if (!_this.props.withSelection) return;
        var s = _this.state.selection;
        var id = _this.itemIdentifier(i);
        if (!!s[id]) {
          delete s[id];
        } else if (_this.props.withSelection === "multiple") {
          s[id] = i;
        } else {
          s = _defineProperty__default["default"]({}, id, i);
        }
        _this.setState({
          selection: s
        }, function (e) {
          return !!_this.props.onChangeSelection && _this.props.onChangeSelection(Object.values(_this.state.selection));
        });
      }
    });
    _defineProperty__default["default"](_this, "headerAction", function (a) {
      return /*#__PURE__*/React__default["default"].createElement(core.Box, {
        flexGrow: 1
      }, /*#__PURE__*/React__default["default"].createElement(core.Box, {
        display: "flex",
        justifyContent: "flex-end"
      }, a()));
    });
    _defineProperty__default["default"](_this, "calculateOrdinalNumber", function (iidx, isPaginationEnabled, arrayLength) {
      var ordinalNumberFrom = _this.state.ordinalNumberFrom;
      var currentIndex = 0;
      if (isPaginationEnabled) {
        if (isNaN(ordinalNumberFrom)) {
          currentIndex = 0;
        }
        currentIndex = iidx + ordinalNumberFrom;
      } else {
        currentIndex = iidx + 1;
      }
      return currentIndex;
    });
    return _this;
  }
  _inherits__default["default"](Table, _Component);
  return _createClass__default["default"](Table, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      if (this.props.withSelection) {
        this.setState(function (state, props) {
          return {
            selection: _this2._atom(props.selection || [])
          };
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      var _this3 = this;
      if (this.props.withSelection && prevProps.selectAll !== this.props.selectAll) {
        this.setState(function (state, props) {
          return {
            selection: ___default["default"].merge(state.selection, _this3._atom(props.items))
          };
        }, function (e) {
          return !!_this3.props.onChangeSelection && _this3.props.onChangeSelection(Object.values(_this3.state.selection));
        });
      }
      if (this.props.withSelection && prevProps.clearAll !== this.props.clearAll) {
        this.setState({
          selection: {}
        }, function (e) {
          return !!_this3.props.onChangeSelection && _this3.props.onChangeSelection(Object.values(_this3.state.selection));
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;
      var _this$props = this.props,
        intl = _this$props.intl,
        modulesManager = _this$props.modulesManager,
        classes = _this$props.classes,
        module = _this$props.module,
        header = _this$props.header,
        preHeaders = _this$props.preHeaders,
        headers = _this$props.headers,
        _this$props$aligns = _this$props.aligns,
        aligns = _this$props$aligns === void 0 ? [] : _this$props$aligns,
        _this$props$headerSpa = _this$props.headerSpans,
        headerSpans = _this$props$headerSpa === void 0 ? [] : _this$props$headerSpa,
        _this$props$headerAct = _this$props.headerActions,
        headerActions = _this$props$headerAct === void 0 ? [] : _this$props$headerAct,
        _this$props$colSpans = _this$props.colSpans,
        colSpans = _this$props$colSpans === void 0 ? [] : _this$props$colSpans,
        items = _this$props.items,
        itemFormatters = _this$props.itemFormatters,
        _this$props$rowHighli = _this$props.rowHighlighted,
        rowHighlighted = _this$props$rowHighli === void 0 ? null : _this$props$rowHighli,
        _this$props$rowHighli2 = _this$props.rowHighlightedAlt,
        rowHighlightedAlt = _this$props$rowHighli2 === void 0 ? null : _this$props$rowHighli2,
        _this$props$rowSecond = _this$props.rowSecondaryHighlighted,
        rowSecondaryHighlighted = _this$props$rowSecond === void 0 ? null : _this$props$rowSecond,
        _this$props$rowDisabl = _this$props.rowDisabled,
        rowDisabled = _this$props$rowDisabl === void 0 ? null : _this$props$rowDisabl,
        _this$props$rowLocked = _this$props.rowLocked,
        rowLocked = _this$props$rowLocked === void 0 ? null : _this$props$rowLocked,
        _this$props$withPagin = _this$props.withPagination,
        withPagination = _this$props$withPagin === void 0 ? false : _this$props$withPagin,
        _this$props$page = _this$props.page,
        page = _this$props$page === void 0 ? 0 : _this$props$page,
        pageSize = _this$props.pageSize,
        count = _this$props.count,
        size = _this$props.size,
        _this$props$rowsPerPa = _this$props.rowsPerPageOptions,
        rowsPerPageOptions = _this$props$rowsPerPa === void 0 ? [10, 20, 50] : _this$props$rowsPerPa,
        onChangeRowsPerPage = _this$props.onChangeRowsPerPage,
        onChangePage = _this$props.onChangePage,
        onDoubleClick = _this$props.onDoubleClick,
        _this$props$onDelete = _this$props.onDelete,
        onDelete = _this$props$onDelete === void 0 ? null : _this$props$onDelete,
        _this$props$fetching = _this$props.fetching,
        fetching = _this$props$fetching === void 0 ? null : _this$props$fetching,
        _this$props$error = _this$props.error,
        error = _this$props$error === void 0 ? null : _this$props$error,
        _this$props$showOrdin = _this$props.showOrdinalNumber,
        showOrdinalNumber = _this$props$showOrdin === void 0 ? false : _this$props$showOrdin,
        extendHeader = _this$props.extendHeader,
        _this$props$disableDe = _this$props.disableDeleteOnEmptyRow,
        disableDeleteOnEmptyRow = _this$props$disableDe === void 0 ? false : _this$props$disableDe;
      this.state.ordinalNumberFrom;
      var localHeaders = _toConsumableArray__default["default"](headers || []);
      var localPreHeaders = !!preHeaders ? _toConsumableArray__default["default"](preHeaders) : null;
      var localItemFormatters = _toConsumableArray__default["default"](itemFormatters);
      var i = !!headers && headers.length;
      while (localHeaders && i--) {
        if (modulesManager !== null && modulesManager !== void 0 && modulesManager.hideField(module, localHeaders[i])) {
          if (!!localPreHeaders) localPreHeaders.splice(i, 1);
          if (!!aligns && aligns.length > i) aligns.splice(i, 1);
          if (!!headerSpans && headerSpans.length > i) headerSpans.splice(i, 1);
          if (!!headerActions && headerActions.length > i) headerActions.splice(i, 1);
          if (!!colSpans && colSpans.length > i) colSpans.splice(i, 1);
          localHeaders.splice(i, 1);
          localItemFormatters.splice(i, 1);
        }
      }
      if (!!onDelete) {
        if (localPreHeaders) localPreHeaders.push("");
        localHeaders.push("");
        localItemFormatters.push(function (i, idx) {
          var isEmpty = disableDeleteOnEmptyRow ? ___default["default"].isEmpty(i) : false;
          return /*#__PURE__*/React__default["default"].createElement(core.IconButton, {
            disabled: isEmpty,
            onClick: function onClick(e) {
              return onDelete(idx);
            }
          }, /*#__PURE__*/React__default["default"].createElement(DeleteIcon__default["default"], null));
        });
      }
      var rowsPerPage = pageSize || rowsPerPageOptions[0];
      if (showOrdinalNumber) {
        localHeaders.unshift("core.Table.ordinalNumberHeader");
      }
      return /*#__PURE__*/React__default["default"].createElement(core.Box, {
        position: "relative",
        overflow: "auto"
      }, header && /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        container: true,
        alignItems: "center",
        justify: "space-between",
        className: classes.tableTitle
      }, extendHeader ? /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        item: true,
        xs: 6
      }, /*#__PURE__*/React__default["default"].createElement(core.Typography, {
        variant: "h6"
      }, header)), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        item: true,
        container: true,
        direction: "row",
        alignItems: "center",
        justify: "space-between",
        xs: 6
      }, extendHeader && extendHeader())) : /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        item: true,
        xs: 12
      }, /*#__PURE__*/React__default["default"].createElement(core.Typography, {
        variant: "h6"
      }, header))), /*#__PURE__*/React__default["default"].createElement(core.Divider, null), /*#__PURE__*/React__default["default"].createElement(core.Table, {
        className: classes.table,
        size: size
      }, !!localPreHeaders && localPreHeaders.length > 0 && /*#__PURE__*/React__default["default"].createElement(core.TableHead, null, /*#__PURE__*/React__default["default"].createElement(core.TableRow, null, localPreHeaders.map(function (h, idx) {
        if (headerSpans.length > idx && !headerSpans[idx]) return null;
        return /*#__PURE__*/React__default["default"].createElement(core.TableCell, {
          colSpan: headerSpans.length > idx ? headerSpans[idx] : 1,
          className: clsx__default["default"](classes.tableHeader, aligns.length > idx && classes[aligns[idx]]),
          key: "preh-".concat(idx)
        }, !!h && h);
      }))), !!localHeaders && localHeaders.length > 0 && /*#__PURE__*/React__default["default"].createElement(core.TableHead, null, /*#__PURE__*/React__default["default"].createElement(core.TableRow, null, localHeaders.map(function (h, idx) {
        if (headerSpans.length > idx && !headerSpans[idx]) return null;
        return /*#__PURE__*/React__default["default"].createElement(core.TableCell, {
          colSpan: headerSpans.length > idx ? headerSpans[idx] : 1,
          key: "h-".concat(idx)
        }, !!h && /*#__PURE__*/React__default["default"].createElement(core.Box, {
          style: {
            width: "100%",
            cursor: headerActions.length > idx && !!headerActions[idx][0] ? "pointer" : ""
          },
          onClick: headerActions.length > idx ? headerActions[idx][0] : null,
          display: "flex",
          className: classes.tableHeader,
          alignItems: "center",
          justifyContent: aligns.length > idx ? aligns[idx] : "left"
        }, /*#__PURE__*/React__default["default"].createElement(core.Box, null, typeof h === "function" ? /*#__PURE__*/React__default["default"].createElement(core.Box, null, function () {
          return h(_this4.state, _this4.props);
        }) : /*#__PURE__*/React__default["default"].createElement(FormattedMessage$1, {
          module: module,
          id: h
        })), headerActions.length > idx ? _this4.headerAction(headerActions[idx][1]) : null));
      }))), /*#__PURE__*/React__default["default"].createElement(core.TableBody, null, items && items.length > 0 && items.map(function (i, iidx) {
        return /*#__PURE__*/React__default["default"].createElement(core.TableRow, {
          key: iidx,
          selected: _this4.isSelected(i),
          onClick: function onClick(e) {
            return _this4.select(i, e);
          },
          onContextMenu: onDoubleClick ? function () {
            return onDoubleClick(i, true);
          } : undefined,
          onDoubleClick: onDoubleClick ? function () {
            return onDoubleClick(i);
          } : undefined,
          className: clsx__default["default"](classes.tableRow, !!rowLocked && rowLocked(i) ? classes.tableLockedRow : null, !!rowHighlighted && rowHighlighted(i) ? classes.tableHighlightedRow : null, !!rowHighlightedAlt && rowHighlightedAlt(i) ? classes.tableHighlightedAltRow : null, !!rowSecondaryHighlighted && rowSecondaryHighlighted(i) ? classes.tableSecondaryHighlightedRow : null, !!rowDisabled && rowDisabled(i) ? classes.tableDisabledRow : null, !!onDoubleClick && classes.clickable)
        }, showOrdinalNumber && /*#__PURE__*/React__default["default"].createElement(core.TableCell, {
          className: clsx__default["default"](!!rowLocked && rowLocked(i) ? classes.tableLockedCell : null, !!rowHighlighted && rowHighlighted(i) ? classes.tableHighlightedCell : null, !!rowHighlightedAlt && rowHighlightedAlt(i) ? classes.tableHighlightedAltCell : null, !!rowSecondaryHighlighted && rowSecondaryHighlighted(i) ? classes.tableSecondaryHighlightedCell : null, !!rowDisabled && rowDisabled(i) ? classes.tableDisabledCell : null, aligns.length > 0 && classes[aligns[0]]),
          key: "v-".concat(_this4.calculateOrdinalNumber(iidx, withPagination, items.length), "-0")
        }, /*#__PURE__*/React__default["default"].createElement("span", null, _this4.calculateOrdinalNumber(iidx, withPagination, items.length))), localItemFormatters && localItemFormatters.map(function (f, fidx) {
          if (colSpans.length > fidx && !colSpans[fidx]) return null;
          // NOTE: The 'f' function can explicitly be set to null, enabling the option to omit 
          // a column  and suppress its display under specific conditions.
          if (f === null) return null;
          return /*#__PURE__*/React__default["default"].createElement(core.TableCell, {
            colSpan: colSpans.length > fidx ? colSpans[fidx] : 1,
            className: clsx__default["default"](!!rowLocked && rowLocked(i) ? classes.tableLockedCell : null, !!rowHighlighted && rowHighlighted(i) ? classes.tableHighlightedCell : null, !!rowHighlightedAlt && rowHighlightedAlt(i) ? classes.tableHighlightedAltCell : null, !!rowSecondaryHighlighted && rowSecondaryHighlighted(i) ? classes.tableSecondaryHighlightedCell : null, !!rowDisabled && rowDisabled(i) ? classes.tableDisabledCell : null, aligns.length > fidx && classes[aligns[fidx]]),
            key: "v-".concat(iidx, "-").concat(fidx)
          }, f(i, iidx));
        }));
      })), !!withPagination && !!count && /*#__PURE__*/React__default["default"].createElement(core.TableFooter, {
        className: classes.tableFooter
      }, /*#__PURE__*/React__default["default"].createElement(core.TableRow, null, /*#__PURE__*/React__default["default"].createElement(core.TablePagination, {
        className: classes.pager,
        colSpan: localItemFormatters.length,
        labelRowsPerPage: formatMessage(intl, "core", "rowsPerPage"),
        labelDisplayedRows: function labelDisplayedRows(_ref) {
          var from = _ref.from,
            to = _ref.to,
            count = _ref.count;
          if (_this4.state.ordinalNumberFrom !== from) _this4.setState({
            ordinalNumberFrom: from
          });
          return "".concat(from, "-").concat(to, " ").concat(formatMessageWithValues(intl, "core", "ofPages"), " ").concat(count);
        },
        count: count,
        page: page,
        rowsPerPage: rowsPerPage,
        rowsPerPageOptions: rowsPerPageOptions,
        onRowsPerPageChange: function onRowsPerPageChange(e) {
          return onChangeRowsPerPage(e.target.value);
        },
        onPageChange: onChangePage
      })))), (fetching || error) && /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        className: classes.loader,
        container: true,
        justifyContent: "center",
        alignItems: "center"
      }, /*#__PURE__*/React__default["default"].createElement(ProgressOrError$1, {
        progress: (items === null || items === void 0 ? void 0 : items.length) && fetching,
        error: error
      }), " "));
    }
  }]);
}(React.Component);
var Table$3 = withModulesManager(reactIntl.injectIntl(styles$w.withTheme(styles$w.withStyles(styles$g)(Table$2))));

function _callSuper$f(t, o, e) { return o = _getPrototypeOf__default["default"](o), _possibleConstructorReturn__default["default"](t, _isNativeReflectConstruct$f() ? Reflect.construct(o, e || [], _getPrototypeOf__default["default"](t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct$f() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$f = function _isNativeReflectConstruct() { return !!t; })(); }
var styles$f = function styles(theme) {
  return {
    table: theme.table,
    tableTitle: theme.table.title,
    tableHeader: theme.table.header,
    tableRow: theme.table.row,
    tableLockedRow: theme.table.lockedRow,
    tableLockedCell: theme.table.lockedCell,
    tableHighlightedRow: theme.table.highlightedRow,
    tableHighlightedCell: theme.table.highlightedCell,
    tableHighlightedAltRow: theme.table.highlightedAltRow,
    tableHighlightedAltCell: theme.table.highlightedAltCell,
    tableDisabledRow: theme.table.disabledRow,
    tableDisabledCell: theme.table.disabledCell,
    tableFooter: theme.table.footer,
    pager: theme.table.pager,
    left: {
      textAlign: "left"
    },
    right: {
      textAlign: "right"
    },
    center: {
      textAlign: "center"
    },
    clickable: {
      cursor: "pointer"
    },
    loader: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      background: "rgba(0, 0, 0, 0.12)"
    }
  };
};
var Table$1 = /*#__PURE__*/function (_Component) {
  function Table() {
    var _this;
    _classCallCheck__default["default"](this, Table);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper$f(this, Table, [].concat(args));
    _defineProperty__default["default"](_this, "state", {
      selection: {}
    });
    _defineProperty__default["default"](_this, "_atom", function (a) {
      return !!a && a.reduce(function (m, i) {
        m[_this.itemIdentifier(i)] = i;
        return m;
      }, {});
    });
    _defineProperty__default["default"](_this, "itemIdentifier", function (i) {
      if (!!_this.props.itemIdentifier) {
        return _this.props.itemIdentifier(i);
      } else {
        return i.uuid;
      }
    });
    _defineProperty__default["default"](_this, "isSelected", function (i) {
      return !!_this.props.withSelection && !!_this.state.selection[_this.itemIdentifier(i)];
    });
    _defineProperty__default["default"](_this, "select", function (i) {
      if (!_this.props.withSelection) return;
      var s = _this.state.selection;
      var id = _this.itemIdentifier(i);
      if (!!s[id]) {
        delete s[id];
      } else if (_this.props.withSelection === "multiple") {
        s[id] = i;
      } else {
        s = _defineProperty__default["default"]({}, id, i);
      }
      _this.setState({
        selection: s
      }, function (e) {
        return !!_this.props.onChangeSelection && _this.props.onChangeSelection(Object.values(_this.state.selection));
      });
    });
    _defineProperty__default["default"](_this, "headerAction", function (a) {
      return /*#__PURE__*/React__default["default"].createElement(core.Box, {
        flexGrow: 1
      }, /*#__PURE__*/React__default["default"].createElement(core.Box, {
        display: "flex",
        justifyContent: "flex-end"
      }, a()));
    });
    return _this;
  }
  _inherits__default["default"](Table, _Component);
  return _createClass__default["default"](Table, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      if (this.props.withSelection) {
        this.setState(function (state, props) {
          return {
            selection: _this2._atom(props.selection || [])
          };
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      var _this3 = this;
      if (this.props.withSelection && prevProps.selectAll !== this.props.selectAll) {
        this.setState(function (state, props) {
          return {
            selection: ___default["default"].merge(state.selection, _this3._atom(props.items))
          };
        }, function (e) {
          return !!_this3.props.onChangeSelection && _this3.props.onChangeSelection(Object.values(_this3.state.selection));
        });
      }
      if (this.props.withSelection && prevProps.clearAll !== this.props.clearAll) {
        this.setState({
          selection: {}
        }, function (e) {
          return !!_this3.props.onChangeSelection && _this3.props.onChangeSelection(Object.values(_this3.state.selection));
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        intl = _this$props.intl,
        modulesManager = _this$props.modulesManager,
        classes = _this$props.classes,
        module = _this$props.module,
        header = _this$props.header,
        preHeaders = _this$props.preHeaders,
        headers = _this$props.headers,
        _this$props$aligns = _this$props.aligns,
        aligns = _this$props$aligns === void 0 ? [] : _this$props$aligns,
        _this$props$headerSpa = _this$props.headerSpans,
        headerSpans = _this$props$headerSpa === void 0 ? [] : _this$props$headerSpa,
        _this$props$headerAct = _this$props.headerActions,
        headerActions = _this$props$headerAct === void 0 ? [] : _this$props$headerAct,
        _this$props$colSpans = _this$props.colSpans,
        colSpans = _this$props$colSpans === void 0 ? [] : _this$props$colSpans,
        items = _this$props.items,
        itemFormatters = _this$props.itemFormatters,
        _this$props$rowHighli = _this$props.rowHighlighted,
        rowHighlighted = _this$props$rowHighli === void 0 ? null : _this$props$rowHighli,
        _this$props$rowHighli2 = _this$props.rowHighlightedAlt,
        rowHighlightedAlt = _this$props$rowHighli2 === void 0 ? null : _this$props$rowHighli2,
        _this$props$rowDisabl = _this$props.rowDisabled,
        rowDisabled = _this$props$rowDisabl === void 0 ? null : _this$props$rowDisabl,
        _this$props$rowLocked = _this$props.rowLocked,
        rowLocked = _this$props$rowLocked === void 0 ? null : _this$props$rowLocked,
        _this$props$withPagin = _this$props.withPagination,
        withPagination = _this$props$withPagin === void 0 ? false : _this$props$withPagin,
        _this$props$page = _this$props.page,
        page = _this$props$page === void 0 ? 0 : _this$props$page,
        pageSize = _this$props.pageSize,
        count = _this$props.count,
        size = _this$props.size,
        _this$props$rowsPerPa = _this$props.rowsPerPageOptions,
        rowsPerPageOptions = _this$props$rowsPerPa === void 0 ? [10, 20, 50] : _this$props$rowsPerPa,
        onChangeRowsPerPage = _this$props.onChangeRowsPerPage,
        onChangePage = _this$props.onChangePage;
        _this$props.onDoubleClick;
        var _this$props$onDelete = _this$props.onDelete,
        onDelete = _this$props$onDelete === void 0 ? null : _this$props$onDelete,
        _this$props$fetching = _this$props.fetching,
        fetching = _this$props$fetching === void 0 ? null : _this$props$fetching,
        _this$props$error = _this$props.error,
        error = _this$props$error === void 0 ? null : _this$props$error;
        _this$props.forReview;
        var subServicesItemsFormatters = _this$props.subServicesItemsFormatters,
        subServicesItemsFormattersReview = _this$props.subServicesItemsFormattersReview,
        subServiceHeaders = _this$props.subServiceHeaders;
      var localHeaders = _toConsumableArray__default["default"](headers || []);
      var localSubServiceHeaders = _toConsumableArray__default["default"](subServiceHeaders || []);
      var localPreHeaders = !!preHeaders ? _toConsumableArray__default["default"](preHeaders) : null;
      var localItemFormatters = _toConsumableArray__default["default"](itemFormatters);
      var localSubServicesItemsFormatters = _toConsumableArray__default["default"](subServicesItemsFormatters);
      var localsubServicesItemsFormattersReview = _toConsumableArray__default["default"](subServicesItemsFormattersReview);
      var i = !!headers && headers.length;
      while (localHeaders && i--) {
        if (modulesManager !== null && modulesManager !== void 0 && modulesManager.hideField(module, localHeaders[i])) {
          if (!!localPreHeaders) localPreHeaders.splice(i, 1);
          if (!!aligns && aligns.length > i) aligns.splice(i, 1);
          if (!!headerSpans && headerSpans.length > i) headerSpans.splice(i, 1);
          if (!!headerActions && headerActions.length > i) headerActions.splice(i, 1);
          if (!!colSpans && colSpans.length > i) colSpans.splice(i, 1);
          localHeaders.splice(i, 1);
          localItemFormatters.splice(i, 1);
        }
      }
      if (!!onDelete) {
        if (localPreHeaders) localPreHeaders.push("");
        localHeaders.push("");
        localItemFormatters.push(function (i, idx) {
          return /*#__PURE__*/React__default["default"].createElement(core.IconButton, {
            onClick: function onClick(e) {
              return onDelete(idx);
            }
          }, /*#__PURE__*/React__default["default"].createElement(DeleteIcon__default["default"], null));
        });
      }
      var rowsPerPage = pageSize || rowsPerPageOptions[0];
      return /*#__PURE__*/React__default["default"].createElement(core.Box, {
        position: "relative",
        overflow: "auto"
      }, header && /*#__PURE__*/React__default["default"].createElement(React.Fragment, null, /*#__PURE__*/React__default["default"].createElement(core.Typography, {
        className: classes.tableTitle
      }, header), /*#__PURE__*/React__default["default"].createElement(core.Divider, null)), /*#__PURE__*/React__default["default"].createElement(core.Table, {
        className: classes.table,
        size: size
      }, !!localPreHeaders && localPreHeaders.length > 0 && /*#__PURE__*/React__default["default"].createElement("table", {
        style: {
          width: "100%"
        }
      }, /*#__PURE__*/React__default["default"].createElement("tr", null, localPreHeaders.map(function (h, idx) {
        if (headerSpans.length > idx && !headerSpans[idx]) return null;
        return /*#__PURE__*/React__default["default"].createElement(core.TableCell, {
          colSpan: headerSpans.length > idx ? headerSpans[idx] : 1,
          className: clsx__default["default"](classes.tableHeader, aligns.length > idx && classes[aligns[idx]]),
          key: "preh-".concat(idx)
        }, !!h && h);
      }))), /*#__PURE__*/React__default["default"].createElement(core.TableBody, null, items && items.length > 0 && items.map(function (i, iidx) {
        if (i.claimlinkedService != undefined) {
          console.log(i);
          return /*#__PURE__*/React__default["default"].createElement(core.Box, {
            style: {
              width: "100%"
            }
          }, /*#__PURE__*/React__default["default"].createElement("table", {
            style: {
              width: "100%"
            }
          }, items.length - iidx == items.length && /*#__PURE__*/React__default["default"].createElement("tr", null, /*#__PURE__*/React__default["default"].createElement(core.TableCell, null, /*#__PURE__*/React__default["default"].createElement(FormattedMessage$1, {
            module: module,
            id: localHeaders[0]
          })), /*#__PURE__*/React__default["default"].createElement(core.TableCell, null, /*#__PURE__*/React__default["default"].createElement(FormattedMessage$1, {
            module: module,
            id: localHeaders[1]
          })), /*#__PURE__*/React__default["default"].createElement(core.TableCell, null, /*#__PURE__*/React__default["default"].createElement(FormattedMessage$1, {
            module: module,
            id: localHeaders[2]
          })), /*#__PURE__*/React__default["default"].createElement(core.TableCell, null, /*#__PURE__*/React__default["default"].createElement(FormattedMessage$1, {
            module: module,
            id: localHeaders[3]
          }))), /*#__PURE__*/React__default["default"].createElement("tr", null, localItemFormatters && localItemFormatters.map(function (f, fidx) {
            if (colSpans.length > fidx && !colSpans[fidx]) return null;
            return /*#__PURE__*/React__default["default"].createElement(core.TableCell, {
              colSpan: colSpans.length > fidx ? colSpans[fidx] : 1,
              className: clsx__default["default"](!!rowLocked && rowLocked(i) ? classes.tableLockedCell : null, !!rowHighlighted && rowHighlighted(i) ? classes.tableHighlightedCell : null, !!rowHighlightedAlt && rowHighlightedAlt(i) ? classes.tableHighlightedAltCell : null, !!rowDisabled && rowDisabled(i) ? classes.tableDisabledCell : null, aligns.length > fidx && classes[aligns[fidx]]),
              key: "v-".concat(iidx, "-").concat(fidx)
            }, f(i, iidx));
          }))), localItemFormatters[0](i, iidx).props.children.props.value != undefined && localItemFormatters[0](i, iidx).props.children.props.value.packagetype != undefined && localItemFormatters[0](i, iidx).props.children.props.value.packagetype !== "S" && /*#__PURE__*/React__default["default"].createElement("table", {
            style: {
              marginTop: 10,
              width: "90%"
            }
          }, /*#__PURE__*/React__default["default"].createElement("tr", null, /*#__PURE__*/React__default["default"].createElement(core.TableCell, null, /*#__PURE__*/React__default["default"].createElement(FormattedMessage$1, {
            module: module,
            id: localSubServiceHeaders[0]
          })), /*#__PURE__*/React__default["default"].createElement(core.TableCell, null, /*#__PURE__*/React__default["default"].createElement(FormattedMessage$1, {
            module: module,
            id: localSubServiceHeaders[1]
          })), /*#__PURE__*/React__default["default"].createElement(core.TableCell, null, /*#__PURE__*/React__default["default"].createElement(FormattedMessage$1, {
            module: module,
            id: localSubServiceHeaders[2]
          })), /*#__PURE__*/React__default["default"].createElement(core.TableCell, null, /*#__PURE__*/React__default["default"].createElement(FormattedMessage$1, {
            module: module,
            id: localSubServiceHeaders[3]
          }))), localsubServicesItemsFormattersReview && localsubServicesItemsFormattersReview.map(function (s, sfidx) {
            return s(i, iidx);
          })));
        } else {
          return /*#__PURE__*/React__default["default"].createElement(core.Box, {
            style: {
              width: "100%"
            }
          }, /*#__PURE__*/React__default["default"].createElement("table", {
            style: {
              width: "100%"
            }
          }, items.length - iidx == items.length && /*#__PURE__*/React__default["default"].createElement("tr", null, /*#__PURE__*/React__default["default"].createElement(core.TableCell, null, /*#__PURE__*/React__default["default"].createElement(FormattedMessage$1, {
            module: module,
            id: localHeaders[0]
          })), /*#__PURE__*/React__default["default"].createElement(core.TableCell, null, /*#__PURE__*/React__default["default"].createElement(FormattedMessage$1, {
            module: module,
            id: localHeaders[1]
          })), /*#__PURE__*/React__default["default"].createElement(core.TableCell, null, /*#__PURE__*/React__default["default"].createElement(FormattedMessage$1, {
            module: module,
            id: localHeaders[2]
          })), /*#__PURE__*/React__default["default"].createElement(core.TableCell, null, /*#__PURE__*/React__default["default"].createElement(FormattedMessage$1, {
            module: module,
            id: localHeaders[3]
          }))), /*#__PURE__*/React__default["default"].createElement("tr", null, localItemFormatters && localItemFormatters.map(function (f, fidx) {
            if (colSpans.length > fidx && !colSpans[fidx]) return null;
            return /*#__PURE__*/React__default["default"].createElement(core.TableCell, {
              colSpan: colSpans.length > fidx ? colSpans[fidx] : 1,
              className: clsx__default["default"](!!rowLocked && rowLocked(i) ? classes.tableLockedCell : null, !!rowHighlighted && rowHighlighted(i) ? classes.tableHighlightedCell : null, !!rowHighlightedAlt && rowHighlightedAlt(i) ? classes.tableHighlightedAltCell : null, !!rowDisabled && rowDisabled(i) ? classes.tableDisabledCell : null, aligns.length > fidx && classes[aligns[fidx]]),
              key: "v-".concat(iidx, "-").concat(fidx)
            }, f(i, iidx));
          }))), localItemFormatters[0](i, iidx).props.children.props.value != undefined && localItemFormatters[0](i, iidx).props.children.props.value.packagetype != undefined && localItemFormatters[0](i, iidx).props.children.props.value.packagetype !== "S" && /*#__PURE__*/React__default["default"].createElement("table", {
            style: {
              marginTop: 10,
              width: "90%"
            }
          }, /*#__PURE__*/React__default["default"].createElement("tr", null, /*#__PURE__*/React__default["default"].createElement(core.TableCell, null, /*#__PURE__*/React__default["default"].createElement(FormattedMessage$1, {
            module: module,
            id: localSubServiceHeaders[0]
          })), /*#__PURE__*/React__default["default"].createElement(core.TableCell, null, /*#__PURE__*/React__default["default"].createElement(FormattedMessage$1, {
            module: module,
            id: localSubServiceHeaders[1]
          })), /*#__PURE__*/React__default["default"].createElement(core.TableCell, null, /*#__PURE__*/React__default["default"].createElement(FormattedMessage$1, {
            module: module,
            id: localSubServiceHeaders[2]
          })), /*#__PURE__*/React__default["default"].createElement(core.TableCell, null, /*#__PURE__*/React__default["default"].createElement(FormattedMessage$1, {
            module: module,
            id: localSubServiceHeaders[3]
          }))), localSubServicesItemsFormatters && localSubServicesItemsFormatters.map(function (s, sfidx) {
            return s(i, iidx);
          })));
        }
      })), !!withPagination && !!count && /*#__PURE__*/React__default["default"].createElement(core.TableFooter, {
        className: classes.tableFooter
      }, /*#__PURE__*/React__default["default"].createElement(core.TableRow, null, /*#__PURE__*/React__default["default"].createElement(core.TablePagination, {
        className: classes.pager,
        colSpan: localItemFormatters.length,
        labelRowsPerPage: formatMessage(intl, "core", "rowsPerPage"),
        labelDisplayedRows: function labelDisplayedRows(_ref) {
          var from = _ref.from,
            to = _ref.to,
            count = _ref.count;
          return "".concat(from, "-").concat(to, " ").concat(formatMessageWithValues(intl, "core", "ofPages"), " ").concat(count);
        },
        count: count,
        page: page,
        rowsPerPage: rowsPerPage,
        rowsPerPageOptions: rowsPerPageOptions,
        onRowsPerPageChange: function onRowsPerPageChange(e) {
          return onChangeRowsPerPage(e.target.value);
        },
        onPageChange: onChangePage
      })))), (fetching || error) && /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        className: classes.loader,
        container: true,
        justifyContent: "center",
        alignItems: "center"
      }, /*#__PURE__*/React__default["default"].createElement(ProgressOrError$1, {
        progress: (items === null || items === void 0 ? void 0 : items.length) && fetching,
        error: error
      }), " "));
    }
  }]);
}(React.Component);
var TableService = withModulesManager(reactIntl.injectIntl(styles$w.withTheme(styles$w.withStyles(styles$f)(Table$1))));

function _callSuper$e(t, o, e) { return o = _getPrototypeOf__default["default"](o), _possibleConstructorReturn__default["default"](t, _isNativeReflectConstruct$e() ? Reflect.construct(o, e || [], _getPrototypeOf__default["default"](t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct$e() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$e = function _isNativeReflectConstruct() { return !!t; })(); }
var styles$e = function styles(theme) {
  return {
    table: theme.table,
    tableTitle: theme.table.title,
    tableHeader: theme.table.header,
    tableRow: theme.table.row,
    tableLockedRow: theme.table.lockedRow,
    tableLockedCell: theme.table.lockedCell,
    tableHighlightedRow: theme.table.highlightedRow,
    tableHighlightedCell: theme.table.highlightedCell,
    tableHighlightedAltRow: theme.table.highlightedAltRow,
    tableHighlightedAltCell: theme.table.highlightedAltCell,
    tableDisabledRow: theme.table.disabledRow,
    tableDisabledCell: theme.table.disabledCell,
    tableFooter: theme.table.footer,
    pager: theme.table.pager,
    left: {
      textAlign: "left"
    },
    right: {
      textAlign: "right"
    },
    center: {
      textAlign: "center"
    },
    clickable: {
      cursor: "pointer"
    },
    loader: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      background: "rgba(0, 0, 0, 0.12)"
    }
  };
};
var Table = /*#__PURE__*/function (_Component) {
  function Table() {
    var _this;
    _classCallCheck__default["default"](this, Table);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper$e(this, Table, [].concat(args));
    _defineProperty__default["default"](_this, "state", {
      selection: {}
    });
    _defineProperty__default["default"](_this, "_atom", function (a) {
      return !!a && a.reduce(function (m, i) {
        m[_this.itemIdentifier(i)] = i;
        return m;
      }, {});
    });
    _defineProperty__default["default"](_this, "itemIdentifier", function (i) {
      if (!!_this.props.itemIdentifier) {
        return _this.props.itemIdentifier(i);
      } else {
        return i.uuid;
      }
    });
    _defineProperty__default["default"](_this, "isSelected", function (i) {
      return !!_this.props.withSelection && !!_this.state.selection[_this.itemIdentifier(i)];
    });
    _defineProperty__default["default"](_this, "select", function (i) {
      if (!_this.props.withSelection) return;
      var s = _this.state.selection;
      var id = _this.itemIdentifier(i);
      if (!!s[id]) {
        delete s[id];
      } else if (_this.props.withSelection === "multiple") {
        s[id] = i;
      } else {
        s = _defineProperty__default["default"]({}, id, i);
      }
      _this.setState({
        selection: s
      }, function (e) {
        return !!_this.props.onChangeSelection && _this.props.onChangeSelection(Object.values(_this.state.selection));
      });
    });
    _defineProperty__default["default"](_this, "headerAction", function (a) {
      return /*#__PURE__*/React__default["default"].createElement(core.Box, {
        flexGrow: 1
      }, /*#__PURE__*/React__default["default"].createElement(core.Box, {
        display: "flex",
        justifyContent: "flex-end"
      }, a()));
    });
    return _this;
  }
  _inherits__default["default"](Table, _Component);
  return _createClass__default["default"](Table, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      if (this.props.withSelection) {
        this.setState(function (state, props) {
          return {
            selection: _this2._atom(props.selection || [])
          };
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      var _this3 = this;
      if (this.props.withSelection && prevProps.selectAll !== this.props.selectAll) {
        this.setState(function (state, props) {
          return {
            selection: ___default["default"].merge(state.selection, _this3._atom(props.items))
          };
        }, function (e) {
          return !!_this3.props.onChangeSelection && _this3.props.onChangeSelection(Object.values(_this3.state.selection));
        });
      }
      if (this.props.withSelection && prevProps.clearAll !== this.props.clearAll) {
        this.setState({
          selection: {}
        }, function (e) {
          return !!_this3.props.onChangeSelection && _this3.props.onChangeSelection(Object.values(_this3.state.selection));
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        intl = _this$props.intl,
        modulesManager = _this$props.modulesManager,
        classes = _this$props.classes,
        module = _this$props.module,
        header = _this$props.header,
        preHeaders = _this$props.preHeaders,
        headers = _this$props.headers,
        _this$props$aligns = _this$props.aligns,
        aligns = _this$props$aligns === void 0 ? [] : _this$props$aligns,
        _this$props$headerSpa = _this$props.headerSpans,
        headerSpans = _this$props$headerSpa === void 0 ? [] : _this$props$headerSpa,
        _this$props$headerAct = _this$props.headerActions,
        headerActions = _this$props$headerAct === void 0 ? [] : _this$props$headerAct,
        _this$props$colSpans = _this$props.colSpans,
        colSpans = _this$props$colSpans === void 0 ? [] : _this$props$colSpans,
        items = _this$props.items,
        itemFormatters = _this$props.itemFormatters,
        _this$props$rowHighli = _this$props.rowHighlighted,
        rowHighlighted = _this$props$rowHighli === void 0 ? null : _this$props$rowHighli,
        _this$props$rowHighli2 = _this$props.rowHighlightedAlt,
        rowHighlightedAlt = _this$props$rowHighli2 === void 0 ? null : _this$props$rowHighli2,
        _this$props$rowDisabl = _this$props.rowDisabled,
        rowDisabled = _this$props$rowDisabl === void 0 ? null : _this$props$rowDisabl,
        _this$props$rowLocked = _this$props.rowLocked,
        rowLocked = _this$props$rowLocked === void 0 ? null : _this$props$rowLocked,
        _this$props$withPagin = _this$props.withPagination,
        withPagination = _this$props$withPagin === void 0 ? false : _this$props$withPagin,
        _this$props$page = _this$props.page,
        page = _this$props$page === void 0 ? 0 : _this$props$page,
        pageSize = _this$props.pageSize,
        count = _this$props.count,
        size = _this$props.size,
        _this$props$rowsPerPa = _this$props.rowsPerPageOptions,
        rowsPerPageOptions = _this$props$rowsPerPa === void 0 ? [10, 20, 50] : _this$props$rowsPerPa,
        onChangeRowsPerPage = _this$props.onChangeRowsPerPage,
        onChangePage = _this$props.onChangePage;
        _this$props.onDoubleClick;
        var _this$props$onDelete = _this$props.onDelete,
        onDelete = _this$props$onDelete === void 0 ? null : _this$props$onDelete,
        _this$props$fetching = _this$props.fetching,
        fetching = _this$props$fetching === void 0 ? null : _this$props$fetching,
        _this$props$error = _this$props.error,
        error = _this$props$error === void 0 ? null : _this$props$error,
        subServicesItemsFormattersReview = _this$props.subServicesItemsFormattersReview,
        subServiceHeaders = _this$props.subServiceHeaders;
      var localHeaders = _toConsumableArray__default["default"](headers || []);
      var localSubServiceHeaders = _toConsumableArray__default["default"](subServiceHeaders || []);
      var localPreHeaders = !!preHeaders ? _toConsumableArray__default["default"](preHeaders) : null;
      var localItemFormatters = _toConsumableArray__default["default"](itemFormatters);
      var localsubServicesItemsFormattersReview = _toConsumableArray__default["default"](subServicesItemsFormattersReview);
      var i = !!headers && headers.length;
      while (localHeaders && i--) {
        if (modulesManager !== null && modulesManager !== void 0 && modulesManager.hideField(module, localHeaders[i])) {
          if (!!localPreHeaders) localPreHeaders.splice(i, 1);
          if (!!aligns && aligns.length > i) aligns.splice(i, 1);
          if (!!headerSpans && headerSpans.length > i) headerSpans.splice(i, 1);
          if (!!headerActions && headerActions.length > i) headerActions.splice(i, 1);
          if (!!colSpans && colSpans.length > i) colSpans.splice(i, 1);
          localHeaders.splice(i, 1);
          localItemFormatters.splice(i, 1);
        }
      }
      if (!!onDelete) {
        if (localPreHeaders) localPreHeaders.push("");
        localHeaders.push("");
        localItemFormatters.push(function (i, idx) {
          return /*#__PURE__*/React__default["default"].createElement(core.IconButton, {
            onClick: function onClick(e) {
              return onDelete(idx);
            }
          }, /*#__PURE__*/React__default["default"].createElement(DeleteIcon__default["default"], null));
        });
      }
      var rowsPerPage = pageSize || rowsPerPageOptions[0];
      return /*#__PURE__*/React__default["default"].createElement(core.Box, {
        position: "relative",
        overflow: "auto"
      }, header && /*#__PURE__*/React__default["default"].createElement(React.Fragment, null, /*#__PURE__*/React__default["default"].createElement(core.Typography, {
        className: classes.tableTitle
      }, header), /*#__PURE__*/React__default["default"].createElement(core.Divider, null)), /*#__PURE__*/React__default["default"].createElement(core.Table, {
        className: classes.table,
        size: size
      }, !!localPreHeaders && localPreHeaders.length > 0 && /*#__PURE__*/React__default["default"].createElement("table", {
        style: {
          width: "100%"
        }
      }, /*#__PURE__*/React__default["default"].createElement("tr", null, localPreHeaders.map(function (h, idx) {
        if (headerSpans.length > idx && !headerSpans[idx]) return null;
        return /*#__PURE__*/React__default["default"].createElement(core.TableCell, {
          colSpan: headerSpans.length > idx ? headerSpans[idx] : 1,
          className: clsx__default["default"](classes.tableHeader, aligns.length > idx && classes[aligns[idx]]),
          key: "preh-".concat(idx)
        }, !!h && h);
      }))), /*#__PURE__*/React__default["default"].createElement(core.TableBody, null, items && items.length > 0 && items.map(function (i, iidx) {
        if (i.claimlinkedService != undefined) {
          console.log(i);
          return /*#__PURE__*/React__default["default"].createElement(core.Box, {
            style: {
              width: "100%"
            }
          }, /*#__PURE__*/React__default["default"].createElement("table", {
            style: {
              width: "100%"
            }
          }, items.length - iidx == items.length && /*#__PURE__*/React__default["default"].createElement("tr", null, /*#__PURE__*/React__default["default"].createElement(core.TableCell, null, /*#__PURE__*/React__default["default"].createElement(FormattedMessage$1, {
            module: module,
            id: localHeaders[0]
          })), /*#__PURE__*/React__default["default"].createElement(core.TableCell, null, /*#__PURE__*/React__default["default"].createElement(FormattedMessage$1, {
            module: module,
            id: localHeaders[1]
          })), /*#__PURE__*/React__default["default"].createElement(core.TableCell, null, /*#__PURE__*/React__default["default"].createElement(FormattedMessage$1, {
            module: module,
            id: localHeaders[2]
          })), /*#__PURE__*/React__default["default"].createElement(core.TableCell, null, /*#__PURE__*/React__default["default"].createElement(FormattedMessage$1, {
            module: module,
            id: localHeaders[3]
          })), /*#__PURE__*/React__default["default"].createElement(core.TableCell, null, /*#__PURE__*/React__default["default"].createElement(FormattedMessage$1, {
            module: module,
            id: localHeaders[4]
          })), /*#__PURE__*/React__default["default"].createElement(core.TableCell, null, /*#__PURE__*/React__default["default"].createElement(FormattedMessage$1, {
            module: module,
            id: localHeaders[5]
          })), /*#__PURE__*/React__default["default"].createElement(core.TableCell, null, /*#__PURE__*/React__default["default"].createElement(FormattedMessage$1, {
            module: module,
            id: localHeaders[6]
          }))), /*#__PURE__*/React__default["default"].createElement("tr", null, localItemFormatters && localItemFormatters.map(function (f, fidx) {
            if (colSpans.length > fidx && !colSpans[fidx]) return null;
            return /*#__PURE__*/React__default["default"].createElement(core.TableCell, {
              colSpan: colSpans.length > fidx ? colSpans[fidx] : 1,
              className: clsx__default["default"](!!rowLocked && rowLocked(i) ? classes.tableLockedCell : null, !!rowHighlighted && rowHighlighted(i) ? classes.tableHighlightedCell : null, !!rowHighlightedAlt && rowHighlightedAlt(i) ? classes.tableHighlightedAltCell : null, !!rowDisabled && rowDisabled(i) ? classes.tableDisabledCell : null, aligns.length > fidx && classes[aligns[fidx]]),
              key: "v-".concat(iidx, "-").concat(fidx)
            }, f(i, iidx));
          }))), localItemFormatters[0](i, iidx).props.children.props.value != undefined && localItemFormatters[0](i, iidx).props.children.props.value.packagetype != undefined && localItemFormatters[0](i, iidx).props.children.props.value.packagetype !== "S" && /*#__PURE__*/React__default["default"].createElement("table", {
            style: {
              marginTop: 10,
              width: "90%"
            }
          }, /*#__PURE__*/React__default["default"].createElement("tr", null, /*#__PURE__*/React__default["default"].createElement(core.TableCell, null, /*#__PURE__*/React__default["default"].createElement(FormattedMessage$1, {
            module: module,
            id: localSubServiceHeaders[0]
          })), /*#__PURE__*/React__default["default"].createElement(core.TableCell, null, /*#__PURE__*/React__default["default"].createElement(FormattedMessage$1, {
            module: module,
            id: localSubServiceHeaders[1]
          })), /*#__PURE__*/React__default["default"].createElement(core.TableCell, null, /*#__PURE__*/React__default["default"].createElement(FormattedMessage$1, {
            module: module,
            id: localSubServiceHeaders[2]
          })), /*#__PURE__*/React__default["default"].createElement(core.TableCell, null, /*#__PURE__*/React__default["default"].createElement(FormattedMessage$1, {
            module: module,
            id: localSubServiceHeaders[3]
          }))), localsubServicesItemsFormattersReview && localsubServicesItemsFormattersReview.map(function (s, sfidx) {
            return s(i, iidx);
          })));
        } else {
          return /*#__PURE__*/React__default["default"].createElement(core.Box, {
            style: {
              width: "100%"
            }
          }, /*#__PURE__*/React__default["default"].createElement("table", {
            style: {
              width: "100%"
            }
          }, /*#__PURE__*/React__default["default"].createElement("tr", null, localItemFormatters && localItemFormatters.map(function (f, fidx) {
            if (colSpans.length > fidx && !colSpans[fidx]) return null;
            return /*#__PURE__*/React__default["default"].createElement(core.TableCell, {
              colSpan: colSpans.length > fidx ? colSpans[fidx] : 1,
              className: clsx__default["default"](!!rowLocked && rowLocked(i) ? classes.tableLockedCell : null, !!rowHighlighted && rowHighlighted(i) ? classes.tableHighlightedCell : null, !!rowHighlightedAlt && rowHighlightedAlt(i) ? classes.tableHighlightedAltCell : null, !!rowDisabled && rowDisabled(i) ? classes.tableDisabledCell : null, aligns.length > fidx && classes[aligns[fidx]]),
              key: "v-".concat(iidx, "-").concat(fidx)
            }, f(i, iidx));
          }))), localItemFormatters[0](i, iidx).props.children.props.value != undefined && localItemFormatters[0](i, iidx).props.children.props.value.packagetype != undefined && localItemFormatters[0](i, iidx).props.children.props.value.packagetype !== "S" && /*#__PURE__*/React__default["default"].createElement("table", {
            style: {
              marginTop: 10,
              width: "90%"
            }
          }));
        }
      })), !!withPagination && !!count && /*#__PURE__*/React__default["default"].createElement(core.TableFooter, {
        className: classes.tableFooter
      }, /*#__PURE__*/React__default["default"].createElement(core.TableRow, null, /*#__PURE__*/React__default["default"].createElement(core.TablePagination, {
        className: classes.pager,
        colSpan: localItemFormatters.length,
        labelRowsPerPage: formatMessage(intl, "core", "rowsPerPage"),
        labelDisplayedRows: function labelDisplayedRows(_ref) {
          var from = _ref.from,
            to = _ref.to,
            count = _ref.count;
          return "".concat(from, "-").concat(to, " ").concat(formatMessageWithValues(intl, "core", "ofPages"), " ").concat(count);
        },
        count: count,
        page: page,
        rowsPerPage: rowsPerPage,
        rowsPerPageOptions: rowsPerPageOptions,
        onRowsPerPageChange: function onRowsPerPageChange(e) {
          return onChangeRowsPerPage(e.target.value);
        },
        onPageChange: onChangePage
      })))), (fetching || error) && /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        className: classes.loader,
        container: true,
        justifyContent: "center",
        alignItems: "center"
      }, /*#__PURE__*/React__default["default"].createElement(ProgressOrError$1, {
        progress: (items === null || items === void 0 ? void 0 : items.length) && fetching,
        error: error
      }), " "));
    }
  }]);
}(React.Component);
var TableServiceReview = withModulesManager(reactIntl.injectIntl(styles$w.withTheme(styles$w.withStyles(styles$e)(Table))));

function ownKeys$d(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$d(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$d(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$d(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var styles$d = function styles(theme) {
  return {
    primaryButton: theme.dialog.primaryButton,
    secondaryButton: theme.dialog.secondaryButton
  };
};
var ExportColumnsDialog = function ExportColumnsDialog(_ref) {
  var classes = _ref.classes,
    module = _ref.module,
    confirmState = _ref.confirmState,
    getFilteredFieldsAndColumn = _ref.getFilteredFieldsAndColumn,
    onClose = _ref.onClose,
    onConfirm = _ref.onConfirm,
    columns = _ref.columns;
  var modulesManager = feCore.useModulesManager();
  var _useTranslations = feCore.useTranslations(module, modulesManager),
    formatMessage = _useTranslations.formatMessage;
  var _useState = React.useState({}),
    _useState2 = _slicedToArray__default["default"](_useState, 2),
    columnBoolValues = _useState2[0],
    setColumnBoolValues = _useState2[1];
  React.useEffect(function () {
    if (Object.keys(columnBoolValues).length === 0) {
      var newColumnBoolValues = Object.fromEntries(Object.keys(columns).map(function (key) {
        return [key, true];
      }));
      setColumnBoolValues(newColumnBoolValues);
    }
  }, [columnBoolValues, columns]);
  var handleCheckboxChange = function handleCheckboxChange(key, checked) {
    setColumnBoolValues(_objectSpread$d(_objectSpread$d({}, columnBoolValues), {}, _defineProperty__default["default"]({}, key, checked)));
  };
  var fillCheckboxesWithValue = function fillCheckboxesWithValue(value) {
    var newColumnBoolValues = Object.fromEntries(Object.keys(columnBoolValues).map(function (key) {
      return [key, value];
    }));
    setColumnBoolValues(newColumnBoolValues);
  };
  var getFilteredColumns = function getFilteredColumns() {
    return Object.fromEntries(Object.entries(columnBoolValues).filter(function (_ref2) {
      var _ref3 = _slicedToArray__default["default"](_ref2, 2);
        _ref3[0];
        var checked = _ref3[1];
      return checked;
    }).map(function (_ref4) {
      var _ref5 = _slicedToArray__default["default"](_ref4, 1),
        key = _ref5[0];
      return [key, columns[key]];
    }));
  };
  var handleConfirm = function handleConfirm() {
    var filteredColumns = getFilteredColumns();
    var filteredFields = Object.keys(filteredColumns);
    getFilteredFieldsAndColumn(filteredFields, filteredColumns);
    onConfirm();
    fillCheckboxesWithValue(true);
  };
  var handleCancel = function handleCancel() {
    onClose();
    fillCheckboxesWithValue(true);
  };
  return /*#__PURE__*/React__default["default"].createElement(core.Dialog, {
    open: confirmState,
    onClose: onClose
  }, /*#__PURE__*/React__default["default"].createElement(core.DialogTitle, null, formatMessage('exportColumnsDialog.title')), /*#__PURE__*/React__default["default"].createElement(core.DialogContent, null, columns && Object.entries(columns).map(function (_ref6, idx) {
    var _ref7 = _slicedToArray__default["default"](_ref6, 2),
      key = _ref7[0],
      value = _ref7[1];
    return /*#__PURE__*/React__default["default"].createElement(core.FormControlLabel, {
      key: idx,
      control: /*#__PURE__*/React__default["default"].createElement(core.Checkbox, {
        color: "primary",
        checked: columnBoolValues[key],
        onChange: function onChange(event) {
          return handleCheckboxChange(key, event.target.checked);
        }
      }),
      label: value
    });
  })), /*#__PURE__*/React__default["default"].createElement(core.DialogActions, null, /*#__PURE__*/React__default["default"].createElement(core.Button, {
    onClick: function onClick() {
      return fillCheckboxesWithValue(false);
    },
    className: classes.secondaryButton
  }, formatMessage('exportColumnsDialog.clearAllButton')), /*#__PURE__*/React__default["default"].createElement(core.Button, {
    onClick: handleConfirm,
    autoFocus: true,
    className: classes.primaryButton
  }, formatMessage("exportColumnsDialog.confirmButton")), /*#__PURE__*/React__default["default"].createElement(core.Button, {
    onClick: handleCancel,
    className: classes.secondaryButton
  }, formatMessage('exportColumnsDialog.cancelButton'))));
};
var ExportColumnsDialog$1 = reactIntl.injectIntl(styles$w.withTheme(styles$w.withStyles(styles$d)(ExportColumnsDialog)));

function ownKeys$c(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$c(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$c(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$c(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var styles$c = function styles(theme) {
  return {
    error: {
      padding: theme.spacing(2)
    },
    errorHeader: {
      color: theme.palette.error.main
    },
    errorDetail: {
      color: theme.palette.error.main
    }
  };
};
function SearcherExport(props) {
  var intl = props.intl;
    props.rights;
    props.selection;
    var filters = props.filters,
    exportFetch = props.exportFetch,
    exportFields = props.exportFields,
    exportFieldsColumns = props.exportFieldsColumns,
    chooseExportableColumns = props.chooseExportableColumns,
    _props$label = props.label,
    label = _props$label === void 0 ? null : _props$label;
  var _useState = React.useState(0),
    _useState2 = _slicedToArray__default["default"](_useState, 2),
    exportStatus = _useState2[0];
    _useState2[1];
  var dispatch = reactRedux.useDispatch();
  var isExportColumnsDialogOpen = reactRedux.useSelector(function (state) {
    var _state$core;
    return (_state$core = state.core) === null || _state$core === void 0 ? void 0 : _state$core.isExportColumnsDialogOpen;
  });
  var enabled = function enabled(selection) {
    return exportStatus === 0;
  };
  var exportData = function exportData() {
    var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : exportFields;
    var columns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : exportFieldsColumns;
    var prms = Object.keys(filters).filter(function (f) {
      return !!filters[f]["filter"];
    }).map(function (f) {
      return filters[f]["filter"];
    });
    prms.push("fields: ".concat(JSON.stringify(fields)));
    prms.push("fieldsColumns: \"".concat(JSON.stringify(columns).replace(/\"/g, '\\"'), "\""));
    exportFetch(prms);
  };
  var handleExportData = function handleExportData() {
    if (chooseExportableColumns) {
      dispatch(openExportColumnsDialog());
    } else {
      exportData();
    }
  };
  var handleColumnFiltering = function handleColumnFiltering(fields, columns) {
    exportData(fields, columns);
  };
  var parseToDialogColumns = function parseToDialogColumns(columns, fields) {
    return fields.reduce(function (dialogColumns, field) {
      if (!(field in dialogColumns)) {
        dialogColumns[field] = field.startsWith("json_ext__") ? field.replace(/^json_ext__/, "") : field;
      }
      return dialogColumns;
    }, _objectSpread$c({}, columns));
  };
  var entries = [{
    text: label || formatMessage(intl, "core", "exportSearchResult"),
    action: handleExportData
  }];
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, chooseExportableColumns && /*#__PURE__*/React__default["default"].createElement(ExportColumnsDialog$1, {
    confirmState: isExportColumnsDialogOpen,
    onConfirm: function onConfirm() {
      return dispatch(closeExportColumnsDialog());
    },
    onClose: function onClose() {
      return dispatch(closeExportColumnsDialog());
    },
    module: "core",
    getFilteredFieldsAndColumn: handleColumnFiltering,
    columns: parseToDialogColumns(exportFieldsColumns, exportFields)
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      display: enabled() ? "block" : "none"
    }
  }, entries.map(function (item, idx) {
    return /*#__PURE__*/React__default["default"].createElement(core.Tooltip, {
      title: formatMessage(intl, "core", "exportSearchResult.tooltip")
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      key: "selectionsMenu-export-".concat(idx)
    }, /*#__PURE__*/React__default["default"].createElement(core.MenuItem, {
      onClick: function onClick(e) {
        return item.action();
      },
      disabled: !enabled()
    }, item.text)));
  })));
}
var SearcherExport$1 = reactIntl.injectIntl(withStyles__default["default"](styles$c)(SearcherExport));

var CustomFilterFieldStatusPicker = function CustomFilterFieldStatusPicker(_ref) {
  _ref.intl;
    var value = _ref.value,
    label = _ref.label,
    onChange = _ref.onChange,
    _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
    _ref$withNull = _ref.withNull,
    withNull = _ref$withNull === void 0 ? false : _ref$withNull,
    _ref$nullLabel = _ref.nullLabel,
    nullLabel = _ref$nullLabel === void 0 ? null : _ref$nullLabel,
    _ref$withLabel = _ref.withLabel,
    withLabel = _ref$withLabel === void 0 ? true : _ref$withLabel,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required,
    customFilters = _ref.customFilters;
  var options = Array.isArray(customFilters) && customFilters !== undefined ? _toConsumableArray__default["default"](customFilters.map(function (customFilter) {
    return {
      value: {
        field: customFilter.field,
        type: customFilter.type
      },
      label: customFilter.field
    };
  })) : [];
  if (withNull) {
    options.unshift({
      value: null,
      label: nullLabel || ""
    });
  }
  return /*#__PURE__*/React__default["default"].createElement(SelectInput$1, {
    module: "core",
    label: withLabel && label,
    options: options,
    value: value,
    onChange: onChange,
    readOnly: readOnly,
    required: required
  });
};
var CustomFilterFieldStatusPicker$1 = reactIntl.injectIntl(CustomFilterFieldStatusPicker);

var CustomFilterTypeStatusPicker = function CustomFilterTypeStatusPicker(_ref) {
  _ref.intl;
    var value = _ref.value,
    label = _ref.label,
    onChange = _ref.onChange,
    _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
    _ref$withNull = _ref.withNull,
    withNull = _ref$withNull === void 0 ? false : _ref$withNull,
    _ref$nullLabel = _ref.nullLabel,
    nullLabel = _ref$nullLabel === void 0 ? null : _ref$nullLabel,
    _ref$withLabel = _ref.withLabel,
    withLabel = _ref$withLabel === void 0 ? true : _ref$withLabel,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required,
    customFilters = _ref.customFilters,
    customFilterField = _ref.customFilterField;
  // Filter the available options based on the selected field
  var filterTypes = customFilters ? customFilters.filter(function (filter) {
    return filter.field === customFilterField;
  }).map(function (filter) {
    return filter.filter;
  }).flat() : [];
  var filteredOptions = filterTypes.map(function (filter) {
    return {
      value: filter,
      label: filter
    };
  });
  if (withNull) {
    filteredOptions.unshift({
      value: null,
      label: nullLabel || ""
    });
  }
  return /*#__PURE__*/React__default["default"].createElement(SelectInput$1, {
    module: "core",
    label: withLabel && label,
    options: filteredOptions,
    value: value,
    onChange: onChange,
    readOnly: readOnly,
    required: required
  });
};
var CustomFilterTypeStatusPicker$1 = reactIntl.injectIntl(CustomFilterTypeStatusPicker);

function ownKeys$b(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$b(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$b(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$b(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var styles$b = function styles(theme) {
  return {
    item: theme.paper.item
  };
};
var AdvancedFilterRowValue = function AdvancedFilterRowValue(_ref) {
  _ref.intl;
    var classes = _ref.classes,
    customFilters = _ref.customFilters,
    currentFilter = _ref.currentFilter,
    setCurrentFilter = _ref.setCurrentFilter,
    index = _ref.index,
    filters = _ref.filters,
    setFilters = _ref.setFilters;
  var onAttributeChange = function onAttributeChange(attribute) {
    return function (value) {
      var updatedFilter = _objectSpread$b({}, currentFilter);
      if (attribute === 'field') {
        updatedFilter = _objectSpread$b({}, {
          filter: '',
          value: '',
          type: value.type
        });
      }
      var attributeValue = attribute === 'field' ? value.field : value;
      updatedFilter = _objectSpread$b(_objectSpread$b({}, updatedFilter), {}, _defineProperty__default["default"]({}, attribute, attributeValue), attribute === 'filter' && {
        value: ''
      });
      setCurrentFilter(updatedFilter);
      setFilters(function (prevFilters) {
        var updatedRows = _toConsumableArray__default["default"](prevFilters);
        updatedRows[index] = _objectSpread$b({}, updatedFilter);
        return updatedRows;
      });
    };
  };
  var removeFilter = function removeFilter() {
    var newArray = _toConsumableArray__default["default"](filters);
    newArray.splice(index, 1);
    setFilters(newArray.length === 0 ? [CLEARED_STATE_FILTER] : newArray);
  };
  var renderInputBasedOnType = function renderInputBasedOnType(type) {
    var commonProps = {
      module: "core",
      label: "core.advancedFilters.value",
      value: currentFilter.value,
      onChange: onAttributeChange("value")
    };
    switch (type) {
      case BOOLEAN:
        return /*#__PURE__*/React__default["default"].createElement(feCore.SelectInput, _extends__default["default"]({
          options: BOOL_OPTIONS
        }, commonProps));
      case INTEGER:
        return /*#__PURE__*/React__default["default"].createElement(feCore.NumberInput, _extends__default["default"]({
          min: 0,
          displayZero: true
        }, commonProps));
      case STRING:
      default:
        if (currentFilter.field.toLowerCase().includes(DATE)) {
          return /*#__PURE__*/React__default["default"].createElement(feCore.PublishedComponent, _extends__default["default"]({
            pubRef: "core.DatePicker"
          }, commonProps));
        } else {
          return /*#__PURE__*/React__default["default"].createElement(feCore.TextInput, commonProps);
        }
    }
  };
  return /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    container: true,
    direction: "row",
    className: classes.item,
    style: {
      backgroundColor: "#DFEDEF"
    }
  }, filters.length > 0 ? /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      backgroundColor: '#DFEDEF',
      width: '25px',
      height: '25px',
      marginTop: '25px'
    }
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    style: {
      transform: 'translate(-50%, -50%)',
      fontSize: '16px',
      color: '#006273'
    },
    onClick: removeFilter
  }, "\u2716")) : /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true,
    xs: 3,
    className: classes.item
  }, /*#__PURE__*/React__default["default"].createElement(CustomFilterFieldStatusPicker$1, {
    module: "core",
    label: "core.advancedFilters.field",
    value: {
      field: currentFilter.field,
      type: currentFilter.type
    },
    onChange: onAttributeChange("field"),
    customFilters: customFilters
  })), currentFilter.field !== "" ? /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true,
    xs: 3,
    className: classes.item
  }, /*#__PURE__*/React__default["default"].createElement(CustomFilterTypeStatusPicker$1, {
    module: "core",
    label: "core.advancedFilters.filter",
    value: currentFilter.filter,
    onChange: onAttributeChange("filter"),
    customFilters: customFilters,
    customFilterField: currentFilter.field
  })) : /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null), currentFilter.field !== "" && currentFilter.filter !== "" ? /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true,
    xs: 3,
    className: classes.item
  }, renderInputBasedOnType(currentFilter.type)) : /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null));
};
var AdvancedFilterRowValue$1 = reactIntl.injectIntl(styles$w.withTheme(styles$w.withStyles(styles$b)(reactRedux.connect(null, null)(AdvancedFilterRowValue))));

function ownKeys$a(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$a(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$a(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$a(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var styles$a = function styles(theme) {
  return {
    item: theme.paper.item,
    paperHeaderAction: _objectSpread$a(_objectSpread$a({}, theme.paper.action), {}, {
      display: "flex",
      justifyContent: "center",
      itemAlign: "center"
    })
  };
};
var AdvancedFiltersDialog = function AdvancedFiltersDialog(_ref) {
  var intl = _ref.intl,
    classes = _ref.classes,
    object = _ref.object,
    additionalParams = _ref.additionalParams,
    fetchCustomFilter = _ref.fetchCustomFilter,
    customFilters = _ref.customFilters,
    moduleName = _ref.moduleName,
    objectType = _ref.objectType;
    _ref.appliedCustomFilters;
    var setAppliedCustomFilters = _ref.setAppliedCustomFilters,
    onChangeFilters = _ref.onChangeFilters,
    appliedFiltersRowStructure = _ref.appliedFiltersRowStructure,
    setAppliedFiltersRowStructure = _ref.setAppliedFiltersRowStructure,
    applyNumberCircle = _ref.applyNumberCircle,
    searchCriteria = _ref.searchCriteria,
    deleteFilter = _ref.deleteFilter;
  var _useState = React.useState(false),
    _useState2 = _slicedToArray__default["default"](_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var _useState3 = React.useState({
      field: "",
      filter: "",
      type: "",
      value: ""
    }),
    _useState4 = _slicedToArray__default["default"](_useState3, 2),
    currentFilter = _useState4[0],
    setCurrentFilter = _useState4[1];
  var _useState5 = React.useState([currentFilter]),
    _useState6 = _slicedToArray__default["default"](_useState5, 2),
    filters = _useState6[0],
    setFilters = _useState6[1];
  var searchCriteriaToArray = function searchCriteriaToArray() {
    var _searchCriteria$CUSTO;
    return hasCustomFilters() ? JSON.parse((_searchCriteria$CUSTO = searchCriteria[CUSTOM_FILTERS]) === null || _searchCriteria$CUSTO === void 0 ? void 0 : _searchCriteria$CUSTO.filter.split(WHITE_SPACE)[1]) : appliedFiltersRowStructure;
  };
  var jsonFiltersToRowFilters = function jsonFiltersToRowFilters() {
    var arrayFilters = searchCriteriaToArray();
    return arrayFilters.map(function (filterString) {
      var _filterString$split = filterString.split(DOUBLE_UNDERSCORE),
        _filterString$split2 = _slicedToArray__default["default"](_filterString$split, 3),
        field = _filterString$split2[0],
        filter = _filterString$split2[1],
        typeValue = _filterString$split2[2];
      var _typeValue$split = typeValue.split(EQUALS_SIGN),
        _typeValue$split2 = _slicedToArray__default["default"](_typeValue$split, 2),
        type = _typeValue$split2[0],
        value = _typeValue$split2[1];
      return {
        field: field,
        filter: filter,
        type: type,
        value: JSON.parse(value)
      };
    });
  };
  var createParams = function createParams(moduleName, objectTypeName) {
    var uuidOfObject = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var additionalParams = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var params = ["moduleName: \"".concat(moduleName, "\""), "objectTypeName: \"".concat(objectTypeName, "\"")];
    if (uuidOfObject) {
      params.push("uuidOfObject: \"".concat(uuidOfObject, "\""));
    }
    if (additionalParams) {
      params.push("additionalParams: ".concat(JSON.stringify(JSON.stringify(additionalParams))));
    }
    return params;
  };
  var fetchFilters = function fetchFilters(params) {
    return fetchCustomFilter(params);
  };
  var handleOpen = function handleOpen() {
    hasCustomFilters() && isAppliedFiltersRowStructureEmpty() ? setFilters(jsonFiltersToRowFilters()) : setFilters(appliedFiltersRowStructure);
    setIsOpen(true);
  };
  var isAppliedFiltersRowStructureEmpty = function isAppliedFiltersRowStructureEmpty() {
    var _appliedFiltersRowStr = _slicedToArray__default["default"](appliedFiltersRowStructure, 1),
      _appliedFiltersRowStr2 = _appliedFiltersRowStr[0],
      firstFilter = _appliedFiltersRowStr2 === void 0 ? {} : _appliedFiltersRowStr2;
    return !(firstFilter.filter && firstFilter.field && firstFilter.type);
  };
  var handleClose = function handleClose() {
    setCurrentFilter(CLEARED_STATE_FILTER);
    setIsOpen(false);
  };
  var handleRemoveFilter = function handleRemoveFilter() {
    setCurrentFilter(CLEARED_STATE_FILTER);
    setAppliedFiltersRowStructure([CLEARED_STATE_FILTER]);
    setFilters([CLEARED_STATE_FILTER]);
  };
  var handleAddFilter = function handleAddFilter() {
    setCurrentFilter(CLEARED_STATE_FILTER);
    setFilters([].concat(_toConsumableArray__default["default"](filters), [CLEARED_STATE_FILTER]));
  };
  var applyFilter = function applyFilter() {
    setAppliedFiltersRowStructure(filters);
    var outputFilters = JSON.stringify(filters.map(function (_ref2) {
      var filter = _ref2.filter,
        value = _ref2.value,
        field = _ref2.field,
        type = _ref2.type;
      if (type === 'integer') {
        return "".concat(field, "__").concat(filter, "__").concat(type, "=").concat(value);
      } else {
        return "".concat(field, "__").concat(filter, "__").concat(type, "=").concat(JSON.stringify(value));
      }
    }));
    if (checkArrayFilterStructure() === false) {
      onChangeFilters([{
        id: 'customFilters',
        outputFilters: outputFilters,
        filter: "customFilters: ".concat(outputFilters)
      }]);
      setAppliedCustomFilters(outputFilters);
    } else {
      deleteFilter('customFilters');
    }
    handleClose();
  };
  function checkArrayFilterStructure() {
    if (filters.length === 1) {
      var firstObj = filters[0];
      if (checkFilterFields(firstObj)) {
        return true;
      }
    }
    return false;
  }
  function checkFilterFields(dict) {
    return Object.entries(dict).some(function (_ref3) {
      var _ref4 = _slicedToArray__default["default"](_ref3, 2),
        key = _ref4[0],
        value = _ref4[1];
      return key !== 'value' && (value === null || value === '');
    });
  }
  function hasCustomFilters() {
    return CUSTOM_FILTERS in searchCriteria;
  }
  React.useEffect(function () {
    if (objectType) {
      // Update the state with new parameters
      var paramsToFetchFilters = [];
      paramsToFetchFilters = createParams(moduleName, objectType, object ? object === null || object === void 0 ? void 0 : object.id : null, additionalParams);
      fetchFilters(paramsToFetchFilters);
    }
  }, [objectType]);

  // refresh component when list of filters is changed
  React.useEffect(function () {}, [filters]);
  React.useEffect(function () {
    if (hasCustomFilters() === false) {
      handleRemoveFilter();
    }
  }, [searchCriteria]);
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Grid__default["default"], {
    item: true,
    className: classes.paperHeaderAction
  }, /*#__PURE__*/React__default["default"].createElement(feCore.SearcherActionButton, {
    startIcon: /*#__PURE__*/React__default["default"].createElement(FilterListIcon__default["default"], null),
    label: feCore.formatMessage(intl, "core", "advancedFilters"),
    onClick: handleOpen
  })), appliedFiltersRowStructure.length > 0 && hasCustomFilters() ? applyNumberCircle(searchCriteriaToArray().length) : /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null), /*#__PURE__*/React__default["default"].createElement(Dialog__default["default"], {
    open: isOpen,
    onClose: handleClose,
    PaperProps: {
      style: {
        width: 900,
        maxWidth: 900
      }
    }
  }, /*#__PURE__*/React__default["default"].createElement(DialogTitle__default["default"], {
    style: {
      marginTop: "10px"
    }
  }, feCore.formatMessage(intl, "core", "advancedFilters.button.AdvancedFilters")), /*#__PURE__*/React__default["default"].createElement(DialogContent__default["default"], null, filters.map(function (filter, index) {
    return /*#__PURE__*/React__default["default"].createElement(AdvancedFilterRowValue$1, {
      customFilters: customFilters,
      currentFilter: filter,
      setCurrentFilter: setCurrentFilter,
      index: index,
      filters: filters,
      setFilters: setFilters
    });
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      backgroundColor: "#DFEDEF",
      paddingLeft: "10px",
      paddingBottom: "10px"
    }
  }, /*#__PURE__*/React__default["default"].createElement(AddIcon__default["default"], {
    style: {
      border: "thin solid",
      borderRadius: "40px",
      width: "16px",
      height: "16px"
    },
    onClick: handleAddFilter
  }), /*#__PURE__*/React__default["default"].createElement(Button__default["default"], {
    onClick: handleAddFilter,
    variant: "outlined",
    style: {
      border: "0px",
      "marginBottom": "6px",
      fontSize: "0.8rem"
    }
  }, feCore.formatMessage(intl, "core", "core.advancedFilters.button.addFilters")))), /*#__PURE__*/React__default["default"].createElement(DialogActions__default["default"], {
    style: {
      display: "inline",
      paddingLeft: "10px",
      marginTop: "25px",
      marginBottom: "15px"
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      "float": "left"
    }
  }, /*#__PURE__*/React__default["default"].createElement(Button__default["default"], {
    onClick: handleRemoveFilter,
    variant: "outlined",
    style: {
      border: "0px"
    }
  }, feCore.formatMessage(intl, "core", "core.advancedFilters.button.clearAllFilters"))), /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      "float": "right",
      paddingRight: "16px"
    }
  }, /*#__PURE__*/React__default["default"].createElement(Button__default["default"], {
    onClick: handleClose,
    variant: "outlined",
    autoFocus: true,
    style: {
      margin: "0 16px"
    }
  }, feCore.formatMessage(intl, "core", "core.advancedFilters.button.cancel")), /*#__PURE__*/React__default["default"].createElement(Button__default["default"], {
    onClick: applyFilter,
    variant: "contained",
    color: "primary",
    autoFocus: true
  }, feCore.formatMessage(intl, "core", "core.advancedFilters.button.filter")))))));
};
var mapStateToProps$6 = function mapStateToProps(state, props) {
  return {
    rights: !!state.core && !!state.core.user && !!state.core.user.i_user ? state.core.user.i_user.rights : [],
    confirmed: state.core.confirmed,
    fetchingCustomFilters: state.core.fetchingCustomFilters,
    errorCustomFilters: state.core.errorCustomFilters,
    fetchedCustomFilters: state.core.fetchedCustomFilters,
    customFilters: state.core.customFilters
  };
};
var mapDispatchToProps$5 = function mapDispatchToProps(dispatch) {
  return redux.bindActionCreators({
    fetchCustomFilter: fetchCustomFilter
  }, dispatch);
};
var AdvancedFiltersDialog$1 = reactIntl.injectIntl(styles$w.withTheme(styles$w.withStyles(styles$a)(reactRedux.connect(mapStateToProps$6, mapDispatchToProps$5)(AdvancedFiltersDialog))));

function _callSuper$d(t, o, e) { return o = _getPrototypeOf__default["default"](o), _possibleConstructorReturn__default["default"](t, _isNativeReflectConstruct$d() ? Reflect.construct(o, e || [], _getPrototypeOf__default["default"](t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct$d() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$d = function _isNativeReflectConstruct() { return !!t; })(); }
function ownKeys$9(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$9(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$9(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$9(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var styles$9 = function styles(theme) {
  return {
    paper: theme.paper.body,
    paperHeader: _objectSpread$9(_objectSpread$9({}, theme.paper.header), {}, {
      display: "flex",
      justifyContent: "flex-end",
      itemAlign: "center"
    }),
    paperHeaderTitle: theme.paper.title,
    paperHeaderAction: _objectSpread$9(_objectSpread$9({}, theme.paper.action), {}, {
      display: "flex",
      justifyContent: "center",
      itemAlign: "center"
    }),
    paperDivider: theme.paper.divider
  };
};
var SearcherPane = /*#__PURE__*/function (_Component) {
  function SearcherPane(props) {
    var _this;
    _classCallCheck__default["default"](this, SearcherPane);
    _this = _callSuper$d(this, SearcherPane, [props]);
    _defineProperty__default["default"](_this, "handleKeyDown", function (event) {
      if (event.key === ENTER_KEY) {
        _this.debouncedRefresh();
      }
    });
    var _this$props = _this.props,
      _this$props$refresh = _this$props.refresh,
      refresh = _this$props$refresh === void 0 ? function () {} : _this$props$refresh,
      _this$props$reset = _this$props.reset,
      reset = _this$props$reset === void 0 ? function () {} : _this$props$reset;
    _this.debouncedRefresh = _debounce__default["default"](refresh, DEFAULT_DEBOUNCE_TIME);
    _this.debouncedReset = _debounce__default["default"](reset, DEFAULT_DEBOUNCE_TIME);
    return _this;
  }
  _inherits__default["default"](SearcherPane, _Component);
  return _createClass__default["default"](SearcherPane, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener("keydown", this.handleKeyDown);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener("keydown", this.handleKeyDown);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        classes = _this$props2.classes,
        module = _this$props2.module,
        del = _this$props2.del,
        _this$props2$title = _this$props2.title,
        title = _this$props2$title === void 0 ? "search.title" : _this$props2$title,
        _this$props2$split = _this$props2.split,
        split = _this$props2$split === void 0 ? 8 : _this$props2$split,
        filterPane = _this$props2.filterPane,
        filters = _this$props2.filters,
        _this$props2$resultsP = _this$props2.resultsPane,
        resultsPane = _this$props2$resultsP === void 0 ? null : _this$props2$resultsP,
        reset = _this$props2.reset,
        refresh = _this$props2.refresh,
        actions = _this$props2.actions,
        _this$props2$isCustom = _this$props2.isCustomFiltering,
        isCustomFiltering = _this$props2$isCustom === void 0 ? false : _this$props2$isCustom,
        _this$props2$objectFo = _this$props2.objectForCustomFiltering,
        objectForCustomFiltering = _this$props2$objectFo === void 0 ? null : _this$props2$objectFo,
        _this$props2$addition = _this$props2.additionalCustomFilterParams,
        additionalCustomFilterParams = _this$props2$addition === void 0 ? null : _this$props2$addition,
        _this$props2$moduleNa = _this$props2.moduleName,
        moduleName = _this$props2$moduleNa === void 0 ? null : _this$props2$moduleNa,
        _this$props2$objectTy = _this$props2.objectType,
        objectType = _this$props2$objectTy === void 0 ? null : _this$props2$objectTy,
        _this$props2$setAppli = _this$props2.setAppliedCustomFilters,
        setAppliedCustomFilters = _this$props2$setAppli === void 0 ? null : _this$props2$setAppli,
        _this$props2$appliedC = _this$props2.appliedCustomFilters,
        appliedCustomFilters = _this$props2$appliedC === void 0 ? null : _this$props2$appliedC,
        onChangeFilters = _this$props2.onChangeFilters,
        _this$props2$appliedF = _this$props2.appliedFiltersRowStructure,
        appliedFiltersRowStructure = _this$props2$appliedF === void 0 ? null : _this$props2$appliedF,
        _this$props2$setAppli2 = _this$props2.setAppliedFiltersRowStructure,
        setAppliedFiltersRowStructure = _this$props2$setAppli2 === void 0 ? null : _this$props2$setAppli2,
        _this$props2$applyNum = _this$props2.applyNumberCircle,
        applyNumberCircle = _this$props2$applyNum === void 0 ? null : _this$props2$applyNum;
      return /*#__PURE__*/React__default["default"].createElement(core.Paper, {
        className: classes.paper
      }, /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        container: true
      }, /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        item: true,
        xs: split,
        className: classes.paperHeaderTitle
      }, /*#__PURE__*/React__default["default"].createElement(FormattedMessage$1, {
        module: module,
        id: title
      })), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        item: true,
        xs: 12 - split,
        className: classes.paperHeader
      }, (!!actions || !!refresh) && /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, isCustomFiltering === true ? /*#__PURE__*/React__default["default"].createElement(AdvancedFiltersDialog$1, {
        object: objectForCustomFiltering,
        additionalParams: additionalCustomFilterParams,
        moduleName: moduleName,
        objectType: objectType,
        setAppliedCustomFilters: setAppliedCustomFilters,
        appliedCustomFilters: appliedCustomFilters,
        onChangeFilters: onChangeFilters,
        appliedFiltersRowStructure: appliedFiltersRowStructure,
        setAppliedFiltersRowStructure: setAppliedFiltersRowStructure,
        applyNumberCircle: applyNumberCircle,
        searchCriteria: filters,
        deleteFilter: del
      }) : /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null), !!actions && actions.map(function (a, idx) {
        return /*#__PURE__*/React__default["default"].createElement(core.Grid, {
          item: true,
          key: "action-".concat(idx),
          className: classes.paperHeaderAction
        }, /*#__PURE__*/React__default["default"].createElement(feCore.SearcherActionButton, {
          onClick: a.action,
          startIcon: a.icon,
          label: a.label || ''
        }));
      }), !!reset && /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        item: true,
        key: "action-reset",
        className: classes.paperHeaderAction
      }, /*#__PURE__*/React__default["default"].createElement(feCore.SearcherActionButton, {
        startIcon: /*#__PURE__*/React__default["default"].createElement(icons.YoutubeSearchedFor, null),
        onClick: this.debouncedReset,
        label: formatMessage(this.props.intl, module, "resetFilterTooltip")
      })), !!refresh && /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        item: true,
        key: "action-refresh",
        className: classes.paperHeaderAction
      }, /*#__PURE__*/React__default["default"].createElement(feCore.SearcherActionButton, {
        startIcon: /*#__PURE__*/React__default["default"].createElement(icons.Search, null),
        onClick: this.debouncedRefresh,
        label: formatMessage(this.props.intl, module, "refreshFilterTooltip")
      })))), !!filterPane && /*#__PURE__*/React__default["default"].createElement(React.Fragment, null, /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        item: true,
        xs: 12,
        className: classes.paperDivider
      }, /*#__PURE__*/React__default["default"].createElement(core.Divider, null)), filterPane), !!resultsPane && /*#__PURE__*/React__default["default"].createElement(React.Fragment, null, /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        item: true,
        xs: 12,
        className: classes.paperDivider
      }, /*#__PURE__*/React__default["default"].createElement(core.Divider, null)), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        item: true,
        xs: 12
      }, resultsPane))));
    }
  }]);
}(React.Component);
var SearcherPane$1 = reactIntl.injectIntl(styles$w.withTheme(styles$w.withStyles(styles$9)(SearcherPane)));

function ownKeys$8(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$8(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$8(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$8(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _callSuper$c(t, o, e) { return o = _getPrototypeOf__default["default"](o), _possibleConstructorReturn__default["default"](t, _isNativeReflectConstruct$c() ? Reflect.construct(o, e || [], _getPrototypeOf__default["default"](t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct$c() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$c = function _isNativeReflectConstruct() { return !!t; })(); }
var styles$8 = function styles(theme) {
  return {
    root: {
      width: "100%"
    },
    paper: theme.paper.body,
    paperHeader: theme.paper.header,
    paperHeaderTitle: theme.paper.title,
    paperHeaderMessage: theme.paper.message,
    paperHeaderAction: {
      paddingInline: 5
    },
    tableHeaderAction: theme.table.headerAction,
    processing: {
      margin: theme.spacing(1)
    }
  };
};
var SelectionPane = /*#__PURE__*/function (_Component) {
  function SelectionPane() {
    _classCallCheck__default["default"](this, SelectionPane);
    return _callSuper$c(this, SelectionPane, arguments);
  }
  _inherits__default["default"](SelectionPane, _Component);
  return _createClass__default["default"](SelectionPane, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        module = _this$props.module,
        selectionMessage = _this$props.selectionMessage,
        selection = _this$props.selection;
      if (!selectionMessage || !selection || !selection.length) return null;
      return /*#__PURE__*/React__default["default"].createElement(core.Typography, null, /*#__PURE__*/React__default["default"].createElement(FormattedMessage$1, {
        module: module,
        id: selectionMessage,
        values: {
          count: /*#__PURE__*/React__default["default"].createElement("b", null, selection.length)
        }
      }));
    }
  }]);
}(React.Component);
var SelectionMenu = /*#__PURE__*/function (_Component2) {
  function SelectionMenu() {
    var _this;
    _classCallCheck__default["default"](this, SelectionMenu);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper$c(this, SelectionMenu, [].concat(args));
    _defineProperty__default["default"](_this, "state", {
      anchorEl: null
    });
    _defineProperty__default["default"](_this, "openMenu", function (e) {
      return _this.setState({
        anchorEl: e.currentTarget
      });
    });
    _defineProperty__default["default"](_this, "closeMenu", function (e) {
      return _this.setState({
        anchorEl: null
      });
    });
    _defineProperty__default["default"](_this, "action", function (a) {
      _this.setState({
        anchorEl: null
      }, function (e) {
        return _this.props.triggerAction(a);
      });
    });
    _defineProperty__default["default"](_this, "renderButtons", function (entries, contributionKey) {
      return /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        item: true,
        className: _this.props.classes.paperHeader
      }, /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        container: true,
        alignItems: "center",
        className: _this.props.classes.paperHeaderAction
      }, entries.map(function (i, idx) {
        return /*#__PURE__*/React__default["default"].createElement(core.Grid, {
          key: "selectionsButtons-".concat(idx),
          item: true,
          className: _this.props.classes.paperHeaderAction
        }, /*#__PURE__*/React__default["default"].createElement(core.Button, {
          onClick: function onClick(e) {
            return _this.action(i.action);
          }
        }, i.text));
      }), _this.props.exportable && /*#__PURE__*/React__default["default"].createElement(SearcherExport$1, {
        selection: _this.props.selection,
        filters: _this.props.filters,
        exportFetch: _this.props.exportFetch,
        exportFields: _this.props.exportFields,
        exportFieldsColumns: _this.props.exportFieldsColumns,
        chooseExportableColumns: _this.props.chooseExportableColumns,
        label: _this.props.exportFieldLabel
      }), !!contributionKey && /*#__PURE__*/React__default["default"].createElement(Contributions, {
        actionHandler: _this.action,
        selection: _this.props.selection,
        contributionKey: contributionKey
      })));
    });
    _defineProperty__default["default"](_this, "renderMenu", function (entries, contributionKey) {
      return /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        item: true,
        className: _this.props.classes.paperHeader
      }, /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        container: true,
        alignItems: "center"
      }, /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        item: true,
        className: _this.props.classes.paperHeaderAction
      }, /*#__PURE__*/React__default["default"].createElement(core.IconButton, {
        onClick: _this.openMenu
      }, /*#__PURE__*/React__default["default"].createElement(MoreHoriz__default["default"], null)))), /*#__PURE__*/React__default["default"].createElement(core.Menu, {
        open: !!_this.state.anchorEl,
        anchorEl: _this.state.anchorEl,
        onClose: _this.closeMenu,
        keepMounted: true
      }, entries.map(function (i, idx) {
        return /*#__PURE__*/React__default["default"].createElement(core.MenuItem, {
          key: "selectionsMenu-".concat(idx),
          onClick: function onClick(e) {
            return _this.action(i.action);
          }
        }, i.text);
      }), _this.props.exportable && /*#__PURE__*/React__default["default"].createElement(SearcherExport$1, {
        selection: _this.props.selection,
        filters: _this.props.filters,
        exportFetch: _this.props.exportFetch,
        exportFields: _this.props.exportFields,
        exportFieldsColumns: _this.props.exportFieldsColumns,
        chooseExportableColumns: _this.props.chooseExportableColumns
      }), !!contributionKey && /*#__PURE__*/React__default["default"].createElement(Contributions, {
        actionHandler: _this.action,
        selection: _this.props.selection,
        contributionKey: contributionKey
      })));
    });
    return _this;
  }
  _inherits__default["default"](SelectionMenu, _Component2);
  return _createClass__default["default"](SelectionMenu, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        modulesManager = _this$props2.modulesManager,
        intl = _this$props2.intl,
        classes = _this$props2.classes,
        canSelectAll = _this$props2.canSelectAll,
        selection = _this$props2.selection,
        clearSelected = _this$props2.clearSelected,
        selectAll = _this$props2.selectAll,
        _this$props2$actions = _this$props2.actions,
        actions = _this$props2$actions === void 0 ? [] : _this$props2$actions,
        processing = _this$props2.processing,
        _this$props2$actionsC = _this$props2.actionsContributionKey,
        actionsContributionKey = _this$props2$actionsC === void 0 ? null : _this$props2$actionsC;
      var contributed_entries = modulesManager.getContribs(actionsContributionKey);
      if (!actions.length && !contributed_entries) return null;
      if (processing) {
        return /*#__PURE__*/React__default["default"].createElement(core.CircularProgress, {
          className: classes.processing,
          size: 24
        });
      }
      var entries = [];
      var selectionCount = selection.length;
      if (!!selectionCount) {
        entries.push({
          text: formatMessage(intl, "claim", "clearSelected"),
          action: clearSelected
        });
      }
      if (!!canSelectAll && canSelectAll(this.props.selection)) {
        entries.push({
          text: formatMessage(intl, "claim", "selectAll"),
          action: selectAll
        });
      }
      actions.forEach(function (a) {
        if (a.enabled(selection)) {
          entries.push({
            text: formatMessage(intl, "claim", a.label),
            action: a.action
          });
        }
      });
      if (entries.length > 2 || this.props.exportable && entries.length >= 1) {
        return this.renderMenu(entries, actionsContributionKey);
      } else {
        return this.renderButtons(entries, actionsContributionKey);
      }
    }
  }]);
}(React.Component);
var StyledSelectionMenu = reactIntl.injectIntl(withModulesManager(styles$w.withTheme(styles$w.withStyles(styles$8)(SelectionMenu))));
var Searcher = /*#__PURE__*/function (_Component3) {
  function Searcher() {
    var _this2;
    _classCallCheck__default["default"](this, Searcher);
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    _this2 = _callSuper$c(this, Searcher, [].concat(args));
    _defineProperty__default["default"](_this2, "state", {
      filters: {},
      orderBy: null,
      page: 0,
      pageSize: _this2.props.defaultPageSize || 10,
      afterCursor: null,
      beforeCursor: null,
      selection: [],
      selectAll: 0,
      clearAll: 0,
      menuAnchor: null,
      enter: false
    });
    _defineProperty__default["default"](_this2, "filtersToQueryParams", function () {
      var _this2$state = _this2.state,
        page = _this2$state.page,
        afterCursor = _this2$state.afterCursor,
        beforeCursor = _this2$state.beforeCursor;
      var _this2$props = _this2.props,
        module = _this2$props.module,
        saveCurrentPaginationPage = _this2$props.saveCurrentPaginationPage;
      saveCurrentPaginationPage(page, afterCursor, beforeCursor, module);
      if (_this2.props.filtersToQueryParams) return _this2.props.filtersToQueryParams(_this2.state);
      var prms = Object.keys(_this2.state.filters).filter(function (f) {
        return !!_this2.state.filters[f]["filter"];
      }).map(function (f) {
        return _this2.state.filters[f]["filter"];
      });
      if (!_this2.state.beforeCursor && !_this2.state.afterCursor) {
        prms.push("first: ".concat(_this2.state.pageSize));
      }
      if (!!_this2.state.afterCursor) {
        prms.push("after: \"".concat(_this2.state.afterCursor, "\""));
        prms.push("first: ".concat(_this2.state.pageSize));
      }
      if (!!_this2.state.beforeCursor) {
        prms.push("before: \"".concat(_this2.state.beforeCursor, "\""));
        prms.push("last: ".concat(_this2.state.pageSize));
      }
      if (!!_this2.state.orderBy) {
        prms.push("orderBy: [\"".concat(_this2.state.orderBy, "\"]"));
      }
      return prms;
    });
    _defineProperty__default["default"](_this2, "resetFilters", function () {
      _this2.setState(function (state, props) {
        return {
          filters: _objectSpread$8({}, _this2.props.defaultFilters),
          orderBy: props.defaultOrderBy
        };
      }, function (e) {
        return _this2.applyFilters();
      });
    });
    _defineProperty__default["default"](_this2, "onChangeFilters", function (fltrs) {
      var filters = _objectSpread$8({}, _this2.state.filters);
      fltrs.forEach(function (filter) {
        if (filter.value === null) {
          delete filters[filter.id];
        } else {
          filters[filter.id] = {
            value: filter.value,
            filter: filter.filter
          };
        }
      });
      if (_this2.props.canFetch == false) {
        _this2.setState({
          filters: filters
        });
      } else if (_this2.props.canFetch == undefined || _this2.state.canFetch == true) {
        _this2.setState({
          filters: filters
        }, function (e) {
          return _this2.applyFilters();
        });
      }
    });
    _defineProperty__default["default"](_this2, "handleEnter", function (event) {
      if (event.key == "Enter") {
        var filters = _objectSpread$8({}, _this2.state.filters);
        _this2.setState({
          filters: filters
        }, function (e) {
          return _this2.applyFilters();
        });
      }
    });
    _defineProperty__default["default"](_this2, "_cacheAndApply", function () {
      var filters = _this2.filtersToQueryParams();
      if (!!_this2.props.cacheFiltersKey) {
        var cacheKey = _this2._getCacheKey();
        _this2.props.cacheFilters(cacheKey, _this2.state.filters);
        _this2.props.fetch(filters);
      } else {
        _this2.props.fetch(filters);
      }
    });
    _defineProperty__default["default"](_this2, "applyFilters", function () {
      _this2.setState(function (state, props) {
        return {
          page: 0,
          afterCursor: null,
          beforeCursor: null,
          clearAll: state.clearAll + 1
        };
      }, _this2._cacheAndApply);
    });
    _defineProperty__default["default"](_this2, "deleteFilter", function (filter) {
      var fltrs = _this2.state.filters;
      delete fltrs[filter];
      _this2.setState({
        filters: fltrs,
        page: 0,
        afterCursor: null,
        beforeCursor: null
      }, _this2._cacheAndApply);
    });
    _defineProperty__default["default"](_this2, "clearSelected", function (e) {
      _this2.setState(function (state, props) {
        return {
          clearAll: state.clearAll + 1
        };
      });
    });
    _defineProperty__default["default"](_this2, "selectAll", function (e) {
      _this2.setState({
        selectAll: _this2.state.selectAll + 1
      });
    });
    _defineProperty__default["default"](_this2, "onChangeSelection", function (selection) {
      _this2.setState({
        selection: selection
      });
    });
    _defineProperty__default["default"](_this2, "onChangeRowsPerPage", function (cnt) {
      _this2.setState({
        pageSize: cnt,
        page: 0,
        afterCursor: null,
        beforeCursor: null
      }, function (e) {
        return _this2.props.fetch(_this2.filtersToQueryParams());
      });
    });
    _defineProperty__default["default"](_this2, "onChangePage", function (page, nbr) {
      if (nbr > _this2.state.page) {
        _this2.setState(function (state, props) {
          return {
            page: state.page + 1,
            beforeCursor: null,
            afterCursor: props.itemsPageInfo.endCursor
          };
        }, function (e) {
          return _this2.props.fetch(_this2.filtersToQueryParams());
        });
      } else if (nbr < _this2.state.page) {
        _this2.setState(function (state, props) {
          return {
            page: state.page - 1,
            beforeCursor: props.itemsPageInfo.startCursor,
            afterCursor: null
          };
        }, function (e) {
          return _this2.props.fetch(_this2.filtersToQueryParams());
        });
      }
    });
    _defineProperty__default["default"](_this2, "openMenu", function (event) {
      _this2.setState({
        menuAnchor: event.currentTarget
      });
    });
    _defineProperty__default["default"](_this2, "closeMenu", function () {
      _this2.setState({
        menuAnchor: null
      });
    });
    _defineProperty__default["default"](_this2, "triggerAction", function (a) {
      var s = _toConsumableArray__default["default"](_this2.state.selection);
      _this2.setState(function (state, props) {
        return {
          selection: [],
          clearAll: state.clearAll + 1
        };
      }, function (e) {
        return a(s);
      });
    });
    _defineProperty__default["default"](_this2, "headerActions", function (filters) {
      if (!!_this2.props.headerActions) return _this2.props.headerActions(filters);
      if (!!_this2.props.sorts) {
        return _this2.props.sorts(filters).map(function (s) {
          return !!s ? [function () {
            return _this2.setState(function (state, props) {
              return {
                orderBy: sort(state.orderBy, s[0], s[1])
              };
            }, function (e) {
              return _this2.props.fetch(_this2.filtersToQueryParams());
            });
          }, function () {
            return formatSorter(_this2.state.orderBy, s[0], s[1]);
          }] : [null, function () {
            return null;
          }];
        });
      }
      return [];
    });
    return _this2;
  }
  _inherits__default["default"](Searcher, _Component3);
  return _createClass__default["default"](Searcher, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;
      var cacheKey = this._getCacheKey();
      var filters = this.props.filtersCache[cacheKey] || this.props.defaultFilters || {};
      this.setState(function (state, props) {
        return {
          filters: filters,
          pageSize: props.defaultPageSize || 10,
          orderBy: props.defaultOrderBy
        };
      }, function (e) {
        return _this3.applyFilters();
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.resetFiltersOnUnmount) {
        var cacheKey = this._getCacheKey();
        this.props.resetCacheFilters(cacheKey);
        this.resetFilters();
      }
    }
  }, {
    key: "_getCacheKey",
    value: function _getCacheKey() {
      var _this$props3 = this.props,
        cachePerTab = _this$props3.cachePerTab,
        cacheTabName = _this$props3.cacheTabName,
        cacheFiltersKey = _this$props3.cacheFiltersKey;
      return cachePerTab && cacheTabName ? "".concat(cacheFiltersKey, "-").concat(cacheTabName) : cacheFiltersKey;
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;
      var _this$props4 = this.props,
        classes = _this$props4.classes,
        module = _this$props4.module,
        _this$props4$canSelec = _this$props4.canSelectAll,
        canSelectAll = _this$props4$canSelec === void 0 ? null : _this$props4$canSelec,
        _this$props4$contribu = _this$props4.contributionKey,
        contributionKey = _this$props4$contribu === void 0 ? null : _this$props4$contribu,
        FilterPane = _this$props4.FilterPane,
        FilterExt = _this$props4.FilterExt,
        _this$props4$filterPa = _this$props4.filterPaneContributionsKey,
        filterPaneContributionsKey = _this$props4$filterPa === void 0 ? null : _this$props4$filterPa,
        tableTitle = _this$props4.tableTitle,
        rowIdentifier = _this$props4.rowIdentifier,
        rowsPerPageOptions = _this$props4.rowsPerPageOptions,
        _this$props4$rowLocke = _this$props4.rowLocked,
        _rowLocked = _this$props4$rowLocke === void 0 ? function () {
          return false;
        } : _this$props4$rowLocke,
        _this$props4$rowHighl = _this$props4.rowHighlighted,
        _rowHighlighted = _this$props4$rowHighl === void 0 ? function () {
          return false;
        } : _this$props4$rowHighl,
        _this$props4$rowHighl2 = _this$props4.rowHighlightedAlt,
        _rowHighlightedAlt = _this$props4$rowHighl2 === void 0 ? function () {
          return false;
        } : _this$props4$rowHighl2,
        _this$props4$rowSecon = _this$props4.rowSecondaryHighlighted,
        _rowSecondaryHighlighted = _this$props4$rowSecon === void 0 ? function () {
          return false;
        } : _this$props4$rowSecon,
        _this$props4$rowDisab = _this$props4.rowDisabled,
        _rowDisabled = _this$props4$rowDisab === void 0 ? function () {
          return false;
        } : _this$props4$rowDisab,
        _this$props4$selectio = _this$props4.selectionMessage,
        selectionMessage = _this$props4$selectio === void 0 ? null : _this$props4$selectio,
        _this$props4$preHeade = _this$props4.preHeaders,
        preHeaders = _this$props4$preHeade === void 0 ? null : _this$props4$preHeade,
        _this$props4$headers = _this$props4.headers,
        headers = _this$props4$headers === void 0 ? null : _this$props4$headers,
        _this$props4$aligns = _this$props4.aligns,
        aligns = _this$props4$aligns === void 0 ? null : _this$props4$aligns,
        items = _this$props4.items,
        itemsPageInfo = _this$props4.itemsPageInfo,
        fetchingItems = _this$props4.fetchingItems,
        fetchedItems = _this$props4.fetchedItems,
        errorItems = _this$props4.errorItems,
        itemFormatters = _this$props4.itemFormatters,
        onDoubleClick = _this$props4.onDoubleClick,
        actions = _this$props4.actions,
        _this$props4$processi = _this$props4.processing,
        processing = _this$props4$processi === void 0 ? false : _this$props4$processi,
        _this$props4$withSele = _this$props4.withSelection,
        withSelection = _this$props4$withSele === void 0 ? null : _this$props4$withSele,
        _this$props4$actionsC = _this$props4.actionsContributionKey,
        actionsContributionKey = _this$props4$actionsC === void 0 ? null : _this$props4$actionsC,
        _this$props4$withPagi = _this$props4.withPagination,
        withPagination = _this$props4$withPagi === void 0 ? true : _this$props4$withPagi,
        _this$props4$exportab = _this$props4.exportable,
        exportable = _this$props4$exportab === void 0 ? false : _this$props4$exportab,
        _this$props4$exportFe = _this$props4.exportFetch,
        exportFetch = _this$props4$exportFe === void 0 ? null : _this$props4$exportFe,
        _this$props4$exportFi = _this$props4.exportFields,
        exportFields = _this$props4$exportFi === void 0 ? ['id'] : _this$props4$exportFi,
        exportFieldsColumns = _this$props4.exportFieldsColumns,
        intl = _this$props4.intl,
        _this$props4$isCustom = _this$props4.isCustomFiltering,
        isCustomFiltering = _this$props4$isCustom === void 0 ? false : _this$props4$isCustom,
        _this$props4$objectFo = _this$props4.objectForCustomFiltering,
        objectForCustomFiltering = _this$props4$objectFo === void 0 ? null : _this$props4$objectFo,
        _this$props4$addition = _this$props4.additionalCustomFilterParams,
        additionalCustomFilterParams = _this$props4$addition === void 0 ? null : _this$props4$addition,
        _this$props4$moduleNa = _this$props4.moduleName,
        moduleName = _this$props4$moduleNa === void 0 ? null : _this$props4$moduleNa,
        _this$props4$objectTy = _this$props4.objectType,
        objectType = _this$props4$objectTy === void 0 ? null : _this$props4$objectTy,
        _this$props4$appliedC = _this$props4.appliedCustomFilters,
        appliedCustomFilters = _this$props4$appliedC === void 0 ? null : _this$props4$appliedC,
        _this$props4$setAppli = _this$props4.setAppliedCustomFilters,
        setAppliedCustomFilters = _this$props4$setAppli === void 0 ? null : _this$props4$setAppli,
        _this$props4$appliedF = _this$props4.appliedFiltersRowStructure,
        appliedFiltersRowStructure = _this$props4$appliedF === void 0 ? null : _this$props4$appliedF,
        _this$props4$setAppli2 = _this$props4.setAppliedFiltersRowStructure,
        setAppliedFiltersRowStructure = _this$props4$setAppli2 === void 0 ? null : _this$props4$setAppli2,
        _this$props4$applyNum = _this$props4.applyNumberCircle,
        applyNumberCircle = _this$props4$applyNum === void 0 ? null : _this$props4$applyNum,
        _this$props4$exportFi2 = _this$props4.exportFieldLabel,
        exportFieldLabel = _this$props4$exportFi2 === void 0 ? null : _this$props4$exportFi2,
        _this$props4$showOrdi = _this$props4.showOrdinalNumber,
        showOrdinalNumber = _this$props4$showOrdi === void 0 ? false : _this$props4$showOrdi,
        _this$props4$chooseEx = _this$props4.chooseExportableColumns,
        chooseExportableColumns = _this$props4$chooseEx === void 0 ? false : _this$props4$chooseEx;
      return /*#__PURE__*/React__default["default"].createElement(React.Fragment, null, !!FilterPane && /*#__PURE__*/React__default["default"].createElement(SearcherPane$1, {
        module: module,
        reset: this.resetFilters,
        refresh: this.applyFilters,
        del: this.deleteFilter,
        filters: this.state.filters,
        filterPane: /*#__PURE__*/React__default["default"].createElement(FilterPane, {
          filters: this.state.filters,
          onChangeFilters: this.onChangeFilters,
          FilterExt: FilterExt,
          filterPaneContributionsKey: filterPaneContributionsKey,
          handleEnter: this.handleEnter
        }),
        isCustomFiltering: isCustomFiltering,
        objectForCustomFiltering: objectForCustomFiltering,
        additionalCustomFilterParams: additionalCustomFilterParams,
        moduleName: moduleName,
        objectType: objectType,
        setAppliedCustomFilters: setAppliedCustomFilters,
        appliedCustomFilters: appliedCustomFilters,
        onChangeFilters: this.onChangeFilters,
        appliedFiltersRowStructure: appliedFiltersRowStructure,
        setAppliedFiltersRowStructure: setAppliedFiltersRowStructure,
        applyNumberCircle: applyNumberCircle
      }), !!contributionKey && /*#__PURE__*/React__default["default"].createElement(Contributions, {
        contributionKey: contributionKey
      }), /*#__PURE__*/React__default["default"].createElement(core.Paper, {
        className: classes.paper
      }, /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        container: true,
        className: classes.tableContainer
      }, errorItems ? /*#__PURE__*/React__default["default"].createElement(ProgressOrError$1, {
        error: errorItems
      }) : /*#__PURE__*/React__default["default"].createElement(React.Fragment, null, /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        container: true,
        item: true,
        alignItems: "center",
        xs: 8,
        className: classes.paperHeader
      }, /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        item: true,
        xs: 8,
        className: classes.paperHeaderTitle
      }, !fetchingItems ? tableTitle : formatMessage(intl, "core", "table.resultsLoading")), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        item: true,
        xs: 4,
        className: classes.paperHeaderMessage
      }, /*#__PURE__*/React__default["default"].createElement(SelectionPane, {
        module: module,
        selectionMessage: selectionMessage,
        selection: this.state.selection
      }))), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        container: true,
        alignItems: "center",
        item: true,
        xs: 4,
        className: classes.paperHeader
      }, fetchedItems && /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        container: true,
        direction: "row",
        justify: "flex-end",
        className: classes.paperHeaderAction
      }, /*#__PURE__*/React__default["default"].createElement(StyledSelectionMenu, {
        canSelectAll: canSelectAll,
        selection: this.state.selection,
        items: items,
        clearSelected: this.clearSelected,
        selectAll: this.selectAll,
        triggerAction: this.triggerAction,
        actions: actions,
        processing: processing,
        actionsContributionKey: actionsContributionKey,
        filters: this.state.filters,
        exportable: exportable,
        exportFetch: exportFetch,
        exportFields: exportFields,
        exportFieldsColumns: exportFieldsColumns,
        exportFieldLabel: exportFieldLabel,
        chooseExportableColumns: chooseExportableColumns
      }))), /*#__PURE__*/React__default["default"].createElement(core.Divider, null), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        item: true,
        xs: 12
      }, /*#__PURE__*/React__default["default"].createElement(Table$3, {
        size: "small",
        module: module,
        fetching: fetchingItems,
        preHeaders: !!preHeaders && preHeaders(this.state.selection),
        headers: headers(this.state.filters),
        headerActions: this.headerActions(this.state.filters),
        aligns: !!aligns && aligns(),
        itemFormatters: itemFormatters(this.state.filters),
        rowLocked: function rowLocked(i) {
          return _rowLocked(_this4.state.selection, i);
        },
        rowHighlighted: function rowHighlighted(i) {
          return _rowHighlighted(_this4.state.selection, i);
        },
        rowHighlightedAlt: function rowHighlightedAlt(i) {
          return _rowHighlightedAlt(_this4.state.selection, i);
        },
        rowSecondaryHighlighted: function rowSecondaryHighlighted(i) {
          return _rowSecondaryHighlighted(i);
        },
        rowDisabled: function rowDisabled(i) {
          return _rowDisabled(_this4.state.selection, i);
        },
        items: items,
        withPagination: withPagination,
        withSelection: withSelection,
        itemIdentifier: rowIdentifier,
        selection: this.state.selection,
        selectAll: this.state.selectAll,
        clearAll: this.state.clearAll,
        onChangeSelection: this.onChangeSelection,
        onDoubleClick: onDoubleClick,
        page: this.state.page,
        pageSize: this.state.pageSize,
        count: !!itemsPageInfo.totalCount ? itemsPageInfo.totalCount : 1000000,
        onChangePage: this.onChangePage,
        rowsPerPageOptions: rowsPerPageOptions,
        onChangeRowsPerPage: this.onChangeRowsPerPage,
        showOrdinalNumber: showOrdinalNumber
      }))))));
    }
  }]);
}(React.Component);
var mapStateToProps$5 = function mapStateToProps(state) {
  var _state$core, _state$core2, _state$core3, _state$core$isSeconda;
  return {
    filtersCache: !!state.core && state.core.filtersCache,
    paginationPage: (_state$core = state.core) === null || _state$core === void 0 || (_state$core = _state$core.savedPagination) === null || _state$core === void 0 ? void 0 : _state$core.paginationPage,
    afterCursor: (_state$core2 = state.core) === null || _state$core2 === void 0 || (_state$core2 = _state$core2.savedPagination) === null || _state$core2 === void 0 ? void 0 : _state$core2.afterCursor,
    beforeCursor: (_state$core3 = state.core) === null || _state$core3 === void 0 || (_state$core3 = _state$core3.savedPagination) === null || _state$core3 === void 0 ? void 0 : _state$core3.beforeCursor,
    // This is not used directly, but is needed for Searcher component to be rerendered on change of calendar type
    isSecondaryCalendarEnabled: (_state$core$isSeconda = state.core.isSecondaryCalendarEnabled) !== null && _state$core$isSeconda !== void 0 ? _state$core$isSeconda : false
  };
};
var mapDispatchToProps$4 = function mapDispatchToProps(dispatch) {
  return redux.bindActionCreators({
    cacheFilters: cacheFilters,
    resetCacheFilters: resetCacheFilters,
    saveCurrentPaginationPage: saveCurrentPaginationPage
  }, dispatch);
};
var Searcher$1 = withModulesManager(reactIntl.injectIntl(styles$w.withTheme(styles$w.withStyles(styles$8)(reactRedux.connect(mapStateToProps$5, mapDispatchToProps$4)(Searcher)))));

var nepali = {
  name: "nepali",
  startYear: 1,
  yearLength: 365,
  epoch: 1701212,
  century: 20,
  weekStartDayIndex: 1,
  getMonthLengths: function getMonthLengths(year) {
    if (year < 1970) return nepaliMonthsDictionary["1970"];else if (year > 2099) return nepaliMonthsDictionary["2099"];else return nepaliMonthsDictionary[parseInt(year)];
  },
  isLeap: function isLeap(year) {
    // workaround needed because of things hardcoded in library
    return year;
  },
  getLeaps: function getLeaps(currentYear) {
    return [];
  },
  getDayOfYear: function getDayOfYear(_ref) {
    var year = _ref.year,
      month = _ref.month,
      day = _ref.day;
    var monthLengths = this.getMonthLengths(year);
    for (var i = 0; i < month.index; i++) {
      day += monthLengths[i];
    }
    return day;
  },
  getAllDays: function getAllDays(date) {
    var year = date.year;
    return this.yearLength * (year - 1) + this.getDayOfYear(date);
  },
  leapsLength: function leapsLength(year) {
    return 0;
  },
  guessYear: function guessYear(days, currentYear) {
    var year = ~~(days / 365.24);
    return year + (currentYear > 0 ? 1 : -1);
  }
};

// based on code from legacy version
var nepaliMonthsDictionary = {
  "1970": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  "1971": [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30],
  "1972": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
  "1973": [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  //1973
  "1974": [31, 31, 32, 30, 31, 31, 30, 29, 30, 29, 30, 30],
  "1975": [31, 31, 32, 32, 30, 31, 30, 29, 30, 29, 30, 30],
  "1976": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  "1977": [31, 32, 31, 32, 31, 31, 29, 30, 29, 30, 29, 31],
  "1978": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  "1979": [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  "1980": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  "1981": [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
  "1982": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  "1983": [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  "1984": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  "1985": [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
  "1986": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  "1987": [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  "1988": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  "1989": [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  "1990": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  "1991": [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  "1992": [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  "1993": [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  "1994": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  "1995": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
  "1996": [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  "1997": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  "1998": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  "1999": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  "2000": [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  //2000
  "2001": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  //2001
  "2002": [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  "2003": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  "2004": [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  "2005": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  "2006": [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  "2007": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  "2008": [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
  "2009": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  "2010": [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  "2011": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  "2012": [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
  "2013": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  "2014": [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  "2015": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  "2016": [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
  "2017": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  "2018": [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  "2019": [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  "2020": [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  "2021": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  "2022": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
  "2023": [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  "2024": [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  "2025": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  "2026": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  "2027": [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  "2028": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  "2029": [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30],
  "2030": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  "2031": [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  "2032": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  "2033": [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  "2034": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  "2035": [30, 32, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
  "2036": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  "2037": [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  "2038": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  "2039": [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
  "2040": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  "2041": [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  "2042": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  "2043": [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
  "2044": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  "2045": [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  "2046": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  "2047": [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  "2048": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  "2049": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
  "2050": [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  "2051": [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  "2052": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  "2053": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
  "2054": [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  "2055": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  "2056": [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30],
  "2057": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  "2058": [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  "2059": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  "2060": [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  "2061": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  "2062": [30, 32, 31, 32, 31, 31, 29, 30, 29, 30, 29, 31],
  "2063": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  "2064": [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  "2065": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  "2066": [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
  "2067": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  "2068": [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  "2069": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  "2070": [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
  "2071": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  //2071
  "2072": [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  //2072
  "2073": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  //2073
  "2074": [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  "2075": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  "2076": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
  "2077": [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  "2078": [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  "2079": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  "2080": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
  "2081": [31, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30],
  "2082": [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
  "2083": [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30],
  "2084": [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30],
  "2085": [31, 32, 31, 32, 30, 31, 30, 30, 29, 30, 30, 30],
  "2086": [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
  "2087": [31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30],
  "2088": [30, 31, 32, 32, 30, 31, 30, 30, 29, 30, 30, 30],
  "2089": [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
  "2090": [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
  //2090
  "2091": [31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30],
  "2092": [30, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30],
  "2093": [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
  "2094": [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30],
  "2095": [31, 31, 32, 31, 31, 31, 30, 29, 30, 30, 30, 30],
  "2096": [30, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  "2097": [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
  "2098": [31, 31, 32, 31, 31, 31, 29, 30, 29, 30, 29, 31],
  "2099": [31, 31, 32, 31, 31, 31, 30, 29, 29, 30, 30, 30] //2099
};

var nepali_en = {
  name: "nepali_en",
  months: [["Baishakh", "Baishakh"], ["Jestha", "Jestha"], ["Ashadh", "Ashadh"], ["Shrawan", "Shrawan"], ["Bhadra", "Bhadra"], ["Ashwin", "Ashwin"], ["Kartik", "Kartik"], ["Mangsir", "Mangsir"], ["Poush", "Poush"], ["Magh", "Magh"], ["Falgun", "Falgun"], ["Chaitra", "Chaitra"]],
  weekDays: [["Saturday", "Sat"], ["Sunday", "Sun"], ["Monday", "Mon"], ["Tuesday", "Tue"], ["Wednesday", "Wed"], ["Thursday", "Thu"], ["Friday", "Fri"]],
  digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  meridiems: [["AM", "am"], ["PM", "pm"]]
};

var nepali_np = {
  name: "nepali_np",
  months: [["Baishakh", "Baishakh"], ["Jestha", "Jestha"], ["Ashadh", "Ashadh"], ["Shrawan", "Shrawan"], ["Bhadra", "Bhadra"], ["Ashwin", "Ashwin"], ["Kartik", "Kartik"], ["Mangsir", "Mangsir"], ["Poush", "Poush"], ["Magh", "Magh"], ["Falgun", "Falgun"], ["Chaitra", "Chaitra"]],
  weekDays: [["Saturday", "Sat"], ["Sunday", "Sun"], ["Monday", "Mon"], ["Tuesday", "Tue"], ["Wednesday", "Wed"], ["Thursday", "Thu"], ["Friday", "Fri"]],
  digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  meridiems: [["AM", "am"], ["PM", "pm"]]
};

var _excluded$3 = ["intl", "classes", "disablePast", "module", "label", "readOnly", "required", "fullWidth", "format", "reset", "isSecondaryCalendarEnabled", "modulesManager", "minDate", "maxDate"];
function _callSuper$b(t, o, e) { return o = _getPrototypeOf__default["default"](o), _possibleConstructorReturn__default["default"](t, _isNativeReflectConstruct$b() ? Reflect.construct(o, e || [], _getPrototypeOf__default["default"](t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct$b() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$b = function _isNativeReflectConstruct() { return !!t; })(); }
var styles$7 = function styles(theme) {
  return {
    label: {
      color: theme.palette.primary.main
    }
  };
};
function fromISODate$1(s) {
  if (!s) return null;
  return moment__default["default"](s).toDate();
}
var openIMISDatePicker = /*#__PURE__*/function (_Component) {
  function openIMISDatePicker() {
    var _this;
    _classCallCheck__default["default"](this, openIMISDatePicker);
    for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
      args[_key2] = arguments[_key2];
    }
    _this = _callSuper$b(this, openIMISDatePicker, [].concat(args));
    _defineProperty__default["default"](_this, "state", {
      value: null
    });
    _defineProperty__default["default"](_this, "dateChange", function (d) {
      _this.setState({
        value: toISODate(d)
      }, function (i) {
        return !!_this.props.onChange ? _this.props.onChange(toISODate(d)) : null;
      });
    });
    _defineProperty__default["default"](_this, "secondaryCalendarDateChange", function (d) {
      _this.setState({
        value: toISODate(d.toDate())
      }, function (i) {
        return !!_this.props.onChange ? _this.props.onChange(toISODate(d.toDate())) : null;
      });
    });
    _defineProperty__default["default"](_this, "clearDate", function (e) {
      e.preventDefault();
      _this.setState({
        value: null
      });
    });
    _defineProperty__default["default"](_this, "setMinDate", function () {
      var _this$props = _this.props,
        disablePast = _this$props.disablePast,
        minDate = _this$props.minDate;
      return {
        minDate: _this.moveByOneDay(disablePast ? new Date() : new Date(minDate))
      };
    });
    _defineProperty__default["default"](_this, "secondaryCalendarsOptions", {
      "nepali": nepali,
      "default": gregorian__default["default"]
    });
    _defineProperty__default["default"](_this, "secondaryCalendarsLocaleOptions", {
      "nepali_en": nepali_en,
      "nepali_np": nepali_np,
      "default": gregorian_en__default["default"]
    });
    _defineProperty__default["default"](_this, "getDictionaryValueOrDefault", function (_dictionary, _key) {
      return _key in _dictionary ? _dictionary[_key] : _dictionary["default"];
    });
    // for some reason multi-date-picker picks incorrect date
    // we need to add one day for it to works correctly
    // it is possible, that future release of library will fix it
    // making this method redundant
    _defineProperty__default["default"](_this, "moveByOneDay", function (date) {
      date.setDate(date.getDate() + 1);
      return date;
    });
    return _this;
  }
  _inherits__default["default"](openIMISDatePicker, _Component);
  return _createClass__default["default"](openIMISDatePicker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState(function (state, props) {
        return {
          value: props.value || null
        };
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevState, prevProps, snapshot) {
      if (prevState.value !== this.props.value) {
        this.setState(function (state, props) {
          return {
            value: fromISODate$1(props.value)
          };
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props2 = this.props,
        intl = _this$props2.intl,
        classes = _this$props2.classes,
        disablePast = _this$props2.disablePast,
        module = _this$props2.module,
        label = _this$props2.label,
        _this$props2$readOnly = _this$props2.readOnly,
        readOnly = _this$props2$readOnly === void 0 ? false : _this$props2$readOnly,
        _this$props2$required = _this$props2.required,
        required = _this$props2$required === void 0 ? false : _this$props2$required,
        _this$props2$fullWidt = _this$props2.fullWidth,
        fullWidth = _this$props2$fullWidt === void 0 ? true : _this$props2$fullWidt,
        _this$props2$format = _this$props2.format,
        format = _this$props2$format === void 0 ? "DD-MM-YYYY" : _this$props2$format;
        _this$props2.reset;
        var isSecondaryCalendarEnabled = _this$props2.isSecondaryCalendarEnabled,
        modulesManager = _this$props2.modulesManager,
        minDate = _this$props2.minDate,
        maxDate = _this$props2.maxDate,
        otherProps = _objectWithoutProperties__default["default"](_this$props2, _excluded$3);
      if (isSecondaryCalendarEnabled) {
        var secondCalendarFormatting = modulesManager.getConf("fe-core", "secondCalendarFormatting", format);
        var secondCalendarType = modulesManager.getConf("fe-core", "secondCalendarType", "nepali");
        var secondCalendarLocale = modulesManager.getConf("fe-core", "secondCalendarLocale", "nepali_en");
        return /*#__PURE__*/React__default["default"].createElement(core.FormControl, {
          fullWidth: fullWidth
        }, /*#__PURE__*/React__default["default"].createElement("label", {
          className: classes.label
        }, !!label ? formatMessage(intl, module, label).concat(required ? " *" : "") : null), /*#__PURE__*/React__default["default"].createElement(DatePicker__default["default"], _extends__default["default"]({
          format: secondCalendarFormatting,
          disabled: readOnly,
          value: this.state.value ? this.moveByOneDay(new Date(this.state.value)) : null
        }, (!!minDate || disablePast) && this.setMinDate(), !!maxDate && {
          maxDate: this.moveByOneDay(new Date(maxDate))
        }, {
          onChange: this.secondaryCalendarDateChange,
          highlightToday: false,
          calendar: this.getDictionaryValueOrDefault(this.secondaryCalendarsOptions, secondCalendarType),
          locale: this.getDictionaryValueOrDefault(this.secondaryCalendarsLocaleOptions, secondCalendarLocale)
        }), /*#__PURE__*/React__default["default"].createElement("button", {
          style: {
            margin: "5px"
          },
          onClick: function onClick(e) {
            return _this2.clearDate(e);
          }
        }, formatMessage(intl, "core", "calendar.clearButton"))));
      } else {
        return /*#__PURE__*/React__default["default"].createElement(core.FormControl, {
          fullWidth: fullWidth
        }, /*#__PURE__*/React__default["default"].createElement(pickers.DatePicker, _extends__default["default"]({}, otherProps, {
          maxDate: maxDate,
          minDate: minDate,
          format: format,
          disabled: readOnly,
          required: required,
          clearable: true,
          value: this.state.value,
          InputLabelProps: {
            className: classes.label
          },
          label: !!label ? formatMessage(intl, module, label) : null,
          onChange: this.dateChange,
          disablePast: disablePast
        })));
      }
    }
  }]);
}(React.Component);
var mapStateToProps$4 = function mapStateToProps(state) {
  var _state$core$isSeconda;
  return {
    isSecondaryCalendarEnabled: (_state$core$isSeconda = state.core.isSecondaryCalendarEnabled) !== null && _state$core$isSeconda !== void 0 ? _state$core$isSeconda : false
  };
};
var openIMISDatePicker$1 = reactIntl.injectIntl(feCore.withModulesManager(feCore.withHistory(reactRedux.connect(mapStateToProps$4, null)(styles$w.withTheme(styles$w.withStyles(styles$7)(openIMISDatePicker))))));

function _callSuper$a(t, o, e) { return o = _getPrototypeOf__default["default"](o), _possibleConstructorReturn__default["default"](t, _isNativeReflectConstruct$a() ? Reflect.construct(o, e || [], _getPrototypeOf__default["default"](t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct$a() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$a = function _isNativeReflectConstruct() { return !!t; })(); }
var styles$6 = function styles(theme) {
  return {
    label: {
      color: theme.palette.primary.main
    },
    dialogTitle: theme.dialog.title,
    dialogContent: theme.dialog.content
  };
};
var RawPickerDialog = /*#__PURE__*/function (_Component) {
  function RawPickerDialog() {
    var _this;
    _classCallCheck__default["default"](this, RawPickerDialog);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper$a(this, RawPickerDialog, [].concat(args));
    _defineProperty__default["default"](_this, "keysFunction", function (event) {
      if (event.keyCode === 27) {
        _this.props.onClose();
      }
    });
    return _this;
  }
  _inherits__default["default"](RawPickerDialog, _Component);
  return _createClass__default["default"](RawPickerDialog, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener("keydown", this.keysFunction, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener("keydown", this.keysFunction, false);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        classes = _this$props.classes,
        open = _this$props.open,
        onClose = _this$props.onClose,
        onSelect = _this$props.onSelect,
        module = _this$props.module,
        title = _this$props.title,
        close = _this$props.close,
        filter = _this$props.filter,
        suggestions = _this$props.suggestions,
        suggestionFormatter = _this$props.suggestionFormatter,
        count = _this$props.count,
        page = _this$props.page,
        pageSize = _this$props.pageSize,
        onChangePage = _this$props.onChangePage,
        onChangeRowsPerPage = _this$props.onChangeRowsPerPage;
      return /*#__PURE__*/React__default["default"].createElement(core.Dialog, {
        open: open,
        fullWidth: true,
        maxWidth: "md"
      }, /*#__PURE__*/React__default["default"].createElement(core.DialogTitle, {
        className: classes.dialogTitle
      }, /*#__PURE__*/React__default["default"].createElement(FormattedMessage$1, {
        module: module,
        id: title
      })), /*#__PURE__*/React__default["default"].createElement(core.Divider, null), /*#__PURE__*/React__default["default"].createElement(core.DialogContent, {
        className: classes.dialogContent
      }, filter, /*#__PURE__*/React__default["default"].createElement(core.Divider, null), /*#__PURE__*/React__default["default"].createElement(Table$3, {
        items: suggestions,
        itemFormatters: [suggestionFormatter],
        withPagination: count > pageSize,
        page: page,
        pageSize: pageSize,
        count: count,
        onChangePage: onChangePage,
        onChangeRowsPerPage: onChangeRowsPerPage,
        onDoubleClick: onSelect
      })), /*#__PURE__*/React__default["default"].createElement(core.DialogActions, null, /*#__PURE__*/React__default["default"].createElement(core.Button, {
        onClick: onClose,
        color: "primary"
      }, /*#__PURE__*/React__default["default"].createElement(FormattedMessage$1, {
        module: module,
        id: close || "picker.close"
      }))));
    }
  }]);
}(React.Component);
var PickerDialog = reactIntl.injectIntl(styles$w.withTheme(styles$w.withStyles(styles$6)(RawPickerDialog)));
var Picker = /*#__PURE__*/function (_Component2) {
  function Picker() {
    var _this2;
    _classCallCheck__default["default"](this, Picker);
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    _this2 = _callSuper$a(this, Picker, [].concat(args));
    _defineProperty__default["default"](_this2, "state", {
      open: false
    });
    _defineProperty__default["default"](_this2, "_onSelect", function (v) {
      _this2.setState({
        open: false
      }, function (e) {
        return _this2.props.onSelect(v);
      });
    });
    _defineProperty__default["default"](_this2, "onClick", function () {
      var _this2$props = _this2.props,
        _this2$props$check = _this2$props.check,
        check = _this2$props$check === void 0 ? null : _this2$props$check,
        _this2$props$checked = _this2$props.checked,
        checked = _this2$props$checked === void 0 ? true : _this2$props$checked;
      if (!!check && !checked) {
        check();
      } else {
        _this2.setState({
          open: true
        });
      }
    });
    _defineProperty__default["default"](_this2, "onClose", function (e) {
      return _this2.setState({
        open: false
      });
    });
    _defineProperty__default["default"](_this2, "onClear", function (e) {
      _this2.props.onSelect(null);
    });
    _defineProperty__default["default"](_this2, "_suggestionFormatter", function (a) {
      return /*#__PURE__*/React__default["default"].createElement(FakeInput$1, {
        onSelect: function onSelect(e) {
          return _this2._onSelect(a);
        },
        value: _this2.props.suggestionFormatter(a)
      });
    });
    return _this2;
  }
  _inherits__default["default"](Picker, _Component2);
  return _createClass__default["default"](Picker, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (!prevProps.checked && !!this.props.checked) {
        this.setState({
          open: true
        });
      }
    }
  }, {
    key: "renderIcon",
    value: function renderIcon() {
      var _this$props2 = this.props,
        IconRender = _this$props2.IconRender,
        title = _this$props2.title;
      return /*#__PURE__*/React__default["default"].createElement(core.IconButton, {
        title: title,
        onClick: this.onClick
      }, /*#__PURE__*/React__default["default"].createElement(IconRender, null));
    }
  }, {
    key: "renderField",
    value: function renderField() {
      var _this3 = this;
      var _this$props3 = this.props,
        intl = _this$props3.intl,
        classes = _this$props3.classes,
        module = _this$props3.module,
        label = _this$props3.label,
        suggestionFormatter = _this$props3.suggestionFormatter,
        value = _this$props3.value,
        _this$props3$readOnly = _this$props3.readOnly,
        readOnly = _this$props3$readOnly === void 0 ? false : _this$props3$readOnly,
        _this$props3$required = _this$props3.required,
        required = _this$props3$required === void 0 ? false : _this$props3$required;
      return /*#__PURE__*/React__default["default"].createElement(core.FormControl, {
        fullWidth: true
      }, /*#__PURE__*/React__default["default"].createElement(core.TextField, {
        className: classes.picker,
        disabled: readOnly,
        required: required,
        label: !!label && formatMessage(intl, module, label),
        onClick: function onClick(e) {
          return _this3.setState({
            open: true
          });
        },
        value: suggestionFormatter(value),
        InputLabelProps: {
          className: classes.label
        },
        InputProps: {
          startAdornment: !readOnly && /*#__PURE__*/React__default["default"].createElement(core.InputAdornment, {
            position: "start"
          }, /*#__PURE__*/React__default["default"].createElement(SearchIcon__default["default"], null)),
          endAdornment: !readOnly && /*#__PURE__*/React__default["default"].createElement(core.InputAdornment, {
            position: "end"
          }, /*#__PURE__*/React__default["default"].createElement(core.IconButton, {
            onClick: this.onClear
          }, /*#__PURE__*/React__default["default"].createElement(ClearIcon__default["default"], null)))
        }
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
        module = _this$props4.module,
        dialogTitle = _this$props4.dialogTitle,
        dialogClose = _this$props4.dialogClose,
        dialogSelect = _this$props4.dialogSelect,
        filter = _this$props4.filter,
        suggestions = _this$props4.suggestions,
        count = _this$props4.count,
        page = _this$props4.page,
        pageSize = _this$props4.pageSize,
        onChangeRowsPerPage = _this$props4.onChangeRowsPerPage,
        onChangePage = _this$props4.onChangePage,
        _this$props4$readOnly = _this$props4.readOnly,
        readOnly = _this$props4$readOnly === void 0 ? false : _this$props4$readOnly,
        IconRender = _this$props4.IconRender,
        _this$props4$checked = _this$props4.checked,
        checked = _this$props4$checked === void 0 ? true : _this$props4$checked;
      return /*#__PURE__*/React__default["default"].createElement(React.Fragment, null, !readOnly && !!checked && /*#__PURE__*/React__default["default"].createElement(PickerDialog, {
        open: this.state.open,
        onClose: this.onClose,
        onSelect: this._onSelect,
        module: module,
        title: dialogTitle,
        close: dialogClose,
        select: dialogSelect,
        filter: filter,
        suggestions: suggestions,
        suggestionFormatter: this._suggestionFormatter,
        count: count,
        pageSize: pageSize,
        page: page,
        onChangeRowsPerPage: onChangeRowsPerPage,
        onChangePage: onChangePage
      }), !!IconRender && this.renderIcon(), !IconRender && this.renderField());
    }
  }]);
}(React.Component);
var Picker$1 = reactIntl.injectIntl(styles$w.withTheme(styles$w.withStyles(styles$6)(Picker)));

function _callSuper$9(t, o, e) { return o = _getPrototypeOf__default["default"](o), _possibleConstructorReturn__default["default"](t, _isNativeReflectConstruct$9() ? Reflect.construct(o, e || [], _getPrototypeOf__default["default"](t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct$9() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$9 = function _isNativeReflectConstruct() { return !!t; })(); }
var INIT_STATE = {
  value: null
};
var ConstantBasedPicker = /*#__PURE__*/function (_Component) {
  function ConstantBasedPicker() {
    var _this;
    _classCallCheck__default["default"](this, ConstantBasedPicker);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper$9(this, ConstantBasedPicker, [].concat(args));
    _defineProperty__default["default"](_this, "state", INIT_STATE);
    _defineProperty__default["default"](_this, "_formatValue", function (v) {
      var _this$props$nullLabel;
      return v === null ? formatMessage(_this.props.intl, _this.props.module, (_this$props$nullLabel = _this.props.nullLabel) !== null && _this$props$nullLabel !== void 0 ? _this$props$nullLabel : "".concat(_this.props.label, ".null")) : formatMessage(_this.props.intl, _this.props.module, "".concat(_this.props.label, ".").concat(v));
    });
    _defineProperty__default["default"](_this, "_onChange", function (v) {
      _this.setState({
        value: v
      }, function (e) {
        _this.props.onChange(v, _this._formatValue(v));
      });
    });
    return _this;
  }
  _inherits__default["default"](ConstantBasedPicker, _Component);
  return _createClass__default["default"](ConstantBasedPicker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!!this.props.value) {
        this.setState(function (state, props) {
          return {
            value: props.value
          };
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (prevProps.reset !== this.props.reset || prevProps.value !== this.props.value) {
        this.setState(function (state, props) {
          return {
            value: props.value
          };
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        module = _this$props.module,
        _this$props$withLabel = _this$props.withLabel,
        withLabel = _this$props$withLabel === void 0 ? true : _this$props$withLabel,
        label = _this$props.label,
        constants = _this$props.constants,
        name = _this$props.name,
        _this$props$filtered = _this$props.filtered,
        filtered = _this$props$filtered === void 0 ? [] : _this$props$filtered,
        _this$props$withNull = _this$props.withNull,
        withNull = _this$props$withNull === void 0 ? true : _this$props$withNull,
        _this$props$readOnly = _this$props.readOnly,
        readOnly = _this$props$readOnly === void 0 ? false : _this$props$readOnly,
        _this$props$required = _this$props.required,
        required = _this$props$required === void 0 ? false : _this$props$required;
      var value = this.state.value;
      if (!withNull && value === null && !!!constants) return null;
      var options = withNull ? [{
        value: null,
        label: this._formatValue(null)
      }] : [];
      options.push.apply(options, _toConsumableArray__default["default"](constants.filter(function (c) {
        return !filtered.includes(c) || value === c;
      }).map(function (v) {
        return {
          value: v,
          label: _this2._formatValue(v)
        };
      })));
      return /*#__PURE__*/React__default["default"].createElement(SelectInput$1, {
        module: module,
        label: !!withLabel && label ? label : " ",
        withLabel: withLabel,
        options: options,
        name: name,
        value: value,
        onChange: this._onChange,
        readOnly: readOnly,
        required: required
      });
    }
  }]);
}(React.Component);
var ConstantBasedPicker$1 = reactIntl.injectIntl(ConstantBasedPicker);

function _callSuper$8(t, o, e) { return o = _getPrototypeOf__default["default"](o), _possibleConstructorReturn__default["default"](t, _isNativeReflectConstruct$8() ? Reflect.construct(o, e || [], _getPrototypeOf__default["default"](t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct$8() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$8 = function _isNativeReflectConstruct() { return !!t; })(); }
var YearPicker = /*#__PURE__*/function (_Component) {
  function YearPicker() {
    _classCallCheck__default["default"](this, YearPicker);
    return _callSuper$8(this, YearPicker, arguments);
  }
  _inherits__default["default"](YearPicker, _Component);
  return _createClass__default["default"](YearPicker, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        intl = _this$props.intl,
        name = _this$props.name,
        value = _this$props.value,
        module = _this$props.module,
        label = _this$props.label,
        _this$props$nullLabel = _this$props.nullLabel,
        nullLabel = _this$props$nullLabel === void 0 ? "year.null" : _this$props$nullLabel,
        onChange = _this$props.onChange,
        readOnly = _this$props.readOnly,
        min = _this$props.min,
        max = _this$props.max,
        required = _this$props.required,
        _this$props$withNull = _this$props.withNull,
        withNull = _this$props$withNull === void 0 ? true : _this$props$withNull;
      var options = withNull ? [{
        value: null,
        label: formatMessage(intl, module, nullLabel)
      }] : [];
      options.push.apply(options, _toConsumableArray__default["default"](___default["default"].range(min, max).map(function (v) {
        return {
          value: v,
          label: v
        };
      })));
      return /*#__PURE__*/React__default["default"].createElement(SelectInput$1, {
        module: module,
        label: label,
        options: options,
        readOnly: readOnly,
        name: name,
        value: value,
        required: required,
        onChange: onChange
      });
    }
  }]);
}(React.Component);
var YearPicker$1 = reactIntl.injectIntl(YearPicker);

var _excluded$2 = ["intl", "module", "label", "withNull"];
function _callSuper$7(t, o, e) { return o = _getPrototypeOf__default["default"](o), _possibleConstructorReturn__default["default"](t, _isNativeReflectConstruct$7() ? Reflect.construct(o, e || [], _getPrototypeOf__default["default"](t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct$7() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$7 = function _isNativeReflectConstruct() { return !!t; })(); }
var MonthPicker = /*#__PURE__*/function (_Component) {
  function MonthPicker() {
    _classCallCheck__default["default"](this, MonthPicker);
    return _callSuper$7(this, MonthPicker, arguments);
  }
  _inherits__default["default"](MonthPicker, _Component);
  return _createClass__default["default"](MonthPicker, [{
    key: "render",
    value: function render() {
      var _this$props = this.props;
        _this$props.intl;
        var _this$props$module = _this$props.module,
        module = _this$props$module === void 0 ? "core" : _this$props$module,
        _this$props$label = _this$props.label,
        label = _this$props$label === void 0 ? "month" : _this$props$label,
        withNull = _this$props.withNull,
        others = _objectWithoutProperties__default["default"](_this$props, _excluded$2);
      return /*#__PURE__*/React__default["default"].createElement(ConstantBasedPicker$1, _extends__default["default"]({
        module: module,
        label: label,
        withNull: withNull,
        constants: ___default["default"].range(1, 13)
      }, others));
    }
  }]);
}(React.Component);
var MonthPicker$1 = reactIntl.injectIntl(MonthPicker);

var _excluded$1 = ["intl", "classes", "disablePast", "module", "label", "readOnly", "required", "fullWidth", "reset"];
function _callSuper$6(t, o, e) { return o = _getPrototypeOf__default["default"](o), _possibleConstructorReturn__default["default"](t, _isNativeReflectConstruct$6() ? Reflect.construct(o, e || [], _getPrototypeOf__default["default"](t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct$6() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$6 = function _isNativeReflectConstruct() { return !!t; })(); }
var styles$5 = function styles(theme) {
  return {
    label: {
      color: theme.palette.primary.main
    }
  };
};
function fromISODate(s) {
  if (!s) return null;
  return moment__default["default"](s).toDate();
}
var MonthYearPicker = /*#__PURE__*/function (_Component) {
  function MonthYearPicker() {
    var _this;
    _classCallCheck__default["default"](this, MonthYearPicker);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper$6(this, MonthYearPicker, [].concat(args));
    _defineProperty__default["default"](_this, "state", {
      value: null
    });
    _defineProperty__default["default"](_this, "monthYearChange", function (date) {
      if (date) {
        var monthYear = moment__default["default"](date).format("YYYY-MM");
        _this.setState({
          value: date
        }, function () {
          return _this.props.onChange(monthYear);
        });
      } else {
        _this.setState({
          value: null
        }, function () {
          return _this.props.onChange(null);
        });
      }
    });
    return _this;
  }
  _inherits__default["default"](MonthYearPicker, _Component);
  return _createClass__default["default"](MonthYearPicker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState(function (state, props) {
        return {
          value: props.value || null
        };
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevState, prevProps, snapshot) {
      if (prevState.value !== this.props.value) {
        this.setState(function (state, props) {
          return {
            value: fromISODate(props.value)
          };
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        intl = _this$props.intl,
        classes = _this$props.classes,
        disablePast = _this$props.disablePast,
        module = _this$props.module,
        label = _this$props.label,
        _this$props$readOnly = _this$props.readOnly,
        readOnly = _this$props$readOnly === void 0 ? false : _this$props$readOnly,
        _this$props$required = _this$props.required,
        required = _this$props$required === void 0 ? false : _this$props$required,
        _this$props$fullWidth = _this$props.fullWidth,
        fullWidth = _this$props$fullWidth === void 0 ? true : _this$props$fullWidth,
        reset = _this$props.reset,
        otherProps = _objectWithoutProperties__default["default"](_this$props, _excluded$1);
      return /*#__PURE__*/React__default["default"].createElement(core.FormControl, {
        fullWidth: fullWidth
      }, /*#__PURE__*/React__default["default"].createElement(pickers.DatePicker, _extends__default["default"]({}, otherProps, {
        views: ["year", "month"],
        disabled: readOnly,
        required: required,
        clearable: true,
        value: this.state.value,
        InputLabelProps: {
          className: classes.label
        },
        label: !!label ? formatMessage(intl, module, label) : null,
        onChange: this.monthYearChange,
        reset: reset,
        disablePast: disablePast
      })));
    }
  }]);
}(React.Component);
var MonthYearPicker$1 = reactIntl.injectIntl(styles$w.withTheme(styles$w.withStyles(styles$5)(MonthYearPicker)));

function _callSuper$5(t, o, e) { return o = _getPrototypeOf__default["default"](o), _possibleConstructorReturn__default["default"](t, _isNativeReflectConstruct$5() ? Reflect.construct(o, e || [], _getPrototypeOf__default["default"](t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct$5() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$5 = function _isNativeReflectConstruct() { return !!t; })(); }
var LanguagePicker = /*#__PURE__*/function (_Component) {
  function LanguagePicker() {
    var _this;
    _classCallCheck__default["default"](this, LanguagePicker);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper$5(this, LanguagePicker, [].concat(args));
    _defineProperty__default["default"](_this, "nullDisplay", _this.props.nullLabel || feCore.formatMessage(_this.props.intl, "core", "Language.null"));
    _defineProperty__default["default"](_this, "formatSuggestion", function (i) {
      return !!i ? i : _this.nullDisplay;
    });
    _defineProperty__default["default"](_this, "onSuggestionSelected", function (v) {
      _this.props.onChange(v, _this.formatSuggestion(v));
    });
    return _this;
  }
  _inherits__default["default"](LanguagePicker, _Component);
  return _createClass__default["default"](LanguagePicker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      if (!this.props.languages) {
        // prevent loading multiple times the cache when component is several times on a page
        setTimeout(function () {
          !_this2.props.fetching && !_this2.props.fetched && _this2.props.fetchLanguages();
        }, Math.floor(Math.random() * 300));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        intl = _this$props.intl,
        languages = _this$props.languages,
        _this$props$module = _this$props.module,
        module = _this$props$module === void 0 ? "core" : _this$props$module,
        _this$props$withLabel = _this$props.withLabel,
        withLabel = _this$props$withLabel === void 0 ? true : _this$props$withLabel,
        _this$props$label = _this$props.label,
        label = _this$props$label === void 0 ? "LanguagePicker.label" : _this$props$label,
        _this$props$withPlace = _this$props.withPlaceholder,
        withPlaceholder = _this$props$withPlace === void 0 ? false : _this$props$withPlace,
        placeholder = _this$props.placeholder,
        value = _this$props.value,
        reset = _this$props.reset,
        _this$props$readOnly = _this$props.readOnly,
        readOnly = _this$props$readOnly === void 0 ? false : _this$props$readOnly,
        _this$props$required = _this$props.required,
        required = _this$props$required === void 0 ? false : _this$props$required,
        _this$props$withNull = _this$props.withNull,
        withNull = _this$props$withNull === void 0 ? false : _this$props$withNull;
      var options = !!languages ? languages.map(function (v) {
        return {
          value: v.code,
          label: v.name
        };
      }) : [];
      if (withNull) {
        options.unshift({
          value: null,
          label: this.formatSuggestion(null)
        });
      }
      return /*#__PURE__*/React__default["default"].createElement(feCore.SelectInput, {
        module: module,
        options: options,
        label: !!withLabel ? label : null,
        placeholder: !!withPlaceholder ? placeholder || feCore.formatMessage(intl, "core", "LanguagePicker.placehoder") : null,
        onChange: this.onSuggestionSelected,
        value: value,
        reset: reset,
        readOnly: readOnly,
        required: required,
        withNull: withNull,
        nullLabel: this.nullDisplay
      });
    }
  }]);
}(React.Component);
var mapStateToProps$3 = function mapStateToProps(state) {
  return {
    languages: state.core.languages,
    fetching: state.core.fetchingLanguages,
    fetched: state.core.fetchedLanguages
  };
};
var mapDispatchToProps$3 = function mapDispatchToProps(dispatch) {
  return redux.bindActionCreators({
    fetchLanguages: fetchLanguages
  }, dispatch);
};
var LanguagePicker$1 = reactIntl.injectIntl(reactRedux.connect(mapStateToProps$3, mapDispatchToProps$3)(feCore.withModulesManager(LanguagePicker)));

var RIGHT_NAME_WORDS_SEPARATOR = "_";
var RIGHT_NAME_OMITTED_WORDS = ["gql", "mutation", "perms"];
var QUERY_STRING = "query";
var SEARCH_STRING = "search";
var WHITESPACE = " ";
var capitalizeFirstLetter = function capitalizeFirstLetter(string) {
  return string.split(WHITESPACE).map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join(WHITESPACE);
};
var formatRoleLabel = function formatRoleLabel() {
  var moduleName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var permName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var rightNameWords = permName.split(RIGHT_NAME_WORDS_SEPARATOR).filter(function (word) {
    return !RIGHT_NAME_OMITTED_WORDS.includes(word);
  });
  var rightNameLabel = rightNameWords.map(capitalizeFirstLetter).join(WHITESPACE).replace(QUERY_STRING, SEARCH_STRING);
  var moduleNameLabel = moduleName.split(RIGHT_NAME_WORDS_SEPARATOR).map(capitalizeFirstLetter).join(WHITESPACE);
  return "".concat(moduleNameLabel, " | ").concat(rightNameLabel);
};

function ownKeys$7(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$7(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$7(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$7(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var WHITESPACE_REGEX = /\s/g;
var UNDERSCORE_REGEX = /_/g;
var AuthorityPicker = function AuthorityPicker(_ref) {
  var _onChange = _ref.onChange,
    readOnly = _ref.readOnly,
    required = _ref.required,
    _ref$withLabel = _ref.withLabel,
    withLabel = _ref$withLabel === void 0 ? true : _ref$withLabel,
    withPlaceholder = _ref.withPlaceholder,
    value = _ref.value,
    label = _ref.label,
    filterOptions = _ref.filterOptions,
    filterSelectedOptions = _ref.filterSelectedOptions,
    placeholder = _ref.placeholder;
  var modulesManager = feCore.useModulesManager();
  var _useState = React.useState(""),
    _useState2 = _slicedToArray__default["default"](_useState, 2),
    searchString = _useState2[0],
    setSearchString = _useState2[1];
  var _useTranslations = feCore.useTranslations(MODULE_NAME, modulesManager),
    formatMessage = _useTranslations.formatMessage;
  var _useGraphqlQuery = feCore.useGraphqlQuery("\n    query AuthorityPicker {\n        modulesPermissions  {\n            modulePermsList {\n                moduleName\n                permissions {\n                    permsName\n                    permsValue\n                }\n            }\n        }\n    }\n    "),
    isLoading = _useGraphqlQuery.isLoading,
    data = _useGraphqlQuery.data,
    error = _useGraphqlQuery.error;
  var filteredPerms = React.useMemo(function () {
    if (!data) return [];
    var concatenatedSearchString = searchString.replace(WHITESPACE_REGEX, "").toLowerCase();
    return data.modulesPermissions.modulePermsList.flatMap(function (module) {
      return module.permissions.filter(function (perm) {
        var concatenatedPermName = (module.moduleName + perm.permsName).replace(UNDERSCORE_REGEX, "").toLowerCase();
        return concatenatedPermName.includes(concatenatedSearchString);
      }).map(function (perm) {
        return _objectSpread$7({
          id: perm.permsValue,
          module: module.moduleName
        }, perm);
      });
    });
  }, [data, searchString]);
  var formatLabel = function formatLabel(perm) {
    return formatRoleLabel(perm.module, perm.permsName);
  };
  return /*#__PURE__*/React__default["default"].createElement(feCore.Autocomplete, {
    options: filteredPerms,
    getOptionLabel: formatLabel,
    onChange: function onChange(option) {
      return _onChange(option);
    },
    required: required,
    placeholder: placeholder !== null && placeholder !== void 0 ? placeholder : formatMessage("core.AuthorityPicker.placeholder"),
    label: label !== null && label !== void 0 ? label : formatMessage("core.AuthorityPicker.label"),
    withLabel: withLabel,
    withPlaceholder: withPlaceholder,
    readOnly: readOnly,
    isLoading: isLoading,
    error: error,
    value: value,
    filterOptions: filterOptions,
    filterSelectedOptions: filterSelectedOptions,
    setCurrentString: setSearchString,
    onInputChange: function onInputChange() {}
  });
};

function _callSuper$4(t, o, e) { return o = _getPrototypeOf__default["default"](o), _possibleConstructorReturn__default["default"](t, _isNativeReflectConstruct$4() ? Reflect.construct(o, e || [], _getPrototypeOf__default["default"](t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct$4() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$4 = function _isNativeReflectConstruct() { return !!t; })(); }
var styles$4 = function styles(theme) {
  return {
    page: theme.page,
    form: {
      padding: 0
    },
    item: {
      padding: theme.spacing(1)
    },
    fab: theme.fab
  };
};
var DEFAULT_ORDER_BY = "name";
var RawRoleFilter = /*#__PURE__*/function (_Component) {
  function RawRoleFilter() {
    var _this;
    _classCallCheck__default["default"](this, RawRoleFilter);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper$4(this, RawRoleFilter, [].concat(args));
    _defineProperty__default["default"](_this, "_filterValue", function (k) {
      var filters = _this.props.filters;
      return !!filters[k] ? filters[k].value : null;
    });
    _defineProperty__default["default"](_this, "_filterTextFieldValue", function (k) {
      var filters = _this.props.filters;
      return !!filters[k] ? filters[k].value : "";
    });
    _defineProperty__default["default"](_this, "_onChangeFilter", function (k, v) {
      _this.props.onChangeFilters([{
        id: k,
        value: v,
        filter: "".concat(k, ": ").concat(v)
      }]);
    });
    _defineProperty__default["default"](_this, "_onChangeStringFilter", function (k, v, lookup) {
      _this.props.onChangeFilters([{
        id: k,
        value: v,
        filter: "".concat(k, "_").concat(lookup, ": \"").concat(v, "\"")
      }]);
    });
    _defineProperty__default["default"](_this, "onChangeRoleRight", function (key, value) {
      _this.props.onChangeFilters([{
        id: key,
        value: value,
        filter: "".concat(key, ": ").concat(value === null || value === void 0 ? void 0 : value.permsValue)
      }]);
    });
    _defineProperty__default["default"](_this, "booleanOptions", function () {
      var options = [null, "true", "false"];
      return _toConsumableArray__default["default"](options.map(function (option) {
        return {
          value: option,
          label: feCore.formatMessage(_this.props.intl, "core", "roleManagement.".concat(option))
        };
      }));
    });
    return _this;
  }
  _inherits__default["default"](RawRoleFilter, _Component);
  return _createClass__default["default"](RawRoleFilter, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        intl = _this$props.intl,
        classes = _this$props.classes;
      return /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        container: true,
        className: classes.form
      }, /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        item: true,
        xs: 3,
        className: classes.item
      }, /*#__PURE__*/React__default["default"].createElement(feCore.TextInput, {
        module: "core",
        label: "roleManagement.roleName",
        value: this._filterTextFieldValue("name"),
        onChange: function onChange(v) {
          return _this2._onChangeStringFilter("name", v, CONTAINS_LOOKUP);
        }
      })), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        item: true,
        xs: 3,
        className: classes.item
      }, /*#__PURE__*/React__default["default"].createElement(feCore.SelectInput, {
        module: "core",
        label: "roleManagement.isSystem",
        options: this.booleanOptions(),
        value: this._filterValue("isSystem"),
        onChange: function onChange(v) {
          return _this2._onChangeFilter("isSystem", v);
        }
      })), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        item: true,
        xs: 3,
        className: classes.item
      }, /*#__PURE__*/React__default["default"].createElement(feCore.SelectInput, {
        module: "core",
        label: "roleManagement.isBlocked",
        options: this.booleanOptions(),
        value: this._filterValue("isBlocked"),
        onChange: function onChange(v) {
          return _this2._onChangeFilter("isBlocked", v);
        }
      })), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        item: true,
        xs: 3,
        className: classes.item
      }, /*#__PURE__*/React__default["default"].createElement(feCore.PublishedComponent, {
        pubRef: "core.AuthorityPicker",
        value: this._filterValue("roleRight"),
        onChange: function onChange(roleRight) {
          return _this2.onChangeRoleRight("roleRight", roleRight);
        }
      })), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        item: true,
        xs: 3,
        className: classes.item
      }, /*#__PURE__*/React__default["default"].createElement(core.FormControlLabel, {
        label: feCore.formatMessage(intl, "core", "roleManagement.showHistory"),
        control: /*#__PURE__*/React__default["default"].createElement(core.Checkbox, {
          checked: !!this._filterValue("showHistory"),
          onChange: function onChange(event) {
            return _this2._onChangeFilter("showHistory", event.target.checked);
          }
        })
      })));
    }
  }]);
}(React.Component);
var RoleFilter = reactIntl.injectIntl(styles$w.withTheme(styles$w.withStyles(styles$4)(RawRoleFilter)));
var Roles = /*#__PURE__*/function (_Component2) {
  function Roles() {
    var _this3;
    _classCallCheck__default["default"](this, Roles);
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    _this3 = _callSuper$4(this, Roles, [].concat(args));
    _defineProperty__default["default"](_this3, "state", {
      toDelete: null,
      deleted: []
    });
    _defineProperty__default["default"](_this3, "onAdd", function () {
      return feCore.historyPush(_this3.props.modulesManager, _this3.props.history, "core.route.role");
    });
    _defineProperty__default["default"](_this3, "roleUpdatePageUrl", function (role) {
      return "".concat(_this3.props.modulesManager.getRef("core.route.role")).concat("/" + role.uuid);
    });
    _defineProperty__default["default"](_this3, "roleDuplicatePageUrl", function (role) {
      return "".concat(_this3.roleUpdatePageUrl(role), "?").concat(QUERY_STRING_DUPLICATE);
    });
    _defineProperty__default["default"](_this3, "onDoubleClick", function (role) {
      var newTab = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var _this3$props = _this3.props,
        rights = _this3$props.rights,
        modulesManager = _this3$props.modulesManager,
        history = _this3$props.history;
      if (rights.includes(RIGHT_ROLE_SEARCH) || rights.includes(RIGHT_ROLE_UPDATE)) {
        feCore.historyPush(modulesManager, history, "core.route.role", [role.uuid], newTab);
      }
    });
    _defineProperty__default["default"](_this3, "fetch", function (params) {
      return _this3.props.fetchRoles(params);
    });
    _defineProperty__default["default"](_this3, "headers", function (filters) {
      var _filters$showHistory, _filters$showHistory2;
      var rights = _this3.props.rights;
      var result = ["roleManagement.roleName", "roleManagement.isSystem", "roleManagement.isBlocked", filters !== null && filters !== void 0 && (_filters$showHistory = filters.showHistory) !== null && _filters$showHistory !== void 0 && _filters$showHistory.value ? "roleManagement.dateValidFrom" : null, filters !== null && filters !== void 0 && (_filters$showHistory2 = filters.showHistory) !== null && _filters$showHistory2 !== void 0 && _filters$showHistory2.value ? "roleManagement.dateValidTo" : null];
      [RIGHT_ROLE_UPDATE, RIGHT_ROLE_DUPLICATE, RIGHT_ROLE_DELETE].forEach(function (right) {
        if (rights.includes(right)) {
          result.push("roleManagement.emptyLabel");
        }
      });
      return result;
    });
    _defineProperty__default["default"](_this3, "itemFormatters", function (filters) {
      var _this3$props2 = _this3.props,
        intl = _this3$props2.intl,
        rights = _this3$props2.rights,
        modulesManager = _this3$props2.modulesManager,
        language = _this3$props2.language;
      var result = [function (role) {
        return language === null ? role.name : language === LANGUAGE_EN ? role.name : role.altLanguage === null ? role.name : role.altLanguage;
      }, function (role) {
        return role.isSystem !== null ? /*#__PURE__*/React__default["default"].createElement(core.Checkbox, {
          checked: !!role.isSystem,
          disabled: true
        }) : "";
      }, function (role) {
        return role.isBlocked !== null ? /*#__PURE__*/React__default["default"].createElement(core.Checkbox, {
          checked: role.isBlocked,
          disabled: true
        }) : "";
      }, function (role) {
        var _filters$showHistory3;
        return filters !== null && filters !== void 0 && (_filters$showHistory3 = filters.showHistory) !== null && _filters$showHistory3 !== void 0 && _filters$showHistory3.value && role.validityFrom ? feCore.formatDateFromISO(modulesManager, intl, role.validityFrom) : null;
      }, function (role) {
        var _filters$showHistory4;
        return filters !== null && filters !== void 0 && (_filters$showHistory4 = filters.showHistory) !== null && _filters$showHistory4 !== void 0 && _filters$showHistory4.value && role.validityTo ? feCore.formatDateFromISO(modulesManager, intl, role.validityTo) : null;
      }];
      if (rights.includes(RIGHT_ROLE_SEARCH) || rights.includes(RIGHT_ROLE_UPDATE)) {
        result.push(function (role) {
          return feCore.withTooltip( /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement(core.IconButton, {
            href: _this3.roleUpdatePageUrl(role),
            disabled: _this3.isRowDisabled(null, role)
          }, /*#__PURE__*/React__default["default"].createElement(EditIcon__default["default"], null))), feCore.formatMessage(intl, "core", "roleManagement.editButton.tooltip"));
        });
      }
      if (rights.includes(RIGHT_ROLE_DUPLICATE)) {
        result.push(function (role) {
          return feCore.withTooltip( /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement(core.IconButton, {
            href: _this3.roleDuplicatePageUrl(role),
            disabled: _this3.isRowDisabled(null, role)
          }, /*#__PURE__*/React__default["default"].createElement(SupervisedUserCircleIcon__default["default"], null))), feCore.formatMessage(intl, "core", "roleManagement.duplicateButton.tooltip"));
        });
      }
      if (rights.includes(RIGHT_ROLE_DELETE)) {
        result.push(function (role) {
          return feCore.withTooltip( /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement(core.IconButton, {
            onClick: function onClick() {
              return _this3.onDelete(role);
            },
            disabled: _this3.isRowDisabled(null, role)
          }, /*#__PURE__*/React__default["default"].createElement(DeleteIcon__default["default"], null))), feCore.formatMessage(intl, "core", "roleManagement.deleteButton.tooltip"));
        });
      }
      return result;
    });
    _defineProperty__default["default"](_this3, "onDelete", function (role) {
      var _this3$props3 = _this3.props,
        intl = _this3$props3.intl,
        coreConfirm = _this3$props3.coreConfirm,
        deleteRole = _this3$props3.deleteRole;
      var confirm = function confirm() {
        return coreConfirm(feCore.formatMessageWithValues(intl, "core", "roleManagement.deleteRole.confirm.title", {
          label: role.name
        }), feCore.formatMessage(intl, "core", "roleManagement.deleteRole.confirm.message"));
      };
      var confirmedAction = function confirmedAction() {
        _this3.setState({
          toDelete: role.id
        }, function () {
          return deleteRole(role, feCore.formatMessageWithValues(intl, "core", "roleManagement.DeleteRole.mutationLabel", {
            label: role.name
          }));
        });
      };
      _this3.setState({
        confirmedAction: confirmedAction
      }, confirm);
    });
    _defineProperty__default["default"](_this3, "sorts", function (filters) {
      var _filters$showHistory5, _filters$showHistory6;
      return [["name", true], ["isSystem", true], ["isBlocked", true], filters !== null && filters !== void 0 && (_filters$showHistory5 = filters.showHistory) !== null && _filters$showHistory5 !== void 0 && _filters$showHistory5.value ? ["validityFrom", true] : null, filters !== null && filters !== void 0 && (_filters$showHistory6 = filters.showHistory) !== null && _filters$showHistory6 !== void 0 && _filters$showHistory6.value ? ["validityTo", true] : null];
    });
    _defineProperty__default["default"](_this3, "isRowDisabled", function (_, role) {
      return _this3.state.deleted.includes(role.id) || !!role.validityTo && role.validityTo < new Date().toISOString();
    });
    _defineProperty__default["default"](_this3, "isRowLocked", function (_, role) {
      return _this3.state.deleted.includes(role.id);
    });
    _defineProperty__default["default"](_this3, "isOnDoubleClickEnabled", function (role) {
      return !_this3.isRowDisabled(_, role);
    });
    _defineProperty__default["default"](_this3, "componentDidMount", function () {
      var module = _this3.props.module;
      if (module !== MODULE_NAME) _this3.props.clearCurrentPaginationPage();
    });
    return _this3;
  }
  _inherits__default["default"](Roles, _Component2);
  return _createClass__default["default"](Roles, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (prevProps.submittingMutation && !this.props.submittingMutation) {
        this.props.journalize(this.props.mutation);
        this.setState(function (state) {
          return {
            deleted: state.deleted.concat(state.toDelete)
          };
        });
      } else if (prevProps.confirmed !== this.props.confirmed && !!this.props.confirmed && !!this.state.confirmedAction) {
        this.state.confirmedAction();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;
      var _this$props2 = this.props,
        intl = _this$props2.intl,
        rights = _this$props2.rights,
        classes = _this$props2.classes,
        fetchingRoles = _this$props2.fetchingRoles,
        fetchedRoles = _this$props2.fetchedRoles,
        errorRoles = _this$props2.errorRoles,
        roles = _this$props2.roles,
        rolesPageInfo = _this$props2.rolesPageInfo,
        rolesTotalCount = _this$props2.rolesTotalCount;
      return rights.includes(RIGHT_ROLE_SEARCH) && /*#__PURE__*/React__default["default"].createElement("div", {
        className: classes.page
      }, /*#__PURE__*/React__default["default"].createElement(feCore.Helmet, {
        title: feCore.formatMessage(this.props.intl, "core", "roleManagement.label")
      }), /*#__PURE__*/React__default["default"].createElement(feCore.Searcher, {
        module: "core",
        FilterPane: RoleFilter,
        fetch: this.fetch,
        items: roles,
        itemsPageInfo: rolesPageInfo,
        fetchingItems: fetchingRoles,
        fetchedItems: fetchedRoles,
        errorItems: errorRoles,
        tableTitle: feCore.formatMessageWithValues(intl, "core", "roleManagement.searcher.results.title", {
          rolesTotalCount: rolesTotalCount
        }),
        headers: this.headers,
        itemFormatters: this.itemFormatters,
        sorts: this.sorts,
        rowsPerPageOptions: ROWS_PER_PAGE_OPTIONS,
        defaultPageSize: DEFAULT_PAGE_SIZE,
        defaultOrderBy: DEFAULT_ORDER_BY,
        rowLocked: this.isRowLocked,
        rowDisabled: this.isRowDisabled,
        onDoubleClick: function onDoubleClick(role) {
          return _this4.isOnDoubleClickEnabled(role) && _this4.onDoubleClick(role);
        }
      }), rights.includes(RIGHT_ROLE_CREATE) && feCore.withTooltip( /*#__PURE__*/React__default["default"].createElement("div", {
        className: classes.fab
      }, /*#__PURE__*/React__default["default"].createElement(core.Fab, {
        color: "primary",
        onClick: this.onAdd
      }, /*#__PURE__*/React__default["default"].createElement(AddIcon__default["default"], null))), feCore.formatMessage(intl, "core", "roleManagement.createButton.tooltip")));
    }
  }]);
}(React.Component);
var mapStateToProps$2 = function mapStateToProps(state) {
  var _state$core;
  return {
    rights: !!state.core && !!state.core.user && !!state.core.user.i_user ? state.core.user.i_user.rights : [],
    language: !!state.core && !!state.core.user && !!state.core.user.i_user ? state.core.user.i_user.language : null,
    fetchingRoles: state.core.fetchingRoles,
    fetchedRoles: state.core.fetchedRoles,
    errorRoles: state.core.errorRoles,
    roles: state.core.roles,
    rolesPageInfo: state.core.rolesPageInfo,
    rolesTotalCount: state.core.rolesTotalCount,
    confirmed: state.core.confirmed,
    submittingMutation: state.core.submittingMutation,
    mutation: state.core.mutation,
    module: (_state$core = state.core) === null || _state$core === void 0 || (_state$core = _state$core.savedPagination) === null || _state$core === void 0 ? void 0 : _state$core.module
  };
};
var mapDispatchToProps$2 = function mapDispatchToProps(dispatch) {
  return redux.bindActionCreators({
    fetchRoles: fetchRoles,
    deleteRole: deleteRole,
    coreConfirm: feCore.coreConfirm,
    journalize: feCore.journalize,
    clearCurrentPaginationPage: feCore.clearCurrentPaginationPage
  }, dispatch);
};
var Roles$1 = feCore.withModulesManager(reactIntl.injectIntl(styles$w.withTheme(styles$w.withStyles(styles$4)(reactRedux.connect(mapStateToProps$2, mapDispatchToProps$2)(Roles)))));

function _callSuper$3(t, o, e) { return o = _getPrototypeOf__default["default"](o), _possibleConstructorReturn__default["default"](t, _isNativeReflectConstruct$3() ? Reflect.construct(o, e || [], _getPrototypeOf__default["default"](t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct$3() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$3 = function _isNativeReflectConstruct() { return !!t; })(); }
var styles$3 = function styles(theme) {
  return {
    item: theme.paper.item
  };
};
var RoleHeadPanel = /*#__PURE__*/function (_FormPanel) {
  function RoleHeadPanel() {
    _classCallCheck__default["default"](this, RoleHeadPanel);
    return _callSuper$3(this, RoleHeadPanel, arguments);
  }
  _inherits__default["default"](RoleHeadPanel, _FormPanel);
  return _createClass__default["default"](RoleHeadPanel, [{
    key: "render",
    value: function render() {
      var _this = this;
      var _this$props = this.props,
        intl = _this$props.intl,
        classes = _this$props.classes,
        edited = _this$props.edited,
        isRequiredFieldsEmpty = _this$props.isRequiredFieldsEmpty,
        isReadOnly = _this$props.isReadOnly;
      return /*#__PURE__*/React__default["default"].createElement(React.Fragment, null, /*#__PURE__*/React__default["default"].createElement(core.Divider, null), isRequiredFieldsEmpty && /*#__PURE__*/React__default["default"].createElement(React.Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", {
        className: classes.item
      }, /*#__PURE__*/React__default["default"].createElement(feCore.FormattedMessage, {
        module: "core",
        id: "roleManagement.requiredFieldsEmptyError"
      })), /*#__PURE__*/React__default["default"].createElement(core.Divider, null)), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        container: true
      }, /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        item: true,
        className: classes.item
      }, /*#__PURE__*/React__default["default"].createElement(feCore.TextInput, {
        module: "core",
        label: "roleManagement.roleName",
        value: !!edited && !!edited.name ? edited.name : "",
        onChange: function onChange(v) {
          return _this.updateAttribute("name", v);
        },
        required: true,
        readOnly: !!isReadOnly
      })), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        item: true,
        className: classes.item
      }, /*#__PURE__*/React__default["default"].createElement(feCore.TextInput, {
        module: "core",
        label: "roleManagement.altLanguage",
        value: !!edited && !!edited.altLanguage ? edited.altLanguage : "",
        onChange: function onChange(v) {
          return _this.updateAttribute("altLanguage", v);
        },
        readOnly: !!isReadOnly
      })), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        item: true,
        className: classes.item
      }, /*#__PURE__*/React__default["default"].createElement(core.FormControlLabel, {
        label: feCore.formatMessage(intl, "core", "roleManagement.isSystem"),
        control: /*#__PURE__*/React__default["default"].createElement(core.Checkbox, {
          checked: !!edited && !!edited.isSystem && edited.isSystem,
          onChange: function onChange(event) {
            return _this.updateAttribute("isSystem", event.target.checked);
          },
          disabled: true
        })
      })), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        item: true,
        className: classes.item
      }, /*#__PURE__*/React__default["default"].createElement(core.FormControlLabel, {
        label: feCore.formatMessage(intl, "core", "roleManagement.isBlocked"),
        control: /*#__PURE__*/React__default["default"].createElement(core.Checkbox, {
          checked: !!edited && !!edited.isBlocked && edited.isBlocked,
          onChange: function onChange(event) {
            return _this.updateAttribute("isBlocked", event.target.checked);
          },
          disabled: !!isReadOnly
        })
      }))));
    }
  }]);
}(feCore.FormPanel);
var RoleHeadPanel$1 = feCore.withModulesManager(styles$w.withTheme(styles$w.withStyles(styles$3)(RoleHeadPanel)));

var _excluded = ["roleRights"],
  _excluded2 = ["roleRights"],
  _excluded3 = ["roleRights"],
  _excluded4 = ["roleRights"];
function ownKeys$6(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$6(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$6(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$6(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _callSuper$2(t, o, e) { return o = _getPrototypeOf__default["default"](o), _possibleConstructorReturn__default["default"](t, _isNativeReflectConstruct$2() ? Reflect.construct(o, e || [], _getPrototypeOf__default["default"](t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct$2() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$2 = function _isNativeReflectConstruct() { return !!t; })(); }
var styles$2 = function styles(theme) {
  return {
    item: theme.paper.item,
    paper: theme.paper.paper,
    paperHeader: theme.paper.paperHeader,
    list: {
      width: "100%",
      height: "500px",
      position: "relative",
      overflow: "auto"
    },
    filter: {
      width: "100%"
    },
    listItemText: {
      textTransform: "capitalize"
    },
    reversedArrow: {
      transform: "rotate(180deg)"
    },
    listTitle: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "5px"
    }
  };
};
var RoleRightsPanel = /*#__PURE__*/function (_FormPanel) {
  function RoleRightsPanel(props) {
    var _this;
    _classCallCheck__default["default"](this, RoleRightsPanel);
    _this = _callSuper$2(this, RoleRightsPanel, [props]);
    _defineProperty__default["default"](_this, "selectRight", function (rightId) {
      var _this$props$edited = _this.props.edited,
        roleRights = _this$props$edited.roleRights,
        rest = _objectWithoutProperties__default["default"](_this$props$edited, _excluded);
      roleRights.push(rightId);
      _this.props.onEditedChanged(_objectSpread$6({
        roleRights: roleRights
      }, rest));
    });
    _defineProperty__default["default"](_this, "unselectRight", function (rightId) {
      var _this$props$edited2 = _this.props.edited,
        roleRights = _this$props$edited2.roleRights,
        rest = _objectWithoutProperties__default["default"](_this$props$edited2, _excluded2);
      _this.props.onEditedChanged(_objectSpread$6({
        roleRights: roleRights.filter(function (id) {
          return id !== rightId;
        })
      }, rest));
    });
    _defineProperty__default["default"](_this, "rightTranslationId", function (moduleName, permsName) {
      return "".concat(moduleName, ".").concat(permsName);
    });
    _defineProperty__default["default"](_this, "isFilterMatched", function (moduleName, permsName) {
      return _this.rightLabel(moduleName, permsName).includes(_this.state.filterValue.toLowerCase()) || _this.rightTranslationId(moduleName, permsName).includes(_this.state.filterValue.toLowerCase());
    });
    _defineProperty__default["default"](_this, "rightLabel", function (moduleName, permsName) {
      var translationId = _this.rightTranslationId(moduleName, permsName);
      var translatedMessage = feCore.formatMessage(_this.props.intl, null, translationId);
      var translationFound = translatedMessage !== translationId;
      if (!translationFound) {
        return formatRoleLabel(moduleName, permsName);
      }
      return translatedMessage;
    });
    _defineProperty__default["default"](_this, "filterPermissions", function () {
      var checkAvailableRights = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var _this$props = _this.props,
        modulePermissions = _this$props.modulePermissions,
        edited = _this$props.edited;
      var roleRights = edited.roleRights;
      var sortedModulePermissions = modulePermissions ? modulePermissions.sort(function (module, otherModule) {
        return module.moduleName > otherModule.moduleName;
      }) : [];
      var allFilteredPerms = sortedModulePermissions.map(function (_ref) {
        var permissions = _ref.permissions,
          moduleName = _ref.moduleName;
        return permissions.filter(function (_ref2) {
          var permsValue = _ref2.permsValue,
            permsName = _ref2.permsName;
          if (checkAvailableRights) {
            return !roleRights.includes(permsValue) && _this.isFilterMatched(moduleName, permsName);
          }
          return _this.isFilterMatched(moduleName, permsName);
        }).map(function (_ref3) {
          var permsValue = _ref3.permsValue;
          return permsValue;
        });
      }).flat();
      return allFilteredPerms;
    });
    _defineProperty__default["default"](_this, "selectAllFilteredPerms", function () {
      var _this$props2 = _this.props,
        edited = _this$props2.edited,
        onEditedChanged = _this$props2.onEditedChanged;
      var roleRights = edited.roleRights,
        restState = _objectWithoutProperties__default["default"](edited, _excluded3);
      var filteredPerms = _this.filterPermissions();
      onEditedChanged(_objectSpread$6({
        roleRights: [].concat(_toConsumableArray__default["default"](roleRights), _toConsumableArray__default["default"](filteredPerms))
      }, restState));
    });
    _defineProperty__default["default"](_this, "removeAllChosenPerms", function () {
      var _this$props3 = _this.props,
        edited = _this$props3.edited,
        onEditedChanged = _this$props3.onEditedChanged;
      var filterValue = _this.state.filterValue;
      var roleRights = edited.roleRights,
        restState = _objectWithoutProperties__default["default"](edited, _excluded4);
      if (filterValue) {
        var filteredPerms = _this.filterPermissions(false);
        var restPerms = roleRights.filter(function (right) {
          return !filteredPerms.some(function (filteredRight) {
            return filteredRight === right;
          });
        });
        onEditedChanged(_objectSpread$6({
          roleRights: restPerms
        }, restState));
        return;
      }
      onEditedChanged(_objectSpread$6({
        roleRights: []
      }, restState));
    });
    _this.state = {
      filterValue: ""
    };
    return _this;
  }
  _inherits__default["default"](RoleRightsPanel, _FormPanel);
  return _createClass__default["default"](RoleRightsPanel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.props.fetchedModulePermissions) {
        this.props.fetchModulesPermissions();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props4 = this.props,
        intl = _this$props4.intl,
        classes = _this$props4.classes,
        edited = _this$props4.edited,
        isReadOnly = _this$props4.isReadOnly,
        fetchingModulePermissions = _this$props4.fetchingModulePermissions,
        fetchedModulePermissions = _this$props4.fetchedModulePermissions,
        modulePermissions = _this$props4.modulePermissions,
        errorModulePermissions = _this$props4.errorModulePermissions,
        fetchingRoleRights = _this$props4.fetchingRoleRights,
        fetchedRoleRights = _this$props4.fetchedRoleRights,
        errorRoleRights = _this$props4.errorRoleRights,
        roleUuid = _this$props4.roleUuid;
      var sortedModulePermissions = !!modulePermissions ? modulePermissions.sort(function (module, otherModule) {
        return module.moduleName > otherModule.moduleName;
      }) : [];
      return /*#__PURE__*/React__default["default"].createElement(React.Fragment, null, /*#__PURE__*/React__default["default"].createElement(core.Paper, {
        className: classes.paper
      }, /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        container: true
      }, /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        item: true,
        className: classes.item
      }, /*#__PURE__*/React__default["default"].createElement(core.Paper, null, /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        item: true,
        className: classes.item
      }, /*#__PURE__*/React__default["default"].createElement(core.TextField, {
        className: classes.filter,
        variant: "outlined",
        label: feCore.formatMessage(intl, "core", "roleManagement.role.rightsFilter"),
        InputProps: {
          startAdornment: /*#__PURE__*/React__default["default"].createElement(core.InputAdornment, {
            position: "start"
          }, /*#__PURE__*/React__default["default"].createElement(SearchIcon__default["default"], null))
        },
        onChange: function onChange(e) {
          return _this2.setState({
            filterValue: e.target.value
          });
        }
      }))))), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        container: true,
        justify: "space-between",
        alignItems: "center"
      }, /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        item: true,
        xs: 6,
        className: classes.item
      }, /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        item: true,
        className: classes.item
      }, /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        className: classes.listTitle
      }, /*#__PURE__*/React__default["default"].createElement(core.Typography, {
        variant: "h6"
      }, /*#__PURE__*/React__default["default"].createElement(feCore.FormattedMessage, {
        module: "core",
        id: "roleManagement.role.availableRights"
      })), /*#__PURE__*/React__default["default"].createElement(core.Tooltip, {
        title: /*#__PURE__*/React__default["default"].createElement(feCore.FormattedMessage, {
          module: "core",
          id: "roleManagement.role.addAllFilteredPerms"
        })
      }, /*#__PURE__*/React__default["default"].createElement(core.IconButton, {
        color: "primary",
        disabled: isReadOnly,
        onClick: this.selectAllFilteredPerms
      }, /*#__PURE__*/React__default["default"].createElement(DoubleArrowIcon__default["default"], null))))), /*#__PURE__*/React__default["default"].createElement(core.Paper, null, /*#__PURE__*/React__default["default"].createElement(core.List, {
        className: classes.list,
        subheader: /*#__PURE__*/React__default["default"].createElement("li", null)
      }, /*#__PURE__*/React__default["default"].createElement(feCore.ProgressOrError, {
        progress: fetchingModulePermissions || fetchingRoleRights,
        error: errorModulePermissions || errorRoleRights
      }), !!fetchedModulePermissions && (!!roleUuid ? !!fetchedRoleRights : true) && !!sortedModulePermissions.length && sortedModulePermissions.map(function (modulePermission) {
        return modulePermission.permissions.filter(function (permission) {
          return !edited.roleRights.includes(permission.permsValue) && _this2.isFilterMatched(modulePermission.moduleName, permission.permsName);
        }).map(function (permission) {
          return /*#__PURE__*/React__default["default"].createElement(core.ListItem, {
            button: true,
            divider: true
          }, /*#__PURE__*/React__default["default"].createElement(core.ListItemText, {
            className: classes.listItemText,
            primary: _this2.rightLabel(modulePermission.moduleName, permission.permsName)
          }), /*#__PURE__*/React__default["default"].createElement(core.ListItemSecondaryAction, null, /*#__PURE__*/React__default["default"].createElement(core.IconButton, {
            onClick: function onClick() {
              return _this2.selectRight(permission.permsValue);
            },
            disabled: !!isReadOnly
          }, /*#__PURE__*/React__default["default"].createElement(ArrowForwardIcon__default["default"], null))));
        });
      })))), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        item: true,
        xs: 6,
        className: classes.item
      }, /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        item: true,
        className: classes.item
      }, /*#__PURE__*/React__default["default"].createElement(core.Grid, {
        className: classes.listTitle
      }, /*#__PURE__*/React__default["default"].createElement(core.Tooltip, {
        title: /*#__PURE__*/React__default["default"].createElement(feCore.FormattedMessage, {
          module: "core",
          id: "roleManagement.role.removeAllPerms"
        })
      }, /*#__PURE__*/React__default["default"].createElement(core.IconButton, {
        color: "primary",
        disabled: isReadOnly,
        onClick: this.removeAllChosenPerms
      }, /*#__PURE__*/React__default["default"].createElement(DoubleArrowIcon__default["default"], {
        className: classes.reversedArrow
      }))), /*#__PURE__*/React__default["default"].createElement(core.Typography, {
        variant: "h6"
      }, /*#__PURE__*/React__default["default"].createElement(feCore.FormattedMessage, {
        module: "core",
        id: "roleManagement.role.chosenRights"
      })))), /*#__PURE__*/React__default["default"].createElement(core.Paper, null, /*#__PURE__*/React__default["default"].createElement(core.List, {
        className: classes.list,
        subheader: /*#__PURE__*/React__default["default"].createElement("li", null)
      }, /*#__PURE__*/React__default["default"].createElement(feCore.ProgressOrError, {
        progress: fetchingModulePermissions || fetchingRoleRights,
        error: errorModulePermissions || errorRoleRights
      }), !!fetchedModulePermissions && (!!roleUuid ? !!fetchedRoleRights : true) && !!sortedModulePermissions.length && sortedModulePermissions.map(function (modulePermission) {
        return modulePermission.permissions.filter(function (permission) {
          return edited.roleRights.includes(permission.permsValue) && _this2.isFilterMatched(modulePermission.moduleName, permission.permsName);
        }).map(function (permission) {
          return /*#__PURE__*/React__default["default"].createElement(core.ListItem, {
            button: true,
            divider: true
          }, /*#__PURE__*/React__default["default"].createElement(core.ListItemText, {
            className: classes.listItemText,
            primary: _this2.rightLabel(modulePermission.moduleName, permission.permsName)
          }), /*#__PURE__*/React__default["default"].createElement(core.ListItemSecondaryAction, null, /*#__PURE__*/React__default["default"].createElement(core.IconButton, {
            onClick: function onClick() {
              return _this2.unselectRight(permission.permsValue);
            },
            disabled: !!isReadOnly
          }, /*#__PURE__*/React__default["default"].createElement(ArrowBackIcon__default["default"], null))));
        });
      })))))));
    }
  }]);
}(feCore.FormPanel);
var mapStateToProps$1 = function mapStateToProps(state) {
  return {
    rights: !!state.core && !!state.core.user && !!state.core.user.i_user ? state.core.user.i_user.rights : [],
    fetchingModulePermissions: state.core.fetchingModulePermissions,
    fetchedModulePermissions: state.core.fetchedModulePermissions,
    modulePermissions: state.core.modulePermissions,
    errorModulePermissions: state.core.errorModulePermissions,
    fetchingRoleRights: state.core.fetchingRoleRights,
    fetchedRoleRights: state.core.fetchedRoleRights,
    errorRoleRights: state.core.errorRoleRights
  };
};
var mapDispatchToProps$1 = function mapDispatchToProps(dispatch) {
  return redux.bindActionCreators({
    fetchModulesPermissions: fetchModulesPermissions
  }, dispatch);
};
var RoleRightsPanel$1 = reactIntl.injectIntl(styles$w.withTheme(styles$w.withStyles(styles$2)(reactRedux.connect(mapStateToProps$1, mapDispatchToProps$1)(RoleRightsPanel))));

function ownKeys$5(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$5(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$5(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$5(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _callSuper$1(t, o, e) { return o = _getPrototypeOf__default["default"](o), _possibleConstructorReturn__default["default"](t, _isNativeReflectConstruct$1() ? Reflect.construct(o, e || [], _getPrototypeOf__default["default"](t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct$1() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$1 = function _isNativeReflectConstruct() { return !!t; })(); }
var styles$1 = function styles(theme) {
  return {
    page: theme.page,
    locked: theme.page.locked
  };
};
var Role = /*#__PURE__*/function (_Component) {
  function Role() {
    var _this;
    _classCallCheck__default["default"](this, Role);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper$1(this, Role, [].concat(args));
    _defineProperty__default["default"](_this, "state", {
      role: {
        isSystem: false,
        isBlocked: false,
        roleRights: []
      },
      reset: 0,
      isLocked: false
    });
    _defineProperty__default["default"](_this, "save", function (role) {
      var _this$props = _this.props,
        intl = _this$props.intl,
        createRole = _this$props.createRole,
        updateRole = _this$props.updateRole,
        coreConfirm = _this$props.coreConfirm;
      if (!!role.id && !_this.state.isDuplicate) {
        var confirm = function confirm() {
          return coreConfirm(feCore.formatMessageWithValues(intl, "core", "roleManagement.updateRole.confirm.title", {
            label: role.name
          }), feCore.formatMessageWithValues(intl, "core", "roleManagement.updateRole.confirm.message", {
            label: role.name
          }));
        };
        var confirmedAction = function confirmedAction() {
          updateRole(role, feCore.formatMessageWithValues(intl, "core", "roleManagement.UpdateRole.mutationLabel", _this.titleParams(role)));
        };
        _this.setState({
          confirmedAction: confirmedAction
        }, confirm);
      } else if (!!role.id && _this.state.isDuplicate) {
        delete role["id"];
        delete role["uuid"];
        _this.setState(function (state) {
          return _objectSpread$5(_objectSpread$5({}, state), {}, {
            isLocked: true
          });
        });
        createRole(role, feCore.formatMessageWithValues(intl, "core", "roleManagement.DuplicateRole.mutationLabel", {
          label: _this.props.role.name
        }));
      } else {
        _this.setState(function (state) {
          return _objectSpread$5(_objectSpread$5({}, state), {}, {
            isLocked: true
          });
        });
        createRole(role, feCore.formatMessageWithValues(intl, "core", "roleManagement.CreateRole.mutationLabel", _this.titleParams(role)));
      }
    });
    _defineProperty__default["default"](_this, "back", function () {
      return _this.props.history.goBack();
    });
    _defineProperty__default["default"](_this, "isFormLocked", function () {
      return _this.state.isLocked;
    });
    _defineProperty__default["default"](_this, "isRequiredFieldsEmpty", function () {
      return !(!!_this.state.role && !!_this.state.role.name);
    });
    _defineProperty__default["default"](_this, "doesRoleChange", function () {
      var roleRights = _this.state.role.roleRights;
      var _prepareForComparison = prepareForComparison(_this.state.role, _this.props.role, _this.props.roleRights),
        stateRole = _prepareForComparison.stateRole,
        propsRole = _prepareForComparison.propsRole,
        convertedRoleRights = _prepareForComparison.convertedRoleRights;
      if (!___default["default"].isEqual(propsRole, stateRole)) return true;
      if (!___default["default"].isEqual(___default["default"].sortBy(convertedRoleRights), ___default["default"].sortBy(roleRights))) return true;
      return false;
    });
    _defineProperty__default["default"](_this, "canSave", function () {
      return !_this.isRequiredFieldsEmpty() && _this.doesRoleChange() && !_this.isFormLocked();
    });
    _defineProperty__default["default"](_this, "onEditedChanged", function (role) {
      return _this.setState({
        role: role
      });
    });
    _defineProperty__default["default"](_this, "titleParams", function (role) {
      return {
        label: !!role && !!role.name ? role.name : null
      };
    });
    return _this;
  }
  _inherits__default["default"](Role, _Component);
  return _createClass__default["default"](Role, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      if (!!this.props.roleUuid) {
        this.setState(function (_, props) {
          return {
            isDuplicate: new URLSearchParams(props.location.search).has(QUERY_STRING_DUPLICATE)
          };
        }, function () {
          _this2.props.fetchRole(["uuid: \"".concat(_this2.props.roleUuid, "\"")]);
          _this2.props.fetchRoleRights(["role_Uuid: \"".concat(_this2.props.roleUuid, "\"")]);
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      var _this3 = this;
      if (prevProps.fetchedRole !== this.props.fetchedRole && !!this.props.fetchedRole) {
        this.setState(function (state, props) {
          return {
            role: _objectSpread$5(_objectSpread$5({}, props.role), {}, {
              name: state.isDuplicate ? null : props.role.name,
              altLanguage: state.isDuplicate ? null : props.role.altLanguage,
              isSystem: state.isDuplicate ? false : !!props.role.isSystem,
              isBlocked: state.isDuplicate ? false : !!props.role.isBlocked,
              roleRights: state.role.roleRights
            }),
            reset: state.reset + 1,
            isSystemRole: state.isDuplicate ? false : !!props.role.isSystem
          };
        });
      } else if (prevProps.fetchedRoleRights !== this.props.fetchedRoleRights && !!this.props.fetchedRoleRights) {
        this.setState(function (state, props) {
          return {
            role: _objectSpread$5(_objectSpread$5({}, state.role), {}, {
              roleRights: props.roleRights.map(function (right) {
                return right["rightId"];
              })
            })
          };
        });
      } else if (prevProps.submittingMutation && !this.props.submittingMutation) {
        this.props.journalize(this.props.mutation);
        if (!!this.state.role.uuid && !this.state.isDuplicate) {
          this.props.fetchRole(["uuid: \"".concat(this.state.role.uuid, "\"")]);
          this.props.fetchRoleRights(["role_Uuid: \"".concat(this.props.roleUuid, "\"")]);
        } else {
          this.setState({
            isDuplicate: false
          }, function () {
            return _this3.props.fetchRole(["clientMutationId: \"".concat(_this3.props.mutation.clientMutationId, "\"")]);
          });
        }
      } else if (prevProps.confirmed !== this.props.confirmed && !!this.props.confirmed && !!this.state.confirmedAction) {
        this.state.confirmedAction();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        intl = _this$props2.intl,
        rights = _this$props2.rights,
        classes = _this$props2.classes,
        roleUuid = _this$props2.roleUuid;
      return rights.includes(RIGHT_ROLE_SEARCH) && rights.includes(RIGHT_ROLE_CREATE) && /*#__PURE__*/React__default["default"].createElement("div", {
        className: clsx__default["default"](classes.page, this.state.isLocked && classes.locked)
      }, /*#__PURE__*/React__default["default"].createElement(feCore.Helmet, {
        title: feCore.formatMessageWithValues(this.props.intl, "core", "roleManagement.role.page.title", this.titleParams(this.state.role))
      }), /*#__PURE__*/React__default["default"].createElement(feCore.Form, {
        module: "core",
        title: "roleManagement.role.page.title",
        titleParams: this.titleParams(this.state.role),
        edited: this.state.role,
        back: this.back,
        canSave: this.canSave,
        save: this.save,
        onEditedChanged: this.onEditedChanged,
        HeadPanel: RoleHeadPanel$1,
        Panels: [RoleRightsPanel$1],
        isRequiredFieldsEmpty: this.isRequiredFieldsEmpty(),
        saveTooltip: feCore.formatMessage(intl, "core", "roleManagement.saveButton.tooltip.".concat(this.canSave() ? "enabled" : "disabled")),
        isReadOnly: !!this.state.isSystemRole || !rights.includes(RIGHT_ROLE_UPDATE) || this.state.isLocked,
        reset: this.state.reset,
        roleUuid: roleUuid,
        openDirty: rights.includes(RIGHT_ROLE_UPDATE) ? this.save : null
      }));
    }
  }]);
}(React.Component);
var mapStateToProps = function mapStateToProps(state, props) {
  return {
    rights: !!state.core && !!state.core.user && !!state.core.user.i_user ? state.core.user.i_user.rights : [],
    roleUuid: props.match.params.role_uuid,
    fetchedRole: state.core.fetchedRole,
    role: state.core.role,
    fetchedRoleRights: state.core.fetchedRoleRights,
    roleRights: state.core.roleRights,
    submittingMutation: state.core.submittingMutation,
    mutation: state.core.mutation,
    confirmed: state.core.confirmed
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return redux.bindActionCreators({
    createRole: createRole,
    updateRole: updateRole,
    fetchRole: fetchRole,
    fetchRoleRights: fetchRoleRights,
    journalize: feCore.journalize,
    coreConfirm: feCore.coreConfirm
  }, dispatch);
};
var Role$1 = feCore.withHistory(feCore.withModulesManager(reactIntl.injectIntl(styles$w.withTheme(styles$w.withStyles(styles$1)(reactRedux.connect(mapStateToProps, mapDispatchToProps)(Role))))));

function ownKeys$4(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$4(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$4(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$4(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function reducer() {
  var _action$payload, _action$payload3, _action$payload4, _action$payload5, _action$payload6;
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    user: null,
    fatalError: null,
    fetchingHistoricalMutations: false,
    fetchedHistoricalMutations: false,
    fetchingMutations: false,
    mutations: [],
    filtersCache: {},
    fetchingRoles: false,
    fetchedRoles: false,
    roles: [],
    rolesPageInfo: {},
    rolesTotalCount: 0,
    errorRoles: null,
    fetchingModulePermissions: false,
    fetchedModulePermissions: false,
    modulePermissions: [],
    errorModulePermissions: null,
    fetchingRole: false,
    fetchedRole: false,
    role: null,
    errorRole: null,
    fetchingRoleRights: false,
    fetchedRoleRights: false,
    roleRights: [],
    errorRoleRights: null,
    isInitialized: false,
    authError: null,
    paginationPage: 0,
    afterCursor: null,
    beforeCursor: null,
    module: null,
    fetchingCustomFilters: false,
    errorCustomFilters: null,
    fetchedCustomFilters: false,
    customFilters: [],
    isExportColumnsDialogOpen: false
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case "CORE_ALERT":
      return _objectSpread$4(_objectSpread$4({}, state), {}, {
        alert: action.payload
      });
    case "CORE_ALERT_CLEAR":
      var s = _objectSpread$4({}, state);
      delete s.alert;
      return s;
    case "CORE_CONFIRM":
      return _objectSpread$4(_objectSpread$4({}, state), {}, {
        confirm: action.payload,
        confirmed: null
      });
    case "CORE_CONFIRM_CLEAR":
      var s = _objectSpread$4(_objectSpread$4({}, state), {}, {
        confirmed: action.payload
      });
      delete s.confirm;
      return s;
    case "CORE_OPEN_EXPORT_COLUMNS_DIALOG":
      return _objectSpread$4(_objectSpread$4({}, state), {}, {
        isExportColumnsDialogOpen: true
      });
    case "CORE_CLOSE_EXPORT_COLUMNS_DIALOG":
      return _objectSpread$4(_objectSpread$4({}, state), {}, {
        isExportColumnsDialogOpen: false
      });
    case "CORE_USERS_CURRENT_USER_RESP":
      return _objectSpread$4(_objectSpread$4({}, state), {}, {
        user: action.payload
      });
    case "CORE_USERS_CURRENT_USER_ERR":
      return _objectSpread$4(_objectSpread$4({}, state), {}, {
        error: {
          code: action.payload.status,
          message: action.payload.statusText,
          detail: !!action.payload.response ? action.payload.response.detail : null
        }
      });
    case "CORE_CACHE_FILTER":
      var filtersCache = _objectSpread$4(_objectSpread$4({}, state.filtersCache), action.payload);
      return _objectSpread$4(_objectSpread$4({}, state), {}, {
        filtersCache: filtersCache
      });
    case "CORE_CACHE_FILTER_RESET":
      var key = action.payload;
      var filtersCacheCopy = _objectSpread$4({}, state.filtersCache);
      delete filtersCacheCopy[key];
      return _objectSpread$4(_objectSpread$4({}, state), {}, {
        filtersCache: filtersCacheCopy
      });
    case "CORE_MUTATION_ADD":
      return _objectSpread$4(_objectSpread$4({}, state), {}, {
        mutations: [action.payload].concat(_toConsumableArray__default["default"](state.mutations))
      });
    case "CORE_MUTATION_REQ":
      return _objectSpread$4(_objectSpread$4({}, state), {}, {
        fetchingMutations: true
      });
    case "CORE_MUTATION_RESP":
      {
        var mutations = parseData(action.payload.data.mutationLogs);
        return _objectSpread$4(_objectSpread$4({}, state), {}, {
          fetchingMutations: false,
          mutations: ___default["default"].unionBy(mutations, state.mutations, "clientMutationId")
        });
      }
    case "CORE_MUTATION_ERR":
      return _objectSpread$4(_objectSpread$4({}, state), {}, {
        fetchingMutations: false
      });
    case "CORE_HISTORICAL_MUTATIONS_REQ":
      return _objectSpread$4(_objectSpread$4({}, state), {}, {
        fetchingHistoricalMutations: true
      });
    case "CORE_HISTORICAL_MUTATIONS_RESP":
      return _objectSpread$4(_objectSpread$4({}, state), {}, {
        fetchingHistoricalMutations: false,
        fetchedHistoricalMutations: true,
        mutations: parseData(action.payload.data.mutationLogs).map(function (m) {
          return _objectSpread$4(_objectSpread$4({}, m), {}, {
            id: decodeId(m.id)
          });
        }),
        mutationsPageInfo: pageInfo(action.payload.data.mutationLogs)
      });
    case "CORE_HISTORICAL_MUTATIONS_ERR":
      return _objectSpread$4(_objectSpread$4({}, state), {}, {
        fetchingHistoricalMutations: false,
        fetchedHistoricalMutations: true
      });
    case "CORE_ROLES_REQ":
      return _objectSpread$4(_objectSpread$4({}, state), {}, {
        fetchingRoles: true,
        fetchedRoles: false,
        roles: [],
        rolesPageInfo: {},
        rolesTotalCount: 0,
        errorRoles: null
      });
    case "CORE_ROLES_RESP":
      return _objectSpread$4(_objectSpread$4({}, state), {}, {
        fetchingRoles: false,
        fetchedRoles: true,
        roles: parseData(action.payload.data.role),
        rolesPageInfo: pageInfo(action.payload.data.role),
        rolesTotalCount: !!action.payload.data.role ? action.payload.data.role.totalCount : null,
        errorRoles: formatGraphQLError(action.payload)
      });
    case "CORE_ROLES_ERR":
      return _objectSpread$4(_objectSpread$4({}, state), {}, {
        fetchingRoles: false,
        errorRoles: formatServerError(action.payload)
      });
    case "CORE_MODULEPERMISSIONS_REQ":
      return _objectSpread$4(_objectSpread$4({}, state), {}, {
        fetchingModulePermissions: true,
        fetchedModulePermissions: false,
        modulePermissions: [],
        errorModulePermissions: null
      });
    case "CORE_MODULEPERMISSIONS_RESP":
      return _objectSpread$4(_objectSpread$4({}, state), {}, {
        fetchingModulePermissions: false,
        fetchedModulePermissions: true,
        modulePermissions: !!action.payload.data.modulesPermissions ? action.payload.data.modulesPermissions.modulePermsList : [],
        errorModulePermissions: formatGraphQLError(action.payload)
      });
    case "CORE_MODULEPERMISSIONS_ERR":
      return _objectSpread$4(_objectSpread$4({}, state), {}, {
        fetchingModulePermissions: false,
        errorModulePermissions: formatServerError(action.payload)
      });
    case "CORE_LANGUAGES_REQ":
      return _objectSpread$4(_objectSpread$4({}, state), {}, {
        fetchingLanguages: true,
        fetchedLanguages: false,
        languages: [],
        errorLanguages: null
      });
    case "CORE_LANGUAGES_RESP":
      return _objectSpread$4(_objectSpread$4({}, state), {}, {
        fetchingLanguages: false,
        fetchedLanguages: true,
        languages: !!action.payload.data.languages ? action.payload.data.languages : [],
        errorLanguages: formatGraphQLError(action.payload)
      });
    case "CORE_LANGUAGES_ERR":
      return _objectSpread$4(_objectSpread$4({}, state), {}, {
        fetchingLanguages: false,
        errorLanguages: formatServerError(action.payload)
      });
    case "CORE_ROLE_REQ":
      return _objectSpread$4(_objectSpread$4({}, state), {}, {
        fetchingRole: true,
        fetchedRole: false,
        role: null,
        errorRole: null
      });
    case "CORE_ROLE_RESP":
      return _objectSpread$4(_objectSpread$4({}, state), {}, {
        fetchingRole: false,
        fetchedRole: true,
        role: parseData(action.payload.data.role).find(function (role) {
          return !!role;
        }),
        errorRole: formatGraphQLError(action.payload)
      });
    case "CORE_ROLE_ERR":
      return _objectSpread$4(_objectSpread$4({}, state), {}, {
        fetchingRole: false,
        errorRole: formatServerError(action.payload)
      });
    case "CORE_ROLERIGHTS_REQ":
      return _objectSpread$4(_objectSpread$4({}, state), {}, {
        fetchingRoleRights: true,
        fetchedRoleRights: false,
        roleRights: [],
        errorRoleRights: null
      });
    case "CORE_ROLERIGHTS_RESP":
      return _objectSpread$4(_objectSpread$4({}, state), {}, {
        fetchingRoleRights: false,
        fetchedRoleRights: true,
        roleRights: parseData(action.payload.data.roleRight),
        errorRoleRights: formatGraphQLError(action.payload)
      });
    case "CORE_ROLERIGHTS_ERR":
      return _objectSpread$4(_objectSpread$4({}, state), {}, {
        fetchingRoleRights: false,
        errorRoleRights: formatServerError(action.payload)
      });
    case "CORE_ROLE_NAME_VALIDATION_FIELDS_REQ":
      return _objectSpread$4(_objectSpread$4({}, state), {}, {
        validationFields: _objectSpread$4(_objectSpread$4({}, state.validationFields), {}, {
          roleName: {
            isValidating: true,
            isValid: false,
            validationError: null
          }
        })
      });
    case "CORE_ROLE_NAME_VALIDATION_FIELDS_RESP":
      return _objectSpread$4(_objectSpread$4({}, state), {}, {
        validationFields: _objectSpread$4(_objectSpread$4({}, state.validationFields), {}, {
          roleName: {
            isValidating: false,
            isValid: (_action$payload = action.payload) === null || _action$payload === void 0 ? void 0 : _action$payload.data.isValid,
            validationError: formatGraphQLError(action.payload)
          }
        })
      });
    case "CORE_ROLE_NAME_VALIDATION_FIELDS_ERR":
      return _objectSpread$4(_objectSpread$4({}, state), {}, {
        validationFields: _objectSpread$4(_objectSpread$4({}, state.validationFields), {}, {
          roleName: {
            isValidating: false,
            isValid: false,
            validationError: formatServerError(action.payload)
          }
        })
      });
    case "CORE_ROLE_NAME_VALIDATION_FIELDS_CLEAR":
      return _objectSpread$4(_objectSpread$4({}, state), {}, {
        validationFields: _objectSpread$4(_objectSpread$4({}, state.validationFields), {}, {
          roleName: {
            isValidating: true,
            isValid: false,
            validationError: null
          }
        })
      });
    case "CORE_ROLE_NAME_VALIDATION_FIELDS_SET_VALID":
      return _objectSpread$4(_objectSpread$4({}, state), {}, {
        validationFields: _objectSpread$4(_objectSpread$4({}, state.validationFields), {}, {
          roleName: {
            isValidating: false,
            isValid: true,
            validationError: null
          }
        })
      });
    case "FETCH_CUSTOM_FILTER_REQ":
      return _objectSpread$4(_objectSpread$4({}, state), {}, {
        fetchingCustomFilters: true,
        fetchedCustomFilters: false,
        customFilters: [],
        errorCustomFilters: null
      });
    case "FETCH_CUSTOM_FILTER_RESP":
      return _objectSpread$4(_objectSpread$4({}, state), {}, {
        fetchingCustomFilters: false,
        fetchedCustomFilters: true,
        customFilters: !!action.payload.data.customFilters ? action.payload.data.customFilters.possibleFilters : [],
        errorCustomFilters: formatGraphQLError(action.payload)
      });
    case "FETCH_CUSTOM_FILTER_ERR":
      return _objectSpread$4(_objectSpread$4({}, state), {}, {
        fetchingCustomFilters: false,
        errorCustomFilters: formatServerError(action.payload)
      });
    case "CORE_ROLE_MUTATION_REQ":
      return dispatchMutationReq(state, action);
    case "CORE_ROLE_MUTATION_ERR":
      return dispatchMutationErr(state, action);
    case "CORE_CREATE_ROLE_RESP":
      return dispatchMutationResp(state, "createRole", action);
    case "CORE_UPDATE_ROLE_RESP":
      return dispatchMutationResp(state, "updateRole", action);
    case "CORE_DELETE_ROLE_RESP":
      return dispatchMutationResp(state, "deleteRole", action);

    // AUTH
    case "CORE_AUTH_LOGIN_RESP":
      {
        var _action$payload2;
        if ((_action$payload2 = action.payload) !== null && _action$payload2 !== void 0 && _action$payload2.errors) {
          return _objectSpread$4(_objectSpread$4({}, state), {}, {
            authError: formatGraphQLError(action.payload)
          });
        }
        return _objectSpread$4(_objectSpread$4({}, state), {}, {
          authError: null
        });
      }
    case "CORE_AUTH_ERR":
      {
        return _objectSpread$4(_objectSpread$4({}, state), {}, {
          user: null,
          authError: formatServerError(action.payload)
        });
      }
    case "CORE_INITIALIZED":
      return _objectSpread$4(_objectSpread$4({}, state), {}, {
        isInitialized: true
      });
    case "CORE_AUTH_LOGOUT":
      return _objectSpread$4(_objectSpread$4({}, state), {}, {
        user: null,
        mutations: [],
        filtersCache: {},
        roles: [],
        rolesPageInfo: {},
        rolesTotalCount: 0,
        modulePermissions: [],
        role: null,
        roleRights: []
      });
    case "CORE_PAGINATION_PAGE":
      return _objectSpread$4(_objectSpread$4({}, state), {}, {
        savedPagination: {
          paginationPage: (_action$payload3 = action.payload) === null || _action$payload3 === void 0 ? void 0 : _action$payload3.page,
          afterCursor: (_action$payload4 = action.payload) === null || _action$payload4 === void 0 ? void 0 : _action$payload4.afterCursor,
          beforeCursor: (_action$payload5 = action.payload) === null || _action$payload5 === void 0 ? void 0 : _action$payload5.beforeCursor,
          module: (_action$payload6 = action.payload) === null || _action$payload6 === void 0 ? void 0 : _action$payload6.module
        }
      });
    case "CORE_PAGINATION_PAGE_CLEAR":
      return _objectSpread$4(_objectSpread$4({}, state), {}, {
        savedPagination: {
          paginationPage: 0,
          afterCursor: null,
          beforeCursor: null,
          module: null
        }
      });
    case "CORE_CALENDAR_TYPE_TOGGLE":
      return _objectSpread$4(_objectSpread$4({}, state), {}, {
        isSecondaryCalendarEnabled: action.payload.isSecondaryCalendarEnabled
      });
    default:
      return state;
  }
}

var InternalServerErrorPage = function InternalServerErrorPage(props) {
  var _useTranslations = useTranslations(MODULE_NAME),
    formatMessage = _useTranslations.formatMessage;
  return /*#__PURE__*/React__default["default"].createElement(ErrorPage, _extends__default["default"]({
    status: 500,
    title: formatMessage("core.InternalServerErrorPage.title"),
    description: formatMessage("core.InternalServerErrorPage.description")
  }, props));
};

function _callSuper(t, o, e) { return o = _getPrototypeOf__default["default"](o), _possibleConstructorReturn__default["default"](t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf__default["default"](t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var ErrorBoundary = /*#__PURE__*/function (_React$Component) {
  function ErrorBoundary(props) {
    var _this;
    _classCallCheck__default["default"](this, ErrorBoundary);
    _this = _callSuper(this, ErrorBoundary, [props]);
    _this.state = {
      hasError: false
    };
    return _this;
  }
  _inherits__default["default"](ErrorBoundary, _React$Component);
  return _createClass__default["default"](ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      // Just log for now, could be reported elsewhere
      console.error(error, errorInfo);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.hasError) {
        return /*#__PURE__*/React__default["default"].createElement(InternalServerErrorPage, {
          logo: this.props.children.props.logo
        });
      }
      return this.props.children;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(error) {
      // update the state to show the failover UI at next render
      return {
        hasError: true
      };
    }
  }]);
}(React__default["default"].Component);

var styles = function styles(theme) {
  return {
    primaryButton: theme.dialog.primaryButton,
    secondaryButton: theme.dialog.secondaryButton
  };
};
var SelectDialog = function SelectDialog(_ref) {
  var classes = _ref.classes,
    module = _ref.module,
    confirmationButton = _ref.confirmationButton,
    rejectionButton = _ref.rejectionButton,
    confirmMessage = _ref.confirmMessage,
    confirmState = _ref.confirmState,
    confirmTitle = _ref.confirmTitle,
    confirmMessageComponent = _ref.confirmMessageComponent,
    onClose = _ref.onClose,
    onConfirm = _ref.onConfirm;
  var modulesManager = feCore.useModulesManager();
  var _useTranslations = feCore.useTranslations(module, modulesManager),
    formatMessage = _useTranslations.formatMessage;
  return /*#__PURE__*/React__default["default"].createElement(core.Dialog, {
    open: confirmState,
    onClose: onClose
  }, /*#__PURE__*/React__default["default"].createElement(core.DialogTitle, null, formatMessage(confirmTitle)), /*#__PURE__*/React__default["default"].createElement(core.DialogContent, null, confirmMessage && /*#__PURE__*/React__default["default"].createElement(core.DialogContentText, null, formatMessage(confirmMessage)), /*#__PURE__*/React__default["default"].createElement(core.DialogContentText, null, confirmMessageComponent)), /*#__PURE__*/React__default["default"].createElement(core.DialogActions, null, /*#__PURE__*/React__default["default"].createElement(core.Button, {
    onClick: onConfirm,
    autoFocus: true,
    className: classes.primaryButton
  }, formatMessage(confirmationButton)), /*#__PURE__*/React__default["default"].createElement(core.Button, {
    onClick: onClose,
    className: classes.secondaryButton
  }, formatMessage(rejectionButton))));
};
var SelectDialog$1 = reactIntl.injectIntl(styles$w.withTheme(styles$w.withStyles(styles)(SelectDialog)));

function ownKeys$3(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$3(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$3(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$3(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var DEFAULT_STYLES = {
  backgroundColor: "khaki",
  padding: "12px",
  margin: "4px",
  borderLeft: "5px solid #ffa000",
  borderRadius: "10px"
};
var WarningBox = function WarningBox(_ref) {
  var title = _ref.title,
    description = _ref.description,
    styles = _ref.styles,
    xs = _ref.xs;
  return /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true,
    xs: xs || 12
  }, /*#__PURE__*/React__default["default"].createElement(core.Box, {
    style: _objectSpread$3(_objectSpread$3({}, DEFAULT_STYLES), styles)
  }, /*#__PURE__*/React__default["default"].createElement(core.Typography, {
    variant: "subtitle1"
  }, /*#__PURE__*/React__default["default"].createElement("strong", null, title, ":"), " ", description)));
};
WarningBox.defaultProps = {
  styles: {},
  xs: 12
};
WarningBox.propTypes = {
  title: PropTypes__default["default"].string.isRequired,
  description: PropTypes__default["default"].string.isRequired,
  styles: PropTypes__default["default"].object,
  xs: PropTypes__default["default"].number
};

function downloadExport(export_file, filename) {
  var url = new URL("".concat(window.location.origin).concat(feCore.baseApiUrl, "/core/fetch_export?export=").concat(export_file));
  return function (dispatch) {
    fetch(url).then(function (response) {
      return response.blob();
    }).then(function (blob) {
      return openBlob(blob, filename, "csv");
    })["catch"](function (error) {
      console.error("Export failed, reason: ", error);
    });
  };
}

// Creates additional fields from a JSON string and returns an array of field objects.
// @param { string } json - The JSON string containing additional fields.
// @returns { Array } - An array of field objects, each containing the field's type and value.
var createFieldsBasedOnJSON = function createFieldsBasedOnJSON(json) {
  if (!json) return [];
  var additionalFields = JSON.parse(json);
  return Object.entries(additionalFields).map(function (_ref) {
    var _ref2 = _slicedToArray__default["default"](_ref, 2),
      property = _ref2[0],
      value = _ref2[1];
    var field = _defineProperty__default["default"]({}, property, value);
    var fieldType = _typeof__default["default"](value);
    return {
      fieldType: fieldType,
      field: field
    };
  });
};

// Renders the appropriate input component based on the field type and value.
// @param { string } module - The name of module.
// @param { object } field - The field object containing the field's label and value.
// @param { string } fieldType - The type of the field.
// @returns { JSX.Element } - The rendered input component based on the field type.
// WARNING: Currently, only two types of inputs are supported for readOnly reasons. 
var renderInputComponent = function renderInputComponent(module, _ref3) {
  var fieldType = _ref3.fieldType,
    field = _ref3.field;
  var _Object$entries$ = Object.entries(field)[0],
    label = _Object$entries$[0],
    value = _Object$entries$[1];
  if (fieldType === FIELD_TYPES.INTEGER || fieldType === FIELD_TYPES.NUMBER) {
    return /*#__PURE__*/React__default["default"].createElement(feCore.NumberInput, {
      module: module,
      readOnly: true,
      min: 0,
      displayZero: true,
      label: label,
      value: value
    });
  }
  return /*#__PURE__*/React__default["default"].createElement(feCore.TextInput, {
    module: module,
    readOnly: true,
    label: label,
    value: value
  });
};

function formatJsonField(json) {
  return "\"".concat(JSON.stringify(json).replace(/\"/g, '\\"'), "\"");
}

function authMiddleware(store) {
  return function wrapDispatch(next) {
    return function handleAction(action) {
      var _action$payload;
      if (action.type !== "CORE_AUTH_ERR" && ((_action$payload = action.payload) === null || _action$payload === void 0 ? void 0 : _action$payload.name) === "ApiError" && action.payload.status === 401) {
        return store.dispatch(authError(action.payload));
      }
      return next(action);
    };
  };
}

var RefreshAuthToken = function RefreshAuthToken() {
  var auth = useAuthentication();
  var intervalRef = React.useRef();
  React.useEffect(function () {
    if (auth.isAuthenticated) {
      intervalRef.current = setInterval(auth.refresh, 2 * 60 * 1000); // Refresh the token every 2 minutes
    }
    return function () {
      clearTimeout(intervalRef.current);
    };
  }, [auth.isAuthenticated]);
  return null;
};

function ownKeys$2(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$2(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$2(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var UserActivityReport = function UserActivityReport(props) {
  var values = props.values,
    setValues = props.setValues;
  var modulesManager = feCore.useModulesManager();
  var _useTranslations = feCore.useTranslations("core", modulesManager),
    formatMessage = _useTranslations.formatMessage;
  return /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    container: true,
    direction: "column",
    spacing: 1
  }, /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true
  }, /*#__PURE__*/React__default["default"].createElement(feCore.PublishedComponent, {
    pubRef: "core.DatePicker",
    value: values.dateFrom,
    module: "core",
    required: true,
    label: "UserActivityReport.dateFrom",
    onChange: function onChange(dateFrom) {
      return setValues(_objectSpread$2(_objectSpread$2({}, values), {}, {
        dateFrom: dateFrom
      }));
    }
  })), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true
  }, /*#__PURE__*/React__default["default"].createElement(feCore.PublishedComponent, {
    pubRef: "core.DatePicker",
    value: values.dateTo,
    module: "core",
    required: true,
    label: "UserActivityReport.dateTo",
    onChange: function onChange(dateTo) {
      return setValues(_objectSpread$2(_objectSpread$2({}, values), {}, {
        dateTo: dateTo
      }));
    }
  })), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true
  }, /*#__PURE__*/React__default["default"].createElement(feCore.PublishedComponent, {
    pubRef: "admin.UserPicker",
    value: values.user,
    module: "core",
    label: formatMessage("UserActivityReport.user"),
    onChange: function onChange(user) {
      return setValues(_objectSpread$2(_objectSpread$2({}, values), {}, {
        user: user
      }));
    }
  })), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true
  }, /*#__PURE__*/React__default["default"].createElement(feCore.ConstantBasedPicker, {
    module: "core",
    value: values.action,
    label: "UserActivityReport.action",
    constants: USER_ACTIVITY_REPORT_ACTIONS,
    onChange: function onChange(action) {
      return setValues(_objectSpread$2(_objectSpread$2({}, values), {}, {
        action: action
      }));
    }
  })), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true
  }, /*#__PURE__*/React__default["default"].createElement(feCore.ConstantBasedPicker, {
    module: "core",
    value: values.entity,
    label: "UserActivityReport.entity",
    constants: USER_ACTIVITY_REPORT_ENTITIES,
    onChange: function onChange(entity) {
      return setValues(_objectSpread$2(_objectSpread$2({}, values), {}, {
        entity: entity
      }));
    }
  })));
};

function ownKeys$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var RegistersStatusReport = function RegistersStatusReport(props) {
  var values = props.values,
    setValues = props.setValues;
  var modulesManager = feCore.useModulesManager();
  var _useTranslations = feCore.useTranslations("core", modulesManager),
    formatMessage = _useTranslations.formatMessage;
  return /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    container: true,
    direction: "column",
    spacing: 1
  }, /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true
  }, /*#__PURE__*/React__default["default"].createElement(feCore.PublishedComponent, {
    pubRef: "location.LocationPicker",
    onChange: function onChange(region) {
      return setValues(_objectSpread$1(_objectSpread$1({}, values), {}, {
        region: region,
        district: null
      }));
    },
    value: values.region,
    locationLevel: 0,
    label: formatMessage("RegistersStatusReport.region")
  })), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true
  }, /*#__PURE__*/React__default["default"].createElement(feCore.PublishedComponent, {
    pubRef: "location.LocationPicker",
    onChange: function onChange(district) {
      return setValues(_objectSpread$1(_objectSpread$1({}, values), {}, {
        district: district
      }));
    },
    value: values.district,
    parentLocation: values.region,
    locationLevel: 1,
    label: formatMessage("RegistersStatusReport.district")
  })));
};

var SearcherActionButton = function SearcherActionButton(_ref) {
  var onClick = _ref.onClick,
    startIcon = _ref.startIcon,
    label = _ref.label;
  return /*#__PURE__*/React__default["default"].createElement(core.Button, {
    variant: "outlined",
    style: {
      border: 0
    },
    onClick: onClick,
    startIcon: startIcon
  }, label && /*#__PURE__*/React__default["default"].createElement(core.Typography, {
    variant: "subtitle1"
  }, label));
};

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var ROUTE_ROLES = "roles";
var ROUTE_ROLE = "roles/role";
var DEFAULT_CONFIG = {
  "translations": [{
    key: "en",
    messages: messages_en
  }],
  "reducers": [{
    key: "core",
    reducer: reducer
  }],
  "reports": [{
    key: "user_activity",
    component: UserActivityReport,
    isValid: function isValid(values) {
      return values.dateFrom && values.dateTo;
    },
    getParams: function getParams(values) {
      var params = {};
      if (values.user) {
        params.requested_user_id = decodeId(values.user.iUser.id);
      }
      if (values.action) {
        params.action = values.action;
      }
      if (values.entity) {
        params.entity = values.entity;
      }
      params.date_start = values.dateFrom;
      params.date_end = values.dateTo;
      return params;
    }
  }, {
    key: "registers_status",
    component: RegistersStatusReport,
    isValid: function isValid(values) {
      return true;
    },
    getParams: function getParams(values) {
      var params = {};
      if (values.region) {
        params.requested_region_id = decodeId(values.region.id);
      }
      if (values.district) {
        params.requested_district_id = decodeId(values.district.id);
      }
      return params;
    }
  }],
  "middlewares": [authMiddleware],
  "refs": [{
    key: "core.JournalDrawer.pollInterval",
    ref: 2000
  }, {
    key: "core.KeepLegacyAlive.pollInterval",
    ref: 300000
  }, {
    key: "core.YearPicker",
    ref: YearPicker$1
  }, {
    key: "core.MonthPicker",
    ref: MonthPicker$1
  }, {
    key: "core.MonthYearPicker",
    ref: MonthYearPicker$1
  }, {
    key: "core.LanguagePicker",
    ref: LanguagePicker$1
  }, {
    key: "core.AuthorityPicker",
    ref: AuthorityPicker
  }, {
    key: "core.route.role",
    ref: ROUTE_ROLE
  }],
  "core.Boot": [KeepLegacyAlive$1, RefreshAuthToken],
  "core.Router": [{
    path: ROUTE_ROLES,
    component: Roles$1
  }, {
    path: ROUTE_ROLE + "/:role_uuid?",
    component: Role$1
  }],
  "admin.MainMenu": [{
    text: /*#__PURE__*/React__default["default"].createElement(FormattedMessage$1, {
      module: "core",
      id: "roleManagement.label"
    }),
    icon: /*#__PURE__*/React__default["default"].createElement(AccountBox__default["default"], null),
    route: "/" + ROUTE_ROLES,
    filter: function filter(rights) {
      return rights.includes(RIGHT_ROLE_SEARCH);
    }
  }]
};
var CoreModule = function CoreModule(cfg) {
  var def = _objectSpread({}, DEFAULT_CONFIG);
  def.refs.push({
    key: "core.DatePicker",
    ref: openIMISDatePicker$1
  });
  return _objectSpread(_objectSpread({}, def), cfg);
};
function combine() {
  for (var _len = arguments.length, hocs = new Array(_len), _key = 0; _key < _len; _key++) {
    hocs[_key] = arguments[_key];
  }
  return function (Component) {
    return hocs.reduceRight(function (acc, hoc) {
      return hoc(acc);
    }, Component);
  };
}

Object.defineProperty(exports, 'Link', {
  enumerable: true,
  get: function () { return reactRouterDom.Link; }
});
Object.defineProperty(exports, 'NavLink', {
  enumerable: true,
  get: function () { return reactRouterDom.NavLink; }
});
Object.defineProperty(exports, 'Redirect', {
  enumerable: true,
  get: function () { return reactRouterDom.Redirect; }
});
Object.defineProperty(exports, 'Helmet', {
  enumerable: true,
  get: function () { return _Helmet__default["default"]; }
});
Object.defineProperty(exports, 'useHistory', {
  enumerable: true,
  get: function () { return reactRouter.useHistory; }
});
Object.defineProperty(exports, 'useLocation', {
  enumerable: true,
  get: function () { return reactRouter.useLocation; }
});
Object.defineProperty(exports, 'useParams', {
  enumerable: true,
  get: function () { return reactRouter.useParams; }
});
Object.defineProperty(exports, 'useRouteMatch', {
  enumerable: true,
  get: function () { return reactRouter.useRouteMatch; }
});
exports.AdvancedFiltersDialog = AdvancedFiltersDialog$1;
exports.AlertForwarder = AlertForwarder$1;
exports.AmountInput = AmountInput$1;
exports.App = App$1;
exports.AutoSuggestion = AutoSuggestion$1;
exports.Autocomplete = Autocomplete$1;
exports.Block = Block;
exports.CLEARED_STATE_FILTER = CLEARED_STATE_FILTER;
exports.ConfirmDialog = ConfirmDialog$1;
exports.ConstantBasedPicker = ConstantBasedPicker$1;
exports.Contributions = Contributions;
exports.ControlledField = ControlledField$1;
exports.CoreModule = CoreModule;
exports.CustomFilterTypeStatusPicker = CustomFilterTypeStatusPicker$1;
exports.Error = Error$2;
exports.ErrorBoundary = ErrorBoundary;
exports.FakeInput = FakeInput$1;
exports.FatalError = FatalError$1;
exports.FieldLabel = FieldLabel$1;
exports.Form = Form$1;
exports.FormPanel = FormPanel;
exports.FormattedMessage = FormattedMessage$1;
exports.LanguagePicker = LanguagePicker$1;
exports.MainMenuContribution = MainMenuContribution$1;
exports.MonthPicker = MonthPicker$1;
exports.MonthYearPicker = MonthYearPicker$1;
exports.NumberInput = NumberInput$1;
exports.PagedDataHandler = PagedDataHandler;
exports.Picker = Picker$1;
exports.ProgressOrError = ProgressOrError$1;
exports.ProxyPage = ProxyPage;
exports.PublishedComponent = PublishedComponent$1;
exports.Searcher = Searcher$1;
exports.SearcherActionButton = SearcherActionButton;
exports.SearcherExport = SearcherExport$1;
exports.SearcherPane = SearcherPane$1;
exports.SelectDialog = SelectDialog$1;
exports.SelectInput = SelectInput$1;
exports.Table = Table$3;
exports.TableService = TableService;
exports.TableServiceReview = TableServiceReview;
exports.TextAreaInput = TextAreaInput;
exports.TextInput = TextInput$1;
exports.ValidatedTextAreaInput = ValidatedTextAreaInput;
exports.ValidatedTextInput = ValidatedTextInput;
exports.WarningBox = WarningBox;
exports.YearPicker = YearPicker$1;
exports.apiHeaders = apiHeaders;
exports.baseApiUrl = baseApiUrl;
exports.clearConfirm = clearConfirm;
exports.clearCurrentPaginationPage = clearCurrentPaginationPage;
exports.combine = combine;
exports.coreAlert = coreAlert;
exports.coreConfirm = coreConfirm;
exports.createFieldsBasedOnJSON = createFieldsBasedOnJSON;
exports.decodeId = decodeId;
exports.dispatchMutationErr = dispatchMutationErr;
exports.dispatchMutationReq = dispatchMutationReq;
exports.dispatchMutationResp = dispatchMutationResp;
exports.downloadExport = downloadExport;
exports.encodeId = encodeId;
exports.ensureArray = ensureArray;
exports.fetchCustomFilter = fetchCustomFilter;
exports.fetchMutation = fetchMutation;
exports.formatAmount = formatAmount;
exports.formatDateFromISO = formatDateFromISO;
exports.formatDateTimeFromISO = formatDateTimeFromISO;
exports.formatGQLString = formatGQLString;
exports.formatGraphQLError = formatGraphQLError;
exports.formatJsonField = formatJsonField;
exports.formatMessage = formatMessage;
exports.formatMessageWithValues = formatMessageWithValues;
exports.formatMutation = formatMutation;
exports.formatNodeQuery = formatNodeQuery;
exports.formatPageQuery = formatPageQuery;
exports.formatPageQueryWithCount = formatPageQueryWithCount;
exports.formatQuery = formatQuery;
exports.formatServerError = formatServerError;
exports.formatSorter = formatSorter;
exports.getTimeDifferenceInDays = getTimeDifferenceInDays;
exports.getTimeDifferenceInDaysFromToday = getTimeDifferenceInDaysFromToday;
exports.graphql = graphql;
exports.graphqlMutation = graphqlMutation;
exports.graphqlWithVariables = graphqlWithVariables;
exports.historyPush = historyPush;
exports.journalize = journalize;
exports.onLogout = onLogout;
exports.openBlob = openBlob;
exports.pageInfo = pageInfo;
exports.parseData = parseData;
exports.prepareForComparison = prepareForComparison;
exports.prepareMutation = prepareMutation;
exports.redirectToSamlLogout = redirectToSamlLogout;
exports.renderInputComponent = renderInputComponent;
exports.sort = sort;
exports.toISODate = toISODate;
exports.toISODateTime = toISODateTime;
exports.useAuthentication = useAuthentication;
exports.useBoolean = useBoolean;
exports.useDebounceCb = useDebounceCb;
exports.useGraphqlMutation = useGraphqlMutation;
exports.useGraphqlQuery = useGraphqlQuery;
exports.useModulesManager = useModulesManager;
exports.usePrevious = usePrevious;
exports.useTranslations = useTranslations;
exports.useUserQuery = useUserQuery;
exports.withHistory = withHistory;
exports.withModulesManager = withModulesManager;
exports.withTooltip = withTooltip;
