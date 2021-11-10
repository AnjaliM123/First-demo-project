
import { all } from 'redux-saga/effects';

import AuthSaga from "../redux/authentication/saga";
const allSagas = function* rootSaga() {
    yield all([
        AuthSaga(),


    ]);
}
export default allSagas