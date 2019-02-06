import React from 'react'

const RenderField = ({ options, input, label, type, meta: { touched, error } }) => {
    return (type === 'text' || type === 'email' || type === 'number' || type === 'checkbox') ?
    (
        <div>
          <label>{label}</label>
          <div>
            <input {...input} type={type} placeholder={label}/>
            {touched && error && <span>{error}</span>}
          </div>
        </div>
    ) : (type === 'select') ?
    (
        <div>
          <label>{label}</label>
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