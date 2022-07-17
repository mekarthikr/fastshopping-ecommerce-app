import * as types from "../action/actionType";
const initialState = {
  products: [],
  product: {},
  loading: true,
  cart:[],
  value:[],
  isLogin:false,
  isAdminLogin:true,
  responsemessage:"",
  page:1,
  pageCount:0
};


const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_PRODUCTS:
        return {
          ...state,
          products: action.payload,
          pageCount:action.pagecount,
          loading: false,
          responsemessage: ""
        };
      case types.DELETE_PRODUCT:
      case types.ADD_PRODUCT:
        case types.UPDATE_PRODUCT:
          return {
            ...state,
            loading: false,
          };
        case types.GET_SINGLE_PRODUCT:
        return {
          ...state,
          product: action.payload,
          loading: false,
        };
          case types.ADD_TO_CART:
            if(!action.payload.quantity)
            {
              action.payload.quantity=1;
            }
            const val=[...state.value,action.payload]
            return{
              ...state,
              value:val
            }
            case types.REMOVE_FROM_CART:
              const newbasket=[...state.value];
              const index=state.value.findIndex((item)=>item.id===action.payload)
              newbasket.splice(index,1)
              return{
                ...state,
                value:newbasket,
              }
              case types.CLEAR_PRODUCT:
                return{
                  ...state,
                  product:[]
                }
                case types.ACTION_RESPONSE_MESSAGE:
                  return{
                    ...state,
                    responsemessage:action.payload
                  }
                  case types.INCREASE_PAGE_COUNT:
                    return{
                      ...state,
                      page:state.page+1
                    }
                    case types.DECREMENT_PAGE_COUNT:
                      return{
                        ...state,
                        page:state.page-1
                      }
                    
      default:
        return state;
    }
  };
  
  export default productReducer;
  
  