import {SET_LOGGED_IN} from "../actions/authActions";

const initialState = {
    isLoggedIn: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGGED_IN: {
            return { ...state, isLoggedIn: action.isLoggedIn };
        }
        default:
            return state;
    }
};

export default authReducer;
