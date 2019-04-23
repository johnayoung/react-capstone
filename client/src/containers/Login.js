import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import RenderField from '../components/RenderField';
import Error from '../components/Error';
import { login } from '../actions/auth';
import { required, nonEmpty, email } from '../validators';

const Login = props => {
  const { error, handleSubmit, pristine, submitting } = props;
  return (
    <div className="w-full max-w-xs">
      <h2 className="text-center p-6">Welcome back :)</h2>
      <form
        className="login-form bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <Field
            name="email"
            type="text"
            component={RenderField}
            label="Email"
            validate={[required, nonEmpty, email]}
            autocomplete="email"
          />
        </div>
        <div className="mb-6">
          <Field
            name="password"
            type="password"
            component={RenderField}
            label="Password"
            validate={[required, nonEmpty]}
            autocomplete="current-password"
          />
        </div>
        {error && (
          <div className="mb-4">
            <Error error={error} />
          </div>
        )}
        <div className="flex items-center justify-between">
          <button type="submit" className="btn btn-green" disabled={pristine || submitting}>
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'email')),
  onSubmit: (values, dispatch) => dispatch(login(values.email, values.password))
})(Login);
