import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + (action.payload || 1) };
        case 'decrement':
            return { count: state.count - (action.payload || 1) };
        case 'reset':
            return initialState;
        default:
            return state;
    }
};

export default function UseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <section>
            <h2>useReducer Hook Example</h2>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>-10</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>+10</button>
        </section>
    );
}