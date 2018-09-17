// Set up your root reducer here...
import { combineReducers } from "redux";
import standings from "./standings";

const rootReducer = combineReducers({
  standings
});
export default rootReducer;
