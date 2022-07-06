import * as types from "../action/actionType";
const initialState = {
  users: [],
  user: {},
  cart:[],
//   products: [],
//   product: {},
  loading: true,
//   cart:[],
  value:[],
  isUserLogin:false,
  isAdminLogin:true,
  loggedInSuccess:false,
  loggedInFailed:false,
  adminloggedInSuccess:false,
  adminloggedInFailed:false,
  loginError:"",
  adminloginError:"",
  userCart:[]
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
          return{
            ...state,
            isUserLogin:true,
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
        case types.INSERT_TO_CART:
          const val=[...state.userCart,action.payload]
          console.log("payload",action.payload)
          return{
            ...state,
            userCart:val
          }
      case types.GET_SINGLE_USER:
        return {
          ...state,
          user: action.payload,
          loading: false,
        };
        case types.USER_LOGGED_IN:
          return{
            ...state,
            isLogin:true
          }
          case types.USER_LOGGED_IN_SUCCESS:
            return{
              ...state,
              loggedInSuccess:true,
              loggedInFailed:false,
              loginError:""
            }
            case types.ADMIN_LOGGED_IN_SUCCESS:
              return{
                ...state,
                adminloggedInSuccess:true,
                adminloggedInFailed:false,
                loginError:""
              }
            case types.USER_LOGGED_IN_FAILED:
              return{
                ...state,
                loggedInSuccess:false,
                loggedInFailed:true,
                loginError:action.payload
              }
              case types.ADMIN_LOGGED_IN_FAILED:
                  console.log("error",action.payload)
                return{
                  ...state,
                  adminloggedInSuccess:false,
                  adminloggedInFailed:true,
                  adminloginError:action.payload
                }
          case types.USER_LOGGED_OUT:
          return{
            ...state,
            isLogin:action.payload,
            user:{}
          }
          case types.SET_CART:
            return{
              ...state,
              cart:action.payload
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
  