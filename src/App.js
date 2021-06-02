import React from 'react';
import { useHistory } from 'react-router-dom';
import './App.css';
import { StickyFooter, SignIn } from '../node_modules/designops/dist/index.js';
import '../node_modules/designops/dist/designops.css';

function App() {
  let history = useHistory();
  function handleClick() {
    history.push('/dashboard');
  }
  return (
    <div className="wrapper">
      <SignIn firstLabel="Please enter your email" handleClick={handleClick} />
      <StickyFooter
        copyright={`@${new Date().getFullYear()} RXP Services. All rights reserved`}
        footerText="Creative agency making happier humans."
        position={'left'}
      />
    </div>
  );
}

export default App;
