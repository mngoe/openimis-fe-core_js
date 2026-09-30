import { formatRightLabel } from "./role-label-formatter";

/**
 * The rights the role page offers, one entry per right id.
 *
 * `modulesPermissions` lists the `*_perms` settings of every module, and several of them
 * often share one right id (`policy.gql_query_policies_perms` and three other policy
 * queries all are 101201, `payment` and `contract` declare the same payment rights, ...).
 * A role stores right ids, so listing the settings one by one showed the same right
 * several times, moved all of them at once and gave React duplicate keys - the rows it
 * then failed to remove. Here each right id is one entry, carrying every setting that
 * uses it, under the first module declaring it.
 */

/** Rights are stored as numbers, `modulesPermissions` and older payloads may give strings. */
export const toRightId = (right) => Number(right);

export const uniqueRightIds = (rights) => [
  ...new Set(
    (rights ?? [])
      .filter((right) => right !== null && right !== undefined && right !== "")
      .map(toRightId)
      .filter((id) => !Number.isNaN(id)),
  ),
];

const normalizeText = (text) =>
  String(text ?? "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[_|.#]/g, " ");

// families -> family, policies -> policy, insurees -> insuree: a search for the singular
// must find the plural the settings are named with, and the other way around
const stem = (word) => {
  if (word.length > 4 && word.endsWith("ies")) return `${word.slice(0, -3)}y`;
  if (word.length > 3 && word.endsWith("s") && !word.endsWith("ss")) return word.slice(0, -1);
  return word;
};

// the words the settings use, and the ones people search them with
const SYNONYMS = {
  query: ["search", "read", "inquire", "view", "list"],
  create: ["add", "new"],
  update: ["edit", "modify"],
  delete: ["remove"],
};

const searchableText = (texts) => {
  const words = normalizeText(texts.join(" ")).split(/\s+/).filter(Boolean);
  const expanded = new Set();
  words.forEach((word) => {
    expanded.add(word);
    expanded.add(stem(word));
    (SYNONYMS[word] ?? []).forEach((synonym) => expanded.add(synonym));
  });
  return ` ${[...expanded].join(" ")} `;
};

/**
 * @param modulePermissions the `modulesPermissions.modulePermsList` payload
 * @param translate (moduleName, permsName) => the translated label, or null when there is none
 * @returns entries `{ id, module, labels, searchText }`, sorted by module then right id
 */
export function buildRightsCatalog(modulePermissions, translate = () => null) {
  const byId = new Map();
  const modules = [...(modulePermissions ?? [])].sort((module, other) =>
    module.moduleName.localeCompare(other.moduleName),
  );
  modules.forEach(({ moduleName, permissions }) =>
    (permissions ?? []).forEach(({ permsName, permsValue }) => {
      const id = toRightId(permsValue);
      if (Number.isNaN(id)) return;
      if (!byId.has(id)) byId.set(id, { id, module: moduleName, labels: [], texts: [String(id)] });
      const entry = byId.get(id);
      const label = translate(moduleName, permsName) || formatRightLabel(permsName);
      if (!entry.labels.includes(label)) entry.labels.push(label);
      entry.texts.push(moduleName, permsName, label);
    }),
  );
  return [...byId.values()]
    .map(({ texts, ...entry }) => ({ ...entry, searchText: searchableText(texts) }))
    .sort((entry, other) => entry.module.localeCompare(other.module) || entry.id - other.id);
}

/** The entry of a right no module declares any more: listed so that it can still be removed. */
export const unknownRightEntry = (id, moduleLabel) => ({
  id,
  module: moduleLabel,
  labels: [String(id)],
  searchText: searchableText([String(id), moduleLabel]),
  unknown: true,
});

/**
 * Every word of the filter must start a word of the module, the labels, the setting names
 * or the right id - ignoring case, accents and plurals: "insuree fam" finds the family
 * rights of the insuree module, "polic add" the policy creation.
 */
export function matchesRightsFilter(entry, filterValue) {
  const tokens = normalizeText(filterValue).split(/\s+/).filter(Boolean);
  return tokens.every((token) => entry.searchText.includes(` ${token}`) || entry.searchText.includes(` ${stem(token)}`));
}

/** `[{ module, entries }]`, keeping the order of `entries`. */
export function groupByModule(entries) {
  const groups = [];
  entries.forEach((entry) => {
    const last = groups[groups.length - 1];
    if (last?.module === entry.module) last.entries.push(entry);
    else groups.push({ module: entry.module, entries: [entry] });
  });
  return groups;
}
