import { BIO } from "../actions/types.js";

const initialState = {
	data: {}
};

export default (state = initialState, action) => {
	switch (action.type) {
		case BIO: 
			return {
				...state,
				data: action.payload
			}
		default: 
			return state;
	}
}