import React from 'react'
import { Field, FieldArray } from 'redux-form'
import RenderField from '../components/RenderField'
import RenderParameters from '../components/RenderParameters'

const RenderEndpoints = ({ fields, meta: { error, submitFailed } }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push({})}>
        Add Endpoint
      </button>
      {submitFailed && error && <span>{error}</span>}
    </li>
    {fields.map((endpoint, index) => (
      <li key={index}>
        <button
          type="button"
          title="Remove Endpoint"
          onClick={() => fields.remove(index)}
        />
        <h4>Endpoint #{index + 1}</h4>
        <Field
          name={`${endpoint}.name`}
          type="text"
          component={RenderField}
          label="Name"
        />
        <Field
          name={`${endpoint}.fullUrl`}
          type='text'
          component={RenderField}
          label="Full Url"
        />
        <FieldArray name={`${endpoint}.parameters`} component={RenderParameters} />
      </li>
    ))}
  </ul>
)

export default RenderEndpoints;