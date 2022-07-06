import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetail, userLogout,userLoggedOut } from "../action/useraction";  //admin logout have to be added
import { Tooltip } from "@mui/material";
import jwtDecode from "jwt-decode";
import "../assets/style/header.css";
import userprof from "../assets/image/profile.svg";
import logout from "../assets/image/logout.svg";
import cart from "../assets/image/cart.svg";
import cartempty from "../assets/image/cartempty.svg";

export default function UserHeader() {
  const { isLogin, tokenId,user } = useSelector((state) => state.user);
  const { value } = useSelector((state) => state.product);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  
  // const isAuthenticated = localStorage.getItem("token");
  // let token
  // if(isAuthenticated)
  // {
  //   token = jwtDecode(isAuthenticated)
  //   console.log(token)
    
  // }
  // useDispatch(setUserDetail(token.id))
  // useEffect(() => {
  //   //const token=jwtDecode(localStorage.getItem("token"))
  //   // if(token)
  //   // {
  //   //   dispatch(setUserDetail(token.id)) 
  //   // }
 
        
  // }, [isLogin, value])
  useEffect(()=>{
    dispatch(setUserDetail(tokenId))
  },[tokenId])
  

  

  // useEffect(() => {}, [isLogin, value]);

  function handlelogout(e) {
    console.log(isLogin + value + user);
    dispatch(userLogout());
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
          Hi {user.firstname} {user.lastname}
        </h3>
      </div>
      <ul style={{ marginLeft: "auto" }} className="navbar-nav ">
        <li className="nav-item">
          <Tooltip title={"Profile"} placement="top-start">
            <a className="a">
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
                src={value.length === 0 ? cartempty : cart}
                className="icon"
                width={"35px"}
                alt="img"
              />
            </Link>
          </Tooltip>
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
