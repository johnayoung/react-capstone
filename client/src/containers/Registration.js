import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import Input from '../components/Input';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';
const passwordLength = length({min: 10, max: 72});
const matchesPassword = matches('password');

export class Registration extends React.Component {
    onSubmit(values) {
        const {username, password, fullname} = values;
        const user = {username, password, fullname};
        console.log(user);
        return this.props
            .dispatch(registerUser(user))
            .then(() => this.props.dispatch(login(username, password)));
    }

    render() {
        return (
            <div className='w-full max-w-xs'>
                <h2 className='text-center p-6'>Disrupting the world, one API at a time.</h2>
                <form
                    className="login-form bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                    onSubmit={this.props.handleSubmit(values =>
                        this.onSubmit(values)
                    )}
                    >
                    <div className='mb-4'>
                        <label 
                            className='block text-grey-darker text-sm font-bold mb-2'
                            htmlFor="fullname">Full name</label>
                        <Field 
                            component='input' 
                            type="text" 
                            name="fullname" 
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline'
                        />
                    </div>
                    <div className='mb-4'>
                        <label 
                            className='block text-grey-darker text-sm font-bold mb-2'
                            htmlFor="username">Username</label>
                        <Field
                            component={Input}
                            type="text"
                            name="username"
                            validate={[required, nonEmpty, isTrimmed]}
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline'
                        />
                    </div>
                    <div className='mb-4'>
                        <label 
                            className='block text-grey-darker text-sm font-bold mb-2'
                            htmlFor="password">Password</label>
                        <Field
                            component={Input}
                            type="password"
                            name="password"
                            validate={[required, passwordLength, isTrimmed]}
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline'
                        />
                    </div>
                    <div className='mb-4'>
                        <label 
                            className='block text-grey-darker text-sm font-bold mb-2'
                            htmlFor="passwordConfirm">Confirm password</label>
                        <Field
                            component={Input}
                            type="password"
                            name="passwordConfirm"
                            validate={[required, nonEmpty, matchesPassword]}
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline'
                        />
                    </div>
                    <div className='flex items-center justify-between'>
                        <button
                            className='btn btn-green hover:bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline'
                            type="submit"
                            disabled={this.props.pristine || this.props.submitting}>
                            Register
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'registration',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('registration', Object.keys(errors)[0]))
})(Registration);