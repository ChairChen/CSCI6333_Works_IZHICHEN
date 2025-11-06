// Note 2. use useState, useEffect to build a functional component with Hooks
import { useState, useEffect } from 'react';

export default function FuncComponentCounter() {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    // Note 2-1. useEffect to replace component life cycle methods for count variable
    useEffect(() => {
        // Note 2-2. this runs at the first time when "component mount(componentDidMount)"
        console.log('FuncComponentCounter has been mounted to this app');

        // Note 2-3. only when count has been updated(componentDidUpdate)
        console.log(`FuncComponentCounter current count is : ${count}`);

        // Note 2-4. when component has been unmount or next effect runs(componentWillUnmount)
        // cleanup function in useEffect
        return () => {
            console.log('FuncComponentCounter has been removed from this app');
        };
        // Note 2-5. dependency, use count. effect runs only when value in this arrary has been changed
    }, [count]);

    const incrementCount = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decrementVisiblity = () => {
        // how this works:
        // we use {isVisible && (...)} and {!isVisible && (...)}
        // when the state of isVisible change, this functional component re-render
        // and when isVisible is false, app doesn't render and we don't have this anymore
        // triger useEffect() { return ... } to unmount the component from render tree
        setIsVisible(false);
    };

    return (
        <div>
            <h1>FuncComponentCounter</h1>
            {isVisible && (
                <div>
                    <h2>current count: {count}</h2>
                    <br />
                    <button onClick={incrementCount}>increment count by useState set function</button>
                    <br /><br />
                    <button onClick={decrementVisiblity}>unmount this component</button>
                </div>
            )}
            {!isVisible && (
                <p>
                    FuncComponentCounter has been unmount. refresh the page to mount this component again...
                </p>
            )}
        </div>
    );
}
// and add a param in setState to replace state to prevent we access the outdated variable in high-frequency clicks event