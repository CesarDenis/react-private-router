import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import Private from './private';
import Guest from './guest';

import Main from './main';

import SignUp from '../pages/Auth/SignUp';
import SignIn from '../pages/Auth/SignIn';

const Routes = () => (
  <Router>
    <Switch>
      <Guest path="/signin" component={SignIn} />
      <Guest path="/signup" component={SignUp} />
      <Private path="/" component={Main} />
    </Switch>
  </Router>
);

export default Routes;
