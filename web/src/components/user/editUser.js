// import React, { useEffect } from "react";
// import { useState } from "react";
// import { useDispatch ,useSelector} from "react-redux";
// import { useLocation ,useNavigate} from "react-router-dom"
// import "../../assets/style/register.css";

// import {updateUser, getSingleUser, userLoggedOut, userLogout} from "../../action/useraction";

// export default function Edituser() {

//   const location = useLocation();
//   let navigate = useNavigate();

//   const [state, setState] = useState({
//     firstname: "",
//     lastname: "",
//     email: "",
//     password: "",
//   });

//   const { user } = useSelector((state) => state.user);
//   let dispatch = useDispatch();
//   const { firstname, lastname, email, password ,phonenumber} = state;


//   useEffect(() => {
//     if (user) {
//       setState({ ...user });
//     }
//   }, [user]);

//   const handleInputChange = (e) => {
//     let { name, value } = e.target;
//     setState({ ...state, [name]: value });
//   };

//   const  handleSubmit =  (e) => {
//     e.preventDefault();
//     if (!firstname || !lastname || !email || !password) {
//     } else {
//       dispatch(updateUser(state, user._id,"logout"));
    
//       navigate("/");
//     }
//   };

//   return (
//     <>
//       <div className="login-block">
//         <h1>Edit Profile</h1>
//         <p>Enter the details that you like to edit</p>
//         <form onSubmit={handleSubmit} autocomplete="off">
//           <div className="row">
//             <div className="form-group col-md-6">
//               <label>FIRST NAME</label>
//               <input
//                 className="form-control form-input"
//                 type={"text"}
//                 name="firstname"
//                 value={firstname || ""}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="form-group col-md-6">
//               <label>LAST NAME</label>
//               <input
//                 className="form-control form-input"
//                 type={"text"}
//                 name="lastname"
//                 value={lastname || ""}
//                 onChange={handleInputChange}
//               />
//             </div>
//           </div>
//           <div className="row">
//           <div className="form-group col-md-6">
//             <label>EMAIL ADDERSS</label>
//             <input
//               className="form-control form-input"
//               type={"text"}
//               name="email"
//               value={email || ""}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="form-group col-md-6">
//             <label>PHONE NUMBER</label>
//             <input
//               className="form-control form-input"
//               type={"text"}
//               name="phonenumber"
//               value={phonenumber || ""}
//               onChange={handleInputChange}
//             />
//           </div>
//           </div>
//           <div className="row">
//           <div className="form-group col-md-6">
//             <label>PASSWORD</label>
//             <input
//               className="form-control form-input"
//               type={"password"}
//               name="password"
//               value={password || ""}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="form-group col-md-6">
//             <label>PASSWORD</label>
//             <input
//               className="form-control form-input"
//               type={"password"}
//               name="password"
//               value={password || ""}
//               onChange={handleInputChange}
//             />
//           </div>
//           </div>
//           <button type="submit" className="login-button">UPDATE</button>
//         </form>
//       </div>
//     </>
//   );
// }






import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { useLocation ,useNavigate} from "react-router-dom"
import ReactJsAlert from "reactjs-alert";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { ValidateRegister } from "../../validation/register";
import { Tooltip } from "@mui/material";
import { addUser, resetRegister } from "../../action/useraction";
import "../../assets/style/register.css";
import tool from "../../assets/image/questioncircle.svg"
import "../../assets/style/register.css";

import {updateUser, getSingleUser, userLoggedOut, userLogout} from "../../action/useraction";

export default function Edituser() {
  

  const location = useLocation();
  let navigate = useNavigate();

  // const [status, setStatus] = useState(false);
  // const [type, setType] = useState("success");
  // const [title, setTitle] = useState("This is a alert");

  const { registerIsFailed, registerIsSuccess, registerMessage } = useSelector(
    (state) => state.user
  );

  // const [state, setState] = useState({
  //   firstname: "",
  //   lastname: "",
  //   email: "",
  //   phonenumber:"",
  //   password: "",
  //   confirmpassword: "",
  // });

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


  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const { user } = useSelector((state) => state.user);
  let dispatch = useDispatch();
  const { firstname, lastname, email, password ,phonenumber} = state;


  useEffect(() => {
    if (user) {
      setState({ ...user });
    }
  }, [user]);

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const  handleSubmit =  (e) => {
    e.preventDefault();
    if (!firstname || !lastname || !email || !password) {
    } else {
      dispatch(updateUser(state, user._id,"logout"));
    
     // navigate("/");
    }
  };

  return (
    <>
      <div className="register-block">
        <h1>Edit Profile</h1>
        <p>Enter the details that you like to edit</p>
        <form onSubmit={handleSubmit} autoComplete="off">
        <div className="row">
          <div className="form-group col-md-6">
            <label>FIRST NAME</label>
            <input
              className="form-control form-input"
              type={"text"}
              name="firstname"
              value={firstname || ""}
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
              value={lastname || ""}
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
              name="phonenumber"
              value={phonenumber || ""}
              onChange={handleInputChange}
            />
            <p className="register-error color-red" >{phonenumberError}</p>
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-6">
            <label>PASSWORD <Tooltip title={"Password should be \nlength greater than 8\nShould contain atleast one\nalphabets upper and lower case \nnumber \nspecial characters[@,#,$,%,&,!]"} placement="right"><img src={tool} /></Tooltip></label>
            <input
              className="form-control form-input"
              type={"password"}
              name="password"
              value={password || ""}
              onChange={handleInputChange}
            />
            <p className="register-error color-red" >{passwordError}</p>
          </div>
          <div className="form-group col-md-6">
            <label>CONFIRM PASSWORD</label>
            <input
              className="form-control form-input"
              type={"text"}
              name="confirmpassword"
              onChange={handleInputChange}
            />
            <p className="register-error color-red" >{passwordConfirmError}</p>
          </div>
        </div>
        <div style={{margin:"0 33% 0 33%"}} className="form-check">
          <input required className="form-check-input check" type="checkbox" value="" />
          <label className="form-check-label">
            By checking here, you agree to our  <a href="https://mekarthikr.github.io/dummytext/" target="_blank" style={{textDecoration:"none",color:"black"}} > <strong>T<span>&#38;</span>C</strong></a>.
          </label>
        </div>
        <button type="submit" className="login-button">UPDATE</button>
      </form>
      </div>
    </>
  );
}
