import { all } from 'redux-saga/effects'
import { call, put, takeEvery, } from "@redux-saga/core/effects";
import { fork } from 'redux-saga/effects'


import { AUTH } from "./actionTypes"
import { SIGN_UP_API, LOGIN_API } from "../apiEndPoints"
import { AXIOS_INSTANCE } from "../apiEndPoints"
import { checkHttpStatus } from "../apiUtils"
import { createUserSuccess, loginFailure, loginSuccess, createUserFailure } from "./actions"
// import { createUserFailure } from './actions';



function* signUp(action) {

    try {
        const apiResponse = yield call(AXIOS_INSTANCE.post, SIGN_UP_API, action.payload);


        const response = yield call(checkHttpStatus, apiResponse)

        if (!response.status) {
            const responseData = { data: response, }
            yield put(createUserSuccess(responseData))

        }
        else {
            yield put(createUserFailure(response))
        }

    } catch (err) {
        yield put(createUserFailure(err))
    }
}

function* signUpWatcher() {
    yield takeEvery(AUTH.CREATE_USERS_ACCOUNT_REQUEST, signUp);
}


function* login(action) {

    try {
        const loginApiResponse = yield call(AXIOS_INSTANCE.post, LOGIN_API, action.payload);


        const response = yield call(checkHttpStatus, loginApiResponse)

        if (!response.status) {
            const responseData = { data: response, }
            yield put(loginSuccess(responseData))

        }
        else {
            yield put(loginFailure(response))
        }

    } catch (err) {
        yield put(loginFailure(err))
    }
}

function* loginWatcher() {
    yield takeEvery(AUTH.LOGIN_REQUEST, login);
}




export default function* AuthSaga() {
    yield all([
        fork(signUpWatcher),
        fork(loginWatcher),

    ]);
}