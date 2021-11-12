import { put, takeLatest, all, call, takeEvery } from "redux-saga/effects";
import { fork } from "redux-saga/effects";
import { POSTS } from "./actionTypes";
import { AXIOS_INSTANCE } from "../apiEndPoints";
import { POSTS_API } from "../apiEndPoints";
import { checkHttpStatus } from "../apiUtils";
import axios from "axios";
import {
  createPostsFailure,
  createPostsSuccess,
  editPostsFailure,
  editPostsSuccess,
  getPostDetailsByIdFailure,
  getPostDetailsByIdSuccess,
  postDetailsFailure,
  postDetailsSuccess,
  postsDeleteFailure,
  postsDeleteSuccess,
} from "./actions";

function* allPosts() {
  try {
    const { data } = yield call(AXIOS_INSTANCE.get, POSTS_API);
    yield put({ type: POSTS.GET_POSTS_SUCCESS, payload: { posts: data } });
  } catch (e) {
    console.log(e.message);
  }
}
function* postsWatcher() {
  yield takeLatest(POSTS.GET_POSTS_REQUEST, allPosts);
}

function* createPosts(action) {
  try {
    const apiResponse = yield call(
      AXIOS_INSTANCE.post,
      POSTS_API,
      action.payload
    );

    const response = yield call(checkHttpStatus, apiResponse);

    if (!response.status) {
      const responseData = { data: response };

      yield put(createPostsSuccess(responseData));
    } else {
      yield put(createPostsFailure(response));
    }
  } catch (err) {
    yield put(createPostsFailure(err));
  }
}

function* createPostsWatcher() {
  yield takeEvery(POSTS.POSTS_CREATE_REQUEST, createPosts);
}

function* editPosts(action) {
  try {
    const apiResponse = yield call(
      AXIOS_INSTANCE.put,
      POSTS_API,
      action.payload
    );

    const response = yield call(checkHttpStatus, apiResponse);

    if (!response.status) {
      const responseData = { data: response };

      yield put(editPostsSuccess(responseData));
    } else {
      yield put(editPostsFailure(response));
    }
  } catch (err) {
    yield put(editPostsFailure(err));
  }
}

function* editPostsWatcher() {
  yield takeEvery(POSTS.POSTS_EDIT_REQUEST, editPosts);
}

function* postDetails(action) {
  try {
    const apiResponse = yield call(
      AXIOS_INSTANCE.get,
      `${POSTS_API}/${action.payload}`
      // `https://jsonplaceholder.typicode.com/posts/${id.payload} `
    );

    const response = yield call(checkHttpStatus, apiResponse);

    if (!response.status) {
      const responseData = { data: response };

      yield put(getPostDetailsByIdSuccess(responseData));
    } else {
      yield put(getPostDetailsByIdFailure(response));
    }
  } catch (err) {
    yield put(getPostDetailsByIdFailure(err));
  }
}

function* postDetailsWatcher() {
  yield takeEvery(POSTS.POSTS_DETAILS_REQUEST, postDetails);
}

export default function* PostsSaga() {
  yield all([
    fork(postsWatcher),
    fork(createPostsWatcher),
    fork(editPostsWatcher),
    fork(postDetailsWatcher),
  ]);
}
