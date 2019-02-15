import reducer from './endpoints';
import {
  fetchEndpointsRequest,
  fetchEndpointsSuccess,
  fetchEndpointsError,
  setCurrentEndpointRequest,
  setCurrentEndpointSuccess,
  postEndpointRequest,
  postEndpointSuccess,
  postEndpointError,
  userEndpointRequest,
  userEndpointSuccess,
  userEndpointError
} from '../actions/endpoints';

describe('Endpoints reducer', () => {
  // Dummy data goes here
  const endpoint1 = { name: 'name', fullUrl: 'https://www.dummy.com' };
  const endpoint2 = { name: 'name2', fullUrl: 'https://www.dummy.com' };
  const endpointsFull = {
    endpoints: [endpoint1, endpoint2]
  };
  const newUrlsPost = ['url1', 'url2'];
  const errorMsg = 'This is an error message';

  it('Should set the initial state when nothing is passed in', () => {
    const state = reducer(undefined, { type: '__UNKNOWN' });
    expect(state).toEqual({
      endpoints: null,
      currentEndpoint: null,
      currentEndpointParams: null,
      userEndpoint: null,
      loading: true,
      loadingCurrent: true,
      error: null,
      newUrls: null
    });
  });

  it('Should return the current state on an unknown action', () => {
    const currentState = {};
    const state = reducer(currentState, { type: '__UNKNOWN' });
    expect(state).toBe(currentState);
  });

  describe('Fetch endpoints', () => {
    it('Should update state with endpoints', () => {
      let state = {
        endpoints: null
      };
      state = reducer(state, fetchEndpointsSuccess(endpointsFull));
      expect(state).toEqual({
        endpoints: endpointsFull,
        loading: false
      });
    });
  });

  describe('Post endpoints', () => {
    it('Should set loading when starting a post request', () => {
      let state = {
        loading: false,
        newUrls: null,
        error: null
      };
      state = reducer(state, postEndpointRequest());
      expect(state).toEqual({
        loading: true,
        newUrls: null,
        error: null
      });
    });

    it('Should update state with posted endpoints', () => {
      let state = {
        newUrls: null
      };
      state = reducer(state, postEndpointSuccess(newUrlsPost));
      expect(state).toEqual({
        newUrls: newUrlsPost,
        loading: false
      });
    });

    it('Should update state with error on error response', () => {
      let state = {
        loading: true
      };
      state = reducer(state, postEndpointError(errorMsg));
      expect(state).toEqual({
        loading: false,
        error: errorMsg
      });
    });
  });
});
