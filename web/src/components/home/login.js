import axios from "axios";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { API } from "../../api/api";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import "../../assets/style/login.css";
import { userLoggedIn,} from "../../action/useraction";

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
  const { loggedInSuccess,loggedInFailed } = useSelector((state) => state.user);
  useEffect(() =>{}, [error,loggedInSuccess,loggedInFailed ]); // eslint-disable-line react-hooks/exhaustive-deps

  const getUser = () => {
    axios.get(API).then((res) => {
      const allUser = res.data;
      setUser(allUser);
    });
  };
 
  useEffect(() =>{}, [error]); // eslint-disable-line react-hooks/exhaustive-deps


  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(userLoggedIn(state))
    console.log("after dispatch")
    
    console.log(loggedInFailed,loggedInSuccess)
    if(loggedInFailed)
    {
      setError("Invalid Login Credentials")
      console.log(loggedInFailed)
    }
    else if(loggedInSuccess)
    {
      setError("")
      console.log("Correct Credentials")
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
