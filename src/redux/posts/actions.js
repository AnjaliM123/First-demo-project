import { POSTS } from "./actionTypes";

export const getPosts = (action) => ({
  type: POSTS.GET_POSTS_REQUEST,
  payload: action,
});

export const getPostsSuccess = (action) => ({
  type: POSTS.GET_POSTS_SUCCESS,
  response: action,
});

export const getPostsFailure = (action) => ({
  type: POSTS.GET_POSTS_FAILURE,
  error: action,
});

export const postsDelete = (action) => ({
  type: POSTS.POSTS_DELETE_REQUEST,
  payload: action,
});

export const postsDeleteSuccess = (action) => ({
  type: POSTS.POSTS_DELETE_SUCCESS,
  response: action,
});

export const postsDeleteFailure = (action) => ({
  type: POSTS.POSTS_DELETE_FAILURE,
  error: action,
});

export const createPostsRequest = (action) => ({
  type: POSTS.POSTS_CREATE_REQUEST,
  payload: action,
});

export const createPostsSuccess = (action) => ({
  type: POSTS.POSTS_CREATE_SUCCESS,
  payload: action,
});

export const createPostsFailure = (action) => ({
  type: POSTS.POSTS_CREATE_FAILURE,
  payload: action,
});

export const editPostsRequest = (action) => ({
  type: POSTS.POSTS_EDIT_REQUEST,
  payload: action,
});

export const editPostsSuccess = (action) => ({
  type: POSTS.POSTS_EDIT_SUCCESS,
  payload: action,
});

export const editPostsFailure = (action) => ({
  type: POSTS.POSTS_EDIT_FAILURE,
  payload: action,
});

export const getPostDetailsById = (action) => ({
  type: POSTS.POSTS_DETAILS_REQUEST,
  payload: action,
});

export const getPostDetailsByIdSuccess = (action) => ({
  type: POSTS.POSTS_DETAILS_SUCCESS,
  payload: action,
});

export const getPostDetailsByIdFailure = (action) => ({
  type: POSTS.POSTS_DETAILS_FAILURE,
  payload: action,
});
