import * as types from "../action/actionType";
const initialState = {
  users: [],
  user: {},
//   products: [],
//   product: {},
  loading: true,
//   cart:[],
  value:[],
  isLogin:false,
  isAdminLogin:false
};


const usersReducers = (state = initialState, action) => {
    switch (action.type) {
      
      case types.GET_USERS:
        return {
          ...state,
          users: action.payload,
          loading: false,
        };
        // case types.GET_PRODUCTS:
        // return {
        //   ...state,
        //   products: action.payload,
        //   loading: false,
        // };
      case types.DELETE_USER:
    //   case types.DELETE_PRODUCT:
      case types.ADD_USER:
    //   case types.ADD_PRODUCT:
      case types.UPDATE_USER:
        return {
          ...state,
          loading: false,
        };
        // case types.UPDATE_PRODUCT:
        //   return {
        //     ...state,
        //     loading: false,
        //   };
      case types.GET_SINGLE_USER:
        return {
          ...state,
          user: action.payload,
          loading: false,
        };
        // case types.GET_SINGLE_PRODUCT:
        // return {
        //   ...state,
        //   product: action.payload,
        //   loading: false,
        // };
        case types.USER_LOGGED_IN:
          return{
            ...state,
            isLogin:true
          }
          case types.USER_LOGGED_OUT:
          return{
            ...state,
            isLogin:action.payload,
            user:{}
          }
        //   case types.ADD_TO_CART:
        //     if(!action.payload.quantity)
        //     {
        //       action.payload.quantity=1;
        //     }
        //     const val=[...state.value,action.payload]
        //     return{
        //       ...state,
        //       value:val
        //     }
        //     case types.REMOVE_FROM_CART:
        //       const newbasket=[...state.value];
        //       const index=state.value.findIndex((item)=>item.id===action.payload)
        //       newbasket.splice(index,1)
        //       return{
        //         ...state,
        //         value:newbasket,
        //       }
      default:
        return state;
    }
  };
  
  export default usersReducers;
  