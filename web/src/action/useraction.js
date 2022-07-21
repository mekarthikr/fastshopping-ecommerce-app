import * as types from "./actionType";
import axios from "axios";
// import { API } from "../api/api";
import axiosInstance from "../api/api";
import jwtdecode from "jwt-decode";

const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users,
});

const setUserSession = (token) => ({
  type: types.SET_USER_SESSION,
  payload: token,
});

const userDeleted = () => ({
  type: types.DELETE_USER,
});

const setUser = (data) => ({
  type: types.SET_CART,
  payload: data,
});

const insertToCart = (product) => ({
  type: types.INSERT_TO_CART,
  payload: product,
});

const userAdded = () => ({
  type: types.ADD_USER,
});

const userLoggedInSuccess = (success) => ({
  type: types.USER_LOGGED_IN_SUCCESS,
  payload: success,
});

const clearCart = () => ({
  type: types.CLEAR_CART,
});

const userRegisteredSuccess = (message) => ({
  type: types.USER_ADDED_SUCCESS,
  payload: message,
});

const userRegisteredFailed = (error) => ({
  type: types.USER_ADDED_FAILED,
  payload: error,
});

const adminLoggedInSuccess = () => ({
  type: types.ADMIN_LOGGED_IN_SUCCESS,
});

const adminLoggedInFailed = (error) => ({
  type: types.ADMIN_LOGGED_IN_FAILED,
  payload: error,
});

const userLoggedInFailed = (error) => ({
  type: types.USER_LOGGED_IN_FAILED,
  payload: error,
});

const addUserToken = (token) => ({
  type: types.ADD_USER_TOKEN,
  payload: token,
});

const addAdminToken = (token) => ({
  type: types.ADD_ADMIN_TOKEN,
  payload: token,
});

const getUser = (user) => ({
  type: types.GET_SINGLE_USER,
  payload: user,
});

export const userLogout = (message) => ({
  type: types.USER_IS_LOGGED_OUT,
  payload: message,
});

export const adminLogout = () => ({
  type: types.ADMIN_IS_LOGGED_OUT,
});

export const addUser = (user) => {
  console.log(user)
  return function (dispatch) {
    axios
      .post("http://localhost:5000/users/", user)
      .then((resp) => {
        dispatch(userAdded());
        dispatch(userRegisteredSuccess(resp.data.success));
      })
      .catch(async (error) => {
        await dispatch(userRegisteredFailed(error.response.data.error));
      });
  };
};

export const getSingleUser = (id) => {
  return async function (dispatch) {
    axiosInstance({
      url: `users/${id}`,
      method: "get",
      data: id,
    })
      .then((resp) => {
        dispatch(getUser(resp.data));
      })
      .catch((error) => console.log(error));
  };
};

export const updateUser = (user, id) => {
  return async function (dispatch) {
    await axiosInstance({
      url: `users/${id}`,
      method: "put",
      data: user,
    })
      .then(async (resp) => {
        console.log(resp.data);
        await dispatch(userLogout(resp.data.message));
      })
      .catch((error) => console.log(error));
  };
};

export const userLoggedIn = (credentials) => {
  return function (dispatch) {
    axios
      .post("http://localhost:5000/users/login", credentials)
      .then((res) => {
        if (res) {
          window.localStorage.setItem("token", res.data.token);
          dispatch(addUserToken(res.data.token));
          console.log("res mess", res.data.success);
          dispatch(userLoggedInSuccess(res.data.success));
        }
      })
      .catch(async (error) => {
        await dispatch(userLoggedInFailed(error.response.data.error));
      });
  };
};

export const adminLoggedIn = (credentials) => {
  return async function (dispatch) {
    await axios
      .post("http://localhost:5000/users/login", credentials)
      .then((res) => {
        if (res) {
          window.localStorage.setItem("token", res.data.token);
          dispatch(addAdminToken(res.data.token));
          dispatch(adminLoggedInSuccess());
        }
      })
      .catch(async (error) => {
        await dispatch(adminLoggedInFailed(error.response.data.error));
      });
  };
};

export const addProductToCart = (productid, user) => {
  return async function (dispatch) {
    console.log("called");

    axiosInstance({
      url: `cart/addtocart`,
      method: "post",
      data: {
        productid: productid,
        userid: user._id,
      },
    })
      .then(async (resp) => {
        await dispatch(getUserCart(user._id));
      })
      .catch((error) => console.log(error));
  };
};

export const removeProductFromCart = (productid, user) => {
  return async function (dispatch) {
    axiosInstance({
      url: `cart/removefromcart`,
      method: "post",
      data: {
        productid: productid,
        userid: user._id,
      },
    })
      .then(async (resp) => {
        await dispatch(getUserCart(user._id));
      })
      .catch((error) => console.log(error));
  };
};

export const insertCart = (product, cartproduct) => {
  return async function (dispatch) {
    product["quantity"] = cartproduct.quantity;
    await dispatch(insertToCart(product));
  };
};

export const userLoggedOut = () => ({
  type: types.USER_LOGGED_OUT,
  payload: false,
});

export const resetRegister = () => ({
  type: types.RESET_REGISTER,
});

export const userIsLoggedIn = () => ({
  type: types.USER_IS_LOGGED_IN,
});

export const getUserCart = (id) => {
  return async function (dispatch) {
    await axiosInstance({
      url: `cart/${id}`,
    })
      .then((resp) => {
        dispatch(setUser(resp.data));
      })
      .catch((error) => console.log(error));
  };
};

export const setUserDetail = (userid) => {
  return async function (dispatch) {
    axiosInstance({
      url: `users/${userid}`,
      method: "get",
      data: userid,
    })
      .then((resp) => {
        dispatch(getUser(resp.data));
      })
      .catch((error) => console.log(error));
  };
};

export const proceedToBuy = (id) => {
  return async function (dispatch) {
    axiosInstance({
      url: `cart/${id}`,
      method: "delete",
    }).then(async (resp) => {
      console.log(resp);
      await dispatch(clearCart());
     // await dispatch(setUserDetail(id));
    });
  };
};

export const retainAnySession = () => {
  console.log("called");
  return async function (dispatch, getState) {
    const token = getState().user.token;
    console.log(token);
    const userdetails = jwtdecode(token);
    if (token) {
      await dispatch(setUserSession(token));
      //await dispatch(getSingleUser(userdetails.id))
    }
  };
};
