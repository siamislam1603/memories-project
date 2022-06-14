import { combineReducers } from "redux";
import posts from './posts';
import activePost from './buttonsClick';
import auth from './authReducer';
export default combineReducers({
    posts,
    activePost,
    auth,
});