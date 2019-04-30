// import '@babel/polyfill';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import App from './App';
import store from './store';
import * as serviceWorker from './serviceWorker';

// Styles
import './output.css';
import './misc.css';

const app = (Component, host) => {
  ReactDOM.render(
    <Provider store={store}>
      <CookiesProvider>
        <Component>
          <App host={host} />
        </Component>
      </CookiesProvider>
    </Provider>,
    document.getElementById('root')
  );
};

window.Office.onReady(info => {
  return info;
}).then(info => {
  return info.host === 'Excel' ? app(HashRouter, 'excel') : app(HashRouter, 'web');
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
