import React from 'react';

function Task({ task, onComplete, onEdit, onDelete }) {
  return (
    <div className="task-item">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onComplete(task._id)}
        />
        <span
          className={task.completed ? 'completed' : ''}
          onClick={() => onEdit(task._id)}
        >
          {task.name}
        </span>
      </div>
      <button onClick={() => onDelete(task._id)}>
        &#x2716;
      </button>
    </div>
  );
}

export default Task;
