import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetail, userLogout } from "../action/useraction";
import { Tooltip } from "@mui/material";

import "../assets/style/header.css";
import userprof from "../assets/image/profile.svg";
import logout from "../assets/image/logout.svg";
import cart from "../assets/image/cartempty.svg";

export default function UserHeader() {
  const { tokenId, user } = useSelector((state) => state.user);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(setUserDetail(tokenId));
  }, [tokenId,dispatch]);

  function handlelogout(e) {
    dispatch(userLogout());
    navigate("/");
  }

  return (
    <div
      className="collapse navbar-collapse a float-right"
      style={{ float: "right" }}
      id="navbarNavDropdown"
    >
      <div className="header-name">
        <h3
          className="header-name"
          style={{
            fontWeight: "700",
            fontSize: "22px",
            maxHeight: "20px",
            color: "rgb(239, 224, 202);!important",
          }}
        >
          Hi {user.firstname} {user.lastname}
        </h3>
      </div>
      <ul style={{ marginLeft: "auto" }} className="navbar-nav ">
        <li className="nav-item">
          <Tooltip title={"Profile"} placement="top-start">
            <a href="profile" className="a">
              <Link to="/profile">
                <img src={userprof} className="icon" width={"35px"} alt="img" />
              </Link>
            </a>
          </Tooltip>
        </li>
        <li className="nav-item">
          <Tooltip title={"Cart"} placement="top-start">
            <Link className="a" to="/cart">
              <img
                src={cart}
                className="icon"
                width={"35px"}
                alt="img"
              />
            </Link>
          </Tooltip>
        </li>
        <li className="nav-item">
          <a className="a" href="logout" onClick={() => handlelogout()}>
            <Tooltip title={"Logout"} placement="top-start">
              <img src={logout} className="icon" width={"35px"} alt="img" />
            </Tooltip>
          </a>
        </li>
      </ul>
    </div>
  );
}

