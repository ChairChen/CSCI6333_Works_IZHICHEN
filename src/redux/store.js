import { createStore } from "redux";
import ReduxRootReducer from "./reducers/ReduxRootReducer";

export const store = createStore(
    ReduxRootReducer
    ,window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
);
