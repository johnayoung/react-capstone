import React from 'react'
import store from '../store';
import { Field, formValueSelector } from 'redux-form'
import RenderField from '../components/RenderField'
import { connect } from 'react-redux';

const RenderParameters = (props) => {
  const { fields, meta: { error } } = props;
  console.log(props)
  return (
    <ul>
      <li>
          <Field
            name='parameterType'
            type="text"
            component='select'
          >
            <option></option>
            <option>input</option>
            <option>list</option>
          </Field>
        <button type="button" onClick={() => fields.push()}>
          Add Parameter
        </button>
      </li>
      {fields.map((parameter, index, fields) => {
        
        return (
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
              name={`${parameter}.type`}
              type="text"
              component={RenderField}
              label={`Parameter #${index + 1}: Type`}
              props={{options: ['', 'input', 'list']}}
            />
            <Field
              name={`${parameter}.value`}
              type="text"
              component={RenderField}
              label={`Parameter #${index + 1}: Initial Value`}
            />
            <Field
              name={`${parameter}.required`}
              type="select"
              component={RenderField}
              label={`Parameter #${index + 1}: Required`}
              props={{options: ['Yes', 'No']}}
            />
          </li>
        )})}
        {error && <li className="error">{error}</li>}
      </ul>
    ) 
}

const selector = formValueSelector('fieldArrays')

function mapStateToProps(state) {
  const parameterType = selector(state, 'parameterType');
  return {
    parameterType
  }
}

export default connect(mapStateToProps)(RenderParameters)