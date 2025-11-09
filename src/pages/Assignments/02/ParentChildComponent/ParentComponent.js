import { useState } from "react";
import ChildComponent from "./ChildComponent";

export default function ParentComponent() {
    const [color, setColor] = useState("lightgray");

    const handleColorChange = (newColor) => {
        setColor(newColor);
    };

    return (
        <section style={{ padding: "20px" }}>
            <h2>Parent Component</h2>
             <div
                style={{
                width: "150px",
                height: "150px",
                backgroundColor: color,
                border: "2px solid #000",
                marginBottom: "20px",
                }}
            />
            <p>Current Color: {color}</p>
            <ChildComponent selectedColor={color} onColorChange={handleColorChange} />
        </section>
    );
}