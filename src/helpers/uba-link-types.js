import { useMemo } from "react";
import { useIntl } from "react-intl";

import { useGraphqlQuery } from "./hooks";

/**
 * The UBA link types (the credentials a user may hold on a business object), read from
 * the backend registry rather than from a list kept here: a module declaring its own
 * credential through `core.uba_link_types` shows up in every picker without a frontend
 * change. `ubaLinkTypes` returns `code`, `label` and the `models` the credential may be
 * used on, empty meaning any.
 *
 * The label the backend gives is the one the registering module wrote, in one language.
 * A deployment translates it by adding the key this module builds from the code -
 * `core.uba.link_type.<code>`, lowercased - to its own translation file, the backend
 * label staying the fallback for a credential nobody translated.
 */
const UBA_LINK_TYPES_QUERY = `
  query UbaLinkTypes($businessObjectModel: String) {
    ubaLinkTypes(businessObjectModel: $businessObjectModel) {
      code
      label
      models
    }
  }
`;

/** The catalogue key labelling a credential, e.g. `core.uba.link_type.enrolment`. */
export function ubaLinkTypeLabelKey(code) {
  return `core.uba.link_type.${String(code ?? "").toLowerCase()}`;
}

/**
 * How to name a credential: its translation when the deployment carries one, the label
 * of the backend registry otherwise, the raw code as a last resort.
 */
export function formatUbaLinkTypeLabel(intl, code, defaultLabel) {
  const key = ubaLinkTypeLabelKey(code);
  if (code && intl?.messages?.[key]) return intl.formatMessage({ id: key });
  return defaultLabel || code || "";
}

/**
 * The credentials of the backend registry, labelled for the current language.
 * `businessObjectModel` restricts them server side to the ones usable on that
 * `<app_label>.<model>`; without it the whole registry comes back, `models` telling which
 * business object types each credential accepts.
 *
 * Returns `{ linkTypes, isLoading, error, labelOf }`, `labelOf(code, defaultLabel)`
 * naming a credential a stored link carries, which the query may not list (a credential
 * whose module has been removed, or one filtered out by `businessObjectModel`).
 */
export const useUbaLinkTypes = (businessObjectModel = null) => {
  const intl = useIntl();
  const variables = useMemo(() => ({ businessObjectModel: businessObjectModel || null }), [businessObjectModel]);
  const { data, isLoading, error } = useGraphqlQuery(UBA_LINK_TYPES_QUERY, variables, { keepStale: true });

  const linkTypes = useMemo(
    () =>
      (data?.ubaLinkTypes ?? []).map((linkType) => ({
        ...linkType,
        label: formatUbaLinkTypeLabel(intl, linkType.code, linkType.label),
      })),
    [data, intl],
  );

  const labelOf = (code, defaultLabel) =>
    formatUbaLinkTypeLabel(
      intl,
      code,
      linkTypes.find((linkType) => linkType.code === code)?.label ?? defaultLabel,
    );

  return { linkTypes, isLoading, error, labelOf };
};
