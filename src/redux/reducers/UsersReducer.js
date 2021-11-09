import { SIGN_UP } from "../actions/ActionTypes"

const UsersReducer = (state, action) => {
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
                isFetching: true,
                users: action.payload,
                userCreated: false
            }
        case SIGN_UP.CREATE_USERS_ACCOUNT_SUCCESS:
            return {
                isLoading: false,
                ...state,
                isFetching: false,
                users: action.payload,
                userCreated: true
            }
        case SIGN_UP.CREATE_USERS_ACCOUNT_FAILURE:
            return {
                isLoading: false,
                ...state,
                isFetching: false,
                users: action.payload,
                userCreated: false
            }
        default:
            return state
    }
}
export default UsersReducer