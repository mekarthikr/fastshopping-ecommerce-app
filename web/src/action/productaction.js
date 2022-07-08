import * as types from "./actionType";
import axios from "axios";
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

export const loadProducts = (category="all") => {
  return async function (dispatch) {
    if(category==="all")
    {
      await axiosInstance({ url: "products/" })
      .then((resp) => {
        console.log("resp", resp);
        dispatch(getProducts(resp.data.products));
      })
      .catch((error) => console.log("Error", error));
  }
  else{
    await axiosInstance({ url: `products/?category=${category}` })
    .then((resp) => {
      console.log("resp", resp);
      dispatch(getProducts(resp.data.products));
    })
    .catch((error) => console.log("Error", error));
  }
  }

};

export const deleteProduct = (id) => {
  return async function (dispatch) {
    console.log(id);
    // axios
    //   .delete(`http://localhost:5000/products/${id}`)
      await axiosInstance({url:`products/${id}`,method:"delete"})
      .then((resp) => {
        console.log("resp", resp);
        dispatch(loadProducts());
      })
      .catch((error) => console.log(error));
  };
};

export const addProduct = (product) => {
  return async function (dispatch) {
    console.log("product post", product);
    // axios
    //   .post("http://localhost:5000/products/", product)
      await axiosInstance({url:`products`,method:"post",data:product})
      .then((resp) => {
        console.log("resp", resp);
        dispatch(productAdded());
      })
      .catch((error) => console.log(error));
  };
};

export const getSingleProduct = (id) => {
  return function (dispatch) {
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
  return async function (dispatch) {
    // axios
    //   .put(`http://localhost:5000/products/${id}`, product)
      await axiosInstance({url:`products/${id}`,method:"put",data:product})
      .then((resp) => {
      })
      .catch((error) => console.log(error));
  };
};

export const addToCart = (item) => console.log(item);

export const addProductToCart = (value) => ({
  type: types.ADD_TO_CART,
  payload: value,
});

export const removeProductFromCart = (id) => ({
  type: types.REMOVE_FROM_CART,
  payload: id,
});

export const clearProducts = () => ({
  type: types.CLEAR_PRODUCT,
});
