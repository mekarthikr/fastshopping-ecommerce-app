import React from "react";
import axios from "axios";
import Productcard from "./productcard";
import { API_PRODUCTS } from "../../api/api";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSingleUser } from "../../action/useraction";
import "../../assets/style/productlist.css";

export default function PersonList() {
  let navigate = useNavigate();
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [products, setStateProduct] = useState([]);
  const id = localStorage.getItem("id");

  function getProducts() {
    axios
      .get(API_PRODUCTS)
      .then((res) => res.data)
      .then((data) => {
        setStateProduct(data);
      });
  }

  useEffect(() => {
    getProducts();
  }, []);

  const { user } = useSelector((state) => state.user);
  const { value } = useSelector((state) => state.product);

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleUser(id));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (user) {
      setState({ ...user });
    }
  }, [user]); // eslint-disable-line react-hooks/exhaustive-deps

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