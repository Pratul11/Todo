import React, { useState, useEffect } from 'react';

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState('');

    const handleAdd = () => {
        if (todo !== '') {
            setTodos([...todos, { text: todo, isCompleted: false }]);
            setTodo('');
        }
    };

    const handleChange = (event) => {
        setTodo(event.target.value);
    };

    const handleToggleComplete = (index) => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        setTodos(newTodos);
    };

    const handleEdit = (index) => {
        const todoToEdit = todos[index].text;
        setTodo(todoToEdit);
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    const handleDelete = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };


    return (
        <div className="container">
            <div className="todo-head">
                <h1>TODO LIST</h1>
            </div>
            <div className="todo-body">
                <input
                    type="text"
                    name="task"
                    id="task-input"
                    placeholder="Add item..."
                    value={todo}
                    onChange={handleChange}
                />
                <button onClick={handleAdd} className="task-add-btn">
                    ADD
                </button>
                <div className="render-tasks">
                    {todos.map((todo, index) => (
                        <div key={index} className={`task ${todo.isCompleted ? 'completed' : ''}`}>
                            <input
                                type="checkbox"
                                checked={todo.isCompleted}
                                onChange={() => handleToggleComplete(index)}
                            />
                            <p id="task-name">{todo.text}</p>
                            <button onClick={() => handleEdit(index)} className="task-edit-btn">
                                Edit
                            </button>
                            <button onClick={() => handleDelete(index)} className="task-delete-btn">
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Todo;