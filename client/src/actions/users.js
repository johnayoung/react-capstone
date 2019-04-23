import { SubmissionError } from 'redux-form';
import axios from 'axios';
import { API_BASE_URL, API_URL } from '../config';

export const registerUser = user => dispatch => {
  const config = {
    method: 'post',
    url: `${API_URL}/signup`,
    headers: {
      'Content-Type': 'application/json'
    },
    data: JSON.stringify(user)
  };
  return axios(config)
    .then(({ data }) => {
      console.log(data);
      return data;
    })
    .catch(err => {
      console.log('our error is ', err);
      if (err.response.data.message === 'Email already in database') {
        throw new SubmissionError({
          _error: 'Email already exists. Use login instead.'
        });
      }
    });
};
