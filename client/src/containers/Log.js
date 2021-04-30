import React, { useEffect, useState } from "react";
import LogIn from "../Components/Login/LogIn";
import SignUp from "../Components/Login/SignUp";

const Log = ({ setOpenLog }) => {
  const [signUp, setSignUp] = useState(false);
  const [signIn, setSignIn] = useState(true);

  const handleLog = (type) => {
    if (type === "register") {
      setSignIn(false);
      setSignUp(true);
    } else if (type === "login") {
      setSignUp(false);
      setSignIn(true);
    }
  };
  
  return (
    <>
      <div className="log-background">
        <div className="log-container">
          {/* <CloseIcon className="close-form" /> */}
          {signUp && <SignUp setOpenLog={setOpenLog} handleLog={handleLog} />}
          {signIn && <LogIn setOpenLog={setOpenLog} handleLog={handleLog} />}
        </div>
      </div>
    </>
  );
};

export default Log;
