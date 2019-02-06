import {
    FETCH_ENDPOINTS_REQUEST,
    FETCH_ENDPOINTS_SUCCESS,
    FETCH_ENDPOINTS_ERROR,
    SET_CURRENT_ENDPOINT_SUCCESS,
    SET_CURRENT_ENDPOINT_REQUEST,
    POST_ENDPOINT_REQUEST,
    POST_ENDPOINT_SUCCESS,
    POST_ENDPOINT_ERROR
} from '../actions/endpoints';

const initialState = {
    endpoints: null,
    currentEndpoint: null,
    loading: true,
    loadingCurrent: true,
    error: null
};

export default function reducer(state=initialState, action) {
    if (action.type === FETCH_ENDPOINTS_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            error: null
        })
    } else if (action.type === FETCH_ENDPOINTS_SUCCESS) {
        return Object.assign({}, state, {
            endpoints: action.endpoints,
            loading: false
        })
    } else if (action.type === FETCH_ENDPOINTS_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error1
        })
    } else if (action.type === SET_CURRENT_ENDPOINT_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            error: null
        })
    } else if (action.type === SET_CURRENT_ENDPOINT_SUCCESS) {
        return Object.assign({}, state, {
            currentEndpoint: action.endpoint,
            loadingCurrent: false
        })
    } else if (action.type === POST_ENDPOINT_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            error: null
        })
    } else if (action.type === POST_ENDPOINT_SUCCESS) {
        return Object.assign({}, state, {
            loading: false
        })
    } else if (action.type === POST_ENDPOINT_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        })
    }
    return state;
}