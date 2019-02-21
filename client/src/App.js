import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Header from './containers/Header';
import { fetchEndpoints } from './actions/endpoints';
import Dashboard from './containers/Dashboard';
import FetchEndpointsError from './containers/FetchEndpointsError';
import history from './history';
import router from './router';
import LandingPage from './containers/LandingPage';

// function renderRoute(location) {
//   router.resolve({ path: location.pathname }).then(component => {
//     render(component, document.getElementById('router-outlet'));
//   });
// }

// renderRoute(window.location);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // paths: [
      //   { path: '/', action: () => <LandingPage /> },
      //   { path: '/signup', action: () => <RegistrationPage /> },
      //   { path: '/login', action: () => <LoginPage /> },
      //   { path: '*', action: () => <NotFound /> }
      // ],
      currentLocation: history.location
    };
  }

  componentDidMount() {
    this.props.dispatch(fetchEndpoints());
    this.setState({
      currentLocation: history.location
    });
  }

  handleClick(event) {
    event.preventDefault();
    history.push({
      pathname: event.currentTarget.pathname
    });
  }

  render() {
    let content;
    const { error } = this.props;
    const { pathname } = this.state.currentLocation;
    if (error) {
      content = <FetchEndpointsError error={error} />;
    } else if (pathname === '/' || pathname === '/index.html') {
      console.log('current location is ', this.state.currentLocation);
      content = <LandingPage />;
    } else {
      console.log('current location is ', this.state.currentLocation);
      content = <div>we made it here</div>;
    }
    return (
      <>
        <header role="banner">
          <Header />
        </header>
        <section role="main" className="mx-auto">
          {content}
        </section>
      </>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null,
  endpoints: state.endpoints.endpoints,
  error: state.endpoints.error
});

const connectedApp = connect(mapStateToProps)(App);

export default connectedApp;
