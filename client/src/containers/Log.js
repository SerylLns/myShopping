import { Button } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import LogIn from '../Components/Login/LogIn';
import SignUp from '../Components/Login/SignUp';

const Log = () => {
  const [signUp, setSignUp] = useState(true);
  const [signIn, setSignIn] = useState(false);

  const handleLog = (type) => {
    if (type === 'register') {
      setSignIn(false);
      setSignUp(true);
    }
    else if (type === 'login') {
      setSignUp(false);
      setSignIn(true);
    }
  }

  return (
    <div className="log-container">
      {signUp && <SignUp handleLog={handleLog} />}
      {signIn && <LogIn handleLog={handleLog} />}
    </div>
  );
};

export default Log;