import * as types from "./actionType";
import axios from "axios";
import { API } from "../api/api";
import jwtDecode from 'jwt-decode'
const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users,
});

const userDeleted = () => ({
  type: types.DELETE_USER,
});

const setUser = (data) => ({
  type: types.SET_CART,
  payload:data
});

const insertToCart = (product) => ({
  type: types.INSERT_TO_CART,
  payload: product
});

const userAdded = () => ({
  type: types.ADD_USER,
});

const userUpdated = () => ({
  type: types.UPDATE_USER,
});

const userLoggedInSuccess = () => ({
  type: types.USER_LOGGED_IN_SUCCESS,
})

const adminLoggedInSuccess = () => ({
  type: types.ADMIN_LOGGED_IN_SUCCESS,
})

const adminLoggedInFailed = (error) => ({
  type: types.ADMIN_LOGGED_IN_FAILED,
  payload: error,
})

const userLoggedInFailed = (error) => ({
  type: types.USER_LOGGED_IN_FAILED,
  payload: error,
})

const addUserToken=(token)=>({
  type: types.ADD_USER_TOKEN,
  payload: token
})

const getUser = (user) => ({
  type: types.GET_SINGLE_USER,
  payload: user,
});

export const userLogout=()=>(
  {
    type: types.USER_IS_LOGGED_OUT
  }
)

export const loadUsers = () => {
  return function (dispatch) {
    axios
      .get(API)
      .then((resp) => {
        console.log("resp", resp);
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
        console.log("resp", resp);
        dispatch(userDeleted());
        dispatch(loadUsers());
      })
      .catch((error) => console.log(error));
  };
};

export const addUser = (user) => {
  // user=JSON.stringify(user)
  console.log(user)
  return function (dispatch) {
    axios
      .post("http://localhost:5000/users/", user) //changed from API
      .then((resp) => {
        console.log("resp", resp);
        dispatch(userAdded());
        // dispatch(loadUsers());
      })
      .catch((error) => console.log(error));
  };
};

export const getSingleUser = (id) => {   //change method name
  return async function (dispatch) {
    console.log("user id",id)
    await axios
      .get(`http://localhost:5000/users/${id}`)
      .then((resp) => {
        console.log("resp", resp);
       dispatch(getUser(resp.data));
      })
      .catch((error) => console.log(error));
  };
};

export const updateUser = (user, id) => {
  return function (dispatch) {
    console.log("update",user,id)
    axios
      .put(`http://localhost:5000/users/${id}`, user)
      .then((resp) => {
        console.log("resp", resp);
       // dispatch(userUpdated());
      })
      .catch((error) => console.log(error));
  };
};

export const userLoggedIn = (credentials) => {
  return async function (dispatch) {
    await axios
      .post("http://localhost:5000/users/login", credentials)
      .then((res) => {
        console.log(res)
        if (res) {
          window.localStorage.setItem('token', res.data.token);
         // const decoded = jwtDecode(res.data.token)
          dispatch(addUserToken(res.data.token))
          dispatch(userLoggedInSuccess())
          // dispatch(getSingleUser(decoded.id))
        }
        else {
          console.log("false")
        }
      })
      .catch(async (error) => {
        console.log("Login Error", error.response.data.error)
        await dispatch(userLoggedInFailed(error.response.data.error))
      })
  };
};

export const adminLoggedIn=(credentials)=>{
  return async function (dispatch) {
    await axios
      .post("http://localhost:5000/admin/login", credentials)
      .then((res) => {
        console.log(res)
        if (res) {
          window.localStorage.setItem('token', res.data.token);
          const decoded = jwtDecode(res.data.token)
          dispatch(adminLoggedInSuccess())
          //dispatch(getSingleUser(decoded.id))
        }
        else {
          console.log("false")
        }
      })
      .catch(async (error) => {
        console.log("Login Error", error.response.data.error)
        await dispatch(adminLoggedInFailed(error.response.data.error))
      })
  };
}

export const addProductToCart=(productid,user)=>{
  return async function(dispatch){
    console.log("cart action",productid,user)
    // console.log("cart user",user.cart[0].productid)
    if(user.cart.some(index => index.productid === productid))
    {
      const index = user.cart.findIndex(i => i.productid === productid)
      user.cart[index].quantity=user.cart[index].quantity+1;
      console.log(user.cart[index].quantity)
      //console.log('exists at',index)
    }
    else
    {
      user.cart.push({productid:productid,quantity:1})
      console.log("pushed")
    }
    dispatch(updateUser(user,user._id))
  }
}


export const insertCart=(product,cartproduct)=>{
  return async function(dispatch){
   product["quantity"]=cartproduct.quantity;
   console.log(product)
   await dispatch(insertToCart(product))
  }
}



export const userLoggedOut = () => (
  {
    type: types.USER_LOGGED_OUT,
    payload: false
  }
);

export const  userIsLoggedIn=()=>(
  {
    type:types.USER_IS_LOGGED_IN,
  }
)




export const getUserCart = (id) => {   //change method name
  return async function (dispatch) {
    console.log("user id",id)
    await axios
      .get(`http://localhost:5000/users/cart/${id}`)
      .then((resp) => {
        console.log("response data", resp.data);
        dispatch(setUser(resp.data))
      })
      .catch((error) => console.log(error));
  };
};



export const setUserDetail=(userid)=>{
  return async function (dispatch) {
    console.log("userid",userid.length)
    await axios
      .get(`http://localhost:5000/users/${userid}`)
      .then((resp) => {
        console.log("response data", resp);
        dispatch(getUser(resp.data));
      })
      .catch((error) => console.log(error));
  };
}