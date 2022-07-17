import UserHeader from "./Userheader";
import AdminHeader from "./Adminheader";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "../assets/style/header.css";
import coll from "../assets/image/coll.svg";
import remove from "../assets/image/bag.svg";

export default function Header() {
  const { userLoggedin, adminLoggedIn } = useSelector((state) => state.user);

  function navbarView() {
    if (userLoggedin) {
      return <UserHeader />;
    } else if (adminLoggedIn) {
      return <AdminHeader />;
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light nav-bar">
        <img src={remove} width="40" height="40" className="" alt="img" />
      <Link to="/home">
        <a href="home" className="a red">FAST SHOPPING</a>
      </Link>
      <button
        className="button navbar-toggler "
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="">
          <img src={coll} className="icon" width={"60px"} alt="img" />
        </span>
      </button>
      {navbarView()}
    </nav>
  );
}

