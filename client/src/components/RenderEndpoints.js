import React from 'react'
import {connect} from 'react-redux'
import { FieldArray, getFormValues } from 'redux-form'
import RenderParameters from '../components/RenderParameters'
import Endpoint from './Endpoint';

const RenderEndpoints = ({ fields, meta: { error, submitFailed }, values }) => (
  <ul className='list-reset'>
    <li>
      <button 
        className='bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex mb-4'
        type="button" 
        onClick={() => fields.push({})}>
        <svg className='icon-add fill-current w-4 h-4 mr-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="secondary" fill-rule="evenodd" d="M17 11a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4h4z"/></svg>
        Add Endpoint
      </button>
      {submitFailed && error && <span>{error}</span>}
    </li>
    {fields.map((endpoint, index, fields) => (
      <li className='mb-4' key={index}>
        <Endpoint 
          endpoint={endpoint}
          index={index}
          fields={fields}
          formValues={values}
        />
        <FieldArray name={`${endpoint}.parameters`} component={RenderParameters} />
      </li>
    ))}
  </ul>
)

const mapStateToProps = (state) => {
  return {
    values: getFormValues('fieldArrays')(state)
  }
}

export default connect(mapStateToProps)(RenderEndpoints);