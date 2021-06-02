import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './App';
import './index.css';

const RoutingPage = (props) => {
  return (
    <Switch>
      <Route path="/" component={App} {...props} />
    </Switch>
  );
};

export default RoutingPage;
