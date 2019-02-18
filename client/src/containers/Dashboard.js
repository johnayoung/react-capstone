import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';

import LandingPage from './LandingPage';
import RegistrationPage from './RegistrationPage';
import LoginPage from './LoginPage';
import CardContainer from './CardContainer';
import FieldArraysForm from './FieldArraysForm';
import NotFound from './NotFound';
import EndpointSubmit from './EndpointSubmit';

export class Dashboard extends Component {
  content() {
    if (this.props.loading) {
      return <div>Loading...</div>;
    }
    return (
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/browse" component={CardContainer} />
        <Route path="/signup" component={RegistrationPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/add" component={FieldArraysForm} />
        <Route path="/:username/:endpointName" component={EndpointSubmit} />
        <Route path="*" component={NotFound} />
      </Switch>
    );
  }

  render() {
    return <section className="dashboard pt-16">{this.content()}</section>;
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null,
  endpoints: state.endpoints.endpoints,
  loading: state.endpoints.loading
});

export default withRouter(connect(mapStateToProps)(Dashboard));
