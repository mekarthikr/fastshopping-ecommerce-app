import React, { useEffect } from "react";
import Cartproduct from "./cartproduct";
import Cartsummary from "./cartSummary";
import { useDispatch, useSelector } from "react-redux";
import { getUserCart, proceedToBuy } from "../../action/useraction";

import arrow from "../../assets/image/arrowleft.svg";
import "../../assets/style/cart.css";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { user, cart,userCart } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUserCart(user._id));
  }, [user,userCart]);

  const proceedToCheckOut=(event)=>{
    event.preventDefault();
    dispatch(proceedToBuy(user._id))
  }

  const goBack=()=>{
    navigate(-1)
  }

  return (
    <div className="cart-container">
        <img src={arrow} width={"30px"} style={{margin:"0 0 10px 0"}} onClick={goBack} />
        <h1>Check Out</h1>
        <hr/>
        <h3>Enter the shipping address</h3>
        <div className="row">
            <div className="col-md-6">
                <form autoComplete="off">
                    <div className="row">
                        <div className="form-group col-md-12">
                            <label>ADDRESS</label>
                            <input  className="form-control form-input" type={"text"} name="address-line-2" />
                        </div>
                        <div className="form-group col-md-12">
                            <label>APPARTMENT , SUITE , ETC</label>
                            <input className="form-control form-input" type={"text"} name="address-line-2" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-12">
                            <label>CITY</label>
                            <input
                            className="form-control form-input"
                            type={"text"}
                            name="city"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-4">
                            <label>COUNTRY</label>
                            <input
                            className="form-control form-input"
                            type={"text"}
                            name="country"
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <label>STATE</label>
                            <input
                            className="form-control form-input"
                            type={"text"}
                            name="state"
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <label>PINCODE</label>
                            <input
                            className="form-control form-input"
                            type={"number"}
                            name="pincode"
                            />
                        </div>
                    </div>
                    <div style={{margin:"3% 15% 0 15%"}} className="form-check">
                        <input required className="form-check-input check" type="checkbox" value="" />
                        <label className="form-check-label">Click the Check box to confirm the above mentioned address is correct</label>
                    </div>
                    <button type="submit" className="login-button" onClick={proceedToCheckOut}>PROCEED TO BUY</button>
                </form>
            </div>
            <div className="col-md-6">
                {console.log(cart)}
                {
                    cart.map((product)=>(
                    <div style={{margin:"0 10% 0 10%"}} >
                        <img style={{width:"130px",display:"inline"}} src={product.productid.imageurl} />
                        <h5 style={{display:"inline"}} >{product.productid.name}</h5>
                        <h5 style={{display:"inline",float:"right",margin:"8% 0 8% 0"}} >{product.productid.price}{" "}{" "}x{" "}{product.quantity}</h5>
                    </div>))
                }
            </div>
        </div>
    </div>
  );
}