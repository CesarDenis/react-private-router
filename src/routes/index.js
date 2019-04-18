import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import Private from './private';
import Guest from './guest';

import DefaultLayout from '../containers/DefaultLayout';

import SignUp from '../pages/Auth/SignUp';
import SignIn from '../pages/Auth/SignIn';

const Routes = () => (
  <Router>
    <Switch>
      <Guest path="/signin" component={SignIn} />
      <Guest path="/signup" component={SignUp} />
      <Private path="/" component={DefaultLayout} />
    </Switch>
  </Router>
);

export default Routes;
