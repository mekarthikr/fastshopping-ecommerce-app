import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { addProductToCart } from "../../action/useraction";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import {  useSelector } from "react-redux";
import { loadProducts, deleteProduct } from "../../action/productaction";
import "../../assets/style/productcard.css";
export default function Productcard(props) {
  const { products } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(loadProducts());
  }, []);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  console.log(props.props);
  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  function handleEdit(id) {
    navigate(`/editproduct/${id}`);
  }

  function viewProduct(id) {
    navigate(`/admin/viewproduct/${id}`);
  }

  return (
    <div className="single-product card">
      <img src={props.props.imageurl} alt="product" />
      <div className="inline">
        <h5 className="inline">{props.props.name}</h5>
        <button onClick={() => viewProduct(props.props._id)}>VIEW</button>
      </div>
    </div>
  );
}
