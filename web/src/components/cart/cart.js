import React, { useEffect } from "react";
import Cartproduct from "./cartproduct";
import Cartsummary from "./cartSummary";
import { useDispatch, useSelector } from "react-redux";

import "../../assets/style/cart.css";
import { insertCart } from "../../action/useraction";
import { useNavigate } from "react-router-dom";


export default function Cart() {
  const { products } = useSelector((state) => state.product);
  const { user, userCart } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  useEffect(() => {
    user.cart.map((cartproduct) => {
      products.map((product) => {
        if (product._id === cartproduct.productid) {
          const found = userCart.some(el => el._id === cartproduct.productid);
          if (!found)
          {
            //console.log("dispatched")
            dispatch(insertCart(product, cartproduct))
          }
         

        }
      })
    })
  }, [user])
  const goback=()=>{
    navigate(-1);
  }
  console.log(userCart.length)
  return (
    <div className="cart-container">
      <button onClick={goback}>back</button>
      <h1>Your Cart</h1>
      <p>
        {userCart.length
          ? "Cart is Empty"
          : `${userCart.length} item ships at checkout`}
      </p>
      <div className="cart-main">
        <div className="row">
          <div className="col-md-7">
            <hr />
            <>
              {userCart.map((value) => (
                <Cartproduct key={value.id} details={value} />
              ))}
            </>
          </div>
          <div className="col-md-5 summary-section">
            {user.cart.length !== 0 && <Cartsummary />}
          </div>
        </div>
      </div>
    </div>
  );
}
