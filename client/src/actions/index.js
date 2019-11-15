import { AUTHENTICATED, BIO } from "./types.js";

export const authenticated = (item) => {
	return {
		type: "AUTHENTICATED",
		payload: item
	}
}

export const accountBio = (item) => {
	return {
		type: "BIO",
		payload: item
	}
}

export const loadState = () => {
	try {
		const serializedState = localStorage.getItem("state");
		if (serializedState === null) {
			return undefined;
		}
		return JSON.parse(serializedState);
	} catch(e) {
		return undefined;
		console.log(e);
	}
}
export const saveState = (state) => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem("state", serializedState)
	} catch(e) {
		console.log(e);
	}
}