import React, { useState } from 'react';

function AddTask({ onAdd }) {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      onAdd(taskName);
      setTaskName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        className="border p-2 w-full"
        placeholder="Add a new task..."
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white p-2 mt-2 w-full">
        Add Task
      </button>
    </form>
  );
}

export default AddTask;
