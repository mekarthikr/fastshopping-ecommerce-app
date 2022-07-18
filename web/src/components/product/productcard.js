import React,{ useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addProductToCart } from "../../action/useraction";
import ReactJsAlert from "reactjs-alert";
import "../../assets/style/productcard.css";


export default function Productcard(props) {

  let dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [status, setStatus] = useState(false);
  const [type, setType] = useState("success");
  const [title, setTitle] = useState("This is a alert");

  const addToCart = (e) => {
    e.preventDefault();
    setStatus(true);
    setType("info");
    setTitle(`${props.details.name} has been added to cart`);
    dispatch(addProductToCart(props.details._id,user))
  };

  return (
      <div className="card col-md-4 cardwidth">
        <div className="card-image card-img-main">
          <img
            src={props.details.imageurl}
            className="card-img-top card-image"
            alt="product"
          />
        </div>
        <div className="card-body ">
          <h5 className="card-title color-blue">{props.details.name}</h5>
          <p className="card-text color-blue">Rs {props.details.price}/- </p>
          <div className="bottom-btn">
            <Link to={`/product/${props.details._id}`}>
              <a className="btn bg-blue">VIEW</a>
            </Link>
            <a className="btn bg-blue float-right" onClick={addToCart}>
              ADD
            </a>
          </div>
        </div>
        <ReactJsAlert status={status} type={type} title={title} Close={() => {

        setStatus(false)
      }} />
      </div>
  );
}