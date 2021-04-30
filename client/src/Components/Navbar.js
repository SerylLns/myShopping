import React, { useContext, useState } from "react";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { UidContext } from "../UserContext";
import axios from "axios";
import cookie from "js-cookie";
import { useSelector } from "react-redux";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AdminPage from "../containers/AdminPage";
import SupervisorAccountRoundedIcon from "@material-ui/icons/SupervisorAccountRounded";
import Log from "../containers/Log";
import { NavLink } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const Navbar = () => {
  const uid = useContext(UidContext);
  const [openLog, setOpenLog] = useState(false);
  const userData = useSelector((state) => state.userReducer);

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

  const handleProfile = () => {
    if (uid) {
      handleDisconnect();
    } else {
      setOpenLog(true);
    }
  };

  return (
    <>
      <nav className="navbar">
        <NavLink exact to="/">
          <h3>Nom du site </h3>
        </NavLink>
        <div className="navbar-action">
          {userData && userData.admin && (
            <div className="admin-icon" style={{ cursor: "pointer" }}>
              <NavLink exact to="/admin">
                <SupervisorAccountRoundedIcon fontSize="large" />
              </NavLink>
            </div>
          )}
          <div className="cart-icon">
            <ShoppingCartIcon fontSize="large" color="primary" />
          </div>
          <div className="account-icon" onClick={() => handleProfile()}>
            {uid ? (
              <ExitToAppIcon fontSize="large" />
            ) : (
              <AccountCircle fontSize="large" />
            )}
          </div>
        </div>
      </nav>
      {openLog && <Log setOpenLog={setOpenLog} />}
    </>
  );
};

export default Navbar;
