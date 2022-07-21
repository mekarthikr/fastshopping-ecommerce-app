import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../../assets/style/cartsummary.css";
import Summarylist from "./summarylist";

export default function Cartsummary() {
  let navigate = useNavigate();

  const { userCart, cart } = useSelector((state) => state.user);

  useEffect(() => {}, [userCart]);

  let TotalPrice = cart.reduce(
    (previousValue, currentValue) =>
      previousValue +
      parseInt(currentValue.productid.price) * currentValue.quantity,
    0
  );

  const navigateToCheckout = (e) => {
    e.preventDefault();
    navigate("/checkout");
  };

  return (
    <div className="summary bg-white">
      <div className="summary bg-white">
        <div>
          <h3>Summary</h3>
          {cart.map((cart) => (
            <Summarylist props={cart} />
          ))}
          <hr />
          <h3 className="d-inline">Total Price</h3>
          <h3 className="d-inline float-right m-4 mb-4 mt-0">{TotalPrice}</h3>
        </div>
        <button className="checkout-button" onClick={navigateToCheckout}> CHECK OUT </button>
      </div>
    </div>
  );
}
