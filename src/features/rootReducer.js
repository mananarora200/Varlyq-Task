import { combineReducers } from "redux";
import mainReducer from "./main/main.reducer";

const rootReducer = () =>
	combineReducers({
		main: mainReducer,
	});

export default rootReducer;