import React, { useState } from "react";

export default function TaskForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("To Do");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAdd(title.trim(), description.trim(), status);
    setTitle("");
    setDescription("");
    setStatus("To Do");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        placeholder="Titre"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <input
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />

      <select value={status} onChange={e => setStatus(e.target.value)}>
        <option>To Do</option>
        <option>In Progress</option>
        <option>Done</option>
      </select>

      <button type="submit">Ajouter</button>
    </form>
  );
}
