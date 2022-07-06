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
  useEffect(()=>{  dispatch(getUserCart(user._id))},[])
  useEffect(()=>{},[user])

  // console.log(user.cart)
  const goback=()=>{
    navigate('/login');
  }
  console.log("cart", cart)
  return (
    <div className="cart-container">
      <button onClick={goback}>back</button>
    </div>
  );
}
