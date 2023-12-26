export const USER_CHANGE_AGE = 'USER_CHANGE_AGE';
export const GET_USERS_INIT = 'GET_USERS_INIT';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const SAVE_USER_INIT = 'SAVE_USER_INIT';
export const SAVE_USER_SUCCESS = 'SAVE_USER_SUCCESS';

export const changeUsersAge = (age) => {
    return {
        type: USER_CHANGE_AGE,
        age: age
    };
};

export const getUsersInit = () => {
    return {
        type: GET_USERS_INIT
    };
};

export const getUsersSuccess = (usersList) => {
    return {
        type: GET_USERS_SUCCESS,
        usersList: usersList
    };
};

export const saveUserInit = (user) => {
    return {
        type: SAVE_USER_INIT,
        user:user
    };
};

export const saveUserSuccess = (user) => {
    return {
        type: SAVE_USER_SUCCESS,
        user:user
    };
};