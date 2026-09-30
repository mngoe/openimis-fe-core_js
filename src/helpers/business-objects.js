import { decodeId } from "./api";

/**
 * Registry of the business object types: for a Django `<app_label>.<model>` label, which
 * published picker selects one of them, and which projection queries one.
 *
 * It exists because a generic screen - the business accesses (UBA) of a user, an audit
 * trail, anything naming an object by `content_type` + `object_id` - has to render an
 * object of a type it knows nothing about. Rather than a switch on the model label in
 * every such screen, the module owning the type registers it once:
 *
 *    registerBusinessObject("location.healthfacility", {
 *      labelKey: "businessObject.location.healthfacility",   // translated in that module
 *      pubRef: "location.HealthFacilityPicker",
 *      projectionRef: "location.HealthFacilityPicker.projection",
 *      gqlType: "HealthFacilityGQLType",                     // to read one back by id
 *      pickerProps: { level: "H" },
 *    });
 *
 * from its `index.js`, or declaratively through a contributed ref named
 * `core.businessObject.<app_label>.<model>` carrying the same object - which keeps a
 * module from having to import this registry at all.
 *
 * `BusinessObjectPicker` is the component reading it, and `useBusinessObjects` the hook
 * naming stored objects: something referencing an object by its content type only holds
 * its identifier, so `gqlType` + the projection turn that identifier back into the object
 * itself, through the relay `node` root field. Core seeds the two location types its own
 * UBA link types are declared on.
 */
const REGISTRY = {};

const modelKey = (model) => String(model ?? "").toLowerCase();

/** Declare how a business object type is picked and queried. */
export function registerBusinessObject(model, definition) {
  const key = modelKey(model);
  if (!key) {
    console.warn("A business object type needs a '<app_label>.<model>' label", model);
    return null;
  }
  REGISTRY[key] = { model: key, ...definition };
  return REGISTRY[key];
}

/**
 * The definition of a business object type: registered through
 * `registerBusinessObject`, or contributed as a `core.businessObject.<model>` ref.
 */
export function getBusinessObject(model, modulesManager) {
  const key = modelKey(model);
  if (!key) return null;
  return REGISTRY[key] ?? modulesManager?.getRef(`core.businessObject.${key}`) ?? null;
}

/** The types registered so far, `<app_label>.<model>` labels, sorted. */
export function getBusinessObjectModels() {
  return Object.keys(REGISTRY).sort();
}

/**
 * The projection querying such an object, as a string ready for a query, or null when
 * the type registered none.
 */
export function getBusinessObjectProjection(model, modulesManager) {
  const definition = getBusinessObject(model, modulesManager);
  if (!definition) return null;
  if (definition.projectionRef) return modulesManager?.getProjection(definition.projectionRef) ?? null;
  if (Array.isArray(definition.projection)) return `{${definition.projection.join(",")}}`;
  return definition.projection ?? null;
}

/**
 * How to name one object of that type: its own label when the object is at hand, its
 * identifier prefixed by the type otherwise - a link only carries `object_id`.
 */
export function formatBusinessObjectLabel(object, objectId, typeLabel) {
  const label = object && (object.name ?? object.code ?? object.username ?? object.uuid);
  if (label) return object.code && object.name ? `${object.code} ${object.name}` : label;
  if (objectId === undefined || objectId === null || objectId === "") return "";
  return typeLabel ? `${typeLabel} #${objectId}` : `#${objectId}`;
}

/** Key identifying one object of one type, for the maps `useBusinessObjects` returns. */
export function businessObjectReferenceKey(model, objectId) {
  return `${modelKey(model)}#${objectId}`;
}

/**
 * The relay global id of one object, `btoa("<GQLType>:<pk>")`, which is what the `node`
 * root field and the `id` filters take. Only a primary key can be encoded: an object
 * referenced by uuid cannot be read back that way.
 */
export function businessObjectNodeId(gqlType, objectId) {
  if (!gqlType || objectId === undefined || objectId === null) return null;
  if (!/^\d+$/.test(String(objectId))) return null;
  return btoa(`${gqlType}:${objectId}`);
}

/**
 * One query naming every object of `references`, a list of `{ model, objectId }`: an
 * aliased `node` field per reference, each with the projection its type registered. The
 * references of a type that registered no `gqlType` or no projection are left out.
 *
 * Returns `{ query, aliases }`, `aliases` mapping each alias back to its reference key,
 * or null when there is nothing to resolve.
 */
export function formatBusinessObjectsQuery(references, modulesManager) {
  const fields = [];
  const aliases = {};
  const seen = new Set();
  ensureArrayOfReferences(references).forEach(({ model, objectId }, index) => {
    const key = businessObjectReferenceKey(model, objectId);
    if (seen.has(key)) return;
    const definition = getBusinessObject(model, modulesManager);
    const projection = getBusinessObjectProjection(model, modulesManager);
    const nodeId = businessObjectNodeId(definition?.gqlType, objectId);
    if (!nodeId || !projection) return;
    seen.add(key);
    const alias = `businessObject${index}`;
    aliases[alias] = key;
    fields.push(`${alias}: node(id: "${nodeId}") { ... on ${definition.gqlType} ${projection} }`);
  });
  if (!fields.length) return null;
  return { query: `query BusinessObjects {\n  ${fields.join("\n  ")}\n}`, aliases };
}

/** The objects of a `formatBusinessObjectsQuery` result, keyed by reference. */
export function parseBusinessObjectsResult(data, aliases) {
  const objects = {};
  if (!data || !aliases) return objects;
  Object.entries(aliases).forEach(([alias, key]) => {
    if (data[alias]) objects[key] = data[alias];
  });
  return objects;
}

function ensureArrayOfReferences(references) {
  if (!Array.isArray(references)) return [];
  return references.filter(
    (reference) => reference?.model && reference.objectId !== undefined && reference.objectId !== null && reference.objectId !== "",
  );
}

/** The identifier of a picked object, as `UserBusinessAccess.object_id` stores it. */
export function businessObjectId(object) {
  if (!object) return null;
  return object.id ? decodeId(object.id) : object.uuid ?? null;
}

// The types core's own UBA link types are declared on. The location module publishes both
// pickers, and a village is a location: the level belongs to the credential rather than to
// the type, so a caller demanding another level overrides it through `pickerProps`.
registerBusinessObject("location.healthfacility", {
  labelKey: "businessObject.location.healthfacility",
  pubRef: "location.HealthFacilityPicker",
  projectionRef: "location.HealthFacilityPicker.projection",
  gqlType: "HealthFacilityGQLType",
});

registerBusinessObject("location.location", {
  labelKey: "businessObject.location.location",
  pubRef: "location.LocationPicker",
  projection: ["id", "uuid", "code", "name", "type"],
  gqlType: "LocationGQLType",
  pickerProps: { locationLevel: 3 },
});
