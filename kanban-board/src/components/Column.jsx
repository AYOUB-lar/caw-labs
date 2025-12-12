import React from "react";
import TaskCard from "./TaskCard";

export default function Column({ title, tasks, onMove, onRemove }) {
  return (
    <div className="column">
      <h2>{title} ({tasks.length})</h2>
      {tasks.map(task => (
        <TaskCard
          key={task.id}
          task={task}
          onMove={onMove}
          onRemove={onRemove}
        />
      ))}
      {tasks.length === 0 && <p>Aucune tâche</p>}
    </div>
  );
}
