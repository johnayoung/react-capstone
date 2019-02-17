import React from 'react';
import FieldError from './FieldError';

// type can be: text, password, submit, reset, radio, checkbox, button,
// type can be: color, date, datetime-local, email, month, number, range, search, tel, time, url, week

const RenderField = props => {
  const {
    options,
    input,
    label,
    type,
    meta: { touched, error },
    placeholder,
    select,
    autocomplete
  } = props;
  let selector;
  if (!select) {
    selector = (
      <>
        <input
          {...input}
          className="field-input"
          type={type}
          aria-label={label}
          aria-required="true"
          placeholder={placeholder || label}
          autoComplete={autocomplete}
        />
        {touched && error && (
          <div className="mb-4 mt-2">
            <FieldError error={error} />
          </div>
        )}
      </>
    );
  } else {
    selector = (
      <>
        <select
          {...input}
          className="field-input"
          type={type}
          aria-label={label}
          aria-required="true"
          placeholder={label}
        >
          {options.map((option, index) => {
            return (
              <option key={index} value={option}>
                {option}
              </option>
            );
          })}
        </select>
        {touched && error && (
          <div className="mb-4 mt-4">
            <FieldError error={error} />
          </div>
        )}
      </>
    );
  }
  return (
    <div>
      <label className="label-input">{label}</label>
      {selector}
    </div>
  );
};

export default RenderField;
