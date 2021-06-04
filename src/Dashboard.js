import React from 'react';
import './App.css';
import { Container } from '@material-ui/core';
import { COUPONS } from './Constants';
import CouponList from './components/CouponList';
import { SignIn } from 'designops';

function Dashboard() {
  return (
    <div className="flex">
      <Container maxWidth="md">
        <CouponList coupons={COUPONS} />
      </Container>
    </div>
  );
}

export default Dashboard;
