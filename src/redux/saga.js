
import { all } from 'redux-saga/effects';

import AuthSaga from "../redux/authentication/saga";
import PostsSaga from "../redux/posts/saga"
const allSagas = function* rootSaga() {
    yield all([
        AuthSaga(),
        PostsSaga(),

    ]);
}
export default allSagas