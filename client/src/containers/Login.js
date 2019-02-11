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
            <div className='w-full max-w-xs'>            
                <h2 className='text-center p-6'>Welcome back :)</h2>
                <form
                    className="login-form bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                    onSubmit={this.props.handleSubmit}>
                    {error}
                    <div className='mb-4'>
                        <label
                            className='block text-grey-darker text-sm font-bold mb-2'
                            htmlFor="username">Username</label>
                        <Field
                            component={Input}
                            type="text"
                            name="username"
                            id="username"
                            validate={[required, nonEmpty]}
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline'
                        />
                    </div>
                    <div className='mb-6'>
                        <label 
                            className='block text-grey-darker text-sm font-bold mb-2'
                            htmlFor="password">Password</label>
                        <Field
                            component={Input}
                            type="password"
                            name="password"
                            id="password"
                            validate={[required, nonEmpty]}
                            className='shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline'
                        />
                        <p class="text-red text-xs italic">Please choose a password.</p>
                    </div>
                    <div className='flex items-center justify-between'>
                        <button 
                            className='bg-green-500 hover:bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline'
                            disabled={this.props.pristine || this.props.submitting}>
                            Log in
                        </button>
                    </div>
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