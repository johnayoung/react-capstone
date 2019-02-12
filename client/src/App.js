import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import Header from './containers/Header';
import { fetchEndpoints } from './actions/endpoints';
import Dashboard from './containers/Dashboard';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchEndpoints());
  }

  render() {
    return (
      <div className='bg-grey-lightest h-screen'>
        <Header />
        <Dashboard />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null,
  endpoints: state.endpoints.endpoints
})

export default withRouter(connect(mapStateToProps)(App));
