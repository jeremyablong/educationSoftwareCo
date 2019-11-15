import { combineReducers } from "redux";
import authenticated from "./auth.js";
import bio from "./bio.js";

export default combineReducers({
	authenticated,
	bio
});