import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';
import * as serviceWorker from './serviceWorker';

// Styles
import './output.css';
import './misc.css';

// Polyfills from core-js
const includes = require('core-js/library/fn/string/includes');

let isOfficeInitialized = false;
const title = 'add-in test';

// ReactDOM.render(
//   <Provider store={store}>
//     <Router>
//       <App />
//     </Router>
//   </Provider>,
//   document.getElementById('root')
// );

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Component title={title} isOfficeInitialized={isOfficeInitialized} />
      </Router>
    </Provider>,
    document.getElementById('root')
  );
};

window.Office.initialize = () => {
  isOfficeInitialized = true;
  render(App);
};

render(App);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
