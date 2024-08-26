// import { useState } from 'react'
// import './App.css'
// import Navbar from './components/Navbar'
// import Todo from './components/Todo'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <Navbar />
//       <Todo />
//     </>
//   )
// }

// export default App


import React, { useState } from 'react';

function TodoApp() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleEditTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, isEditing: true } : task
      )
    );
  };

  const handleSaveTask = (taskId, updatedTask) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, ...updatedTask, isEditing: false } : task
      )
    );
  };

  return (
    <div>
      {/* Task adding functionality */}
      {/* ... */}

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.isEditing ? (
              <input
                type="text"
                value={task.title}
                onChange={(e) => handleUpdateTask(task.id, e.target.value)}
              />
            ) : (
              <span>{task.title}</span>
            )}
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
            <button onClick={() => handleEditTask(task.id)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
