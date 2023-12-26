import {
    GET_USERS_SUCCESS,
    SAVE_USER_SUCCESS,
    USER_CHANGE_AGE
} from "../actions/userActions";

const initialState = {
    age: '5',
    usersList:[]
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_CHANGE_AGE: {
            return { ...state, age: action.age };
        }
        case GET_USERS_SUCCESS: {
            return { ...state, usersList: action.usersList };
        }
        case SAVE_USER_SUCCESS: {
            return { ...state, usersList: [...state.usersList,action.user] };
        }
        default:
            return state;
    }
};

export default userReducer;
