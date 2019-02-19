import React from 'react';

function Toggle(props) {
  const { name, label, onToggle } = props;
  return (
    <div className="mb-2">
      <div className="form-switch inline-block align-middle">
        <input
          type="checkbox"
          name={name}
          id={name}
          className="form-switch-checkbox"
          onChange={onToggle}
        />
        <label className="form-switch-label" htmlFor={name} />
      </div>
      <label className="text-xs text-grey-dark" htmlFor={name}>
        {label}
      </label>
    </div>
  );
}

export default Toggle;
