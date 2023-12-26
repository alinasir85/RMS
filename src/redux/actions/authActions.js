export const SET_LOGGED_IN = 'SET_LOGGED_IN'

export const setLoggedIn = (isLoggedIn) => {
    return {
        type: SET_LOGGED_IN,
        isLoggedIn: isLoggedIn
    };
};
