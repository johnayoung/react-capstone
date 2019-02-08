import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import RenderField from '../components/RenderField'
import Code from '../components/Code';
import { setCurrentEndpointSuccess, userEndpoint } from '../actions/endpoints';
import urlBuilder from '../utils/urlBuilder';

class Endpoint extends Component {
    componentDidMount() {
        const obj = this.props.endpoints.find(endpoint => {
            return (
                endpoint.name === this.props.match.params.endpointName
                && endpoint.userId.username === this.props.match.params.username)
            })
        this.props.dispatch(setCurrentEndpointSuccess(obj))
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
              path,
              query
            } = this.props.currentEndpoint;
            submittedUrl = `${protocol}://${sub}.${domain}${path}${query}`;
            baseUrl = `${protocol}://${sub}.${domain}`
          displayedEndpoint = (
              <div className='container'>              
                <h4>{name}</h4>
                <p>{description}</p>
                <form onSubmit={this.props.handleSubmit}>
                    <label>Base Url</label>
                    <p>{baseUrl}</p>
                    <label>Path</label>
                    <p>{path}</p>
                    <ul>
                        {parameters.map((param, index) => (
                            <Field
                                name={param.name}
                                type={(param.type==='list') ? 'select' : 'text'}
                                component={RenderField}
                                label={`${param.name} (${param.required ? 'required' : 'optional'})`}
                                options={(param.type === 'list' ? [param.value] : '')}
                            />
                        ))}
                    </ul>
                    <div className='submittedUrl'>
                        <p>Submitted URL will be: {submittedUrl}</p>
                    </div>
                    <div>
                    <button type="submit">
                        Submit
                    </button>
                    </div>
                </form>
              </div>
          )
      } else {
          displayedEndpoint = (
              <div>NO endpoint to display</div>
          )
      }
    return (
      <div>
        {displayedEndpoint}
        <Code />
      </div>
    )
  }
}

const connectedForm = reduxForm({
    form: 'endpointSubmit', // a unique identifier for this form
    // onSubmit: (values, dispatch) => dispatch(postEndpoint(values)),
    onSubmit: (values, dispatch) => {
        const builder = urlBuilder(values);
        // console.log(values, builder);
        return dispatch(userEndpoint(builder))
    },
    enableReinitialize: true,
})(Endpoint)

export default connect((state) => {
    let initialValues = {};
    const {currentEndpoint, currentEndpointParams} = state.endpoints;
    if (currentEndpointParams) {
        const {name, description, sub, domain, path, query, protocol} = currentEndpoint;
        initialValues = currentEndpointParams.reduce((obj, param) => {
            obj[param.name] = param.value
            return obj
        }, {})
        initialValues = Object.assign({}, initialValues, {
            name, description, sub, domain, path, query, protocol
        })
    }
    return {
        endpoints: state.endpoints.endpoints,
        currentEndpoint: state.endpoints.currentEndpoint,
        currentEndpointParams: state.endpoints.currentEndpointParams,
        initialValues
    }
})(connectedForm);
