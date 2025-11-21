export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";

export const AddTodo = (todo) => ({ type: ADD_TODO, payload: todo });
export const DeleteTodo = (todo) => ({ type: DELETE_TODO, payload: todo });