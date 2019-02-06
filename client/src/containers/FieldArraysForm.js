import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
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
    <div className='container addEndpoints'>
      <h4>Add an endpoint</h4>
      <form onSubmit={handleSubmit}>
        <Field
          name="collectionName"
          type="text"
          component={RenderField}
          label="Collection Name"
        />
        <FieldArray name="endpoints" component={RenderEndpoints} />
        <div>
          <button type="submit" disabled={submitting}>
            Submit
          </button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Values
          </button>
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
        {name: 'period', value: 'annual'}
      ]
    },
    {
      fullUrl: 'https://api.iextrading.com/1.0/stock/aapl/chart/5y?chartReset=true&chartSimplify=true&chartInterval=2&changeFromClose=true&chartLast=100', 
      name: 'Chart',
      parameters: [
        {name: 'chartReset', value: 'true', type: 'input'},
        {name: 'chartSimplify', value: 'true', type: 'input'},
        {name: 'chartInterval', value: 2, type: 'input'},
        {name: 'changeFromClose', value: true, type: 'input'},
        {name: 'chartLast', value: '100', type: 'input'}
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