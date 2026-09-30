import React from "react";

import PublishedComponent from "./PublishedComponent";
import TextInput from "../inputs/TextInput";
import { useModulesManager } from "../../helpers/modules";
import { useBusinessObject } from "../../helpers/hooks";
import { useTranslations } from "../../helpers/i18n";
import {
  businessObjectId,
  formatBusinessObjectLabel,
  getBusinessObject,
} from "../../helpers/business-objects";

/**
 * Picks one business object of `model`, a Django `<app_label>.<model>` label, through
 * whichever picker the owning module registered for that type - see
 * `helpers/business-objects.js`. A generic screen naming objects by their content type
 * therefore needs no knowledge of them.
 *
 * `value` is the object when the caller holds it, `objectId` its identifier alone, which
 * is all a stored link carries: `resolve` then reads the object back through the registry
 * (see `useBusinessObject`), so the same object is named the same way everywhere. A
 * screen holding several references should rather resolve them in one batch with
 * `useBusinessObjects` and pass `value`. `onChange(object, objectId)` gives both back.
 *
 * A type nobody registered falls back to entering the identifier, so a link on it stays
 * usable before its module publishes a picker.
 */
const BusinessObjectPicker = (props) => {
  const {
    model,
    value = null,
    objectId = null,
    onChange,
    readOnly = false,
    required = false,
    withLabel = false,
    label,
    pickerProps,
    resolve = false,
    ...others
  } = props;
  const modulesManager = useModulesManager();
  const { formatMessage } = useTranslations("core", modulesManager);

  const definition = getBusinessObject(model, modulesManager);
  const typeLabel = definition?.labelKey ? formatMessage(definition.labelKey) : model;
  const { object: resolvedObject } = useBusinessObject(
    resolve && !value ? model : null,
    resolve && !value ? objectId : null,
  );
  const object = value ?? resolvedObject;

  // nothing to pick from yet, or nothing to pick with: name what the link points at
  if (readOnly || !definition?.pubRef) {
    const asText = formatBusinessObjectLabel(object, objectId, typeLabel);
    if (readOnly) {
      return (
        <TextInput
          module="core"
          {...(withLabel ? { label: label ?? "businessObject.label" } : null)}
          readOnly
          value={asText}
        />
      );
    }
    return (
      <TextInput
        module="core"
        {...(withLabel ? { label: label ?? "businessObject.objectId" } : null)}
        required={required}
        value={objectId ?? ""}
        placeholder={formatMessage("businessObject.objectId.placeholder")}
        onChange={(id) => onChange(null, id)}
      />
    );
  }

  return (
    <PublishedComponent
      pubRef={definition.pubRef}
      module="core"
      value={object}
      required={required}
      readOnly={readOnly}
      withLabel={withLabel}
      {...(withLabel && label ? { label } : null)}
      {...definition.pickerProps}
      {...pickerProps}
      {...others}
      onChange={(object) => onChange(object, businessObjectId(object))}
    />
  );
};

export default BusinessObjectPicker;
