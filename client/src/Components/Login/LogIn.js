import React from "react";
import Button from "@material-ui/core/Button";
import { Grid, InputAdornment, Link, TextField } from "@material-ui/core";
import { AccountCircle, LockRounded } from "@material-ui/icons";

const LogIn = ({ handleLog }) => {
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
            <h1>Connexion</h1>
            <TextField
              label="Email"
              type="email"
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
          <Link color="secondary" style={{cursor: "pointer",marginTop: 30, fontWeight: 600}} onClick={(e) => handleLog("register")}>S'inscrire ?</Link>
          </div>
        </Grid>
      </form>
    </Grid>
  );
};

export default LogIn;
