import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addProductToCart,getUserCart,removeProductFromCart } from "../../action/useraction";
import "../../assets/style/productcard.css";
import "../../assets/style/cart.css";
import close from "../../assets/image/close.png";
import add from "../../assets/image/plus-square.svg"
import minus from "../../assets/image/dash-square.svg"
import ReactJsAlert from "reactjs-alert";

export default function Cartproduct(props) {
  let dispatch = useDispatch();

  const { user,userCart} = useSelector((state) => state.user);
  const [status, setStatus] = useState(false);
  const [type, setType] = useState("success");
  const [title, setTitle] = useState();

  useEffect(() => {
    dispatch(getUserCart(user._id));
  }, [user,dispatch,userCart]);

  const increaseCartQuantity = (e) => {
    e.preventDefault()
    dispatch(addProductToCart(props.details.productid._id, user));
    setStatus(true);
    setType("success");
    setTitle(`${props.details.productid.name} is added to cart`);
  };

  const decreaseCartQuantity = (e) => {
    e.preventDefault()
    dispatch(removeProductFromCart(props.details.productid._id, user));
    setStatus(true);
    setType("success");
    setTitle(`${props.details.productid.name} is removed from cart`);
  };  

  return (
    <div className="cart-card">
      <div className="row">
        <div className="col-md-4">
          <img src={props.details.productid.imageurl} alt="product" />
        </div>
        <div className="col-md-8 cart-product-details">
          <h2 className="inline">{props.details.productid.name}</h2>
          <img src={close} className="" alt="img"/>
          <p>{props.details.color}</p>
          <h6 className="float-right inline">
            {props.details.productid.price}
          </h6>
          <div style={{display:"block"}}>
          <img  style={{display:"inline",float:"none",width:"25px"}} src={add} alt="product" onClick={increaseCartQuantity} />
          <p  style={{display:"inline",margin:"0px 10px",fontSize:"21px"}}>{props.details.quantity}</p>
          <img   style={{display:"inline",float:"none",width:"25px"}}src={minus} alt="product" onClick={decreaseCartQuantity}/>
          </div>
        </div>
      </div>      
      <hr />
      <ReactJsAlert
          status={status}
          type={type}
          title={title}
          Close={() => {setStatus(false)
          }}
        />
        
    </div>
  );
}
