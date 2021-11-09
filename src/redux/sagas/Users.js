import { all } from 'redux-saga/effects'
import { call, put, takeEvery, takeLatest } from "@redux-saga/core/effects";
import { fork } from 'redux-saga/effects'


import { SIGN_UP } from '../actions/ActionTypes';
import { SIGN_UP_API, } from "../actions/ApiEndPoint"
import { AXIOS_INSTANCE } from "../actions/ApiEndPoint"
import { checkHttpStatus } from "../apiUtils"
import { createUser } from '../actions/UsersActions';

const baseAction = async (url) => {

    const response = await url
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        })

}

function* signUp(action) {

    try {
        const usersResponse = yield call(AXIOS_INSTANCE.post(SIGN_UP_API, action.payload));
        // const usersResponse = baseAction(AXIOS_INSTANCE.post(SIGN_UP_API, action.payload))
        console.log("userResponse", usersResponse)
        const checkingResponse = checkHttpStatus(usersResponse)
        console.log(checkingResponse)
        yield put({ type: SIGN_UP.CREATE_USERS_ACCOUNT_SUCCESS, payload: usersResponse });
    } catch (err) {
        console.log("err", err, err.response)
        yield put({ type: SIGN_UP.CREATE_USERS_ACCOUNT_FAILURE, payload: err && err.response });
    }
}

export default function* signUpWatcher() {
    yield takeLatest(SIGN_UP.CREATE_USERS_ACCOUNT_REQUEST, signUp);
}


// export default function* AuthSaga() {
//     yield all([
//         fork(signUpWatcher),

//     ]);
// }