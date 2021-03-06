import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleUser, getUserCart, userLogout } from "../action/useraction";
import { Tooltip } from "@mui/material";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import "../assets/style/header.css";
import userprof from "../assets/image/profile.svg";
import logout from "../assets/image/logout.svg";

export default function UserHeader() {
  
  const { tokenId, user, cart } = useSelector((state) => state.user);
  let dispatch = useDispatch();

  useEffect(() => {
    if (tokenId) {
      dispatch(getSingleUser(tokenId));
      dispatch(getUserCart(tokenId));
    }
  }, [tokenId]);

  function handlelogout(e) {
    dispatch(userLogout());
  }
  return (
    <div className="collapse navbar-collapse a float-right" style={{ float: "right" }} id="navbarNavDropdown" >
      <div className="header-name">
        <h3 className="header-name" style={{ fontWeight: "700", fontSize: "22px", maxHeight: "20px", color: "rgb(239, 224, 202);!important"}}>
          Hi {user.firstname} {user.lastname}
        </h3>
      </div>
      <ul style={{ marginLeft: "auto" }} className="navbar-nav ">
        <li className="nav-item">
          <Tooltip title={"Profile"} placement="top-start">
            <Link to="/profile">
              <img src={userprof} className="icon" width={"35px"} alt="img" />
            </Link>
          </Tooltip>
        </li>
        <li className="nav-item">
          <Tooltip title={"Cart"} placement="top-start">
            <Link className="a" to="/cart">
              <Badge color="secondary" badgeContent={cart.length ? cart.length : "0"} >
                <ShoppingCartIcon style={{ width: "35px", height: "35px" }} />
              </Badge>
            </Link>
          </Tooltip>
        </li>
        <li className="nav-item">
          <a className="a" href="/" onClick={() => handlelogout()}>
            <Tooltip title={"Logout"} placement="top-start">
              <img src={logout} className="icon" width={"35px"} alt="img" />
            </Tooltip>
          </a>
        </li>
      </ul>
    </div>
  );
}