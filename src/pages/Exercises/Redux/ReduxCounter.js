import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../../redux/actions/ReduxCounterActions";

export default function ReduxCounter() {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    return (
        <section>
            <h2>Redux Counter</h2>
            <h1>{count}</h1>

            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(increment())}>+</button>
        </section>
    );
}
