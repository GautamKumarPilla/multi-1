import { combineReducers, createStore } from "redux";
import userReducer from "./userReducer";
var store = new createStore(combineReducers({admin:userReducer}))

export default store;