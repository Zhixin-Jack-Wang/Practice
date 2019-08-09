import { combineReducers } from "redux";
import postReducer from "./postReducer";
import newReducer from "./newReducer";
const rootReducer = combineReducers({
  data: postReducer,
  pog: newReducer
});

export default rootReducer;
