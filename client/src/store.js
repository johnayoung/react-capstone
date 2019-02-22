import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { loadAuthToken } from './localStorage';

import { setAuthToken, refreshAuthToken } from './actions/auth';

// Bring in reducers from other files
import authReducer from './reducers/auth';
import endpointReducer from './reducers/endpoints';
import environmentReducer from './actions/environment';
// import protectedDataReducer from './reducers/protected-data';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    form: formReducer,
    auth: authReducer,
    endpoints: endpointReducer,
    environment: environmentReducer
    // protectedData: protectedDataReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
);

// Hydrate the authToken from localStorage if it exist
const authToken = loadAuthToken();
if (authToken) {
  const token = authToken;
  store.dispatch(setAuthToken(token));
  store.dispatch(refreshAuthToken());
}

export default store;
