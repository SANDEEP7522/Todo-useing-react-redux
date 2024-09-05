import { combineReducers, createStore } from "redux";

import todoReducer from "./Reducers/todoReducer.js";
import userReducer from "./Reducers/userReducer.js";

const rootReducer = combineReducers({
    todoState: todoReducer,
    userState: userReducer

}) 

const store = createStore(rootReducer);

export default store;