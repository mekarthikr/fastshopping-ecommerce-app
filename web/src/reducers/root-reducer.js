import { combineReducers } from "redux";
// import productReducer from "./productreducer";
import usersReducers from "./userreducer";
import productReducer from "./productreducer";

const rootReducer = combineReducers({
  user: usersReducers,product:productReducer
  // data:productReducer
});

export default rootReducer;

