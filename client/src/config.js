let API_BASE_URL;

if (process.env.NODE_ENV === 'production') {
  API_BASE_URL = 'https://warm-peak-72707.herokuapp.com/api';
} else {
  API_BASE_URL = 'https://localhost:8080/api';
}

export const API_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://react-auth-twitter.herokuapp.com'
    : 'https://localhost:8080';

export default API_BASE_URL;
