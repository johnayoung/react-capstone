import React from "react";
import { connect } from "react-redux";
import { Field, FieldArray, reduxForm } from "redux-form";
import { withRouter } from "react-router-dom";
import { postEndpoint } from "../actions/endpoints";

// Validation
import validate from "./validate";

// Components used in form
import RenderField from "../components/RenderField";
import RenderEndpoints from "../components/RenderEndpoints";
import SubmittedUrls from "../components/SubmittedUrls";

const FieldArraysForm = props => {
  const { handleSubmit, submitting } = props;
  return (
    <div className="container max-w-lg mx-auto addEndpoints">
      <div className="mb-6 max-w-lg mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12 xl:w-3/4">
        <h1 className="">Add an endpoint</h1>
        <p className="text-xl text-grey-dark mb-4">
          This page will help you to get started adding endpoints to API Hub.
        </p>
      </div>
      <div className="flex">
        <form onSubmit={handleSubmit} className="">
          <Field
            name="collectionName"
            type="text"
            component={RenderField}
            label="Collection Name"
          />
          <FieldArray name="endpoints" component={RenderEndpoints} />
          <div>
            <button
              className="btn btn-green"
              type="submit"
              disabled={submitting}
            >
              Submit
            </button>
            {!props.newUrls ? "" : <SubmittedUrls newUrls={props.newUrls} />}
            {/* <button type="button" disabled={pristine || submitting} onClick={reset}>
              Clear Values
            </button> */}
          </div>
        </form>
      </div>
    </div>
  );
};

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
//         {name: 'chartReset', value: 'true', required: 'Yes'},
//         {name: 'chartSimplify', value: 'true', required: 'Yes'},
//         {name: 'chartInterval', value: 2, required: 'Yes'},
//         {name: 'changeFromClose', value: true, required: 'Yes'},
//         {name: 'chartLast', value: '100', required: 'Yes'}
//       ]
//     }
//   ]
// }

const connectedForm = withRouter(
  reduxForm({
    form: "fieldArrays", // a unique identifier for this form
    onSubmit: (values, dispatch) => dispatch(postEndpoint(values)),
    // onSubmit: (values, dispatch) => console.log(values),
    // initialValues: initialValues,
    enableReinitialize: true,
    validate
  })(FieldArraysForm)
);

export default connect(state => {
  return {
    newUrls: state.endpoints.newUrls
  };
})(connectedForm);
