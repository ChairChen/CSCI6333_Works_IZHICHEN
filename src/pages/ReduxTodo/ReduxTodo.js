// •	Create a Redux store to manage the following global state:
// o	To-Do App: A To-Do App with the following actions :
// Add the Task
// Delete the Task
// Mark the task as Completed – Add a check box and button with name “Complete” after every task in the task list, when the user checks in the task and click on complete button, it should show up under completed tasks list.
// •	Use React-Redux hooks (useSelector, useDispatch) to connect Redux with React components.
// •	Refer to the previous assignments for layout references

import { useSelector, useDispatch } from "react-redux";
import { AddTodo, DeleteTodo, CompleteTodo, CheckTodo } from "../../redux/actions/ReduxTodoListActions";
import { useState } from "react";
import { Container, Button, Form, ListGroup } from "react-bootstrap";

export default function ReduxTodo() {
    const [inputValue, setInputValue] = useState("");
    const todos = useSelector((state) => state.todoList.todos);
    const dispatch = useDispatch();
    
    const handleAdd = () => {
        if (!inputValue.trim()) return;
        dispatch(AddTodo(inputValue));
        setInputValue("");
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleAdd();
        }
    };

    const pendingTodos = Object.entries(todos).filter(
        ([, value]) => !value.completed
    );

    const completedTodos = Object.entries(todos).filter(
        ([, value]) => value.completed
    );

    return (
        <Container>
            <h1 className="mb-4">Redux Todo Page (Global State Management with Redux)</h1>

            <div className="border rounded p-4 mb-4">
                <h3 className="mb-3">Add New Todo</h3>
                <Form>
                    <Form.Group className="d-flex gap-2">
                        <Form.Control
                        type="text"
                        placeholder="Enter todo..."
                        value={inputValue}
                        onChange={(event) => setInputValue(event.target.value)}
                        onKeyDown={(event) => handleKeyDown(event)}
                        />
                        <Button title="Add todo" onClick={() => handleAdd()}>Add</Button>
                    </Form.Group>
                </Form>
            </div>

            {/* ===== Pending Todos ===== */}
            <div className="border rounded p-4 mb-4">
                <h3 className="mb-3">Todo List</h3>

                {pendingTodos.length === 0 ? (
                <p className="text-muted">Your todo list is empty</p>
                ) : (
                <ListGroup variant="flush">
                    {pendingTodos.map(([key]) => (
                    <ListGroup.Item
                        key={key}
                        className="mb-2 d-flex justify-content-between align-items-center border rounded"
                    >
                        <div className="d-flex align-items-center flex-grow-1">
                            <Form.Check
                                type="checkbox"
                                inline
                                label={key}
                                className="me-3 ps-0"
                                onChange={() => dispatch(CheckTodo(key))}
                            />
                        </div>

                        <div className="d-flex gap-2">
                            <Button
                                title="Complete todo"
                                size="sm"
                                variant="success"
                                onClick={() => dispatch(CompleteTodo(key))}
                            >
                                Complete
                            </Button>
                            
                            <Button
                                title="Remove todo"
                                size="sm"
                                variant="danger"
                                onClick={() => dispatch(DeleteTodo(key))}
                            >
                                ✕
                            </Button>
                        </div>
                    </ListGroup.Item>
                    ))}
                </ListGroup>
                )}
            </div>

            {/* ===== Completed Todos ===== */}
            <div className="border rounded p-4">
                <h3 className="mb-3">Completed Todos</h3>

                {completedTodos.length === 0 ? (
                <p className="text-muted">You haven't completed anything yet…</p>
                ) : (
                <ListGroup variant="flush">
                    {completedTodos.map(([key]) => (
                    <ListGroup.Item
                        key={key}
                        className="mb-2 d-flex justify-content-between align-items-center border rounded"
                    >
                        <span className="me-3">
                        {key}
                        </span>

                        <Button
                            title="Remove todo"
                            size="sm"
                            variant="danger"
                            onClick={() => dispatch(DeleteTodo(key))}
                        >
                        ✕
                        </Button>
                    </ListGroup.Item>
                    ))}
                </ListGroup>
                )}
            </div>
        </Container>
    );
}
