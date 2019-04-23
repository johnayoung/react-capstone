import jwtDecode from 'jwt-decode';
import { SubmissionError } from 'redux-form';
import axios from 'axios';

import { API_BASE_URL, API_URL } from '../config';

import { normalizeResponseErrors } from './utils';
import { saveAuthToken, clearAuthToken } from '../localStorage';

export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const CLEAR_AUTH = 'CLEAR_AUTH';
export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_ERROR = 'AUTH_ERROR';

export const setAuthToken = authToken => ({
  type: SET_AUTH_TOKEN,
  authToken
});

export const clearAuth = () => ({
  type: CLEAR_AUTH
});

export const authRequest = () => ({
  type: AUTH_REQUEST
});

export const authSuccess = currentUser => ({
  type: AUTH_SUCCESS,
  currentUser
});

export const authError = error => ({
  type: AUTH_ERROR,
  error
});

// Stores the auth token in state and localStorage,
// and decodes and stores the user data stored in the token
const storeAuthInfo = (authToken, dispatch) => {
  const decodedToken = jwtDecode(authToken);
  dispatch(setAuthToken(authToken));
  dispatch(authSuccess(decodedToken.user));
  saveAuthToken(authToken);
};

export const login = (email, password) => dispatch => {
  dispatch(authRequest());
  const config = {
    method: 'post',
    url: `${API_URL}/login`,
    headers: {
      'Content-Type': 'application/json'
    },
    data: JSON.stringify({
      email,
      password
    })
  };
  return axios(config)
    .then(res => {
      const { authToken } = res.data;
      return storeAuthInfo(authToken, dispatch);
    })
    .catch(err => {
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
      const code = err.response.status;
      const message =
        code === 401 ? 'Incorrect username or password' : 'Unable to login, please try again';

      dispatch(authError(err));
      // Could not authenticate, so return a SubmissionError for Redux
      // Form
      throw new SubmissionError({
        _error: message
      });
    });
};

export const refreshAuthToken = () => (dispatch, getState) => {
  dispatch(authRequest());
  const { authToken } = getState().auth;
  return fetch(`${API_BASE_URL}/refresh`, {
    method: 'POST',
    headers: {
      // Provide our existing token as credentials to get a new one
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({ authToken }) => storeAuthInfo(authToken, dispatch))
    .catch(err => {
      // We couldn't get a refresh token because our current credentials
      // are invalid or expired, or something else went wrong, so clear
      // them and sign us out
      dispatch(authError(err));
      dispatch(clearAuth());
      clearAuthToken(authToken);
    });
};
