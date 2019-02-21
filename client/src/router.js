import React from 'react';
import UniversalRouter from 'universal-router';
import NotFound from './containers/NotFound';
import routes from './routes';

const options = {
  context: { user: null },
  baseUrl: '/',
  resolveRoute(context, params) {
    if (typeof context.route.action === 'function') {
      return context.route.action(context, params);
    }
    return undefined;
  },
  errorHandler(error, context) {
    console.info('The console error is ', error);
    console.info('The context error is ', context);
    return error.status === 404 ? <NotFound /> : <NotFound />;
  }
};

export default new UniversalRouter(routes, options);
