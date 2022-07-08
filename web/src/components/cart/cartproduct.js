import { getSingleProduct, removeProductFromCart } from "../../action/productaction";
import { useDispatch,useSelector } from "react-redux";

import "../../assets/style/productcard.css";
import "../../assets/style/cart.css";
import close from "../../assets/image/close.png";
import { useEffect, useState } from "react";
import { addProductToCart } from "../../action/useraction";

export default function Cartproduct(props) {
  let dispatch = useDispatch();
  const { user,cart } = useSelector((state) => state.user);
  //const { cart } = useSelector((state) => state.product);
  
  //useEffect(()=>{dispatch(getSingleProduct(props.details.productid));},[])
  const [state, setState] = useState({
    name: "",
    price: "",
    color: "",
    imageurl: "",
  });

  useEffect(()=>{},[user])
 
  const increaseCartQuantity = (e) => {
    console.log("j")
    //console.log(props.details.productid,user)

    dispatch(addProductToCart(props.details.productid._id,user))
  };

  return (
    <div className="cart-card">
      <div className="row">
        <div className="col-md-4">
          <img src={props.details.productid.imageurl} alt="product" />
        </div>
        <div className="col-md-8 cart-product-details">
          <h2 className="inline">{props.details.productid.name}</h2>
          <img src={close} className="" alt="img" />
          <p>{props.details.color}</p>
          <h6 className="float-right inline">{props.details.productid.price}</h6>
          <p>{props.details.quantity}</p>
        </div>
      </div>
      <button onClick={increaseCartQuantity}>+</button>
      <button>-</button>
      <hr />
    </div>
  );
}