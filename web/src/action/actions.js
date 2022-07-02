// import * as types from "./actionType";
// import axios from "axios";
// import { API, API_PRODUCTS } from "../api/api";

// const getUsers = (users) => ({
//   type: types.GET_USERS,
//   payload: users,
// });

// const getProducts = (products) => ({
//   type: types.GET_PRODUCTS,
//   payload: products,
// });

// const userDeleted = () => ({
//   type: types.DELETE_USER,
// });

// const productDeleted = () => ({
//   type: types.DELETE_PRODUCT,
// });

// const userAdded = () => ({
//   type: types.ADD_USER,
// });

// const productAdded = () => ({
//   type: types.ADD_PRODUCT,
// });

// const userUpdated = () => ({
//   type: types.UPDATE_USER,
// });

// const productUpdated = () => ({
//   type: types.UPDATE_PRODUCT,
// });

// const getUser = (user) => ({
//   type: types.GET_SINGLE_USER,
//   payload: user,
// });

// const getProduct = (product) => ({
//   type: types.GET_SINGLE_PRODUCT,
//   payload: product,
// });

// export const loadUsers = () => {
//   return function (dispatch) {
//     axios
//       .get(API)
//       .then((resp) => {
//         console.log("resp", resp);
//         dispatch(getUsers(resp.data));
//       })
//       .catch((error) => console.log(error));
//   };
// };

// export const loadProducts = () => {
//   return function (dispatch) {
//     axios
//       .get(API_PRODUCTS)
//       .then((resp) => {
//         console.log("resp", resp);
//         dispatch(getProducts(resp.data));
//       })
//       .catch((error) => console.log(error));
//   };
// };

// export const deleteUser = (id) => {
//   return function (dispatch) {
//     axios
//       .delete(`${process.env.REACT_APP_API}/${id}`)
//       .then((resp) => {
//         console.log("resp", resp);
//         dispatch(userDeleted());
//         dispatch(loadUsers());
//       })
//       .catch((error) => console.log(error));
//   };
// };

// export const deleteProduct = (id) => {
//   return function (dispatch) {
//     axios
//       .delete(`${API_PRODUCTS}/${id}`)
//       .then((resp) => {
//         console.log("resp", resp);
//         dispatch(productDeleted());
//         dispatch(loadProducts());
//       })
//       .catch((error) => console.log(error));
//   };
// };

// export const addUser = (user) => {
//   return function (dispatch) {
//     axios
//       .post(API, user)
//       .then((resp) => {
//         console.log("resp", resp);
//         dispatch(userAdded());
//         dispatch(loadUsers());
//       })
//       .catch((error) => console.log(error));
//   };
// };

// export const addProduct = (product) => {
//   return function (dispatch) {
//     axios
//       .post(API_PRODUCTS, product)
//       .then((resp) => {
//         console.log("resp", resp);
//         dispatch(productAdded());
//         dispatch(loadUsers());
//       })
//       .catch((error) => console.log(error));
//   };
// };

// export const getSingleUser = (id) => {
//   return function (dispatch) {
//     axios
//       .get(`${API}/${id}`)
//       .then((resp) => {
//         console.log("resp", resp);
//         dispatch(getUser(resp.data));
//       })
//       .catch((error) => console.log(error));
//   };
// };

// export const getSingleProduct = (id) => {
//   return function (dispatch) {
//     console.log("called")
//     axios
//       .get(`${API_PRODUCTS}/${id}`)
//       .then((resp) => {
//         console.log("resp", resp.data);
//         dispatch(getProduct(resp.data));
//       })
//       .catch((error) => console.log(error));
//   };
// };

// export const updateUser = (user, id) => {
//   return function (dispatch) {
//     axios
//       .put(`${API}/${id}`, user)
//       .then((resp) => {
//         console.log("resp", resp);
//         dispatch(userUpdated());
//       })
//       .catch((error) => console.log(error));
//   };
// };

// export const updateProduct = (product, id) => {
//   return function (dispatch) {
//     axios
//       .put(`${API_PRODUCTS}/${id}`, product)
//       .then((resp) => {
//         console.log("resp", resp);
//         dispatch(productUpdated());
//       })
//       .catch((error) => console.log(error));
//   };
// };

// export const addToCart = (item) => (
//   console.log(item)
// );

// export const addProductToCart = (value) => (
//   {
//     type:types.ADD_TO_CART,
//     payload:value
//   }
// );

// export const removeProductFromCart = (id) => (
//   {
//     type:types.REMOVE_FROM_CART,
//     payload:id
//   }
// );

// export const userLoggedIn = () => (
//   {
//     type:types.USER_LOGGED_IN,
//     payload:true
//   }
// );

// export const userLoggedOut = () => (
//   {
//     type:types.USER_LOGGED_OUT,
//     payload:false
//   }
// );