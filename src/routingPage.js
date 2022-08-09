import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import Dashboard from './pages/Dashboard';
import SignInPage from './pages/SignInPage';

const RoutingPage = (props) => {
  return (
    <Routes>
      <Route path="/mainpage" exact component={App} {...props} />
      <Route path="/dashboard" exact component={Dashboard} {...props} />
      <Route path="/" component={SignInPage} {...props} />
    </Routes>
  );
};

export default RoutingPage;
