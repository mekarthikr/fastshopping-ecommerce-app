import React from "react";
import axios from "axios";
import Productcard from "./productcard";
import { API_PRODUCTS } from "../../api/api";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSingleUser } from "../../action/useraction";
import "../../assets/style/productlist.css";
import { loadProducts } from "../../action/productaction";

export default function PersonList() {
  let dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(loadProducts())
  }, [products]);

  

  return (
    <div className="main-container profile">
      <div className="main-container row">
        {products.map((products) => (
          <Productcard key={products.id} details={products} />
        ))}
      </div>
    </div>
  );
}