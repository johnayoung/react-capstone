import React from 'react'
import { Field } from 'redux-form'
import RenderField from '../components/RenderField'

const RenderParameters = ({ fields, meta: { error } }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push()}>
        Add Parameter
      </button>
    </li>
    {fields.map((parameter, index) => (
      <li key={index}>
        <button
          type="button"
          title="Remove Parameter"
          onClick={() => fields.remove(index)}
        />
        <Field
          name={`${parameter}.name`}
          type="text"
          component={RenderField}
          label={`Parameter #${index + 1}: Name`}
        />
        <Field
          name={`${parameter}.value`}
          type="text"
          component={RenderField}
          label={`Parameter #${index + 1}: Value`}
        />
        <Field
          name={`${parameter}.type`}
          type="select"
          component={RenderField}
          label={`Parameter #${index + 1}: Type`}
          props={{options: ['input', 'list']}}
        />
      </li>
    ))}
    {error && <li className="error">{error}</li>}
  </ul>
)

export default RenderParameters