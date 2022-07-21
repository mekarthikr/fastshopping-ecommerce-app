import { combineReducers } from "redux";
import usersReducers from "./userreducer";
import productReducer from "./productreducer";

const rootReducer = combineReducers({
  user: usersReducers,product:productReducer
});

export default rootReducer;

