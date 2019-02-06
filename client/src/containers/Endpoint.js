import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Field, reduxForm, focus, formValueSelector, SubmissionError, getFormValues, getFormInitialValues} from 'redux-form';
import Input from '../components/Input';
import Code from '../components/Code';
import { fetchEndpoints, setCurrentEndpoint, setCurrentEndpointSuccess } from '../actions/endpoints';
import {required, nonEmpty} from '../validators';
import hljs from 'highlight.js/lib/highlight';
import 'highlight.js/styles/github.css';
import javascript from 'highlight.js/lib/languages/javascript';
import { query } from 'express-validator/check';
import axios from 'axios';
hljs.registerLanguage('javascript', javascript);

class Endpoint extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fetchedEndpoint: ''
        }
    }
    componentDidMount() {
        const filteredEndpoint = this.props.endpoints.find(endpoint => {
            return endpoint.name === this.props.match.params.cardName
        });
        console.log(filteredEndpoint);
        return this.props.dispatch(setCurrentEndpointSuccess(filteredEndpoint));
    }

    onSubmit(values) {
        const {
            name, 
            description, 
            fullUrl, 
            queryObj
        } = this.props.currentEndpoint;
        const config = {
            method: 'get',
            url: `${fullUrl}`,
            headers: {
                'Content-Type': 'application/json'
            }
        }
        return axios(config)
            .then(response => {
                const jsonDisplay = response.data;
                return this.setState({fetchedEndpoint: jsonDisplay})
            })
            .catch(err => {
                const {code} = err;
                const message = 
                    code === 401
                    ? 'Something went wrong'
                    : 'Unable to fetch, please try again';
                return new SubmissionError({
                    _error: message
                })
            })
    }

    content() {
        if (this.props.loadingCurrent) {
            return <div>Loading...</div>
        } else {
            const {
                name, 
                description, 
                fullUrl, 
                queryObj
            } = this.props.currentEndpoint;

            const fields = (!queryObj) ? <div>No params, push send to get data.</div>
            : Object.keys(queryObj).map((key, index) => {
                return (
                    <div className='parameter'>                    
                        <label htmlFor={key}>{key}</label>
                        <Field
                            component='input'
                            type="text"
                            name={key}
                            id={key}
                            // validate={[required, nonEmpty]}
                        />
                    </div>
                )
            })
            const code = this.state.fetchedEndpoint;
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
                    <p>Fetched url will be {this.props.typesValue}</p>
                    <pre><code>{JSON.stringify(code)}</code></pre>
                </div>
            )
        }
    }


  render() {
    return (
      <div className='container'>
        {this.content()}
        {console.log(this.props.initialValues)}
      </div>
    )
  }
}

const selector = formValueSelector('endpoint');

function mapStateToProps(state, props) {
    const typesValue = selector(state, 'types');
    return {
        values: getFormValues('endpoint')(state),
        initialValues: getFormInitialValues('myForm')(state),
        typesValue,
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