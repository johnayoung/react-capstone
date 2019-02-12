import React from 'react'

// type can be: text, password, submit, reset, radio, checkbox, button, 
// type can be: color, date, datetime-local, email, month, number, range, search, tel, time, url, week

const RenderField = ({ options, input, label, type, meta: { touched, error } }) => {
    return (type === 'text' || type === 'email' || type === 'number' || type === 'checkbox') ?
    (
        <div>
          <label className='label-input'>{label}</label>
          <div>
            <input {...input} type={type} placeholder={label} className='field-input' />
            {touched && error && <span>{error}</span>}
          </div>
        </div>
    ) : (type === 'select') ?
    (
        <div>
          <label className='label-input'>{label}</label>
          <div>
            <select {...input} type={type} placeholder={label}>
                {options.map((option, index) => {
                    return <option key={index} value={option}>{option}</option>
                })}
            </select>
            {touched && error && <span>{error}</span>}
          </div>
        </div>
    )
    : <div>Not a correct type</div>
}

export default RenderField;