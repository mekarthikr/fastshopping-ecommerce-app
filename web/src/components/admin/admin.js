import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_ADMIN } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../../action/useraction";

import "../../assets/style/admin.css";


export function Admin() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const { email, password } = state;

  const [user, setUser] = useState("");

  useEffect(() => getUser(), []);

  const getUser = () => {
    axios.get(API_ADMIN).then((res) => {
      const allUser = res.data;
      setUser(allUser);
    });
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userLoggedIn())
    let profile = user.find(
      (index) => index.email === email && index.password === password
    );
    if (profile !== undefined) {
      navigate("/adminpanel", { profile });
    }
  };

  return (
    <div className="admin-block">
      <h1> Welcome Admin </h1>
      <p>Please login to continue</p>
      <form onSubmit={handleSubmit} autocomplete="off">
        <div className="form-group">
          <label className="admin-label">EMAIL ADDERSS</label>
          <input
            className="form-control admin-form-input"
            type={"text"}
            name="email"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label className="admin-label">PASSWORD</label>
          <input
            className="form-control admin-form-input"
            type={"text"}
            name="password"
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="admin-login-button">
          {" "}
          LOGIN{" "}
        </button>
      </form>
    </div>
  );
}