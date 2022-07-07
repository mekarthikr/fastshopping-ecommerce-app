import * as types from "./actionType";
import axios from "axios";
import { API_PRODUCTS } from "../api/api";
import axiosInstance from "../api/middleware";

const getProducts = (products) => ({
  type: types.GET_PRODUCTS,
  payload: products,
});

const productDeleted = () => ({
  type: types.DELETE_PRODUCT,
});

const productAdded = () => ({
  type: types.ADD_PRODUCT,
});

const productUpdated = () => ({
  type: types.UPDATE_PRODUCT,
});

const getProduct = (product) => ({
  type: types.GET_SINGLE_PRODUCT,
  payload: product,
});

export const loadProducts = () => {
  return async function (dispatch) {
    await 
      axiosInstance({url:'products/'})
      .then((resp) => {
        console.log("resp", resp);
        dispatch(getProducts(resp.data.products));
      })
      .catch((error) => console.log("Error",error));
  };
};

export const deleteProduct = (id) => {
  return function (dispatch) {
    console.log(id)
    axios
      .delete(`http://localhost:5000/products/${id}`)
      .then((resp) => {
        console.log("resp", resp);
        //dispatch(productDeleted());
        dispatch(loadProducts());
      })
      .catch((error) => console.log(error));
  };
};

export const addProduct = (product) => {
  return function (dispatch) {
    axios
      .post("http://localhost:5000/products/", product)
      .then((resp) => {
        console.log("resp", resp);
        dispatch(productAdded());
        // dispatch(loadUsers());
      })
      .catch((error) => console.log(error));
  };
};

export const getSingleProduct = (id) => {
  return function (dispatch) {
    //console.log("called")
    axios
      .get(`http://localhost:5000/products/${id}`)
      .then((resp) => {
        console.log("resp", resp.data);
        dispatch(getProduct(resp.data));
      })
      .catch((error) => console.log(error));
  };
};

export const updateProduct = (product, id) => {
  return function (dispatch) {
    axios
      .put(`http://localhost:5000/products/${id}`, product)
      .then((resp) => {
        //console.log("resp", resp);
       // dispatch(productUpdated());
      })
      .catch((error) => console.log(error));
  };
};

export const addToCart = (item) => (
  console.log(item)
);

export const addProductToCart = (value) => (
  {
    type:types.ADD_TO_CART,
    payload:value
  }
);

export const removeProductFromCart = (id) => (
  {
    type:types.REMOVE_FROM_CART,
    payload:id
  }
);

export const clearProducts=()=>({
  type:types.CLEAR_PRODUCT,
})