import * as types from "../action/actionType";
import jwtdecode from 'jwt-decode'
const initialState = {
  users: [],
  user: {},
  admin:{},
  cart: [],
  //   products: [],
  //   product: {},
  loading: true,
  //   cart:[],
  value: [],
  isUserLogin: false,
  isAdminLogin: true,
  loggedInSuccess: false,
  loggedInFailed: false,
  adminloggedInSuccess: false,
  adminloggedInFailed: false,
  loginError: "",
  adminloginError: "",
  userCart: [],
  userLoggedin: false,
  //userToken:localStorage.getItem("token")
  token: localStorage.getItem("token"),
  tokenId:"",
  adminLoggedIn:false
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
      }
    // case types.GET_PRODUCTS:
    // return {
    //   ...state,
    //   products: action.payload,
    //   loading: false,
    // };
    case types.DELETE_USER:
    //   case types.DELETE_PRODUCT:
    case types.ADD_USER:
    case types.UPDATE_USER:
      return {
        ...state,
        loading: false,
      };
      case types.ADD_ADMIN_TOKEN:
        const admin=jwtdecode(action.payload)
        return{
          ...state,
          adminLoggedIn:true,
          tokenId:admin.id
        }
    case types.INSERT_TO_CART:
      const val = [...state.userCart, action.payload]
      console.log("payload", action.payload)
      return {
        ...state,
        userCart: val
      }
    case types.ADD_USER_TOKEN:
      // const user = jwtdecode(action.token)
      const user = jwtdecode(action.payload)
      return {
        ...state,
        userLoggedin: true,
        tokenId:user.id,
      }
    // :{
    //   return{
    //     ...state,

    //   }
    // }
    case types.GET_SINGLE_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case types.USER_LOGGED_IN:
      return {
        ...state,
        isLogin: true
      }
    case types.USER_LOGGED_IN_SUCCESS:
      return {
        ...state,
        loggedInSuccess: true,
        loggedInFailed: false,
        loginError: ""
      }
    case types.ADMIN_LOGGED_IN_SUCCESS:
      return {
        ...state,
        adminloggedInSuccess: true,
        adminloggedInFailed: false,
        loginError: ""
      }
    case types.USER_LOGGED_IN_FAILED:
      return {
        ...state,
        loggedInSuccess: false,
        loggedInFailed: true,
        loginError: action.payload
      }
    case types.ADMIN_LOGGED_IN_FAILED:
      console.log("error", action.payload)
      return {
        ...state,
        adminloggedInSuccess: false,
        adminloggedInFailed: true,
        adminloginError: action.payload
      }
    case types.USER_LOGGED_OUT:
      window.localStorage.removeItem('token');
      return {
        ...state,
        isLogin: action.payload,
        user: {}
      }
    case types.SET_CART:
      return {
        ...state,
        cart: action.payload.cart
      }
      case types.USER_IS_LOGGED_OUT:
        localStorage.removeItem("token")
        return{
          ...state,
          tokenid:"",
          user:{},
          loggedInSuccess:false,
          userLoggedin:false
        }
    default:
      return state;
  }
};

export default usersReducers;
