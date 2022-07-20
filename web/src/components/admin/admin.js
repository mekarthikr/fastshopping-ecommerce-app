import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adminLoggedIn } from "../../action/useraction";
import { ValidateLogin } from "../../validation/loginvalidation";

import "../../assets/style/admin.css";

export function Admin() {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [state, setState] = useState({
    email: "",
    password: "",
    role:"admin"
  });

  const defaultError = {
    emailError: "",
    passwordError: ""
  }


  const [
    { emailError, passwordError},
    setError
  ] = useState(defaultError);

  const { adminloggedInSuccess, adminloggedInFailed, adminloginError } =
    useSelector((state) => state.user);

  useEffect(() => {
    if (adminloggedInFailed) {
      alert(adminloginError);
    } else if (adminloggedInSuccess) {
      navigate("/adminpanel")
    }
  }, [adminloginError, adminloggedInSuccess]);

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    function clearState() {
      setError(defaultError)
    }
    const validate = ValidateLogin(state)
    if (validate === true) {
      clearState()
    dispatch(adminLoggedIn(state));
  }
  else {
    console.log(validate)
    setError(validate)
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
                    <p className="register-error color-red" >{emailError}</p>
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
        <p className="register-error color-red" >{passwordError}</p>
        <button type="submit" className="admin-login-button">
          {" "}
          LOGIN{" "}
        </button>
      </form>
    </div>
  );
}
