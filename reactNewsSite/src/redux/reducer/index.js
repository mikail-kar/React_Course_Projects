import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer";
import newsReducer from "./newsReducer";
import userReducer from "./userReducer";
const rootReducer = combineReducers({
categoriesReducer,
newsReducer,
userReducer
});

export default rootReducer;