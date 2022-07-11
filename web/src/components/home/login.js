import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ReactJsAlert from "reactjs-alert";

import "../../assets/style/login.css";
import { userLoggedIn } from "../../action/useraction";
import { ValidateLogin } from "../../validation/loginvalidation";

function Login() {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const [state, setState] = useState({ email: "",password: ""});
  const defaultError = {
    emailError: "",
    passwordError: ""
  }


  const [
    { emailError, passwordError},
    setError
  ] = useState(defaultError);


  const [status, setStatus] = useState(false);
  const [type, setType] = useState("success");
  const [title, setTitle] = useState("This is a alert");
  // const [error, setError] = useState("");

  const { loggedInSuccess, loggedInFailed, loginError } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (loggedInFailed) {
      alert(loginError);
    } else if (loggedInSuccess) {
      setStatus(true);
      setType("success");
      setTitle("This is a success alert");

    }
  }, [loginError, loggedInSuccess]);

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
      dispatch(userLoggedIn(state));
     // navigate("/");
    }
    else {
      setError(validate)
    }


    
  };

  return (
    <div className="login-block">
      <h1> Welcome back! </h1>
      <p className="color-blue">Please sign in below to continue</p>
      {/* <p className="color-red">{error}</p> */}
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="form-group">
          <label>EMAIL ADDERSS</label>
          <input
            className="form-control form-input"
            type={"text"}
            name="email"
            onChange={handleInputChange}
          />
          <p className="register-error color-red" >{emailError}</p>
        </div>
        <div className="form-group">
          <label>PASSWORD</label>
          <input
            className="form-control form-input"
            type={"password"}
            name="password"
            onChange={handleInputChange}
          />
          <p className="register-error color-red" >{passwordError}</p>
        </div>
        <button type="submit" className="login-button">SIGN IN</button>
      </form>
      <p className="line color-blue">
        <span>or</span>
      </p>
      <Link to={"/register"}>
        <button className="login-button">SIGN UP</button>
      </Link>
      <ReactJsAlert status={status} type={type} title={title} quotes={true} quote="Logged in Successfully" Close={() => {
        setStatus(false)
        navigate("/home");
      }} />
    </div>
  );
}

export default Login;