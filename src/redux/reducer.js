import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import AuthReducer from "./authentication/reducer";
import PostsReducer from "./posts/reducer";
const allReducers = combineReducers({
    form: formReducer,
    users: AuthReducer,
    posts:PostsReducer,

})
export default allReducers