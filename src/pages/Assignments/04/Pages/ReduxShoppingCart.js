import React, { useMemo }from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
     AddItem
    ,DeleteItem
    ,IncrementQTY
    ,DecrementQTY
    ,ClearCart 
} from '../../../../redux/actions/ReduxShoppingCartActions';

const CATALOG = [
  { id: 0, name: "Apple (Gala)", price: 2.30 },
  { id: 1, name: "Banana", price: 0.79 },
  { id: 2, name: "Durian", price: 20.05 },
  { id: 3, name: "Mango (Ataulfo)", price: 3.50 },
  { id: 4, name: "Grapes (Red Seedless)", price: 5.99 },
  { id: 5, name: "Kiwi", price: 1.25 },
  { id: 6, name: "Pineapple", price: 4.80 },
  { id: 7, name: "Strawberry (Basket)", price: 7.20 },
//   { id: 8, name: "Watermelon (Small)", price: 9.99 },
//   { id: 9, name: "Avocado (Hass)", price: 2.85 },
//   { id: 10, name: "Orange (Valencia)", price: 0.95 },
//   { id: 11, name: "Blueberries (Pint)", price: 4.50 },
//   { id: 12, name: "Cherry (Rainier, lb)", price: 15.00 },
//   { id: 13, name: "Lemon", price: 0.55 },
//   { id: 14, name: "Lime", price: 0.45 },
//   { id: 15, name: "Pomegranate", price: 3.99 },
//   { id: 16, name: "Raspberries (Clamshell)", price: 6.75 },
//   { id: 17, name: "Cantaloupe", price: 4.10 },
//   { id: 18, name: "Star Fruit", price: 5.50 },
//   { id: 19, name: "Passion Fruit", price: 1.80 },
//   { id: 20, name: "Coconut (Young)", price: 6.20 },
];

export default function ReduxShoppingCart() {
    const items = useSelector((state) => state.shoppingCart.items);
    const dispatch = useDispatch();
    const taxRate = 0.08; // 8% tax
    
    const summary = useMemo(() => {
        const itemCount = items.reduce((accumulator, currentValue) => (
            accumulator + currentValue.qty
        ), 0);
        const subtotal = items.reduce((accumulator, currentValue) => (
            accumulator + (currentValue.price * currentValue.qty)
        ), 0);

        return { itemCount, subtotal };
    }, [items]);

    return (
        <section style={{ padding: "0px 20px" }}>
            <h1>Redux Shopping Cart</h1>
            <p style={{ fontSize: 14, color: "#555", width: "70%" }}>
                Notes:
                <br />
                Reducers are Pure Functions: Reducers are functions that take the current state (state) and an action (action) as arguments and must return the new state. They are required to be pure functions, meaning they do not change the state directly (no side effects).
                Immutability: The central principle of React/Redux state management is that state is read-only. You must never modify the original state object directly (i.e., you cannot use state.count = state.count + 1). Instead, you must return a brand new state object that reflects the desired changes.
            </p>

            <div className='redux-shopping-cart-container'>

                {/* Catalog */}
                <div className='redux-shopping-cart-catalog'>
                    <h3>Catalog</h3>
                    {CATALOG.map((item) => (
                            <div 
                                key={ item.id } 
                                style={{ 
                                    display: "flex"
                                    ,justifyContent: "space-between"
                                    ,alignItems: "center"
                                    ,padding: "6px 0"
                                    ,borderBottom: "1px solid var(--color-text)"
                                    ,textAlign: "left"
                                }}
                            >
                            <div
                                style={{ width: "50%" }}
                            >
                                <strong>
                                    {item.name}
                                </strong>
                                <span>
                                    &nbsp;(${item.price.toFixed(2)})
                                </span>
                                <div style={{ fontSize: 14, color: "#666" }}>
                                    click ADD to bring it home
                                </div>
                            </div>
                                <button
                                    onClick={() => dispatch(AddItem(item))}
                                    title='Add this item to your cart'
                                >
                                   ADD
                                </button>
                            </div>
                    ))}
                </div>

                {/* Cart */}
                <div className='redux-shopping-cart-cart'>
                    <h3>Shopping Cart</h3>
                    {items.length === 0 ? (
                        <p>Your cart is empty</p>
                    ) : (
                        <div style={{ textAlign: "left" }}>
                            {items.map((item) => (
                                <div 
                                    key={ item.id } 
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        padding: "6px 0",
                                        borderBottom: "1px solid var(--color-text)",
                                    }}
                                >
                                    <div
                                        style={{ width: "40%" }}
                                    >
                                        <strong>{ item.name }</strong>
                                        <span>&nbsp;(${ item.price.toFixed(2) })</span>
                                        <div style={{ fontSize: 14, color: "#666" }}>
                                            Line total: $
                                            { (item.price * item.qty).toFixed(2) }
                                        </div>
                                    </div>
                                    <div>
                                        <button onClick={() => dispatch(DecrementQTY(item))}>
                                            -
                                        </button>
                                        <span>{ item.qty }</span>
                                        <button onClick={() => dispatch(IncrementQTY(item))}>
                                            +
                                        </button>
                                    </div> 
                                    
                                    <button onClick={() => dispatch(DeleteItem(item))} style={{ color: "red"}}>
                                        &#x1F5D1;
                                    </button>
                                </div>
                            ))}

                            <div style={{ marginTop: '10px' }}>
                                <p>
                                    <strong>Items: </strong>{summary.itemCount}
                                </p>
                                <p>
                                    <strong>Tax (8%): </strong>
                                    ${(summary.subtotal * taxRate).toFixed(2)}
                                </p>
                                <p>
                                    <strong>Subtotal: </strong>
                                    ${((summary.subtotal * taxRate) + summary.subtotal).toFixed(2)}
                                </p>

                                <button onClick={() => dispatch(ClearCart())}>
                                    Clear Cart
                                </button>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
}