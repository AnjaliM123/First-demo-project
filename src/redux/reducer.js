import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import AuthReducer from "./authentication/reducer";

const allReducers = combineReducers({
    form: formReducer,
    users: AuthReducer,

})
export default allReducers