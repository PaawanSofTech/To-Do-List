import React from 'react';
import TaskList from './TaskList';

const Dashboard = ({ tasks }) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <a href="/api/logout">Logout</a>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default Dashboard;
