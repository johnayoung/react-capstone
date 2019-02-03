import {API_BASE_URL} from '../config';
import {SubmissionError} from 'redux-form';
import axios from 'axios';

export const FETCH_ENDPOINTS_SUCCESS = 'FETCH_ENDPOINTS_SUCCESS';
export const fetchEndpointsSuccess = endpoints => ({
    type: FETCH_ENDPOINTS_SUCCESS,
    endpoints
});

export const fetchEndpoints = () => dispatch => {
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
                console.log(endpoints);
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