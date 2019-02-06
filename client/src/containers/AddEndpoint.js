import React from 'react'
import {connect} from 'react-redux';
import { Field, FieldArray, reduxForm, getFormValues, formValueSelector, change, startSubmit } from 'redux-form'
const queryString = require('query-string');

const renderField = ({ input, label, type, meta: { touched, error } }) => {
    return (
        <div>
          <label>{label}</label>
          <div>
            <input {...input} type={type}/>
            {touched && error && <span>{error}</span>}
          </div>
        </div>
    )
}


// const renderSubParam = (parameter, index, fields) => {
//     return (
//         <li key={index}>
//         <button
//             type='button'
//             title='Remove Parameter'
//             onClick={() => fields.remove(index)}
//             style={{backgroundColor: 'red'}} />
//         <Field
//             name={`dynamic-${parameter}`}
//             type='text'
//             component={renderField}
//             label={`${parameter}`} />
//         </li>
//     )
// }

const renderUrl = ({fields, submitting, hasUrlValue}) => {
    const {url, query} = (!hasUrlValue) ? '' : queryString.parseUrl(hasUrlValue);
    const values = {
        url,
        ...query
    }
    const keys = Object.keys(values);
    console.log(Object.keys(values));
    return (
        <div className='container'>
            <button 
                type='button' 
                disabled={submitting}
                onClick={() => {
                    return Object.keys(values).map(value => fields.push(value))
                    }}>Fill</button>
            <ul>
                {fields.map((parameter, index) => (
                    <li key={index}>
                    <button
                        type='button'
                        title='Remove Parameter'
                        onClick={() => fields.remove(index)}
                        style={{backgroundColor: 'red'}} />
                    <Field
                        name={`dynamic-${parameter}`}
                        type='text'
                        component={renderField}
                        label={`${parameter}. ${keys[index]}`} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

let FieldArraysForm = (props) => {
    const {handleSubmit, submitting, hasUrlValue, fields} = props;
    // const successMessage = (!hasUrlValue) ? <div>loading</div> : renderUrl(hasUrlValue);
    // const successMessage = renderUrl(hasUrlValue);
    return (
        <form onSubmit={handleSubmit(data => console.log(data))}>
            <h2>Add an endpoint</h2>
            <Field
                name='url'
                type='text'
                component={renderField}
                label={`Enter a URL`}
                onChange={console.log(props)} />
            {/* {successMessage} */}
            <FieldArray name="parameters" component={renderUrl} props={{hasUrlValue}}/>
            <button
                type='submit'
                disabled={submitting}
                >Save Endpoint</button>
        </form>
    )
}

const selector = formValueSelector('addEndpoint');

function mapStateToProps(state) {
    const hasUrlValue = selector(state, 'url')
    return {
        // urlValue: values.url,
        values: getFormValues('addEndpoint')(state),
        hasUrlValue
    }
}

function mapDispatchToProps(dispatch, state) {
    return {
        change: function() {
            dispatch(change());
        },
        startSubmit: function() {
            dispatch(startSubmit());
        },
    }
}

FieldArraysForm = connect(mapStateToProps, mapDispatchToProps)(FieldArraysForm)

export default reduxForm({
    form: 'addEndpoint',
})(FieldArraysForm)