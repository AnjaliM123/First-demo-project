import { all } from 'redux-saga/effects'
import { call, put, takeEvery, takeLatest } from "@redux-saga/core/effects";
import { fork } from 'redux-saga/effects'


import { SIGN_UP } from '../actions/ActionTypes';
import { SIGN_UP_API, } from "../actions/ApiEndPoint"
import { AXIOS_INSTANCE } from "../actions/ApiEndPoint"
import { checkHttpStatus } from "../apiUtils"
import { createUser, createUserSuccess } from "../actions/AuthAction"
import { createUserFailure } from '../actions/AuthAction';



function* signUp(action) {

    try {
        const apiResponse = yield call(AXIOS_INSTANCE.post, SIGN_UP_API, action.payload);


        const response = yield call(checkHttpStatus, apiResponse)
        console.log(response)
        if (response.status) {
            const responseData = { data: response.data, status: 200 }
            yield put(createUserSuccess(responseData))

        }

    } catch (err) {
        yield put(createUserFailure(err))
    }
}

function* signUpWatcher() {
    yield takeEvery(SIGN_UP.CREATE_USERS_ACCOUNT_REQUEST, signUp);
}


export default function* AuthSaga() {
    yield all([
        fork(signUpWatcher),

    ]);
}