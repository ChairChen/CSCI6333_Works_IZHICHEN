export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const CHECK_TODO = "CHECK_TODO";
export const DELETE_TODO = "DELETE_TODO";

export const AddTodo = (todo) => ({ type: ADD_TODO, payload: todo });
export const CompleteTodo = (todo) => ({ type: COMPLETE_TODO, payload: todo });
export const CheckTodo = (todo) => ({ type: CHECK_TODO, payload: todo });
export const DeleteTodo = (todo) => ({ type: DELETE_TODO, payload: todo });