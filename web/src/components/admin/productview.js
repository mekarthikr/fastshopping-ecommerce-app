import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  getSingleProduct,
  clearProducts,
  deleteProduct,
} from "../../action/productaction";

import "../../assets/style/register.css";
import "../../assets/style/viewproduct.css";
import arrow from "../../assets/image/arrowleft.svg";

export default function Productview() {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log("id", id);

  const [state, setState] = useState({
    productname: "",
    image: "",
    color: "",
    price: "",
  });

  const { product } = useSelector((state) => state.product);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, []);

  useEffect(() => {
    if (product) {
      setState({ ...product });
    }
  }, [product]);
  console.log(product);
  function goBack() {
    dispatch(clearProducts());
    navigate(-1);
  }
  const handleDelete = () => {
    dispatch(deleteProduct(id));
    navigate(`/adminpanel`);
  };

  function handleEdit() {
    console.log("id on edit", id);
    navigate(`/editproduct/${id}`);
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
            <button className="color-white bg-blue" onClick={handleDelete}>
              DELETE
            </button>
            <button
              className="color-white bg-blue"
              style={{ margin: "10px" }}
              onClick={handleEdit}
            >
              EDIT
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
