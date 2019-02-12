import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

import Login from './Login';

export function LoginPage(props) {
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the main browse area
    if (props.loggedIn) {
        return <Redirect to="/browse" />;
    }
    return (
        <div className="home flex justify-center items-center mx-auto h-full">
            <Login />
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(LoginPage));