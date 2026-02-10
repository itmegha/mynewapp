import { useState } from "react";

function App(){

const [tasks, setTasks] = useState([
    { name: "Task 1", status: "done" },
    { name: "Task 2", status: "not done" },
    { name: "Task 3", status: "done" }
  ]);

  // Toggle status function
  const toggleStatus = (index) => {
    // Create a new array with updated task status
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        return {
          ...task,
          status: task.status === "done" ? "not done" : "done"
        };
      }
      return task;
    });

    // Update state
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>Employee Task List</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <strong>{task.name}</strong> - <em>{task.status}</em>
            <button onClick={() => toggleStatus(index)} style={{ marginLeft: '10px' }}>
              Toggle Status
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;