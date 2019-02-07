import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import RenderField from '../components/RenderField'
import { required } from '../validators';

class Endpoint extends Component {
  render() {
      let displayedEndpoint;
      const {username, endpointName} = this.props.match.params;
      if (this.props.endpoints) {
          const allEndpoints = this.props.endpoints;
          const currentEndpoint = allEndpoints.find(endpoint => {
            return (endpoint.name === endpointName && endpoint.userId.username === username)
          })
          console.log(currentEndpoint);
          const {name, description, parameters} = currentEndpoint;
          displayedEndpoint = (
              <div className='container'>              
                <h4>{name}</h4>
                <p>{description}</p>
                <ul>
                    {parameters.map((param, index) => (
                        <Field
                            name={`${param}.name`}
                            type={param.type}
                            component={RenderField}
                            label={`${param.name} (${param.required ? 'required' : 'optional'})`}
                        />
                    ))}
                </ul>
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

const mapStateToProps = (state) => {
    return {
        endpoints: state.endpoints.endpoints
    }
}

Endpoint = connect(mapStateToProps)(Endpoint);
export default reduxForm({
    form: 'endpointSubmit', // a unique identifier for this form
    // onSubmit: (values, dispatch) => dispatch(postEndpoint(values)),
    onSubmit: (values, dispatch) => console.log(values),
    // initialValues: initialValues,
  })(Endpoint)