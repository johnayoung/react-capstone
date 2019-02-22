import React from 'react';
import { connect } from 'react-redux';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import { postEndpoint } from '../actions/endpoints';

// Validation
import validate from './validate';

// Components used in form
import RenderField from '../components/RenderField';
import RenderEndpoints from '../components/RenderEndpoints';
import SubmittedUrls from '../components/SubmittedUrls';

const FieldArraysForm = props => {
  const { handleSubmit, submitting, pristine } = props;
  return (
    <div className="container max-w-lg mx-auto p-6 addEndpoints">
      <div className="mb-6 max-w-lg mx-auto ">
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
            <button className="btn btn-green" type="submit" disabled={pristine || submitting}>
              Submit
            </button>
            {!props.newUrls ? '' : <SubmittedUrls newUrls={props.newUrls} />}
            {/* <button type="button" disabled={pristine || submitting} onClick={reset}>
              Clear Values
            </button> */}
          </div>
        </form>
      </div>
    </div>
  );
};

// For testing purposes, we can input initial values to the form
// const initialValues = {
//   collectionName: 'Game of Thrones',
//   endpoints: [
//     {
//       name: 'Game of Thrones Characters',
//       baseUrl: 'https://www.anapioficeandfire.com/api/characters/:id?',
//       description: 'A Character is an individual within the Ice And Fire universe.',
//       parameters: [
//         {
//           name: 'id',
//           in: 'path',
//           type: 'number',
//           required: 'false',
//           default: 1,
//           description: 'Get a specific people resource',
//           schema: {
//             enum: ''
//           }
//         },
//         {
//           name: 'name',
//           in: 'query',
//           type: 'string',
//           required: 'false',
//           default: '',
//           description: 'Characters with the given name are included in the response.',
//           schema: {
//             enum: ''
//           }
//         },
//         {
//           name: 'gender',
//           in: 'query',
//           type: 'string',
//           required: 'false',
//           default: '',
//           description: 'Characters with the given gender are included in the response.',
//           schema: {
//             enum: ''
//           }
//         }
//       ]
//     }
//   ]
// };

const connectedForm = withRouter(
  reduxForm({
    form: 'fieldArrays', // a unique identifier for this form
    onSubmit: (values, dispatch) => dispatch(postEndpoint(values)),
    // onSubmit: (values, dispatch) => console.log(values),
    // initialValues,
    validate
  })(FieldArraysForm)
);

export default connect(state => {
  return {
    newUrls: state.endpoints.newUrls
  };
})(connectedForm);
