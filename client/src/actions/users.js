import {API_BASE_URL} from '../config';
import {SubmissionError} from 'redux-form';
import axios from 'axios';

export const registerUser = user => dispatch => {
    const config = {
        method: 'post',
        url: `${API_BASE_URL}/auth/login`,
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(user)
    };
    return axios(config)
            .then(res => res.json())
            .catch(err => {
                const {reason, message, location} = err;
                if (reason === 'ValidationError') {
                // Convert validation errors into SubmissionErrors for Redux Form
                    return new SubmissionError({
                        [location]: message
                    })
                }
            })
}