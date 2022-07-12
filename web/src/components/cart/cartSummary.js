import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "../../assets/style/cartsummary.css";
import Summarylist from "./summarylist";

export default function Cartsummary() {
  const { value } = useSelector((state) => state.product);
  const { user, userCart,cart } = useSelector((state) => state.user);
  console.log("cart value",cart)
 // let TotalPrice 
  useEffect(()=>{
   // TotalPrice = cart.reduce((previousValue, currentValue) => previousValue + parseInt(currentValue.productid.price),0 );

  },[userCart])
  let TotalPrice = cart.reduce((previousValue, currentValue) => previousValue + parseInt(currentValue.productid.price)*currentValue.quantity,0 );
  //console.log(TotalPrice)
  return (
      <div className="summary bg-white">
  <div className="summary bg-white">
  <div>
    <h3>Summary</h3>
    {cart.map((cart) => (<Summarylist props={cart} />))}
    <hr />
    <h3>Total Price: {TotalPrice}</h3>
  </div>
  <button className="checkout-button" >CHECK OUT</button>
</div>
      </div>
  );
}

