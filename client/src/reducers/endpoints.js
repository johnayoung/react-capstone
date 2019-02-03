import {
    FETCH_ENDPOINTS_SUCCESS,
} from '../actions/endpoints';

const initialState = {
    endpoints: null
};

export default function reducer(state=initialState, action) {
    if (action.type === FETCH_ENDPOINTS_SUCCESS) {
        console.log(`Endpoints are ${action.endpoints}`)
        return Object.assign({}, state, {
            endpoints: action.endpoints
        })
    }
    return state;
}