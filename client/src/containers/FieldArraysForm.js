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
    <div className='container addEndpoints'>
      <h2>Add an endpoint</h2>
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
// const initialValues = {
//   collectionName: 'IEX',
//   endpoints: [
//     {
//       fullUrl: 'https://api.iextrading.com/1.0/stock/aapl/financials', 
//       name: 'Financials',
//       parameters: [
//         {name: 'period', value: 'annual', type: 'textarea', required: false}
//       ]
//     },
//     {
//       fullUrl: 'https://api.iextrading.com/1.0/stock/aapl/chart/5y?chartReset=true&chartSimplify=true&chartInterval=2&changeFromClose=true&chartLast=100', 
//       name: 'Chart',
//       parameters: [
//         {name: 'chartReset', value: 'true', type: 'text', required: false},
//         {name: 'chartSimplify', value: 'true', type: 'text', required: false},
//         {name: 'chartInterval', value: 2, type: 'text', required: false},
//         {name: 'changeFromClose', value: true, type: 'list', required: false},
//         {name: 'chartLast', value: '100', type: 'text', required: false}
//       ]
//     }
//   ]
// }

export default withRouter(reduxForm({
  form: 'fieldArrays', // a unique identifier for this form
  // onSubmit: (values, dispatch) => dispatch(postEndpoint(values)),
  onSubmit: (values, dispatch) => console.log(values),
  // initialValues: initialValues,
  enableReinitialize : true,
  validate
})(FieldArraysForm))

// FieldArraysForm = reduxForm({
//   form: 'fieldArrays',
//   onSubmit: (values, dispatch) => console.log(values),
//   onChange: (values, dispatch) => console.log(values),
//   initialValues,
//   enableReinitialize: true,
//   validate
// })(FieldArraysForm)

// const selector = formValueSelector('fieldArrays');

// const mapStateToProps = (state) => {
//   const 
// }