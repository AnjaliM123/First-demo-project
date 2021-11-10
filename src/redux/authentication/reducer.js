import { AUTH } from "./actionTypes"

const AuthReducer = (state, action) => {
    if (typeof state == "undefined") {
        state = {
            isFetching: true,
            data: [],
        };
    }
    console.log(action)
    switch (action.type) {

        case AUTH.CREATE_USERS_ACCOUNT_REQUEST:
            return {

                ...state,
                isLoading: true,
                users: action.payload,
                userCreated: false
            }
        case AUTH.CREATE_USERS_ACCOUNT_SUCCESS:
            return {

                ...state,
                isLoading: false,
                users: action.response.data,
                userCreated: true
            }
        case AUTH.CREATE_USERS_ACCOUNT_FAILURE:
            return {

                ...state,
                isLoading: false,
                errors: action.error && action.error.response.data.errors,
                userCreated: false
            }
        case AUTH.LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
                isAuthenticated: false,
                loginData: action.payload,
            };
        case AUTH.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                loginData: action.response.data,
            };
        case AUTH.LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                loginErrors: action.error&&action.error.response.data,
            };
        default:
            return state
    }
}
export default AuthReducer