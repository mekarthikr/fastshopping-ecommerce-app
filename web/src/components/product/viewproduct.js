import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getSingleProduct, clearProducts } from "../../action/productaction";
import { addProductToCart } from "../../action/useraction";
import ReactJsAlert from "reactjs-alert";
import "../../assets/style/register.css";
import "../../assets/style/viewproduct.css";
import arrow from "../../assets/image/arrowleft.svg";

export default function Viewproduct() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { product } = useSelector((state) => state.product);
  const { user } = useSelector((state) => state.user);

  let dispatch = useDispatch();
  const [status, setStatus] = useState(false);
  const [type, setType] = useState("success");
  const [title, setTitle] = useState("This is a alert");

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [dispatch, id]); 

  const addToCart = (e) => {
    e.preventDefault();
    setStatus(true);
    setType("info");
    setTitle(`${product.name} has been added to cart`);
    dispatch(addProductToCart(id, user));
  };

  const goBack = () => {
    dispatch(clearProducts());
    navigate(-1);
  };

  return (
    <>
      <div className="main-view-product">
        <img src={arrow} width={"30px"} style={{ margin: "0 0 10px 0" }} onClick={goBack} />
        <div className="row">
          <div className="col">
            <img className="" alt="product" width={680} height={680} src={product.imageurl} />
          </div>
          <div style={{ borderRadius: "30px 0px 0px 30px" }} className="col ">
            <div style={{ margin: "5% 2%" }} className=" main-detail-product">
              <h1 className="color-blue">{product.name}</h1>
              <h2 className="color-blue">Color : {product.color}</h2>
              <p className="color-blue">Price : {product.price}</p>
              <p className="color-blue">Description</p>
              <p className="color-blue">{product.description}</p>
              <button className="color-white bg-blue" onClick={addToCart}> ADD </button>
            </div>
          </div>
        </div>
      </div>
      <ReactJsAlert status={status} type={type} title={title} Close={() => {
          setStatus(false);
        }}/>
    </>
  );
}
