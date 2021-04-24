import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { Grid, InputAdornment, Link, TextField } from "@material-ui/core";
import { AccountCircle, LockRounded, AlternateEmail } from "@material-ui/icons";
import axios from "axios";

const SignUp = ({ handleLog }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pseudo, setPseudo] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    await axios({
      method: "POST",
      url: `${process.env.REACT_APP_API_URL}api/user/register`,
      data: {
        pseudo,
        email,
        password,
      },
    })
      .then((res) => {
        if (res.data.errors) {
          console.log(res.data.errors);
        } else {
          console.log(res);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Grid container direction="column">
      <form onSubmit={handleRegister}>
        <Grid
          container
          item
          xs={12}
          sm={12}
          alignItems="center"
          direction="column"
        >
          <div className="login-form">
            <h1>Inscription</h1>
            <TextField
              label="Pseudo"
              type="text"
              onChange={(e) => setPseudo(e.target.value)}
              value={pseudo}
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
              label="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              color="secondary"
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AlternateEmail />
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
              S'inscrire
            </Button>
            <Link
              color="secondary"
              style={{ cursor: "pointer", marginTop: 30, fontWeight: 600 }}
              onClick={(e) => handleLog("login")}
            >
              Deja inscrit ?
            </Link>
          </div>
        </Grid>
      </form>
    </Grid>
  );
};

export default SignUp;
