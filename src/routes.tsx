import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CreateAccount } from './Screens';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={CreateAccount} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
