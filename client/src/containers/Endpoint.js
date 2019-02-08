import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import RenderField from '../components/RenderField'
import { setCurrentEndpointSuccess } from '../actions/endpoints';

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
      if (this.props.currentEndpoint) {
          const {name, description, fullUrl, parameters} = this.props.currentEndpoint;
          displayedEndpoint = (
              <div className='container'>              
                <h4>{name}</h4>
                <p>{description}</p>
                <form onSubmit={this.props.handleSubmit}>
                    <ul>
                        <Field
                            name='fullUrl'
                            type='text'
                            component={RenderField}
                            label={`Full Url`}
                            value={fullUrl}
                        />
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
      </div>
    )
  }
}

const connectedForm = reduxForm({
    form: 'endpointSubmit', // a unique identifier for this form
    // onSubmit: (values, dispatch) => dispatch(postEndpoint(values)),
    onSubmit: (values, dispatch) => console.log(values),
    enableReinitialize: true,
})(Endpoint)

export default connect((state) => {
    let initialValues = {};
    const {currentEndpoint, currentEndpointParams} = state.endpoints;
    if (currentEndpointParams) {
        initialValues = currentEndpointParams.reduce((obj, param) => {
            obj[param.name] = param.value
            return obj
        }, {})
        initialValues = Object.assign({}, initialValues, {
            ...currentEndpoint
        })
    }
    return {
        endpoints: state.endpoints.endpoints,
        currentEndpoint: state.endpoints.currentEndpoint,
        currentEndpointParams: state.endpoints.currentEndpointParams,
        initialValues
    }
})(connectedForm);
