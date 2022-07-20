import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleUser, getUserCart, setUserDetail, userLogout } from "../action/useraction";
import { Tooltip } from "@mui/material";
import ReactJsAlert from "reactjs-alert";
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


import "../assets/style/header.css";
import userprof from "../assets/image/profile.svg";
import logout from "../assets/image/logout.svg";
import cart from "../assets/image/cartempty.svg";


export default function UserHeader() {
  const { tokenId, user,cart } = useSelector((state) => state.user);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const [status, setStatus] = useState(false);
  const [type, setType] = useState("success");
  const [title, setTitle] = useState("This is a alert");

  useEffect(() => {
    if(tokenId)
    {
      dispatch(getSingleUser(tokenId));
      dispatch(getUserCart(tokenId));
    }
  }, [tokenId]);

  function handlelogout(e) {
    dispatch(userLogout());

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
            {/* <a href="profile" className="a"> */}
              <Link to="/profile">
                <img src={userprof} className="icon" width={"35px"} alt="img" />
              </Link>
            {/* </a> */}
          </Tooltip>
        </li>
        <li className="nav-item">
          <Tooltip title={"Cart"} placement="top-start">
          <Link className="a" to="/cart">
<Badge color="secondary" badgeContent={cart.length?cart.length : "0"}>
{/* <a className="a" href="/" onClick={() => handlelogout()}> */}
  {/* <Tooltip title={"Logout"} placement="top-start"> */}
  <ShoppingCartIcon style={{width:"35px",height:"35px"}}  />
  {/* </Tooltip> */}
{/* </a> */}

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

