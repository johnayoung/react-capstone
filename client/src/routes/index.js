import React from 'react';

import LandingPage from '../containers/LandingPage';
import RegistrationPage from '../containers/RegistrationPage';
import LoginPage from '../containers/LoginPage';
// import CardContainer from '../container/CardContainer';
// import FieldArraysForm from '../container/FieldArraysForm';
import NotFound from '../containers/NotFound';
// import EndpointSubmit from '../container/EndpointSubmit';

const routes = {
  path: '',
  children: [
    // { path: '/browse', action: (context, params) => <CardContainer /> },
    {
      path: '',
      action: (context, params) => {
        return {
          title: 'Landing Page',
          component: <LandingPage />
        };
      }
    },
    { path: '/signup', action: (context, params) => <RegistrationPage /> },
    { path: '/login', action: (context, params) => <LoginPage /> },
    // { path: '/add', action: (context, params) => <FieldArraysForm /> },
    // { path: '/:username/:endpointName', action: (context, params) => <EndpointSubmit /> }
    { path: '*', action: () => <NotFound /> }
  ],
  async action({ next }) {
    // Execute each child route until one of them return the result
    const route = await next();

    return route;
  }
};

export default routes;
