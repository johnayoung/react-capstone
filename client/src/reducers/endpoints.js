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
  USER_ENDPOINT_CLEAR
} from "../actions/endpoints";

const initialState = {
  endpoints: null,
  currentEndpoint: null,
  currentEndpointParams: null,
  userEndpoint: null,
  loading: true,
  loadingCurrent: true,
  error: null,
  newUrls: null
};

export default function reducer(state = initialState, action) {
  if (action.type === FETCH_ENDPOINTS_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    });
  } else if (action.type === FETCH_ENDPOINTS_SUCCESS) {
    return Object.assign({}, state, {
      endpoints: action.endpoints,
      loading: false
    });
  } else if (action.type === FETCH_ENDPOINTS_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  } else if (action.type === SET_CURRENT_ENDPOINT_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    });
  } else if (action.type === SET_CURRENT_ENDPOINT_SUCCESS) {
    return Object.assign({}, state, {
      currentEndpoint: action.endpoint,
      currentEndpointParams: action.endpoint.parameters,
      loadingCurrent: false
    });
  } else if (action.type === CLEAR_CURRENT_ENDPOINT) {
    return Object.assign({}, state, {
      currentEndpoint: null
    });
  } else if (action.type === POST_ENDPOINT_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      newUrls: null,
      error: null
    });
  } else if (action.type === POST_ENDPOINT_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      newUrls: action.newUrls
    });
  } else if (action.type === POST_ENDPOINT_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  } else if (action.type === USER_ENDPOINT_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      userEndpoint: null,
      error: null
    });
  } else if (action.type === USER_ENDPOINT_SUCCESS) {
    return Object.assign({}, state, {
      userEndpoint: action.apiResponse,
      loading: false
    });
  } else if (action.type === USER_ENDPOINT_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error1
    });
  } else if (action.type === USER_ENDPOINT_CLEAR) {
    return Object.assign({}, state, {
      userEndpoint: null
    });
  }
  return state;
}
