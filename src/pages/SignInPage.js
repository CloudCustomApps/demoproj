import React from 'react';
import { SignIn } from 'designops';
import { useHistory } from 'react-router-dom';

const SignInPage = (props) => {
  let history = useHistory();

  function handleClick() {
    history.push('/dashboard');
  }

  return (
    <SignIn firstLabel="Please enter your email" handleClick={handleClick} />
  );
};

export default SignInPage;
