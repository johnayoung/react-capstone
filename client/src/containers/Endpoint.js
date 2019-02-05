import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Field, reduxForm, focus} from 'redux-form';
import Input from '../components/Input';
import Code from '../components/Code';
import { fetchEndpoints, setCurrentEndpoint, setCurrentEndpointSuccess } from '../actions/endpoints';
import {required, nonEmpty} from '../validators';
import hljs from 'highlight.js/lib/highlight';
import 'highlight.js/styles/github.css';
import javascript from 'highlight.js/lib/languages/javascript';
import { query } from 'express-validator/check';
hljs.registerLanguage('javascript', javascript);

class Endpoint extends Component {
    componentDidMount() {
        const filteredEndpoint = this.props.endpoints.find(endpoint => {
            return endpoint.name === this.props.match.params.cardName
        });
        console.log(filteredEndpoint);
        return this.props.dispatch(setCurrentEndpointSuccess(filteredEndpoint));
    }

    onSubmit(values) {
        console.log(`Values are ${JSON.stringify(values)}`);
    }

    content() {
        if (this.props.loadingCurrent) {
            return <div>Loading...</div>
        } else {
            const {name, description, fullUrl, queryObj} = this.props.currentEndpoint;
            const fields = (!queryObj) ? <div>No params, push send to get data.</div>
            : Object.keys(queryObj).map((key, index) => {
                return (
                    <div className='parameter'>                    
                        <label htmlFor={key}>{key}</label>
                        <Field
                            component={Input}
                            type="text"
                            name={key}
                            id={key}
                            // validate={[required, nonEmpty]}
                        />
                    </div>
                )
            })
            return (
                <div className='endpoint'>            
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <p className='fullUrl'>{fullUrl}</p>
                    <form
                        className="endpoint-form"
                        onSubmit={this.props.handleSubmit(values =>
                            this.onSubmit(values)
                        )}
                    >
                        {fields}
                        <button>
                            Send
                        </button>
                    </form>
                    <Code 
                        className='json'
                        obj='test'
                    >
                    </Code>
                </div>
            )
        }
    }


  render() {
    return (
      <div className='container'>
        {this.content()}
      </div>
    )
  }
}

function mapStateToProps(state, props) {
    return {
        endpoints: state.endpoints.endpoints,
        loading: state.endpoints.loading,
        loadingCurrent: state.endpoints.loadingCurrent,
        currentEndpoint: state.endpoints.currentEndpoint
    }
}

Endpoint = connect(mapStateToProps)(Endpoint);

export default reduxForm({
    form: 'endpoint',
    onSubmitFail: (errors, dispatch) => dispatch(focus('parameter1', 'parameter2'))
})(Endpoint);