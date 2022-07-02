import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ValidateRegister } from "../../validation/register";
import { Tooltip } from "@mui/material";
import { addUser } from "../../action/useraction";
import "../../assets/style/register.css";
import tool from "../../assets/image/questioncircle.svg"

export default function Register() {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const defaultError = {
    firstnameError: "",
    lastnameError: "",
    emailError: "",
    passwordError: "",
    passwordConfirmError: ""
  }

  const [
    { firstnameError, lastnameError, emailError, passwordError, passwordConfirmError },
    setError
  ] = useState(defaultError);


  const { firstname, lastname, email, password } = state;

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    function clearState() {
      setError(defaultError)
    }
    const validate = ValidateRegister(state)
    if (validate === true) {
      clearState()
      dispatch(addUser(state));
      navigate("/login");
    }
    else {
      setError(validate)
    }
  };

  return (
    <div className="register-block">
      <h1>
        Hi Fellow Stranger
      </h1>
      <p>Please enter your details to create a new account</p>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="row">
          <div className="form-group col-md-6">
            <label>FIRST NAME</label>
            <input
              className="form-control form-input"
              type={"text"}
              name="firstname"
              onChange={handleInputChange}
              onBlur={ValidateRegister}
            />
            <p className="register-error color-red" >{firstnameError}</p>
          </div>
          <div className="form-group col-md-6">
            <label>LAST NAME</label>
            <input
              className="form-control form-input"
              type={"text"}
              name="lastname"
              onChange={handleInputChange}
            />
            <p className="register-error color-red" >{lastnameError}</p>
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-6">
            <label>EMAIL ADDERSS</label>
            <input
              className="form-control form-input"
              type={"text"}
              name="email"
              onChange={handleInputChange}
            />
            <p className="register-error color-red" >{emailError}</p>
          </div>
          <div className="form-group col-md-6">
            <label>PHONE NUMBER</label>
            <input
              className="form-control form-input"
              type={"text"}
              name="email"
              onChange={handleInputChange}
            />
            <p className="register-error color-red" >{emailError}</p>
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-6">
            <label>PASSWORD <Tooltip title={"Password should be \nlength greater than 8\nShould contain atleast one\nalphabets upper and lower case \nnumber \nspecial characters[@,#,$,%,&,!]"} placement="right"><img src={tool} /></Tooltip></label>
            <input
              className="form-control form-input"
              type={"text"}
              name="password"
              onChange={handleInputChange}
            />
            <p className="register-error color-red" >{passwordError}</p>
          </div>
          <div className="form-group col-md-6">
            <label>CONFIRM PASSWORD</label>
            <input
              className="form-control form-input"
              type={"password"}
              name="confirmpassword"
              onChange={handleInputChange}
            />
            <p className="register-error color-red" >{passwordConfirmError}</p>
          </div>
        </div>
        <div className="form-check">
          <input required
            className="form-check-input check"
            type="checkbox"
            value=""
          />
          <label className="form-check-label">
            By checking here, you agree to our <strong>T&C</strong>.
          </label>
        </div>
        <button type="submit" className="login-button">CONTINUE</button>
      </form>
    </div>
  );
}