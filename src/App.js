import React from 'react';
import './App.css';
import { StickyFooter, AppHeader } from 'designops';
import 'designops/dist/designops.css';
import RoutingPage from './routingPage';
import { makeStyles } from '@material-ui/core/styles';

function App() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <AppHeader />
      <div className={classes.content}>
        <RoutingPage />
      </div>
      <StickyFooter
        copyright={`@${new Date().getFullYear()} RXP Services. All rights reserved`}
        footerText="Creative agency making happier humans."
        position={'left'}
      />
    </div>
  );
}

export default App;

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100vh',
    paddingTop: 64,
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: 1,
  },
}));
