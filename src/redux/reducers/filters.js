import {SHOW_COMPLETE, SHOW_ALL} from "../actions";

const initialState = "ALL";

export default function filter(preState = initialState, action) {
	if (action.type === SHOW_COMPLETE) {
		return "COMPLETE";
	}

	if (action.type === SHOW_ALL) {
		return "ALL";
	}

	return preState;
}
