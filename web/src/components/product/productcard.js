import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addProductToCart } from "../../action/useraction";
import "../../assets/style/productcard.css";


export default function Productcard(props) {

  let dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const addToCart = (e) => {
    console.log("add to cart called")
    e.preventDefault();
    dispatch(addProductToCart(props.details._id,user))
  };

  return (
      <div className="card col-2 cardwidth">
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
      </div>
  );
}