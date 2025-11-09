import { useEffect, useRef } from "react";

export default function ChatWindow({ message }) {
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [message]);

    return (
        <div style={{
            height: "200px",
            width: "300px",
            border: "2px solid #ccc",
            borderRadius: "8px",
            overflowY: "auto",
            padding: "10px"
        }}>
            {message.map((msg, index) => (
                <p key={index} style={{
                    margin: "5px 0",
                    padding: "5px",
                    borderRadius: "5px",
                    marginBottom: "10px",
                }}>
                    {msg}
                </p>
            ))}
            <div ref={bottomRef} />
        </div>
    );
};