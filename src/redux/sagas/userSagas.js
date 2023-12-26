import {put,takeEvery,takeLatest,all,call} from "redux-saga/effects";
import {getUsers, saveUser} from "modules/shared/services/UserService";
import {
    getUsersSuccess,
    saveUserSuccess,
    GET_USERS_INIT,
    SAVE_USER_INIT
} from "redux/actions/userActions";

function* getUsersSaga() {
    try{
        const users = yield call(getUsers);
        yield put(getUsersSuccess(users));
    } catch(err) {
        console.log(err);
    }
}

function* saveUserSaga(action) {
    try{
        const user = yield call(saveUser,action.user);
        yield put(saveUserSuccess(user));
    } catch(err) {
        console.log(err);
    }
}

export function* userWatcher() {
    yield all([
        takeEvery(GET_USERS_INIT,getUsersSaga),
        takeLatest(SAVE_USER_INIT,saveUserSaga)
    ]);
}
