import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Header from './containers/Header';
import { fetchEndpoints } from './actions/endpoints';
import Dashboard from './containers/Dashboard';
import FetchEndpointsError from './containers/FetchEndpointsError';
import { setEnvironment } from './actions/environment';

// Font awesome icons for login
library.add(fab);

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchEndpoints());
    const { host } = this.props;
    if (host === 'web') {
      this.props.dispatch(setEnvironment('web'));
    } else {
      this.props.dispatch(setEnvironment('excel'));
    }
  }

  render() {
    let content;
    const { error } = this.props;
    if (error) {
      content = <FetchEndpointsError error={error} />;
    } else {
      content = <Dashboard />;
    }
    return (
      <>
        <header role="banner">
          <Header />
        </header>
        <div role="main" className="mx-auto">
          {content}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null,
  endpoints: state.endpoints.endpoints,
  error: state.endpoints.error,
  environment: state.environment
});

export default withRouter(connect(mapStateToProps)(App));
