import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { updateProduct, getSingleProduct } from "../../action/productaction";

import "../../assets/style/editproduct.css";
import "../../assets/style/register.css";

export default function Editproduct() {
  const location = useLocation();
  let navigate = useNavigate();
  let dispatch = useDispatch();

  let { id } = useParams();

  const [state, setState] = useState({
    name: "",
    imageurl: "",
    color: "",
    price: "",
    description: ""
  });

  const { product } = useSelector((state) => state.product);

  const { name, imageurl, color, price, description } = state;
  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, []);

  useEffect(() => {
    if (product) {
      setState({ ...product });
    }
  }, [product]);

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !imageurl || !color || !price) {
    } else {
      dispatch(updateProduct(state, id));
      navigate(`/adminpanel`);
    }
  };

  return (
    <div className="edit-product-block bg-blue">
      <h1 className="color-white">Edit Product</h1>
      <p className="color-white">Enter the modification for the product</p>
      <form onSubmit={handleSubmit} autocomplete="off">
        <div className="row">
          <div className="col">
            <div className="form-group row">
              <label className="color-white">PRODUCT NAME</label>
              <input
                className="form-control form-input"
                type={"text"}
                name="name"
                value={name || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group row">
              <label className="color-white">IMAGE URL</label>
              <input
                className="form-control form-input"
                type={"text"}
                name="imageurl"
                value={imageurl || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group row">
              <label className="color-white">PRODUCT COLOR</label>
              <input
                className="form-control form-input"
                type={"text"}
                name="color"
                value={color || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group row">
              <label className="color-white">PRICE</label>
              <input
                className="form-control form-input"
                type={"text"}
                name="price"
                value={price || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group row">
                <label className="color-white">CATEGORY</label>
                <select
                  class="form-select form-control"
                  onChange={handleInputChange}
                  name="category"
                >
                  <option  selected value="">
                    Select any category
                  </option>
                  <option value="smartphone">smartphone</option>
                  <option value="laptops">laptops</option>
                  <option value="headphone">headphone</option>
                  <option value="accessories">accessories</option>
                </select>
              </div>
            <div className="form-group row">
                <label className="color-white">DESCRIPTION</label>
                <textarea style={{resize:"none"}}
                rows={5}
                className="form-control form-input"
                type={"text"}
                name="description"
                value={description || ""}
                onChange={handleInputChange}></textarea>
              </div>
          </div>






          <div className="col edit-product-view">
            <div className="bg-blue edit-product-card">
              <img src={imageurl} alt="image_product" />
              <h3 className="color-white">{name}</h3>
              <p className="color-white">{color}</p>
              <p className="color-white">{price}</p>
            </div>
          </div>
        </div>
        <button type="submit" className="login-button">
          UPDATE
        </button>
      </form>
    </div>
  );
}
