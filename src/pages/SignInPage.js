import React from 'react';
import { SignIn } from 'designops';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const SignInPage = (props) => {
  const navigate = useNavigate();
  const classes = useStyles();

  function handleClick() {
    navigate.push('/dashboard');
  }

  return (
    <div className={classes.container}>
      <SignIn
        validation="true"
        firstLabel="Please enter your email"
        handleClick={handleClick}
      />
    </div>
  );
};

export default SignInPage;

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
