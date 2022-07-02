import React from "react";
import Cartproduct from "./cartproduct";
import Cartsummary from "./cartSummary";
import { useSelector } from "react-redux";

import "../../assets/style/cart.css";


export default function Cart() {
  const { value } = useSelector((state) => state.product);
  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      <p>
        {value.length
          ? "Cart is Empty"
          : `${value.length} item ships at checkout`}
      </p>
      <div className="cart-main">
        <div className="row">
          <div className="col-md-7">
            <hr />
            <>
              {value.map((value) => (
                <Cartproduct key={value.id} details={value} />
              ))}
            </>
          </div>
          <div className="col-md-5 summary-section">
            {value.length !== 0 && <Cartsummary />}
          </div>
        </div>
      </div>
    </div>
  );
}
