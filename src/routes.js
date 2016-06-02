import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './views/app';
import Login from './views/login';
import Dashboard from './views/dashboard';

import { requireAuthentication } from './containers/AuthenticatedComponent'; // if parent route isn't protected

export default (
  <Route path="/" component={App}>
    <Route path="/login" component={Login} />
    <Route path="/dashboard" component={Dashboard} />
  </Route>
);
