import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CreateAccount, Account } from './Pages';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={CreateAccount} />
      <Route path="/:name" component={Account} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
