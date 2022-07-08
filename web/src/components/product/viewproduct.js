import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { addProductToCart, getSingleProduct, clearProducts} from "../../action/productaction";
import "../../assets/style/register.css";
import "../../assets/style/viewproduct.css";
import arrow from "../../assets/image/arrowleft.svg";

export default function Viewproduct() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { product } = useSelector((state) => state.product);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const addToCart = (e) => {
    e.preventDefault();
    dispatch(addProductToCart(product));
  };

  function goBack() {
    dispatch(clearProducts());
    navigate(-1);
  }

  return (
    <>
      <div className="container main-view-product">
        <img src={arrow} width={"40px"} onClick={() => goBack()} />
        <div className="row">
          <div className="col">
            <img
              className=""
              alt="product"
              width={680}
              height={680}
              src={product.imageurl}
            />
          </div>
          <div className="col main-detail-product">
            <h1>{product.productname}</h1>
            <h2>{product.color}</h2>
            <p>{product.price}</p>
            <button className="color-white bg-blue" onClick={addToCart}>
              ADD
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
