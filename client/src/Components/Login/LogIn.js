import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { Grid, InputAdornment, Link, TextField } from "@material-ui/core";
import { AccountCircle, LockRounded } from "@material-ui/icons";
import axios from "axios";

const LogIn = ({ handleLog}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}api/user/login`,
      withCredentials: true,
      data: {
        email,
        password,
      },
    }).then((res) => {
      if (res.data.errors) {
        console.log(res.data.errors);
      } else {
        console.log(res);
        window.location = "/";
      }
    }).catch((err) => console.log(err));
  };
  return (
    <Grid container direction="column">
      <form onSubmit={handleLogin}>
        <Grid
          container
          item
          xs={12}
          sm={12}
          alignItems="center"
          direction="column"
        >
          <div className="login-form">
            <h1>Connexion</h1>
            <TextField
              label="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              color="secondary"
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            ></TextField>
            <TextField
              label="Password"
              color="secondary"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockRounded />
                  </InputAdornment>
                ),
              }}
            ></TextField>
            <br />
            <Button
              style={{ color: "#f1f1f1" }}
              color="primary"
              size="large"
              type="submit"
              variant="contained"
            >
              Se Connecter
            </Button>
            <Link
              color="secondary"
              style={{ cursor: "pointer", marginTop: 30, fontWeight: 600 }}
              onClick={(e) => handleLog("register")}
            >
              S'inscrire ?
            </Link>
          </div>
        </Grid>
      </form>
    </Grid>
  );
};

export default LogIn;
