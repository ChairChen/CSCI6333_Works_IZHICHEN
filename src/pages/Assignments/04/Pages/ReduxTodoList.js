import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddTodo, DeleteTodo } from "../../../../redux/actions/ReduxTodoListActions";

export default function ReduxToDo() {
    const [inputValue, setInputValue] = useState("");
    const todos = useSelector((state) => state.todoList.todos);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            dispatch(AddTodo(inputValue));
            setInputValue("");
        }
    };

    return (
        <section>
            <h1>Redux Todo List</h1>
            <br />
            <div>
                <input 
                    id="todoInput"
                    name="todoInput"
                    type="text"
                    placeholder="Enter todo..."
                    value={inputValue}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
                <button onClick={() => { dispatch(AddTodo(inputValue)); setInputValue(""); }}>Add</button>
            </div>
            <br />
            {todos.length === 0 ? (
                <p>Your todo list is empty</p>
            ) : (
                <ul style={{ width: "fit-content" }}>
                    {todos.map((todo, index) => (
                        <li key={index+todo}>
                            { todo }
                            &nbsp;
                            <button
                                title="remove todo"
                                onClick={() => dispatch(DeleteTodo(todo))} 
                                style={{
                                    borderRadius: "50px"
                                    ,color: "var(--color-warning)"
                                    ,fontWeight: "bold"
                                    ,marginTop: "10px"
                                }}>
                                x
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}
