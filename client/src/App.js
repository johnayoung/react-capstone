import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Route, withRouter, Link} from 'react-router-dom';

import Header from './containers/Header';
import Registration from './containers/Registration';
import Login from './containers/Login';
import CardContainer from './containers/CardContainer';
import { fetchEndpoints } from './actions/endpoints';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchEndpoints());
  }

  render() {
    return (
      <div className='container'>
        {/* <Header /> */}
        {/* <Route exact path="/:cardName" component={CardContainer} /> */}
        {(this.props.endpoints) ? <CardContainer endpoints={this.props.endpoints}/> : <div>Loading...</div>}
        <Route exact path="/signup" component={Registration} />
        <Route exact path="/login" component={Login} />
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
