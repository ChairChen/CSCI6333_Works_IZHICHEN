import { useEffect, useRef, useState } from "react";

function ChatWindow({ messages }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div
      style={{
        maxHeight: "180px",
        overflowY: "auto",
        border: "1px solid #ccc",
        padding: "10px",
        borderRadius: "8px",
        marginBottom: "10px",
      }}
    >
      {messages.map((msg, index) => (
        <p key={index} style={{ margin: "4px 0" }}>
          {msg}
        </p>
      ))}
      <div ref={bottomRef}></div>
    </div>
  );
}

export default function UseRef() {
  const [messages, setMessages] = useState([
    "A: Hello",
    "B: Hi, who is this?",
    "A: I am React, what about you?",
    "B: I am React too.",
    "A: Nice to meet you!",
    "B: Wonderful",
  ]);

  const dict = [
    "A: Do you like hooks?",
    "B: Yes! Especially useEffect!",
    "A: Have you tried useRef?",
    "B: Sure, I just used it to scroll!",
    "A: Let's learn useReducer next!",
    "B: Sounds fun!",
  ];

  const [index, setIndex] = useState(0);

  const handleAddMessage = () => {
    if (index < dict.length) {
      setMessages((prev) => [...prev, dict[index]]);
      setIndex(index + 1);
    } else {
      setMessages((prev) => [...prev, "🔚 No more messages!"]);
    }
  };

  return (
    <section>
      <h2>useRef Hook Example – Auto Scroll Chat</h2>
      <ChatWindow messages={messages} />
      <button onClick={handleAddMessage}>Add Message</button>
    </section>
  );
}
