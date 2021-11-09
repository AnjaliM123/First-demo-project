import { SIGN_UP } from "../actions/ActionTypes"

const AuthReducer = (state, action) => {
    if (typeof state == "undefined") {
        state = {
            isFetching: true,
            data: [],
        };
    }
    console.log(action)
    switch (action.type) {

        case SIGN_UP.CREATE_USERS_ACCOUNT_REQUEST:
            return {
                isLoading: true,
                ...state,

                users: action.payload,
                userCreated: false
            }
        case SIGN_UP.CREATE_USERS_ACCOUNT_SUCCESS:
            return {
                isLoading: false,
                ...state,

                users: action.response.data,
                userCreated: true
            }
        case SIGN_UP.CREATE_USERS_ACCOUNT_FAILURE:
            return {
                isLoading: false,
                ...state,

                users: action.error,
                userCreated: false
            }
        default:
            return state
    }
}
export default AuthReducer