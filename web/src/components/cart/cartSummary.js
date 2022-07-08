import React from "react";
import { useSelector } from "react-redux";
import "../../assets/style/cartsummary.css";

export default function Cartsummary() {
//   const { value } = useSelector((state) => state.product);
//   const { user, userCart,cart } = useSelector((state) => state.user);
//   console.log("cart value",cart.cart)

//   const getTotal = (cartItem) => {
//     console.log("cartitem",cartItem)
//     const price = cartItem.reduce(
//       (totalPrice, productid) => totalPrice + parseInt(price), 0);
//     console.log(price);
//     console.log("cart",cartItem[0].productid.price)
//   };

//   let totalPrice = cart.cart.reduce(function (accumulator, item) {
//     return accumulator + parseInt(item.productid.price);
//   }, 0);
// console.log(totalPrice)


  return (
      <div className="summary bg-white">
  {/* <div className="summary bg-white">
  <div>
    <h3>Summary</h3>
    {cart.cart.map((cart) => (
      <h4> {cart.productid.name} </h4>
    ))}
    <hr />
    <p>Total price is {totalPrice}</p>

  </div>
</div> */}
      </div>
  );
}