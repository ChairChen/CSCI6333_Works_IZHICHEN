import { ADD_TODO, DELETE_TODO } from "../actions/ReduxTodoListActions";

const initialState = { todos: [] };

export default function ReduxTodoListReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            const foundTodo = state.todos.find( (todo) => todo === action.payload );
            return (foundTodo) ? state : { todos: [ ...state.todos, action.payload ] };
        case DELETE_TODO:
            return { todos: state.todos.filter( (todo) => 
                todo !== action.payload
            ) };
        default:
            return state;
    }
}