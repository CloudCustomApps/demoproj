import React from 'react';
import { COUPONS } from '../Constants';
import CouponList from '../components/CouponList';
import { Container } from '@material-ui/core';

function Dashboard() {
  return (
    <Container maxWidth="md">
      <CouponList coupons={COUPONS} />
    </Container>
  );
}

export default Dashboard;
