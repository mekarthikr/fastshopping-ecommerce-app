import React, { useEffect } from "react";
import Cartproduct from "./cartproduct";
import Cartsummary from "./cartSummary";
import { useDispatch, useSelector } from "react-redux";
import { getUserCart } from "../../action/useraction";

import "../../assets/style/cart.css";

export default function Cart() {
  const { user, cart } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserCart(user._id));
  }, [user]);

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
              {cart.length != 0 ?cart.map((value) => (
                <Cartproduct key={value.id} details={value} />
              )):<h1>No Item To show</h1>}
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
