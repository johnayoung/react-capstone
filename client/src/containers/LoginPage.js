import React from 'react';
import io from 'socket.io-client';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import OAuth from '../components/OAuth';
import './LoginPage.css';

import Login from './Login';
import API_BASE_URL from '../config';

const socket = io('https://localhost:8080');
const providers = ['google'];

export function LoginPage(props) {
  // If we are logged in (which happens automatically when registration
  // is successful) redirect to the main browse area
  const { loggedIn } = props;
  if (loggedIn) {
    return <Redirect to="/browse" />;
  }
  return (
    <div className="home flex justify-center items-center mx-auto h-full">
      {/* <Login /> */}
      <div className="wrapper mt-16">
        <div className="">
          {providers.map(provider => (
            <OAuth provider={provider} key={provider} socket={socket} />
          ))}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(LoginPage));
