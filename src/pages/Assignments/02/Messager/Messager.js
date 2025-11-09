import { useState } from "react";
import ChatWindow from "./ChatWindow";

export default function Messager() {
    const [message, setMessage] = useState([
        "Hello!",
        "Welcome to the Messager component.",
        "Feel free to send a message."
    ]);
    const [inputValue, setInputValue] = useState("");
    const handleSendMessage = () => {
        if (inputValue.trim() !== "") {
            setMessage(prevMessages => [...prevMessages, inputValue]);
            setInputValue("");
        }
    };
    return (
        <section style={{ padding: "20px", fontFamily: "Arial" }}>
            <h2>Messager Component</h2>
            <ChatWindow message={message} />
            <div style={{ marginTop: "10px" }}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                    style={{
                        padding: "8px",
                        width: "220px",
                        marginRight: "8px",
                        borderRadius: "4px",
                        border: "1px solid #ccc",
                    }}
                    placeholder="Type a message..."
                />
                <button onClick={handleSendMessage} style={{ padding: "8px 12px" }}>
                    Send
                </button>
            </div>
        </section>
    );
}