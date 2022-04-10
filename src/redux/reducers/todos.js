import {ADD_TODO, COMPLETE_TODO} from "../actions";

const InitialState = [];

export default function todos(preState = InitialState, action) {
	if (action.type === ADD_TODO) {
		return [...preState, {text: action.text, done: false}];
	}

	if (action.type === COMPLETE_TODO) {
		return preState.map((todo, idx) => {
			if (idx === action.index) {
				return {...todo, done: true};
			}
			return todo;
		});
	}

	return preState;
}
