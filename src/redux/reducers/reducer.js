import {combineReducers} from "redux";
import todos from "./todos";
import filter from "./filters";

const reducer = combineReducers({
	todos,
	filter
});

export default reducer;
