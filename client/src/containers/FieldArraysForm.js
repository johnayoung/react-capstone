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

const initialValues = {
  collectionName: 'IEX',
  endpoints: [
    {
      fullUrl: 'https://api.iextrading.com/1.0/stock/aapl/financials', 
      name: 'Financials',
      parameters: [
        {name: 'period', value: 'annual'}
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