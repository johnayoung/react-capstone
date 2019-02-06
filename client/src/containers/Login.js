import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from '../components/Input';
import {login} from '../actions/auth';
import {required, nonEmpty} from '../validators';

export class Login extends React.Component {
    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (
            <div className='container'>            
                <h2>Hey there, welcome back :)</h2>
                <form
                    className="login-form"
                    onSubmit={this.props.handleSubmit}>
                    {error}
                    <label htmlFor="username">Username</label>
                    <Field
                        component={Input}
                        type="text"
                        name="username"
                        id="username"
                        validate={[required, nonEmpty]}
                    />
                    <label htmlFor="password">Password</label>
                    <Field
                        component={Input}
                        type="password"
                        name="password"
                        id="password"
                        validate={[required, nonEmpty]}
                    />
                    <button disabled={this.props.pristine || this.props.submitting}>
                        Log in
                    </button>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username')),
    onSubmit: (values, dispatch) => dispatch(login(values.username, values.password))
})(Login);