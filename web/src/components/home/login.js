import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../../api/api";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
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
  const { email, password } = state;
  const [user, setUser] = useState("");

  useEffect(() => getUser(), []); // eslint-disable-line react-hooks/exhaustive-deps

  const getUser = () => {
    axios.get(API).then((res) => {
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
    let profile = user.find(
      (index) => index.email === email && index.password === password
    );
    if (profile !== undefined) {
      localStorage.setItem("id", profile.id);
      setError("");
      dispatch(userLoggedIn());
      navigate("/product", { profile });
    } else {
      setError("Invalid Login Credentials");
    }
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
