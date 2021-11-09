
import { all } from 'redux-saga/effects';

import AuthSaga from "./Auth";
const allSagas = function* rootSaga() {
    yield all([
        AuthSaga(),


    ]);
}
export default allSagas