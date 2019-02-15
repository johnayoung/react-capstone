import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm, getFormValues } from "redux-form";
import RenderField from "../components/RenderField";
import Code from "../components/Code";
import { setCurrentEndpointSuccess, userEndpoint } from "../actions/endpoints";
import urlBuilder from "../utils/urlBuilder";

class Endpoint extends Component {
  componentDidMount() {
    const obj = this.props.endpoints.find(endpoint => {
      return (
        endpoint.name === this.props.match.params.endpointName &&
        endpoint.userId.username === this.props.match.params.username
      );
    });
    this.props.dispatch(setCurrentEndpointSuccess(obj));
  }
  render() {
    let displayedEndpoint;
    let submittedUrl;
    let baseUrl;
    if (this.props.currentEndpoint) {
      const {
        name,
        description,
        parameters,
        protocol,
        sub,
        domain,
        path
      } = this.props.currentEndpoint;
      const { formValues } = this.props;
      if (formValues) {
        submittedUrl = urlBuilder(formValues);
      }
      const cleanedSub = !sub ? "" : `${sub}.`;
      baseUrl = `${protocol}://${cleanedSub}${domain}`;
      displayedEndpoint = (
        <div className="container pt-12 pb-8 lg:pt-28 w-full">
          <div className="mb-6 max-w-lg mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12 xl:w-3/4">
            <h1 className="mb-4">{name}</h1>
            <p className="mb-4 text-xl text-grey-dark">{description}</p>
          </div>
          <form
            className="xl:px-12 w-full max-w-lg mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:w-3/4"
            onSubmit={this.props.handleSubmit}
          >
            <label className="block text-grey-darker text-sm font-bold mb-2">
              Base Url
            </label>
            <p className="mb-4">{baseUrl}</p>
            <label className="block text-grey-darker text-sm font-bold mb-2">
              Path
            </label>
            <p className="mb-4">{path}</p>
            <ul className="list-reset mb-4">
              {parameters.map((param, index) => (
                <div key={index} className="mb-4">
                  <Field
                    name={param.name}
                    type={param.type === "list" ? "select" : "text"}
                    component={RenderField}
                    label={`${param.name} (${
                      param.required ? "required" : "optional"
                    })`}
                    options={param.type === "list" ? [param.value] : ""}
                  />
                </div>
              ))}
            </ul>
            <div className="submittedUrl mb-4">
              <label className="block text-grey-darker text-sm font-bold mb-2">
                Submitted URL will be:
              </label>
              <p>{submittedUrl}</p>
            </div>
            <div>
              <button className="btn btn-green" type="submit">
                Submit
              </button>
            </div>
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
            <Code />
          </div>
        </div>
      </div>
    );
  }
}

const connectedForm = reduxForm({
  form: "endpointSubmit", // a unique identifier for this form
  // onSubmit: (values, dispatch) => dispatch(postEndpoint(values)),
  onSubmit: (values, dispatch) => {
    console.log(values);
    const builder = urlBuilder(values);
    return dispatch(userEndpoint(builder));
  },
  enableReinitialize: true
})(Endpoint);

export default connect(state => {
  let initialValues = {};
  const { currentEndpoint, currentEndpointParams } = state.endpoints;
  if (currentEndpointParams) {
    const {
      name,
      description,
      sub,
      domain,
      path,
      query,
      protocol
    } = currentEndpoint;
    initialValues = currentEndpointParams.reduce((obj, param) => {
      obj[param.name] = param.value;
      return obj;
    }, {});
    initialValues = Object.assign({}, initialValues, {
      name,
      description,
      sub,
      domain,
      path,
      query,
      protocol
    });
  }
  return {
    endpoints: state.endpoints.endpoints,
    currentEndpoint: state.endpoints.currentEndpoint,
    currentEndpointParams: state.endpoints.currentEndpointParams,
    initialValues,
    formValues: getFormValues("endpointSubmit")(state)
  };
})(connectedForm);
