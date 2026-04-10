import React from 'react';

const ICON_MAP = {
  // Exceptions: only add if toIconName doesn't work, e.g., 'SetHead': 'person_pin'
};

const toIconName = (input) => {
  let name = input.replace(/Icon$/, ''); // Strip 'Icon' suffix if present
  // Convert PascalCase to snake_case: split on capitals
  const parts = name.match(/[A-Z][a-z]*/g) || [name];
  const snake = parts.map(p => p.toLowerCase()).join('_');
  return ICON_MAP[name] || snake;
};

const MaterialIconSpan = ({ name, className = 'material-icons', style = {}, ...props }) => (
  <span className={className} style={{ fontSize: 'inherit', verticalAlign: 'middle', ...style }} {...props}>
    {name}
  </span>
);

const GetIconComponent = (inputName) => {
  const iconName = toIconName(inputName);
  return (props) => <MaterialIconSpan name={iconName} {...props} />;
};

export default GetIconComponent;
