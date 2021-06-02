import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './App';
import './index.css';

const RoutingPage = (props) => {
  return (
    <Switch>
      <Route path="/" exact component={App} {...props} />
      <Route path="/demoprod" exact component={App} {...props} />
    </Switch>
  );
};

export default RoutingPage;
