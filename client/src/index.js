import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
// Polyfills
/* eslint no-extend-native: 0 */
// import 'es6-promise/auto';
import 'core-js/fn/promise';
import stringincludes from 'core-js/library/fn/string/virtual/includes';
import arrayincludes from 'core-js/library/fn/array/virtual/includes';
import repeat from 'core-js/library/fn/string/virtual/repeat';
import assign from 'core-js/library/fn/object/assign';
import App from './App';
import store from './store';
import * as serviceWorker from './serviceWorker';

// Styles
import './output.css';
import './misc.css';

const app = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <Component>
        <App />
      </Component>
    </Provider>,
    document.getElementById('root')
  );
};

window.Office.onReady(info => {
  console.log('Office is now ready! Host info is: ', info);

  console.log('Load your polyfills');

  String.prototype.includes = stringincludes;
  String.prototype.repeat = repeat;
  Array.prototype.includes = arrayincludes;
  Object.assign = assign;
  return info;
}).then(info => {
  return info.host ? app(HashRouter) : app(HashRouter);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
