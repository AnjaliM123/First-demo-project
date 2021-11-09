import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import UsersReducer from "./UsersReducer";

const allReducers = combineReducers({
    form: formReducer,
    users: UsersReducer,

})
export default allReducers