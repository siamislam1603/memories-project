import { combineReducers } from "redux";
import posts from './posts';
import activePost from './buttonsClick';
export default combineReducers({
    posts,
    activePost,
});