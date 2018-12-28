import officeReducer from "./officeReducer";
import { combineReducers } from "redux";

export default combineReducers({
	offices: officeReducer
});
