import React, { Component } from 'react'
import {connect} from 'react-redux';
import {Route, Switch, withRouter} from 'react-router-dom';

import LandingPage from './LandingPage';
import RegistrationPage from './RegistrationPage';
import LoginPage from './LoginPage';
import CardContainer from './CardContainer';
import Endpoint from './Endpoint';
import FieldArraysForm from './FieldArraysForm';

export class Dashboard extends Component {
    content() {
        if (this.props.loading) {
            return <div>Loading...</div>
        } else {
            return (
            <Switch>
                <Route exact path="/" component={LandingPage}/>
                <Route path="/browse" component={CardContainer}/>
                <Route path="/signup" component={RegistrationPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/add" component={FieldArraysForm} />
                <Route path="/:username/:endpointName" component={Endpoint} />
            </Switch>
            )
        }
    }
  render() {
    return (
      <div className='dashboard pt-20 px-2'>
        {this.content()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null,
    endpoints: state.endpoints.endpoints,
    loading: state.endpoints.loading
})

export default withRouter(connect(mapStateToProps)(Dashboard));