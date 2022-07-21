import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ValidateRegister } from "../../validation/register";
import { Tooltip } from "@mui/material";
import "../../assets/style/register.css";
import tool from "../../assets/image/questioncircle.svg";
import "../../assets/style/register.css";
import arrow from "../../assets/image/arrowleft.svg";

import { updateUser } from "../../action/useraction";
import ReactJsAlert from "reactjs-alert";

export default function Edituser() {
  let navigate = useNavigate();

  const defaultError = {
    firstnameError: "",
    lastnameError: "",
    emailError: "",
    phonenumberError: "",
    passwordError: "",
    passwordConfirmError: "",
  };

  const [
    {
      firstnameError,
      lastnameError,
      emailError,
      phonenumberError,
      passwordError,
      passwordConfirmError,
    },
    setError,
  ] = useState(defaultError);

  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    password: "",
    confirmpassword: "",
  });

  const { user } = useSelector((state) => state.user);
  let dispatch = useDispatch();
  const { firstname, lastname, email, password, phonenumber } = state;

  const [status, setStatus] = useState(false);
  const [type, setType] = useState("success");
  const [title, setTitle] = useState("This is a alert");

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
    function clearState() {
      setError(defaultError);
    }

    const validate = ValidateRegister(state);

    if (validate === true) {
      console.log("came");
      clearState();
      delete state.confirmpassword;
      dispatch(updateUser(state, user._id));

      setStatus(true);
      setType("success");
      setTitle("User details Modified login  again to continue",);

    } else {
      setError(validate);
    }
  };

  return (
    <div className="cart-container">
      <img src={arrow} width={"30px"} style={{ margin: "0 0 10px 0" }} />
      <div className="register-block">
        <h1>Edit Profile</h1>
        <p>Enter the details that you like to edit</p>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="row">
            <div className="form-group col-md-6">
              <label>FIRST NAME</label>
              <input className="form-control form-input" type={"text"} name="firstname" value={firstname || ""} onChange={handleInputChange} />
              <p className="register-error color-red">{firstnameError}</p>
            </div>
            <div className="form-group col-md-6">
              <label>LAST NAME</label>
              <input className="form-control form-input" type={"text"} name="lastname" value={lastname || ""} onChange={handleInputChange} />
              <p className="register-error color-red">{lastnameError}</p>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-6">
              <label>EMAIL ADDERSS</label>
              <input className="form-control form-input" type={"text"} name="email" value={email || ""} onChange={handleInputChange} />
              <p className="register-error color-red">{emailError}</p>
            </div>
            <div className="form-group col-md-6">
              <label>PHONE NUMBER</label>
              <input className="form-control form-input" type={"text"} name="phonenumber" value={phonenumber || ""} onChange={handleInputChange} />
              <p className="register-error color-red">{phonenumberError}</p>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-6">
              <label>PASSWORD{" "}
                <Tooltip
                  title={
                    "Password should be \nlength greater than 8\nShould contain atleast one\nalphabets upper and lower case \nnumber \nspecial characters[@,#,$,%,&,!]"
                  }
                  placement="right"
                >
                  <img src={tool} />
                </Tooltip>
              </label>
              <input className="form-control form-input" type={"password"} name="password" value={password || ""} onChange={handleInputChange} />
              <p className="register-error color-red">{passwordError}</p>
            </div>
            <div className="form-group col-md-6">
              <label>CONFIRM PASSWORD</label>
              <input className="form-control form-input" type={"text"} name="confirmpassword" onChange={handleInputChange} />
              <p className="register-error color-red">{passwordConfirmError}</p>
            </div>
          </div>
          <button type="submit" className="login-button"> UPDATE </button>
        </form>
      </div>
      <ReactJsAlert status={status} type={type} title={title} Close={() => {
          setStatus(false);
          navigate("/");
        }}/>
    </div>
  );
}
