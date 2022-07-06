import React, { useEffect } from "react";
import Cartproduct from "./cartproduct";
import Cartsummary from "./cartSummary";
import { useDispatch, useSelector } from "react-redux";

import "../../assets/style/cart.css";
import { getUserCart, insertCart } from "../../action/useraction";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { products } = useSelector((state) => state.product);
  const { user, userCart,cart } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  useEffect(()=>{  dispatch(getUserCart(user._id))},[user])

  // console.log(user.cart)
  const goback=()=>{
    navigate(-1);
  }
  console.log("cart",cart.cart)
  return (
    <div className="cart-container">
      <button onClick={goback}>back</button>
      <h1>Your Cart</h1>
      <p>
        {cart.cartlength===0
          ? "Cart is Empty"
          : `${cart.cart.length} item ships at checkout`}
      </p>
      <div className="cart-main">
        <div className="row">
          <div className="col-md-7">
            <hr />
            <>
              {cart.cart.map((value) => (
                <Cartproduct key={value.id} details={value} />
              ))}
            </>
          </div>
          <div className="col-md-5 summary-section">
            {cart.cart.length !== 0 && <Cartsummary />}
          </div>
        </div>
      </div>
    </div>
  );
}
