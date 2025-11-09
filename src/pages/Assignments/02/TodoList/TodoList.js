import { useState, useCallback, memo } from "react";

const TodoItem = memo(({ todo, onDelete }) => {
    console.log("Rendering TodoItem:", todo.id, "-", todo.text);
    return (
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span>{todo.text}</span>
            <button onClick={() => onDelete(todo.id)}> Delete</button>
        </div>
    );
});

export default function TodoList({ initialTodos }) {
    const [todos, setTodos] = useState(initialTodos || []);

    const handleDelete = useCallback((id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    }, []);

    return (
        <section style={{ padding: "20px", fontFamily: "Arial" }}>
            <h2>Todo List</h2>

            <div style={{ marginTop: "20px" }}>
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} onDelete={handleDelete} />
                ))}
            </div>
        </section>
    );
};