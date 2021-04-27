import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { UidContext } from "../UserContext";
import axios from "axios";
import cookie from "js-cookie";
import { useSelector } from "react-redux";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AdminPage from "../containers/AdminPage";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const uid = useContext(UidContext);
  const [openLog, setOpenLog] = useState(false);
  const userData = useSelector((state) => state.userReducer);
  const [adminPage, setAdminPage] = useState(false);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDisconnect = async () => {
    await axios({
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}api/user/logout`,
      withCredentials: true,
    })
      .then(() => {
        if (window !== "undefined") {
          cookie.remove("jwt", { expires: 1 });
        }
      })
      .catch((err) => console.log(err));
    window.location = "/";
  };

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            ></IconButton>
            <Typography variant="h6" className={classes.title}>
              <NavLink to="/">My Shop</NavLink>
            </Typography>
            {uid && (
              <Typography
                color="primary"
                variant="h5"
                style={{
                  fontFamily: "'Architects Daughter', cursive",
                  fontWeight: 600,
                }}
                className={classes.title}
              >
                Bienvenue {userData.pseudo} !!
              </Typography>
            )}

            <div style={{ marginRight: "10px" }}>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <ShoppingCartIcon color="primary" />
              </IconButton>
            </div>
            {auth && (
              <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  {uid ? (
                    <MenuItem onClick={handleDisconnect}>Deconnexion</MenuItem>
                  ) : (
                    <MenuItem onClick={(e) => setOpenLog(true)}>
                      Se connecter
                    </MenuItem>
                  )}
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
      {/* {openLog && <Log />} */}
      {adminPage && <AdminPage />}
    </>
  );
};

export default Navbar;
