import React from 'react'

const RenderField = ({ input, label, type, meta: { touched, error } }) => {
    return (
        <div>
          <label>{label}</label>
          <div>
            <input {...input} type={type} placeholder={label}/>
            {touched && error && <span>{error}</span>}
          </div>
        </div>
    )
}

export default RenderField;