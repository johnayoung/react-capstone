import React from 'react';
import { formValueSelector, getFormValues } from 'redux-form';
import { connect } from 'react-redux';
import Parameter from './Parameter';

const RenderParameters = props => {
  const {
    fields,
    meta: { error },
    values
  } = props;
  return (
    <fieldset className="mt-6">
      <legend className="label-input">Query Params</legend>
      <ul className="list-reset">
        <li key="query-params-button" className="pb-4">
          <button
            className="text-grey-darkest font-bold py-2 px-4 inline-flex mb-4"
            type="button"
            onClick={() => fields.push({})}
          >
            <svg
              className="icon-add fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                className="secondary"
                fillRule="evenodd"
                d="M17 11a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4h4z"
              />
            </svg>
            Add query param
          </button>
        </li>
        {fields.map((parameter, index) => {
          return (
            <Parameter
              parameter={parameter}
              index={index}
              fields={fields}
              formValues={values}
              key={index}
            />
          );
        })}
        {error && <li className="error">{error}</li>}
      </ul>
    </fieldset>
  );
};

const selector = formValueSelector('fieldArrays');

function mapStateToProps(state) {
  const parameterType = selector(state, 'parameterType');
  return {
    parameterType,
    values: getFormValues('fieldArrays')(state)
  };
}

export default connect(mapStateToProps)(RenderParameters);
