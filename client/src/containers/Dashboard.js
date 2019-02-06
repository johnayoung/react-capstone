import React, { Component } from 'react'
import {connect} from 'react-redux';
import {Route, Switch, withRouter, Link} from 'react-router-dom';

import Registration from './Registration';
import Login from './Login';
import CardContainer from './CardContainer';
import Endpoint from './Endpoint';
import AddEndpoint from './AddEndpoint';

export class Dashboard extends Component {
    content() {
        if (this.props.loading) {
            return <div>Loading...</div>
        } else {
            return (
            <Switch>
                <Route exact path="/" component={CardContainer}/>
                <Route path="/signup" component={Registration} />
                <Route path="/login" component={Login} />
                <Route path="/add" component={AddEndpoint} />
                <Route path="/endpoint/:cardName" component={Endpoint} />
            </Switch>
            )
        }
    }
  render() {
    return (
      <div className='dashboard'>
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