import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Header from '../components/Header';

import Dashboard from '../pages/Dashboard';
import Users from '../pages/Users';

const Main = () => {
  return (
    <div id="app-container">
      <Header />
      <main>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/users" component={Users} />
          <Redirect from="/" to="/dashboard" />
        </Switch>
      </main>
    </div>
  );
};

export default Main;
