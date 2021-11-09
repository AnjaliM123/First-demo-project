
import { SIGN_UP } from "./ActionTypes"

export const createUser = (action) => ({
    type: SIGN_UP.CREATE_USERS_ACCOUNT_REQUEST,
    payload: action
})

export const createUserSuccess = (action) => ({
    type: SIGN_UP.CREATE_USERS_ACCOUNT_SUCCESS,
    response: action
})

export const createUserFailure = (action) => ({
    type: SIGN_UP.CREATE_USERS_ACCOUNT_FAILURE,
    error: action
})