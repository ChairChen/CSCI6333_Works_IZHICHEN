export default function ChildComponent({ selectedColor, onColorChange }) {
    return (
        <section style={{ marginTop: "20px" }}>
            <h3>Child Component</h3>
            <p>Selected Color: <span style={{ color: selectedColor }}>{selectedColor}</span></p>
            <div>
                <button onClick={() => onColorChange("lightblue")} style={{ marginRight: "10px" }}>Blue</button>
                <button onClick={() => onColorChange("lightgreen")} style={{ marginRight: "10px" }}>Green</button>
                <button onClick={() => onColorChange("lightpink")}>Pink</button>
            </div>
        </section>
    );
};