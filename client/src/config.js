let API_BASE_URL;

if (process.env.NODE_ENV === 'production') {
    API_BASE_URL = 'https://warm-peak-72707.herokuapp.com/api';
} else {
    API_BASE_URL = 'http://localhost:8080/api'
}

export default API_BASE_URL;