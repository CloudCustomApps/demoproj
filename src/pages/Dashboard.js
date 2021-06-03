import React from 'react';
import { COUPONS } from '../Constants';
import CouponList from '../components/CouponList';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function Dashboard() {
  const classes = useStyles();
  return (
    <Container maxWidth="md" className={classes.container}>
      <CouponList coupons={COUPONS} />
    </Container>
  );
}

export default Dashboard;

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3, 0),
  },
}));
