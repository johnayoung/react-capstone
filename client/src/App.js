import React, { Component } from 'react';
import FormContainer from './containers/FormContainer';
import {connect} from 'react-redux';
import Header from './containers/Header';
import Registration from './containers/Registration';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <Registration />
      </div>
    );
  }
}

export default connect()(App);
