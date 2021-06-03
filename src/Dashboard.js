import React from 'react';
import './App.css';
import { Container } from '@material-ui/core';
import { COUPONS } from './Constants';
import CouponList from './components/CouponList';

function Dashboard() {
  return (
    <div className="wrapper">
      <Container maxWidth="md">
        <CouponList coupons={COUPONS} />
      </Container>
    </div>
  );
}

export default Dashboard;
