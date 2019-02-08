import React from 'react'

// type can be: text, password, submit, reset, radio, checkbox, button, 
// type can be: color, date, datetime-local, email, month, number, range, search, tel, time, url, week

const RenderField = ({ options, input, label, type, meta: { touched, error } }) => {
    let selector;
    if (!select) {
        selector = (
            <div>
                <input {...input} type={type} placeholder={label}/>
                {touched && error && <span>{error}</span>}
            </div>
        )
    } else {
        selector = (
            <div>
                <select {...input} type={type} placeholder={label}>
                    {options.map((option, index) => {
                        return <option key={index} value={option}>{option}</option>
                    })}
                </select>
                {touched && error && <span>{error}</span>}
            </div>
        )
    }
    return (
        <div>
          <label>{label}</label>
            {selector}
        </div>
    )
}

export default RenderField;