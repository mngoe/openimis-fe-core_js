import React from 'react';

const ICON_MAP = {
  // Exceptions: only add if toIconName doesn't work, e.g., 'SetHead': 'person_pin'
};

const toIconName = (input) => {
  let name = input.replace(/Icon$/, ''); // Strip 'Icon' suffix if present
  name = name.replace(/Outlined$/, ''); // Strip 'Icon' suffix if present
  // Convert PascalCase to snake_case: split on capitals
  const parts = name.match(/[A-Z][a-z0-9]*/g) || [name];
  const snake = parts.map(p => p.toLowerCase()).join('_');
  return ICON_MAP[name] || snake;
};

const MaterialSymbolsSpan = ({ name, className = 'material-symbols-outlined', style = {}, ...props }) => (
  <span className={className} style={{ fontSize: 'inherit', verticalAlign: 'middle', ...style }} {...props}>
    {name}
  </span>
);


const GetIconComponent = (inputName) => {
  // === Handle null, undefined, or empty values ===
  if (inputName == null || (typeof inputName === 'string' && !inputName.trim())) {
    console.warn('GetIconComponent: Received empty/null input → falling back to Add icon');

    return (props) => <MaterialSymbolsSpan name="add" {...props} />
  }

  // === Already a component ===
  if ( React.isValidElement(inputName)) {
    console.log(`GetIconComponent: Received component → ${inputName.displayName || inputName.name || 'Unknown'}`);
    return inputName;   // return as-is (best for performance)
  }

  // === String case ===
  if (typeof inputName === 'string') {
    const iconName = toIconName(inputName);


    return (props) => <MaterialSymbolsSpan name={iconName} {...props} />
  }

  // Safety fallback
  console.warn('GetIconComponent: Unexpected input type', typeof inputName);
  return (props) => <MaterialSymbolsSpan name="add" {...props} />
};

export default GetIconComponent;