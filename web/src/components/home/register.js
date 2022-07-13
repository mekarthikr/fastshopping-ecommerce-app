import ReactJsAlert from "reactjs-alert";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ValidateRegister } from "../../validation/register";
import { Tooltip } from "@mui/material";
import { addUser, resetRegister } from "../../action/useraction";
import "../../assets/style/register.css";
import tool from "../../assets/image/questioncircle.svg"

export default function Register() {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const [status, setStatus] = useState(false);
  const [type, setType] = useState("success");
  const [title, setTitle] = useState("This is a alert");

  const { registerIsFailed, registerIsSuccess, registerMessage } = useSelector(
    (state) => state.user
  );

  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber:"",
    password: "",
    confirmpassword: "",
  });

  const defaultError = {
    firstnameError: "",
    lastnameError: "",
    emailError: "",
    phonenumberError:"",
    passwordError: "",
    passwordConfirmError: ""
  }

  const [
    { firstnameError, lastnameError, emailError, phonenumberError, passwordError, passwordConfirmError },
    setError
  ] = useState(defaultError);

  useEffect(()=>{
    if(registerIsFailed)
    {
      alert(registerMessage);
      // setStatus(true);
      // setType("failed");
      // setTitle(registerMessage);
    }else if(registerIsSuccess)
    {
      setStatus(true);
      setType("success");
      setTitle(registerMessage);
      // alert("register success")
    }
  },[registerIsFailed,registerMessage])

  const { firstname, lastname, email,phonenumber, password } = state;

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
      //delete state.confirmpassword
      dispatch(addUser(state));
     // navigate("/");
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
            <p className="register-error " >{firstnameError}</p>
          </div>
          <div className="form-group col-md-6">
            <label>LAST NAME</label>
            <input
              className="form-control form-input"
              type={"text"}
              name="lastname"
              onChange={handleInputChange}
            />
            <p className="register-error" >{lastnameError}</p>
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
            <p className="register-error " >{emailError}</p>
          </div>
          <div className="form-group col-md-6">
            <label>PHONE NUMBER</label>
            <input
              className="form-control form-input"
              type={"text"}
              name="phonenumber"
              onChange={handleInputChange}
            />
            <p className="register-error" >{phonenumberError}</p>
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-6">
            <label>PASSWORD <Tooltip title={"Password should be \nlength greater than 8\nShould contain atleast one\nalphabets upper and lower case \nnumber \nspecial characters[@,#,$,%,&,!]"} placement="right"><img src={tool} /></Tooltip></label>
            <input
              className="form-control form-input"
              type={"password"}
              name="password"
              onChange={handleInputChange}
            />
            <p className="register-error" >{passwordError}</p>
          </div>
          <div className="form-group col-md-6">
            <label>CONFIRM PASSWORD</label>
            <input
              className="form-control form-input"
              type={"password"}
              name="confirmpassword"
              onChange={handleInputChange}
            />
            <p className="register-error " >{passwordConfirmError}</p>
          </div>
        </div>
        <div style={{margin:"0 33% 0 33%"}} className="form-check">
          <input required className="form-check-input check" type="checkbox" value="" />
          <label className="form-check-label">
            By checking here, you agree to our  <a href="https://mekarthikr.github.io/dummytext/" target="_blank" style={{textDecoration:"none",color:"black"}} > <strong>T<span>&#38;</span>C</strong></a>.
          </label>
        </div>
        <button type="submit" className="login-button">CONTINUE</button>
      </form>
      <ReactJsAlert status={status} type={type} title={title} Close={ async () => {
        
        if(registerIsSuccess)
        {
          setStatus(false)
          navigate("/");
          dispatch(resetRegister())
        }
        setStatus(false)
      }} />
    </div>
  );
}