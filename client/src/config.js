let API_BASE_URL;

if (process.env.NODE_ENV === 'production') {
  API_BASE_URL = 'https://warm-peak-72707.herokuapp.com/api';
} else {
  API_BASE_URL = 'https://884d7f77.ngrok.io/api';
}

export const API_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://warm-peak-72707.herokuapp.com'
    : 'https://884d7f77.ngrok.io';

export default API_BASE_URL;
