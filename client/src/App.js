import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Route, withRouter, Link} from 'react-router-dom';

import Header from './containers/Header';
import Registration from './containers/Registration';
import Login from './containers/Login';
// import CardContainer from './containers/CardContainer';
import { fetchEndpoints } from './actions/endpoints';

const testObj = [
  {name: 'test', description: 'test description', logo: 'logo'},
  {name: 'test2', description: 'test description 2', logo: 'logo'}
]

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchEndpoints());
  }

  render() {
    return (
      <div className='container'>
        {/* <Header /> */}
        {/* <Route exact path="/:cardName" component={CardContainer} /> */}
        <Route exact path="/signup" component={Registration} />
        <Route exact path="/login" component={Login} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
})

export default withRouter(connect(mapStateToProps)(App));
