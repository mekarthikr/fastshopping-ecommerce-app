import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  addProductToCart,
  getSingleProduct,
  clearProducts,
} from "../../action/productaction";
import "../../assets/style/register.css";
import "../../assets/style/viewproduct.css";
import arrow from "../../assets/image/arrowleft.svg";

export default function Viewproduct() {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log("id", id);

  // const [state, setState] = useState({
  //   productname: "",
  //   image: "",
  //   color: "",
  //   price: "",
  //   description: ""
  // });

  const { product } = useSelector((state) => state.product);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleProduct(id));
    // if (product) {
    //   setState({ ...product });
    // }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // useEffect(() => {
    
  // }, [product]);
  // console.log(state)

  const addToCart = (e) => {
    e.preventDefault();
    dispatch(addProductToCart(product));
  };
  // console.log(product);
  // console.log(product.description)
  // const productdescription=product.description.split(",")
  // console.log(productdescription)
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
            {/* <p>{product.description}</p> */}
            {/* <ul>
              {productdescription.map((desc)=>(<li>{desc}</li>))}
            </ul> */}

            <button className="color-white bg-blue" onClick={addToCart}>
              ADD
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
