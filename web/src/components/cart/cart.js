import React, { useEffect } from "react";
import Cartproduct from "./cartproduct";
import Cartsummary from "./cartSummary";
import { useDispatch, useSelector } from "react-redux";

import "../../assets/style/cart.css";
import { getUserCart, insertCart } from "../../action/useraction";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { products } = useSelector((state) => state.product);
  const { user, userCart, cart } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // useEffect(() => {
  
  // }, []);

  useEffect(() => {  dispatch(getUserCart(user._id));}, [user]);

  console.log("cart",cart)
  const goback = () => {
    navigate(-1);
  };
  
  return (
<div className="cart-container">
      <h1>Your Cart</h1>
      <p>
        {cart.length
          ? `${cart.length} item ships at checkout`
          : "Cart is Empty"}
      </p>
      <div className="cart-main">
        <div className="row">
          <div className="col-md-7">
            <hr />
            <>
              {cart.map((value) => (
                <Cartproduct key={value.id} details={value} />
              ))}
            </>
          </div>
          <div className="col-md-5 summary-section">
            {cart.length !== 0 && <Cartsummary />}
          </div>
        </div>
      </div>
    </div>
  );
}
