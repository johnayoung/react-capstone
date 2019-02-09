import API_BASE_URL from '../config';
import {SubmissionError} from 'redux-form';
import axios from 'axios';
console.log('auth token is', localStorage.authToken);
const api = axios.create({
    baseURL: `${API_BASE_URL}`,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.authToken}`
    },    
})

export const FETCH_ENDPOINTS_REQUEST = 'FETCH_ENDPOINTS_REQUEST';
export const fetchEndpointsRequest = endpoints => ({
    type: FETCH_ENDPOINTS_REQUEST,
});

export const FETCH_ENDPOINTS_SUCCESS = 'FETCH_ENDPOINTS_SUCCESS';
export const fetchEndpointsSuccess = endpoints => ({
    type: FETCH_ENDPOINTS_SUCCESS,
    endpoints
});

export const FETCH_ENDPOINTS_ERROR = 'FETCH_ENDPOINTS_ERROR'
export const fetchEndpointsError = (error) => ({
  type: FETCH_ENDPOINTS_ERROR,
  error
})

export const SET_CURRENT_ENDPOINT_REQUEST = 'SET_CURRENT_ENDPOINT_REQUEST';
export const setCurrentEndpointRequest = () => ({
    type: SET_CURRENT_ENDPOINT_REQUEST
});

export const SET_CURRENT_ENDPOINT_SUCCESS = 'SET_CURRENT_ENDPOINT_SUCCESS';
export const setCurrentEndpointSuccess = endpoint => ({
    type: SET_CURRENT_ENDPOINT_SUCCESS,
    endpoint
});

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const fetchUserRequest = () => ({
    type: FETCH_ENDPOINTS_REQUEST,
});

export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const fetchUserSuccess = endpoints => ({
    type: FETCH_ENDPOINTS_SUCCESS,
    endpoints
});

export const FETCH_USER_ERROR = 'FETCH_USER_ERROR'
export const fetchUserError = (error) => ({
  type: FETCH_ENDPOINTS_ERROR,
  error
})

// Actions around a user submitting a new endpoint
export const POST_ENDPOINT_REQUEST = 'POST_ENDPOINT_REQUEST';
export const POST_ENDPOINT_SUCCESS = 'POST_ENDPOINT_SUCCESS';
export const POST_ENDPOINT_ERROR = 'POST_ENDPOINT_ERROR';

export const postEndpointRequest = () => ({
  type: POST_ENDPOINT_REQUEST,
})

export const postEndpointSuccess = (endpoints) => ({
  type: POST_ENDPOINT_SUCCESS,
  endpoints
})

export const postEndpointError = (error) => ({
  type: POST_ENDPOINT_ERROR,
  error
})

export const postEndpoint = (postObject) => dispatch => {
    const api = axios.create({
        baseURL: `${API_BASE_URL}`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.authToken}`
        },    
    })
    dispatch(postEndpointRequest());
    const {endpoints, collectionName} = postObject;
    const {fullUrl, name} = endpoints[0];
    console.log('full url and name is ', fullUrl, name);
    return axios.all(endpoints.map(endpoint => api.post('/endpoints', {name: endpoint.name, fullUrl: endpoint.fullUrl, parameters: endpoint.parameters})))
    // return api.post('/endpoints', config.data)
        .then(([responses]) => {
            console.log(responses);
            return responses;
        })
        .then(() => {
            // const endpoint = response.data;
            return dispatch(postEndpointSuccess());
        })
        .catch(err => {
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
            dispatch(postEndpointError(err));
            throw new SubmissionError({
                _error: 'Unauthorized'
            })
        })
}


export const fetchEndpoints = () => dispatch => {
    dispatch(fetchEndpointsRequest());
    const config = {
        method: 'get',
        url: `${API_BASE_URL}/endpoints`,
        headers: {
            'Content-Type': 'application/json'
        },
        // data: JSON.stringify(endpoints)
    };
    return axios(config)
            .then(res => {
                const endpoints = res.data;
                return dispatch(fetchEndpointsSuccess(endpoints));
            })
            .catch(err => {
                console.log(`Hmm...must have had an error`)
                const {reason, message, location} = err;
                if (reason === 'ValidationError') {
                // Convert validation errors into SubmissionErrors for Redux Form
                    return new SubmissionError({
                        [location]: message
                    })
                }
            })
}

export const fetchUserEndpoint = () => dispatch => {
    dispatch(fetchUserRequest());
    const config = {
        method: 'get',
        url: `${API_BASE_URL}/endpoints`,
        headers: {
            'Content-Type': 'application/json',
        },
        // data: JSON.stringify(endpoints) 
    };
    return axios(config)
            .then(res => {
                const endpoints = res.data;
                return dispatch(fetchEndpointsSuccess(endpoints));
            })
            .catch(err => {
                console.log(`Hmm...must have had an error`)
                const {reason, message, location} = err;
                if (reason === 'ValidationError') {
                // Convert validation errors into SubmissionErrors for Redux Form
                    return new SubmissionError({
                        [location]: message
                    })
                }
            })
}

// Actions around a user pulling an existing endpoint
export const USER_ENDPOINT_REQUEST = 'USER_ENDPOINT_REQUEST';
export const USER_ENDPOINT_SUCCESS = 'USER_ENDPOINT_SUCCESS';
export const USER_ENDPOINT_ERROR = 'USER_ENDPOINT_ERROR';

export const userEndpointRequest = () => ({
  type: USER_ENDPOINT_REQUEST,
})

export const userEndpointSuccess = (apiResponse) => ({
  type: USER_ENDPOINT_SUCCESS,
  apiResponse
})

export const userEndpointError = (error) => ({
  type: USER_ENDPOINT_ERROR,
  error
})

export const userEndpoint = (urlString) => dispatch => {
    const config = {
        method: 'get',
        url: urlString,
        headers: {
            'Content-Type': 'application/json',
        },    
    }
    dispatch(userEndpointRequest());
    return axios(config)
        .then(response => {
            const {data} = response;
            console.log('data is', data);
            return data;
        })
        .then((data) => {
            return dispatch(userEndpointSuccess(data));
        })
        .catch(err => {
            // console.log(err.response.data);
            // console.log(err.response.status);
            // console.log(err.response.headers);
            console.log(err);
            dispatch(postEndpointError(err));
            throw new SubmissionError({
                _error: 'Unauthorized'
            })
        })
}

export const setCurrentEndpoint = () => dispatch => {
    dispatch(setCurrentEndpointRequest());
    return dispatch(setCurrentEndpointSuccess());
}