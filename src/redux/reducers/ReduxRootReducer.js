import { combineReducers } from "redux";
import ReduxCounterReducer from "./ReduxCounterReducer";

const reduxRootReducer = combineReducers({
    counter: ReduxCounterReducer
});

export default reduxRootReducer;
