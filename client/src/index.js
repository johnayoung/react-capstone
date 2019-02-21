import React from 'react';
import ReactDOM from 'react-dom';
import queryString from 'query-string';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import UniversalRouter from 'universal-router';
import createHistory from 'history/createBrowserHistory';
import App from './App';
import NotFound from './containers/NotFound';
import store from './store';
import * as serviceWorker from './serviceWorker';
import router from './router';

// Styles
import './output.css';
import './misc.css';

window.Office.onReady(info => {
  console.log('office initialized!');
  console.log(info);
}).then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
