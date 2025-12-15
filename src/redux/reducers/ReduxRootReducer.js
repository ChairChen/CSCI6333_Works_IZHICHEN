import { combineReducers } from "redux";
import ReduxTodoListReducer from "./ReduxTodoListReducer";

const ReduxRootReducer = combineReducers({
    todoList: ReduxTodoListReducer
});

export default ReduxRootReducer;
