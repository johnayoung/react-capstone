const initialState = {
  environment: 'web',
  appName: 'Cryptosheets',
  header: 'Cryptosheets for Excel',
  subheader: 'Real-time cryptocurrency data, directly into Microsoft Excel.'
};

// Actions
export const SET_ENVIRONMENT = 'SET_ENVIRONMENT';
export const setEnvironment = environment => ({
  type: SET_ENVIRONMENT,
  environment
});

// export const SET_CONTEXT = 'SET_CONTEXT';
// export const setContext = context => ({
//   type: SET_CONTEXT,
//   context
// });

// Reducer
export default function reducer(state = initialState, action) {
  if (action.type === SET_ENVIRONMENT) {
    return Object.assign({}, state, {
      environment: action.environment
    });
  }
  // if (action.type === SET_CONTEXT) {
  //   return Object.assign({}, state, {
  //     context: action.context
  //   });
  // }
  return state;
}
