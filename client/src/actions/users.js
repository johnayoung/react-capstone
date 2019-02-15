import { SubmissionError } from 'redux-form';
import axios from 'axios';
import API_BASE_URL from '../config';

export const registerUser = user => dispatch => {
  const config = {
    method: 'post',
    url: `${API_BASE_URL}/users`,
    headers: {
      'Content-Type': 'application/json'
    },
    data: JSON.stringify(user)
  };
  return axios(config)
    .then(({ data }) => {
      console.log(data);
      // return data.json()
      return data;
    })
    .catch(err => {
      console.log(err);
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
      if (err.response.data.message === 'The username already exists') {
        throw new SubmissionError({
          _error: 'Username already exists'
        });
      }
    });
};
