
import { AUTH } from "../actionTypes"

export const createUser = (action) => ({
    type: AUTH.CREATE_USERS_ACCOUNT_REQUEST,
    payload: action
})

export const createUserSuccess = (action) => ({
    type: AUTH.CREATE_USERS_ACCOUNT_SUCCESS,
    response: action
})

export const createUserFailure = (action) => ({
    type: AUTH.CREATE_USERS_ACCOUNT_FAILURE,
    error: action
})

export const login = (action) => ({
    type: AUTH.LOGIN_REQUEST,
    payload: action
})

export const loginSuccess = (action) => ({
    type: AUTH.LOGIN_SUCCESS,
    response: action
})

export const loginFailure = (action) => ({
    type: AUTH.LOGIN_FAILURE,
    error: action
})