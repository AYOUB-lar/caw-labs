import React from "react";

export default function TaskCard({ task, onMove, onRemove }) {
  const { id, title, description, status } = task;
  const statuses = ["To Do", "In Progress", "Done"];

  return (
    <div className="task-card">
      <h3>{title}</h3>
      <p>{description}</p>

      <div className="actions">
        {statuses.map(s => (
          <button
            key={s}
            disabled={status === s}
            onClick={() => onMove(id, s)}
          >
            {s}
          </button>
        ))}

        <button onClick={() => onRemove(id)}>Supprimer</button>
      </div>
    </div>
  );
}
