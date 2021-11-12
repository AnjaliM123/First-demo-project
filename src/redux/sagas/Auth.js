import { all, fork } from "redux-saga/effects";
import { call, put, takeEvery } from "@redux-saga/core/effects";

import { AUTH } from "../actionTypes";
import { SIGN_UP_API, AXIOS_INSTANCE } from "../actions/ApiEndPoint";

import { checkHttpStatus } from "../apiUtils";
import { createUserSuccess, createUserFailure } from "../actions/AuthAction";

function* signUp(action) {
  try {
    const apiResponse = yield call(
      AXIOS_INSTANCE.post,
      SIGN_UP_API,
      action.payload
    );

    const response = yield call(checkHttpStatus, apiResponse);
    if (response.status) {
      const responseData = { data: response.data, status: 200 };
      yield put(createUserSuccess(responseData));
    }
  } catch (err) {
    yield put(createUserFailure(err));
  }
}

function* signUpWatcher() {
  yield takeEvery(AUTH.CREATE_USERS_ACCOUNT_REQUEST, signUp);
}

export default function* AuthSaga() {
  yield all([fork(signUpWatcher)]);
}
