const initialState = {
  environment: '',
  appName: '',
  header: '',
  subheader: ''
};

const environmentDetails = {
  web: {
    appName: 'API Hub',
    header: 'GitHub, but for Public APIs.',
    subheader: 'A (not so) Massive Online Repository for API Endpoints'
  },
  excel: {
    appName: 'Cryptosheets',
    header: 'Cryptosheets for Excel',
    subheader: 'Real-time cryptocurrency data, directly into Microsoft Excel.'
  }
};

// Actions
export const SET_ENVIRONMENT = 'SET_ENVIRONMENT';
export const setEnvironment = environment => ({
  type: SET_ENVIRONMENT,
  environment
});

// Reducer
export default function reducer(state = initialState, action) {
  if (action.type === SET_ENVIRONMENT) {
    const { environment } = action;
    console.log({
      environment: action.environment,
      appName: environmentDetails[environment].appName,
      header: environmentDetails[environment].header,
      subheader: environmentDetails[environment].subheader
    });
    return Object.assign({}, state, {
      environment: action.environment,
      appName: environmentDetails[environment].appName,
      header: environmentDetails[environment].header,
      subheader: environmentDetails[environment].subheader
    });
  }
  return state;
}
