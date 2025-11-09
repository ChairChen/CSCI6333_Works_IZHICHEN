import { useState } from "react";

export default function TextInputLogger() {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        console.log("Event Type:", event.type); // Synthetic event type
        console.log("Current Target Value:", event.currentTarget.value); // Current value of input
        setInputValue(event.target.value);
    };

    return (
        <section>
            <h2>Text Input Logger Functional Component</h2>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Type Something..." 
            />
            <p>Current Value: {inputValue}</p>
        </section>
    );
}