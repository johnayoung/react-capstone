export const API_BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://warm-peak-72707.herokuapp.com/api'
    : 'https://127.0.0.1:8080/api';

export const API_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://warm-peak-72707.herokuapp.com'
    : 'https://127.0.0.1:8080';
