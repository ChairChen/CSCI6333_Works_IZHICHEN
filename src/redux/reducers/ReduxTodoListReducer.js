import { ADD_TODO, DELETE_TODO, COMPLETE_TODO, CHECK_TODO } from "../actions/ReduxTodoListActions";

const initialState = { todos: {} };

export default function ReduxTodoListReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            // const foundTodo = state.todos.find( (todo) => todo === action.payload );
            // return (foundTodo) ? state : { todos: [ ...state.todos, action.payload ] };
            try {
                return {
                    ...state
                    ,todos: {
                        ...state.todos
                        ,[action.payload]: {
                            checked: false
                            ,completed: false
                        }
                    } 
                };
            } catch (error) {
                console.error("Redux Todo Reducer Error: ADD_TODO error with error message - ", error);
                return state;
            }
        case COMPLETE_TODO:
            try {
                if (!state.todos[action.payload].checked) return state;
                return {
                    ...state
                    ,todos: {
                        ...state.todos
                        ,[action.payload]: {
                            ...state.todos[action.payload]
                            ,completed: true
                        }
                    }
                };
            } catch (error) {
                console.error("Redux Todo Reducer Error: COMPLETE_TODO error with error message - ", error);
                return state;
            }
        case CHECK_TODO:
            try {
                return { 
                    ...state
                    ,todos: {
                        ...state.todos
                        ,[action.payload]: {
                            ...state.todos[action.payload]
                            ,checked: !state.todos[action.payload].checked
                        }
                    }
                };
            } catch (error) {
                console.error("Redux Todo Reducer Error: CHECK_TODO error with error message - ", error);
                return state;
            }
        case DELETE_TODO:
            try {
                const { [action.payload]: deletedValue, ...restOfTodos } = state.todos;
                return {
                    ...state
                    ,todos: restOfTodos
                };
            } catch (error) {
                console.error("Redux Todo Reducer Error: DELETE_TODO error with error message - ", error);
                return state;
            }
        default:
            return state;
    }
}