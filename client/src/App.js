import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Header from "./containers/Header";
import { fetchEndpoints } from "./actions/endpoints";
import Dashboard from "./containers/Dashboard";
import Error from "./components/Error";
import FetchEndpointsError from "./containers/FetchEndpointsError";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchEndpoints());
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
      <main className="mx-auto">
        <Header />
        {content}
      </main>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null,
  endpoints: state.endpoints.endpoints,
  error: state.endpoints.error
});

export default withRouter(connect(mapStateToProps)(App));
