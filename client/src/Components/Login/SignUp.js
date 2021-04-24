import React from "react";
import Button from "@material-ui/core/Button";
import { Grid, InputAdornment, Link, TextField } from "@material-ui/core";
import { AccountCircle, LockRounded, AlternateEmail } from "@material-ui/icons";

const SignUp = ({ handleLog }) => {
  return (
    <Grid container direction="column">
      <form action="">
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
