import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import {Provider} from 'react-redux';
import store from './store';
import * as serviceWorker from './serviceWorker';

// Import styles
// import './index.css';
// import './responsive.css';
// import './normalize.css';
// import './skeleton.css';
import './output.css';
import './misc.css';


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
