import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const TaskList = ({ tasks, onComplete, onEdit, onDelete }) => {
  const currentDate = new Date();

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task._id} className={`task-item ${task.completed ? 'completed' : ''}`}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onComplete(task._id)}
          />
          <span className={task.completed ? 'completed' : ''}>
            {task.name}
            {task.dueDate && (
              <span className="due-date">
                Due: {new Date(task.dueDate).toLocaleDateString()}
              </span>
            )}
            {task.reminder && (
              <span className="reminder">
                Reminder: {new Date(task.reminder).toLocaleString()}
              </span>
            )}
            {new Date(task.dueDate) < currentDate && !task.completed && (
              <span className="overdue">Overdue</span>
            )}
          </span>
          <button onClick={() => onEdit(task._id)}>
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button onClick={() => onDelete(task._id)}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
