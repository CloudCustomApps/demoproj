import React from 'react';
import './App.css';
import { StickyFooter, SignIn } from '../node_modules/designops/dist/index.js';
import '../node_modules/designops/dist/designops.css';

function App() {
  return (
    <div className="wrapper">
      <SignIn />

      <StickyFooter
        copyright={`@${new Date().getFullYear()} RXP Services. All rights reserved`}
        footerText="Creative agency making happier humans."
        position={'left'}
      />
    </div>
  );
}

export default App;
