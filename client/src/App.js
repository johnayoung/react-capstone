import React, { Component } from 'react';
import logo from './logo.svg';
import FormContainer from './containers/FormContainer';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="container">
        <FormContainer />
      </div>
    );
  }
}

export default connect()(App);
