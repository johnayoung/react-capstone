import axios from 'axios';
import API_BASE_URL from '../config';
import {
  FETCH_ENDPOINTS_REQUEST,
  FETCH_ENDPOINTS_SUCCESS,
  FETCH_ENDPOINTS_ERROR,
  SET_CURRENT_ENDPOINT_SUCCESS,
  SET_CURRENT_ENDPOINT_REQUEST,
  POST_ENDPOINT_REQUEST,
  POST_ENDPOINT_SUCCESS,
  POST_ENDPOINT_ERROR,
  USER_ENDPOINT_REQUEST,
  USER_ENDPOINT_SUCCESS,
  USER_ENDPOINT_ERROR,
  fetchEndpointsRequest,
  fetchEndpointsSuccess,
  fetchEndpointsError,
  setCurrentEndpointRequest,
  setCurrentEndpointSuccess,
  postEndpoint,
  postEndpointRequest,
  postEndpointSuccess,
  postEndpointError,
  userEndpointRequest,
  userEndpointSuccess,
  userEndpointError,
  fetchEndpoints
} from './endpoints';

describe('Fetch endpoints', () => {
  it('Should return the action', () => {
    const endpoints = 'Endpoints';
    const error = 'error';
    const action1 = fetchEndpointsSuccess(endpoints);
    const action2 = fetchEndpointsError(error);
    const action3 = fetchEndpointsRequest();

    expect(action1.type).toEqual(FETCH_ENDPOINTS_SUCCESS);
    expect(action2.type).toEqual(FETCH_ENDPOINTS_ERROR);
    expect(action3.type).toEqual(FETCH_ENDPOINTS_REQUEST);
  });

  it('Fetch should dispatch fetchEndpointsSuccess', () => {
    // Dummy data goes here
    const config = {
      method: 'get',
      url: `${API_BASE_URL}/endpoints`,
      headers: {
        'Content-Type': 'application/json'
      }
      // data: JSON.stringify(endpoints)
    };

    const dispatch = jest.fn();
    return fetchEndpoints()(dispatch).then(() => {
      expect(axios).toHaveBeenCalledWith(config);
      expect(dispatch).toHaveBeenCalledWith(fetchEndpointsSuccess({}));
    });
  });
});

describe('Post endpoints', () => {
  it('Should return the action', () => {
    const endpoint = 'Endpoint';
    const error = 'error';
    const action1 = postEndpointSuccess(endpoint);
    const action2 = postEndpointError(error);
    const action3 = postEndpointRequest();

    expect(action1.type).toEqual(POST_ENDPOINT_SUCCESS);
    expect(action2.type).toEqual(POST_ENDPOINT_ERROR);
    expect(action3.type).toEqual(POST_ENDPOINT_REQUEST);
  });

  // it("Request should dispatch postEndpointSuccess", () => {
  //   const postObject = {
  //     endpoints: []
  //   };

  //   global.axios = jest.fn().mockImplementation(() =>
  //     Promise.resolve({
  //       ok: true,
  //       json() {
  //         return postObject;
  //       }
  //     })
  //   );

  //   const dispatch = jest.fn();
  //   return postEndpoint(postObject)(dispatch).then(() => {
  //     expect(axios).toHaveBeenCalledWith("/add");
  //     expect(dispatch).toHaveBeenCalledWith(postEndpointSuccess(postObject));
  //   });
  // });
});

describe('User endpoints', () => {
  it('Should return the action', () => {
    const endpoint = 'Endpoint';
    const error = 'error';
    const action1 = userEndpointSuccess(endpoint);
    const action2 = userEndpointError(error);
    const action3 = userEndpointRequest();

    expect(action1.type).toEqual(USER_ENDPOINT_SUCCESS);
    expect(action2.type).toEqual(USER_ENDPOINT_ERROR);
    expect(action3.type).toEqual(USER_ENDPOINT_REQUEST);
  });
});

describe('Current endpoint', () => {
  it('Should return the action', () => {
    const endpoint = 'Endpoint';
    const action1 = setCurrentEndpointSuccess(endpoint);
    const action3 = setCurrentEndpointRequest();

    expect(action1.type).toEqual(SET_CURRENT_ENDPOINT_SUCCESS);
    expect(action3.type).toEqual(SET_CURRENT_ENDPOINT_REQUEST);
  });
});
