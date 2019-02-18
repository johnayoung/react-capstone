import {
  FETCH_ENDPOINTS_REQUEST,
  FETCH_ENDPOINTS_SUCCESS,
  FETCH_ENDPOINTS_ERROR,
  SET_CURRENT_ENDPOINT_SUCCESS,
  SET_CURRENT_ENDPOINT_REQUEST,
  CLEAR_CURRENT_ENDPOINT,
  POST_ENDPOINT_REQUEST,
  POST_ENDPOINT_SUCCESS,
  POST_ENDPOINT_ERROR,
  USER_ENDPOINT_REQUEST,
  USER_ENDPOINT_SUCCESS,
  USER_ENDPOINT_ERROR,
  USER_ENDPOINT_CLEAR,
  SET_INITIAL_FORM_VALUES
} from '../actions/endpoints';

const initialState = {
  endpoints: null,
  currentEndpoint: null,
  currentEndpointParams: null,
  userEndpoint: null,
  loading: true,
  loadingCurrent: true,
  loadingUserEndpoint: false,
  error: null,
  submitError: null,
  newUrls: null,
  initialValues: null
};

export default function reducer(state = initialState, action) {
  if (action.type === FETCH_ENDPOINTS_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    });
  }
  if (action.type === FETCH_ENDPOINTS_SUCCESS) {
    return Object.assign({}, state, {
      endpoints: action.endpoints,
      loading: false
    });
  }
  if (action.type === FETCH_ENDPOINTS_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  }
  if (action.type === SET_CURRENT_ENDPOINT_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    });
  }
  if (action.type === SET_CURRENT_ENDPOINT_SUCCESS) {
    return Object.assign({}, state, {
      currentEndpoint: action.endpoint,
      loadingCurrent: false
    });
  }
  if (action.type === CLEAR_CURRENT_ENDPOINT) {
    return Object.assign({}, state, {
      currentEndpoint: null
    });
  }
  if (action.type === POST_ENDPOINT_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      newUrls: null,
      error: null
    });
  }
  if (action.type === POST_ENDPOINT_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      newUrls: action.newUrls
    });
  }
  if (action.type === POST_ENDPOINT_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  }
  if (action.type === USER_ENDPOINT_REQUEST) {
    return Object.assign({}, state, {
      loadingUserEndpoint: true,
      userEndpoint: null,
      submitError: null
    });
  }
  if (action.type === USER_ENDPOINT_SUCCESS) {
    return Object.assign({}, state, {
      userEndpoint: action.apiResponse,
      loadingUserEndpoint: false
    });
  }
  if (action.type === USER_ENDPOINT_ERROR) {
    return Object.assign({}, state, {
      loadingUserEndpoint: false,
      submitError: action.error
    });
  }
  if (action.type === USER_ENDPOINT_CLEAR) {
    return Object.assign({}, state, {
      userEndpoint: null
    });
  }
  if (action.type === SET_INITIAL_FORM_VALUES) {
    return Object.assign({}, state, {
      initialValues: action.endpoint
    });
  }
  return state;
}
