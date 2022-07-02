import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLoggedOut } from "../redux/actions";
import { Tooltip } from "@mui/material";
import "../assets/style/header.css";
import logout from "../assets/image/logout.svg";
import add from "../assets/image/add.svg";

export default function Header() {

  const { isLogin, value, user } = useSelector((state) => state.user);

  let dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {}, [isLogin, value]);

  function addProduct() {
    navigate("addProduct");
  }

  function handlelogout(e) {
    dispatch(userLoggedOut());
    navigate("/login");
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
            Hi Admin
          </h3>
        </div>
        <ul style={{ marginLeft: "auto" }} className="navbar-nav ">
          <li className="nav-item">
            <a className="a" onClick={() => addProduct()}>
              <Tooltip title={"Add Product"} placement="top-start">
                <Link className="a" to="addProduct">
                  <img src={add} className="icon" width={"35px"} alt="img" />
                </Link>
              </Tooltip>
            </a>
          </li>
          <li className="nav-item">
            <a className="a" onClick={() => handlelogout()}>
              <Tooltip title={"Logout"} placement="top-start">
                <img src={logout} className="icon" width={"35px"} alt="img" />
              </Tooltip>
            </a>
          </li>
        </ul>
      </div>
  );
}
