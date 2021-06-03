import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './App';
import './index.css';
import Dashboard from './Dashboard';

const RoutingPage = (props) => {
  return (
    <Switch>
      <Route path="/mainpage" exact component={App} {...props} />
      <Route path="/dashboard" exact component={Dashboard} {...props} />
      <Route path="/" exact component={App} {...props} />
    </Switch>
  );
};

export default RoutingPage;
