import { AUTH } from "../actionTypes";

const AuthReducer = (state, action) => {
  if (typeof state == "undefined") {
    state = {
      isFetching: true,
      data: [],
    };
  }

  switch (action.type) {
    case AUTH.CREATE_USERS_ACCOUNT_REQUEST:
      return {
        ...state,
        isLoading: true,
        users: action.payload,
        userCreated: false,
      };
    case AUTH.CREATE_USERS_ACCOUNT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: action.response.data,
        userCreated: true,
      };
    case AUTH.CREATE_USERS_ACCOUNT_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.error && action.error.response.data,
        userCreated: false,
      };
    default:
      return state;
  }
};
export default AuthReducer;
