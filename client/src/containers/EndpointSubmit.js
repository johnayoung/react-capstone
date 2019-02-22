import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, getFormValues } from 'redux-form';
import RenderField from '../components/RenderField';
import Error from '../components/Error';
import Code from '../components/Code';
import { setCurrentEndpointSuccess, userEndpoint, setFormValues } from '../actions/endpoints';
import urlBuilder from '../utils/urlBuilder';
import formBuilder from '../utils/formBuilder';

class EndpointSubmit extends Component {
  componentDidMount() {
    const { endpoints } = this.props;
    const { endpointName, username } = this.props.match.params;
    const obj = endpoints.find(endpoint => {
      return endpoint.name === endpointName && endpoint.userId.username === username;
    });
    this.props.setCurrentEndpointSuccess(obj);
    this.props.setFormValues(obj);
  }

  render() {
    let displayedEndpoint;
    let submittedUrl;
    const { currentEndpoint, handleSubmit, handleSearchSubmit, pristine, submitError } = this.props;
    if (currentEndpoint) {
      const { name, prettyName, description, parameters, baseUrl, path } = currentEndpoint;
      const { formValues } = this.props;
      submittedUrl = urlBuilder({ baseUrl, path, parameters });
      if (!pristine) {
        submittedUrl = urlBuilder(formBuilder(formValues));
      }
      displayedEndpoint = (
        <div className="container pt-12 pb-8 lg:pt-28 w-full">
          <div className="mb-6 max-w-lg mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12 xl:w-3/4">
            <h1 className="mb-4">{prettyName}</h1>
            <p className="mb-4 text-xl text-grey-dark">{description}</p>
          </div>
          <form
            className="xl:px-12 w-full max-w-lg mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:w-3/4"
            onSubmit={handleSubmit(values => handleSearchSubmit(values))}
          >
            <h2 className="label-input">Base Url</h2>
            <p className="mb-4">{baseUrl}</p>
            <h2 className="label-input">Path</h2>
            <p className="mb-4">{path}</p>
            <ul className="list-reset mb-4">
              {parameters.map((param, index) => (
                <div key={index} className="mb-4">
                  <Field
                    name={`${param.in} - ${param.name}`}
                    type={param.type === 'list' ? 'select' : 'text'}
                    component={RenderField}
                    label={`${param.name} (${param.required ? 'required' : 'optional'})`}
                    options={param.type === 'list' ? [param.value] : ''}
                  />
                </div>
              ))}
            </ul>
            <div className="submittedUrl mb-4">
              <h2 className="label-input">Submitted URL will be:</h2>
              <p className="whitespace-normal text-xs">{submittedUrl}</p>
            </div>
            <button className="btn btn-green" type="submit">
              Submit
            </button>
          </form>
        </div>
      );
    } else {
      displayedEndpoint = <div>NO endpoint to display</div>;
    }
    return (
      <div className="px-6 pb-6 bg-white shadow-md rounded m-6">
        <div className="lg:flex">
          <div className="lg:w-1/2">{displayedEndpoint}</div>
          <div className="lg:flex-auto lg:w-2/3">
            {submitError && <Error error={submitError} />}
            <Code />
          </div>
        </div>
      </div>
    );
  }
}

const connectedForm = reduxForm({
  form: 'endpointSubmit' // a unique identifier for this form
})(EndpointSubmit);

const mapStateToProps = state => {
  return {
    endpoints: state.endpoints.endpoints,
    currentEndpoint: state.endpoints.currentEndpoint,
    initialValues: state.endpoints.initialValues,
    formValues: getFormValues('endpointSubmit')(state),
    submitError: state.endpoints.submitError,
    environment: state.environment.environment
  };
};

const mapDispatchToProps = dispatch => {
  return {
    userEndpoint: urlString => dispatch(userEndpoint(urlString)),
    setCurrentEndpointSuccess: endpoint => dispatch(setCurrentEndpointSuccess(endpoint)),
    setFormValues: endpoint => dispatch(setFormValues(endpoint)),
    handleSearchSubmit: values => {
      const builder = urlBuilder(formBuilder(values));
      return dispatch(userEndpoint(builder));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(connectedForm);
