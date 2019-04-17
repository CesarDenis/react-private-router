import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import fakeAuth from '../util/fakeAuth';

const GuestRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !fakeAuth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
);

export default GuestRoute;
