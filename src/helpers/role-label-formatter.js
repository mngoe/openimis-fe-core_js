const RIGHT_NAME_WORDS_SEPARATOR = "_";
const RIGHT_NAME_OMITTED_WORDS = ["gql", "mutation", "perms"];
const QUERY_WORD = /\bQuery\b/g;
const SEARCH_WORD = "Search";
const WHITESPACE = " ";

const capitalizeFirstLetter = (string) => {
  return string
    .split(WHITESPACE)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(WHITESPACE);
};

/** `gql_query_families_perms` -> `Search Families`. */
export const formatRightLabel = (permName = "") =>
  permName
    .split(RIGHT_NAME_WORDS_SEPARATOR)
    .filter((word) => word && !RIGHT_NAME_OMITTED_WORDS.includes(word))
    .map(capitalizeFirstLetter)
    .join(WHITESPACE)
    .replace(QUERY_WORD, SEARCH_WORD);

export const formatModuleLabel = (moduleName = "") =>
  moduleName.split(RIGHT_NAME_WORDS_SEPARATOR).map(capitalizeFirstLetter).join(WHITESPACE);

export const formatRoleLabel = (moduleName = "", permName = "") =>
  `${formatModuleLabel(moduleName)} | ${formatRightLabel(permName)}`;
