const CATALOG = [
     { id: 0, name: "Apple", price: 120}
    ,{ id: 0, name: "Banana", price: 120}
    ,{ id: 0, name: "Durian", price: 120}
];

export default function ReduxShoppingCart() {
    return (
        <div>
            <h1>Redux Shopping Cart</h1>
            <p>
                Notes:
                <br />
                Reducers are Pure Functions: Reducers are functions that take the current state (state) and an action (action) as arguments and must return the new state. They are required to be pure functions, meaning they do not change the state directly (no side effects).
                Immutability: The central principle of React/Redux state management is that state is read-only. You must never modify the original state object directly (i.e., you cannot use state.count = state.count + 1). Instead, you must return a brand new state object that reflects the desired changes.
            </p>
        </div>
    );
}