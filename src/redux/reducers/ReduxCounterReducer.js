import { INCREMENT, DECREMENT } from "../actions/ReduxCounterActions";

const initialState = { count: 0 };

export default function reduxCounterReducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + 1 };
        case DECREMENT:
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
}
