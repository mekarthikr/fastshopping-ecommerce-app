import * as types from "./actionType";
import axios from "axios";
import axiosInstance from "../api/api";

const getProducts = (products, pageCount) => ({
  type: types.GET_PRODUCTS,
  payload: products,
  pagecount: pageCount,
});

const getAdminProducts = (products) => ({
  type: types.GET_PRODUCTS,
  payload: products,
});

const productAdded = () => ({
  type: types.ADD_PRODUCT,
});

const getProduct = (product) => ({
  type: types.GET_SINGLE_PRODUCT,
  payload: product,
});

const setResponseMessage = (responsemessage) => ({
  type: types.ACTION_RESPONSE_MESSAGE,
  payload: responsemessage,
});

export const loadAdminProducts = () => {
  return async function (dispatch) {
    await axiosInstance({
      url: "products/admin/",
    })
      .then((resp) => {
        console.log(resp);
        dispatch(getAdminProducts(resp.data.products));
      })
      .catch((error) => console.log("Error", error));
  };
};

export const loadProducts = (category = "all", pages) => {
  return async function (dispatch) {
    if (category === "all") {
      await axiosInstance({
        url: `products/?pages=${pages}`,
      })
        .then((resp) => {
          console.log(resp);
          dispatch(
            getProducts(resp.data.products, resp.data.Pagination.pageCount)
          );
        })
        .catch((error) => console.log("Error", error));
    } else {
      await axiosInstance({
        url: `products/?category=${category}&pages=${pages}`,
      })
        .then(async (resp) => {
          await dispatch(
            getProducts(resp.data.products, resp.data.Pagination.pageCount)
          );
        })
        .catch((error) => console.log("Error", error));
    }
  };
};

export const deleteProduct = (id) => {
  return async function (dispatch) {
    await axiosInstance({
      url: `products/${id}`,
      method: "delete",
    })
      .then((res) => {
        console.log(res.data);
        // await dispatch(setResponseMessage(res.data))
        dispatch(loadProducts());
      })
      .catch((error) => console.log(error));
  };
};

export const addProduct = (product) => {
  console.log(product);
  return async function (dispatch) {
    await axiosInstance({
      url: `products`,
      method: "post",
      data: product,
    })
      .then(async () => {
        await dispatch(productAdded());
        dispatch(loadProducts());
      })
      .catch((error) => console.log(error));
  };
};

export const getSingleProduct = (id) => {
  return function (dispatch) {
    axios
      .get(`http://localhost:5000/products/${id}`)
      .then((resp) => {
        dispatch(getProduct(resp.data));
      })
      .catch((error) => console.log(error));
  };
};

export const updateProduct = (product, id) => {
  return async function (dispatch) {
    await axiosInstance({
      url: `products/${id}`,
      method: "put",
      data: product,
    })
      .then((resp) => {})
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

export const increasePage = () => ({
  type: types.INCREASE_PAGE_COUNT,
});

export const decrementPage = () => ({
  type: types.DECREMENT_PAGE_COUNT,
});
