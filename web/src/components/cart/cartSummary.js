import React from "react";
import { useSelector } from "react-redux";
import "../../assets/style/cartsummary.css";

export default function Cartsummary() {
  const { value } = useSelector((state) => state.product);
  const { user, userCart,cart } = useSelector((state) => state.user);
  console.log("cart",cart.cart)

  const getTotal = (cartItem) => {
    const price = cartItem.reduce(
      (totalPrice, productid) => totalPrice + parseInt(productid.price), 0);
    console.log(price);
    console.log("cart",cartItem[0].productid.price)
    
  };
  
  return (
      <div className="summary bg-white">
        <div>
          <h3>Summary</h3>
          {cart.cart.map((cart) => (
            <h4> {cart.productid.name} </h4>
          ))}
          <hr />
          <p>Total price is {getTotal(cart.cart)}</p>

        </div>
      </div>
  );
}