import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addProductToCart } from "../../action/productaction";
import "../../assets/style/productcard.css";

export default function Productcard(props) {

  let dispatch = useDispatch();

  const addToCart = (e) => {
    e.preventDefault();
    dispatch(addProductToCart(props.details));
  };

  return (
      <div className="card col-2 cardwidth">
        <div className="card-image card-img-main">
          <img
            src={props.details.image}
            className="card-img-top card-image"
            alt="product"
          />
        </div>
        <div className="card-body ">
          <h5 className="card-title color-white">{props.details.productname}</h5>
          <p className="card-text color-white">Rs {props.details.price}/- </p>
          <div className="bottom-btn">
            <Link to={`/product/${props.details.id}`}>
              <a className="btn bg-white">VIEW</a>
            </Link>
            <a className="btn bg-white float-right" onClick={addToCart}>
              ADD
            </a>
          </div>
        </div>
      </div>
  );
}