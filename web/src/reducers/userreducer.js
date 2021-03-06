import * as types from "../action/actionType";
import jwtdecode from "jwt-decode";
const initialState = {
  users: [],
  user: {},
  admin: {},
  cart: [],
  loading: true,
  value: [],
  isUserLogin: false,
  isAdminLogin: true,
  loggedInSuccess: false,
  loggedInFailed: false,
  registerIsFailed: false,
  registerIsSuccess: false,
  registerMessage: "",
  adminloggedInSuccess: false,
  adminloggedInFailed: false,
  loginMessage: "",
  adminloginError: "",
  userCart: [],
  userLoggedin: false,
  token: localStorage.getItem("token"),
  tokenId: "",
  adminLoggedIn: false,
};

const usersReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case types.USER_IS_LOGGED_IN:
      return {
        ...state,
        isUserLogin: true,
        loading: false,
      };
    case types.DELETE_USER:
    case types.ADD_USER:
    case types.UPDATE_USER:
      return {
        ...state,
        loading: false,
      };
    case types.ADD_ADMIN_TOKEN:
      const admin = jwtdecode(action.payload);
      return {
        ...state,
        adminLoggedIn: true,
        tokenId: admin.id,
      };
    case types.INSERT_TO_CART:
      const val = [...state.userCart, action.payload];
      return {
        ...state,
        userCart: val,
      };
    case types.ADD_USER_TOKEN:
      const user = jwtdecode(action.payload);
      return {
        ...state,
        userLoggedin: true,
        tokenId: user.id,
      };
    case types.GET_SINGLE_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case types.USER_ADDED_SUCCESS:
      return {
        ...state,
        registerIsSuccess: true,
        registerIsFailed: false,
        registerMessage: action.payload,
      };
    case types.USER_ADDED_FAILED:
      return {
        ...state,
        registerIsSuccess: false,
        registerIsFailed: true,
        registerMessage: action.payload,
      };
    case types.RESET_REGISTER:
      return {
        ...state,
        registerIsFailed: false,
        registerIsSuccess: false,
        registerMessage: "",
      };
    case types.USER_LOGGED_IN:
      return {
        ...state,
        isLogin: true,
      };
    case types.USER_LOGGED_IN_SUCCESS:
      return {
        ...state,
        loggedInSuccess: true,
        loggedInFailed: false,
        loginMessage: action.payload,
      };
    case types.ADMIN_LOGGED_IN_SUCCESS:
      return {
        ...state,
        adminloggedInSuccess: true,
        adminloggedInFailed: false,
        loginError: "",
      };
    case types.USER_LOGGED_IN_FAILED:
      return {
        ...state,
        loggedInSuccess: false,
        loggedInFailed: true,
        loginMessage: action.payload,
      };
    case types.ADMIN_LOGGED_IN_FAILED:
      return {
        ...state,
        adminloggedInSuccess: false,
        adminloggedInFailed: true,
        adminloginError: action.payload,
      };
    case types.USER_LOGGED_OUT:
      window.localStorage.removeItem("token");
      return {
        ...state,
        isLogin: action.payload,
        user: {},
        loggedInSuccess: false,
        loggedInFailed: false,
        // loginMessage:"User logged out successfully"
      };
    case types.RETAIN_USER_DETAILS:
      return {
        ...state,
        loggedInSuccess: true,
        userLoggedin: true,
      };
    case types.SET_CART:
      return {
        ...state,
        cart: action.payload.cart,
      };
    case types.CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    case types.USER_IS_LOGGED_OUT:
      localStorage.removeItem("token");
      return {
        ...state,
        tokenid: "",
        user: {},
        loggedInSuccess: false,
        userLoggedin: false,
        // loginMessage:"User Modified"
      };
    case types.ADMIN_IS_LOGGED_OUT:
      localStorage.removeItem("token");
      return {
        ...state,
        tokenid: "",
        admin: {},
        adminloggedInSuccess: false,
        adminLoggedIn: false,
      };
    case types.SET_USER_SESSION:
      const userdetails = jwtdecode(action.payload);
      return {
        tokenId: userdetails.id,
        userLoggedin: true,
      };
    default:
      return state;
  }
};

export default usersReducers;
