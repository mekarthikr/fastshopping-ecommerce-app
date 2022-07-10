import * as types from "./actionType";
import axios from "axios";
import {
	API
} from "../api/api";
import axiosInstance from "../api/middleware";
import jwtdecode from "jwt-decode";

const getUsers = (users) => ({
	type: types.GET_USERS,
	payload: users,
});

const retainUser = () => ({
	type: types.RETAIN_USER_DETAILS,
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

const userLoggedInSuccess = () => ({
	type: types.USER_LOGGED_IN_SUCCESS,
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

export const userLogout = () => ({
	type: types.USER_IS_LOGGED_OUT,
});

export const adminLogout = () => ({
	type: types.ADMIN_IS_LOGGED_OUT,
});

export const loadUsers = () => {
	return function (dispatch) {
		axios
			.get(API)
			.then((resp) => {
				dispatch(getUsers(resp.data));
			})
			.catch((error) => console.log(error));
	};
};

export const deleteUser = (id) => {
	return function (dispatch) {
		axios
			.delete(`${process.env.REACT_APP_API}/${id}`)
			.then((resp) => {
				dispatch(userDeleted());
				dispatch(loadUsers());
			})
			.catch((error) => console.log(error));
	};
};

export const addUser = (user) => {
	return function (dispatch) {
		//  console.log(user)
		axios
			.post("http://localhost:5000/users/", user)
			.then((resp) => {
				dispatch(userAdded());
			})
			.catch((error) => console.log(error));
	};
};

export const getSingleUser = (id) => {
	return async function (dispatch) {
		axiosInstance({
				url: `users/${id}`,
				method: "get",
				data: id
			})
			.then((resp) => {
				dispatch(getUser(resp.data));
			})
			.catch((error) => console.log(error));
	};
};

export const updateUser = (user, id, action = "none") => {
	return async function (dispatch) {
		await axiosInstance({
				url: `users/${id}`,
				method: "put",
				data: user
			})
			.then((resp) => {})
			.catch((error) => console.log(error));
		if (action === "logout") {
			dispatch(userLogout());
		}
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
					dispatch(userLoggedInSuccess());
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
			.post("http://localhost:5000/admin/login", credentials)
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
/*  */
export const addProductToCart = (productid, user) => {
	return async function (dispatch) {
		if (user.cart.some((index) => index.productid === productid)) {
			const index = user.cart.findIndex((i) => i.productid === productid);
			user.cart[index].quantity = user.cart[index].quantity + 1;
		} else {
			user.cart.push({
				productid: productid,
				quantity: 1
			});
		}
		dispatch(updateUser(user, user._id));
		dispatch(getUserCart(user._id));
	};
};

export const removeProductFromCart = (productid, user) => {
	return async function (dispatch) {
		if (user.cart.some((index) => index.productid === productid)) {
			console.log("action");
			const index = user.cart.findIndex((i) => i.productid === productid);
			console.log(index);
			if (user.cart[index].quantity !== 1) {
				user.cart[index].quantity = user.cart[index].quantity - 1;
				console.log("action", index, user.cart[index].quantity);
			} else {
				user.cart = user.cart.filter((value) => value.productid !== productid);
			}
		}
		await dispatch(updateUser(user, user._id));
		await dispatch(getUserCart(user._id));
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

export const userIsLoggedIn = () => ({
	type: types.USER_IS_LOGGED_IN,
});

export const getUserCart = (id) => {
	return async function (dispatch) {
		await axiosInstance({
				url: `users/cart/${id}`
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
				data: userid
			})
			.then((resp) => {
				dispatch(getUser(resp.data));
			})
			.catch((error) => console.log(error));
	};
};