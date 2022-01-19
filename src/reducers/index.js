import { combineReducers } from "redux";
import album from "./album";
import item from "./item";

export default combineReducers({
  album,
  item,
});
