// import React from 'react'
// import {connect} from 'react-redux';
// import { Field, FieldArray, reduxForm, getFormValues, formValueSelector, change, startSubmit } from 'redux-form'
// const queryString = require('query-string');

// const renderField = ({ input, label, type, meta: { touched, error } }) => {
//     return (
//         <div>
//           <label>{label}</label>
//           <div>
//             <input {...input} type={type} placeholder={label}/>
//             {touched && error && <span>{error}</span>}
//           </div>
//         </div>
//     )
// }

// const renderUrl = ({fields, submitting, hasUrlValue}) => {
//     const {url, query} = (!hasUrlValue) ? '' : queryString.parseUrl(hasUrlValue);
//     const values = {
//         url,
//         ...query
//     }

//     return (
//         <div className='container'>
//             {/* <button 
//                 type='button' 
//                 disabled={submitting}
//                 onClick={() => {
//                     return Object.keys(values).map(value => fields.push({}))
//                     }}>Fill</button> */}
//             <li>
//                 <button
//                     type='button'
//                     onClick={() => fields.push({})}>
//                     Add Param
//                 </button>
//             </li>
//             <ul>
//                 {fields.map((parameter, index, fields) => (
//                     <li key={index}>
//                     <button
//                         type='button'
//                         title='Remove Parameter'
//                         onClick={() => fields.remove(index)}
//                         style={{backgroundColor: 'red'}} />
//                     <h4>Parameter #{index +1}</h4>
//                     <Field
//                         name={`dynamic-${parameter}.name`}
//                         type='text'
//                         component={renderField}
//                         label={`Name`} />
//                     <Field
//                         name={`dynamic-${parameter}.value`}
//                         type='text'
//                         component={renderField}
//                         label={`Value`} />
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }

// let FieldArraysForm = (props) => {
//     const {handleSubmit, submitting, hasUrlValue, fields} = props;
//     return (
//         <form onSubmit={handleSubmit(data => console.log(data))}>
//             <h2>Add an endpoint</h2>
//             <Field
//                 name='url'
//                 type='text'
//                 component={renderField}
//                 label={`Enter a URL`}
//                 onChange={console.log(`Props are ${props}`)} 
//             />
//             <FieldArray name="parameters" component={renderUrl} props={{hasUrlValue}}/>
//             <button
//                 type='submit'
//                 disabled={submitting}
//                 >Save Endpoint</button>
//         </form>
//     )
// }

// const selector = formValueSelector('addEndpoint');

// function mapStateToProps(state) {
//     const hasUrlValue = selector(state, 'url')
//     return {
//         // urlValue: values.url,
//         values: getFormValues('addEndpoint')(state),
//         hasUrlValue
//     }
// }

// function mapDispatchToProps(dispatch, state) {
//     return {
//         change: function() {
//             dispatch(change());
//         },
//         startSubmit: function() {
//             dispatch(startSubmit());
//         },
//     }
// }

// FieldArraysForm = connect(mapStateToProps, mapDispatchToProps)(FieldArraysForm)

// export default reduxForm({
//     form: 'addEndpoint',
// })(FieldArraysForm)