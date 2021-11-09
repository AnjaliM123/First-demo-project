
import { all } from 'redux-saga/effects';
import { createUser, } from "../actions/UsersActions";
import AuthSaga from "./Users";
const allSagas = function* rootSaga() {
    yield all([
        AuthSaga(),
        createUser(),

    ]);
}
export default allSagas