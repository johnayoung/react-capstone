import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// Polyfills
/* eslint no-extend-native: 0 */
// import 'es6-promise/auto';
import 'whatwg-fetch';
import 'core-js/es/promise';
import stringincludes from 'core-js/es/string/virtual/includes';
import arrayincludes from 'core-js/es/array/virtual/includes';
import repeat from 'core-js/es/string/virtual/repeat';
import assign from 'core-js/es/object/assign';
// import stringincludes from 'core-js/library/fn/string/virtual/includes';
// import arrayincludes from 'core-js/library/fn/array/virtual/includes';
// import repeat from 'core-js/library/fn/string/virtual/repeat';
// import assign from 'core-js/library/fn/object/assign';
import * as OfficeHelpers from '@microsoft/office-js-helpers';
import App from './App';
import store from './store';
import * as serviceWorker from './serviceWorker';

// Styles
import './output.css';
import './misc.css';

const app = (Component, host) => {
  ReactDOM.render(
    <Provider store={store}>
      <Component>
        <App host={host} />
      </Component>
    </Provider>,
    document.getElementById('root')
  );
};

// const authenticator = new OfficeHelpers.Authenticator();
// // register Google endpoint using
// authenticator.endpoints.registerGoogleAuth(
//   '380764449203-2p1sc78u60uc525rvuciddkf2tj986up.apps.googleusercontent.com'
// );

window.Office.onReady(info => {
  String.prototype.includes = stringincludes;
  String.prototype.repeat = repeat;
  Array.prototype.includes = arrayincludes;
  Object.assign = assign;
  return info;
}).then(info => {
  return info.host === 'Excel' ? app(HashRouter, 'excel') : app(HashRouter, 'web');
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
