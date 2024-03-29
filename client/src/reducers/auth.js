import { AUTHENTICATED, LOGIN_WITH_CODE } from "../actions/types.js";

const initialState = {
	data: {}
};

export default (state = initialState, action) => {
	switch (action.type) {
		case AUTHENTICATED: 
			return {
				...state,
				data: action.payload
			}
		case LOGIN_WITH_CODE: 
			return {
				...state,
				data: action.payload
			}
		default: 
			return state;
	}
}