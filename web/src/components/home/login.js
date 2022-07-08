import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../../assets/style/login.css";
import { userLoggedIn } from "../../action/useraction";

function Login() {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const { loggedInSuccess, loggedInFailed, loginError } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (loggedInFailed) {
      alert(loginError);
    } else if (loggedInSuccess) {
      navigate("/home");
    }
  }, [loginError, loggedInSuccess]);

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userLoggedIn(state));
  };

  return (
    <div className="login-block">
      <h1> Welcome back! </h1>
      <p className="color-blue">Please sign in below to continue</p>
      <p className="color-red">{error}</p>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="form-group">
          <label>EMAIL ADDERSS</label>
          <input
            className="form-control form-input"
            type={"text"}
            name="email"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>PASSWORD</label>
          <input
            className="form-control form-input"
            type={"password"}
            name="password"
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="login-button">
          {""}
          SIGN IN{""}
        </button>
      </form>
      <p className="line color-blue">
        <span>or</span>
      </p>
      <Link to={"/register"}>
        <button className="login-button">SIGN UP</button>
      </Link>
    </div>
  );
}

export default Login;
