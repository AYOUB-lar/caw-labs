import React, { useState } from 'react';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);

  const handleSubmit = () => {
    if (username && password) {
      setUsers([...users, { id: Date.now(), username, password }]);
      setUsername('');
      setPassword('');
    }
  };

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Authentication Form</h1>

      <div className="mb-6">
        <div className="mb-3">
          <label className="block mb-1">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border px-3 py-2 rounded w-64"
          />
        </div>

        <div className="mb-3">
          <label className="block mb-1">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border px-3 py-2 rounded w-64"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3">Users List</h2>
        {users.map((user) => (
          <div key={user.id} className="flex items-center gap-4 mb-2 p-2 bg-gray-100">
            <span>Username: {user.username}</span>
            <span>Password: {user.password}</span>
            <button
              onClick={() => handleDelete(user.id)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}