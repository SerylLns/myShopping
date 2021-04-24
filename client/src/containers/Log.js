import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import LogIn from "../Components/Login/LogIn";
import SignUp from "../Components/Login/SignUp";
import CloseIcon from "@material-ui/icons/Close";

const Log = () => {
  const [signUp, setSignUp] = useState(true);
  const [signIn, setSignIn] = useState(false);
  const [openLog, setOpenLog] = useState(true);
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
      {openLog && (
        <>
          <div className="log-background">
            <div className="log-container">
              {/* <CloseIcon className="close-form" /> */}
              {signUp && <SignUp setOpenLog={setOpenLog} handleLog={handleLog} />}
              {signIn && <LogIn setOpenLog={setOpenLog} handleLog={handleLog} />}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Log;
