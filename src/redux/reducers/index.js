import { combineReducers } from "redux";
import userReducer from "./userReducer";
import authReducer from "./authReducer";

const allReducers = combineReducers({
    userReducer: userReducer,
    authReducer: authReducer
});

export default allReducers;
