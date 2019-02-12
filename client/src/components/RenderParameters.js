import React from 'react'
import store from '../store';
import { formValueSelector, getFormValues, getFormMeta } from 'redux-form'
import Parameter from './Parameter';
import { connect } from 'react-redux';

const RenderParameters = (props) => {
  const { fields, meta: { error } } = props;
  console.log(fields);
  return (
    <ul className='list-reset'>
      <li className='pb-4'>
        <button className='btn' type="button" onClick={() => fields.push()}>
          Add Parameter
        </button>
      </li>
      {fields.map((parameter, index, fields) => {
        return (
          <Parameter 
            parameter={parameter}
            index={index}
            fields={fields}
          />
        )
      })}
      {error && <li className="error">{error}</li>}
    </ul>
    ) 
}

const selector = formValueSelector('fieldArrays')

function mapStateToProps(state) {
  const parameterType = selector(state, 'parameterType');
  return {
    parameterType,
    values: getFormValues('fieldArrays')(state),
  }
}

export default connect(mapStateToProps)(RenderParameters)