import {configureStore} from '@reduxjs/toolkit';
import allReducers from "./reducers";
import createSagaMiddleware from "redux-saga";
//import {userWatcher} from "redux/sagas/userSagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: allReducers,
    middleware: [sagaMiddleware],
    devTools: process.env.REACT_APP_NODE_ENV !== 'prod'
});

//sagaMiddleware.run(userWatcher);

export default store;