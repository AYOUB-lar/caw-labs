import React, { useState, useEffect } from "react";
import Column from "./components/Column";
import TaskForm from "./components/TaskForm";
import { v4 as uuidv4 } from "uuid";

const STATUSES = ["To Do", "In Progress", "Done"];

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const raw = localStorage.getItem("kanban_tasks");
    return raw ? JSON.parse(raw) : [];
  });

  useEffect(() => {
    localStorage.setItem("kanban_tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title, description, status = "To Do") => {
    setTasks(prev => [
      { id: uuidv4(), title, description, status },
      ...prev,
    ]);
  };

  const moveTask = (taskId, newStatus) => {
    setTasks(prev => prev.map(t => t.id === taskId ? {...t, status: newStatus} : t));
  };

  const removeTask = (taskId) => {
    setTasks(prev => prev.filter(t => t.id !== taskId));
  };

  return (
    <div className="app">
      <h1>Kanban Board</h1>

      <TaskForm onAdd={addTask} />

      <div className="board">
        {STATUSES.map(status => (
          <Column
            key={status}
            title={status}
            tasks={tasks.filter(t => t.status === status)}
            onMove={moveTask}
            onRemove={removeTask}
          />
        ))}
      </div>
    </div>
  );
}
