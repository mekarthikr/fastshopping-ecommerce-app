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

  const goBack=()=> {
    dispatch(clearProducts());
    navigate(-1);
  }

  return (
    <>
      <div className="container main-view-product">
        <img src={arrow} width={"40px"} onClick={goBack} />
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
          <div  style={{margin:"0 0 5% 0",borderRadius:"50px 0px 0px 50px"}}  className="col bg-blue">
          <div style={{margin:"10% 2%"}} className=" main-detail-product">
            <h1 className="color-red">{product.name}</h1>
            <h2 className="color-white">Color : {product.color}</h2>
            <p className="color-white">Price : {product.price}</p>
            <p className="color-white">Description</p>
            <p className="color-white">{product.description}</p>
            <button className="color-blue bg-white" onClick={addToCart}>
              ADD
            </button>
          </div>       
          </div>

        </div>
      </div>
    </>
  );
}
