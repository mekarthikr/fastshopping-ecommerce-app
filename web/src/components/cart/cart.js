import React, { useEffect } from "react";
import Cartproduct from "./cartproduct";
import Cartsummary from "./cartSummary";
import { useDispatch, useSelector } from "react-redux";
import { getUserCart } from "../../action/useraction";

import arrow from "../../assets/image/arrowleft.svg";
import "../../assets/style/cart.css";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { user, cart, userCart } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUserCart(user._id));
  }, [user, userCart]);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="cart-container">
      <img
        src={arrow}
        width={"30px"}
        style={{ margin: "0 0 10px 0" }}
        onClick={goBack}
      />
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
              {cart.length != 0 ? (
                cart.map((value) => (
                  <Cartproduct key={value.id} details={value} />
                ))
              ) : (
                <img src="https://www.valeorx.com/static/media/empty-cart.60e68bfd.png" style={{width:"300",height:"500"}}/>
              )}
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
