import { authError } from "./actions";
import { registerRightsStore } from "./helpers/rights";

export function authMiddleware(store) {
  return function wrapDispatch(next) {
    return function handleAction(action) {
      if (action.type !== "CORE_AUTH_ERR" && action.payload?.name === "ApiError" && action.payload.status === 401) {
        return store.dispatch(authError(action.payload));
      }
      return next(action);
    };
  };
}

/**
 * Gives `hasPerms(...)` & co access to the current user without it being passed
 * around: the store is only captured here, every action goes straight through.
 * See `docs/rights.md`.
 */
export function rightsMiddleware(store) {
  registerRightsStore(store);
  return function wrapDispatch(next) {
    return function handleAction(action) {
      return next(action);
    };
  };
}
