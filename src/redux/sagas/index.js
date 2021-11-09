
import { all } from 'redux-saga/effects';
import { createUser, } from "../actions/AuthAction"
import AuthSaga from "./Auth";
const allSagas = function* rootSaga() {
    yield all([
        AuthSaga(),
        createUser(),

    ]);
}
export default allSagas