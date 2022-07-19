import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../../assets/style/userProfile.css";

import arrow from "../../assets/image/arrowleft.svg";
import { getSingleUser } from "../../action/useraction";

export default function UserProfile() {
  let navigate = useNavigate();
  const dispatch = useDispatch()
  const { user,tokenId } = useSelector((state) => state.user);

  useEffect(()=>{
    console.log("profile",tokenId)
    if(tokenId)
    {
      //console.log(tokenId)
      dispatch(getSingleUser(tokenId))
    }
  },[tokenId])

  const editHandle = (e) => {
    e.preventDefault();
    navigate("/edit", { state: user });
  };

  const goBack = (e) =>{
    navigate(-1);
  }

  return ( 
    <>
       { user &&     
       <div className="cart-container">
      
      <img alt="go back button" src={arrow} width={"30px"} style={{margin:"0 0 10px 0"}} onClick={goBack} />
  <div className="profile-user">
  <h1 className="color-blue">ACCOUNT PROFILE</h1>
  <hr />
  <div className="row ">
    <div className="col-5 ">
      <div className="profile-img  bg-blue">
        <h2 className="color-white ">
          {user.firstname[0]}
          {user.lastname[0]}
        </h2>
      </div>
    </div>
    <div className="col-7 user-details">
      <div className="row">
        <h2 className="col-6 color-blue">First Name </h2>
        <h2 className="col-6 color-blue">{user.firstname || " "}</h2>
        <h2 className="col-6 color-blue">Last Name </h2>
        <h2 className="col-6 color-blue">{user.lastname}</h2>
        <h2 className="col-6 color-blue">Email ID </h2>
        <h2 className="col-6 color-blue">{user.email}</h2>
        <h2 className="col-6 color-blue">Phone Number </h2>
        <h2 className="col-6 color-blue">{user.phonenumber}</h2>
      </div>
    </div>
  </div>
  <button
    style={{ margin: "5% 40% 0 40%", width: "20%" }}
    className="bg-blue color-white"
    onClick={editHandle}
  >
    Edit Profile
  </button>
  </div>
  </div> 
    } 
    </>
  );
}

