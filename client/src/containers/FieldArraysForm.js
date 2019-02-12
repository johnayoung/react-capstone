import React from 'react'
import { Field, FieldArray, reduxForm, formValueSelector } from 'redux-form'
import {withRouter} from 'react-router-dom';
import { postEndpoint } from '../actions/endpoints';

// Validation
import validate from './validate'

// Components used in form
import RenderField from '../components/RenderField'
import RenderEndpoints from '../components/RenderEndpoints'

const FieldArraysForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <div className='container addEndpoints bg-white p-2'>
      <div className='mb-6 max-w-lg mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12 xl:w-3/4'>
        <h1 className='mb-4'>Add an endpoint</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <Field
          name="collectionName"
          type="text"
          component={RenderField}
          label="Collection Name"
        />
        <FieldArray name="endpoints" component={RenderEndpoints} />
        <div>
          <button className='btn btn-green' type="submit" disabled={submitting}>
            Submit
          </button>
          {/* <button type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Values
          </button> */}
        </div>
      </form>
    </div>
  )
}

// For testing purposes, we fill out the form with initial values
const initialValues = {
  collectionName: 'IEX',
  endpoints: [
    {
      fullUrl: 'https://api.iextrading.com/1.0/stock/aapl/financials', 
      name: 'Financials',
      parameters: [
        {name: 'period', value: 'annual', type: 'textarea', required: false}
      ]
    },
    {
      fullUrl: 'https://api.iextrading.com/1.0/stock/aapl/chart/5y?chartReset=true&chartSimplify=true&chartInterval=2&changeFromClose=true&chartLast=100', 
      name: 'Chart',
      parameters: [
        {name: 'chartReset', value: 'true', required: 'Yes'},
        {name: 'chartSimplify', value: 'true', required: 'Yes'},
        {name: 'chartInterval', value: 2, required: 'Yes'},
        {name: 'changeFromClose', value: true, required: 'Yes'},
        {name: 'chartLast', value: '100', required: 'Yes'}
      ]
    }
  ]
}

export default withRouter(reduxForm({
  form: 'fieldArrays', // a unique identifier for this form
  onSubmit: (values, dispatch) => dispatch(postEndpoint(values)),
  // onSubmit: (values, dispatch) => console.log(values),
  initialValues: initialValues,
  enableReinitialize : true,
  validate
})(FieldArraysForm))