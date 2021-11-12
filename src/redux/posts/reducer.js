import { POSTS } from "./actionTypes";

const PostsReducer = (state, action) => {
  if (typeof state == "undefined") {
    state = {
      isFetching: true,
      data: [],
    };
  }

  switch (action.type) {
    case POSTS.GET_POSTS_REQUEST:
      return {
        ...state,
        isLoading: true,
        posts: action.payload,
      };
    case POSTS.GET_POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: action.payload && action.payload.posts,
      };
    case POSTS.GET_POSTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.error,
      };
    case POSTS.POSTS_CREATE_REQUEST:
      return {
        ...state,
        isLoading: true,
        users: action.payload,
        userAdded: false,
      };
    case POSTS.POSTS_CREATE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: action.response.data,
        userAdded: true,
      };
    case POSTS.POSTS_CREATE_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.error && action.error.response.data.errors,
        userAdded: false,
      };
    case POSTS.POSTS_EDIT_REQUEST:
      return {
        ...state,
        isLoading: true,
        users: action.payload,
        userEdited: false,
      };
    case POSTS.POSTS_EDIT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: action.response.data,
        userEdited: true,
      };
    case POSTS.POSTS_EDIT_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.error && action.error.response.data.errors,
        userEdited: false,
      };
    default:
      return state;
  }
};

export default PostsReducer;
