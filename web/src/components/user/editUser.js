import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { useLocation ,useNavigate} from "react-router-dom"
import "../../assets/style/register.css";

import {
  updateUser,
  getSingleUser,
  userLoggedOut,
} from "../../action/useraction";

export default function Edituser() {

  const location = useLocation();
  let navigate = useNavigate();

  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const { user } = useSelector((state) => state.user);
  let dispatch = useDispatch();
  const { firstname, lastname, email, password } = state;

  useEffect(() => {
    dispatch(getSingleUser(location.state.id));
  }, []);

  useEffect(() => {
    if (user) {
      setState({ ...user });
    }
  }, [user]);

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstname || !lastname || !email || !password) {
      console.log("enter form");
    } else {
      dispatch(updateUser(state, location.state.id));
      localStorage.clear();
      dispatch(userLoggedOut());
      navigate("/login");
    }
  };

  return (
    <>
      <div className="login-block">
        <h1>Edit Profile</h1>
        <p>Enter the details that you like to edit</p>
        <form onSubmit={handleSubmit} autocomplete="off">
          <div className="row">
            <div className="form-group col-md-6">
              <label>FIRST NAME</label>
              <input
                className="form-control form-input"
                type={"text"}
                name="firstname"
                value={firstname || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group col-md-6">
              <label>LAST NAME</label>
              <input
                className="form-control form-input"
                type={"text"}
                name="lastname"
                value={lastname || ""}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label>EMAIL ADDERSS</label>
            <input
              className="form-control form-input"
              type={"text"}
              name="email"
              value={email || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>PASSWORD</label>
            <input
              className="form-control form-input"
              type={"password"}
              name="password"
              value={password || ""}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="login-button">UPDATE</button>
        </form>
      </div>
    </>
  );
}
