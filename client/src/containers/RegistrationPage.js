import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import OAuth from '../components/OAuth';

import Registration from './Registration';

const providers = ['google'];

export function RegistrationPage(props) {
  // If we are logged in (which happens automatically when registration
  // is successful) redirect to the user's dashboard
  const { loggedIn } = props;
  if (loggedIn) {
    return <Redirect to="/browse" />;
  }
  return (
    <div className="home flex flex-col justify-center items-center mx-auto">
      <Registration />
      <p className="m-8 text-2xl text-center font-bold">or</p>
      <div className="">
        {providers.map(provider => (
          <OAuth provider={provider} key={provider} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(RegistrationPage));
