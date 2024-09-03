import React, { useState } from "react";

const App = () => {

  const [tasks, setTasks] = useState([
    { id: "task1", description: "Complete homework" },
    { id: "task2", description: "Buy groceries" },
    { id: "task3", description: "Clean the house" },
  ]);

  const handleRemoveTask = (id) => {
    setTasks((previousTasks) => previousTasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <h1>My Task Manager</h1>
      <ul id="taskList" style={{ listStyleType: "none", padding: 0 }}>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              marginBottom: "8px",
              display: "flex",
              alignItems: "center",
            }}
          >
            {task.description}
            <button
              onClick={() => handleRemoveTask(task.id)}
              style={{
                marginLeft: "10px",
                color: "white",
                backgroundColor: "red",
                border: "none",
                padding: "6px 12px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
