import React, { useState, useEffect } from "react";
import axios from "axios";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import ThemeToggle from "./components/ThemeToggle";
import "./index.css";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/tasks")
      .then((response) => setTasks(response.data))
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []);

  const addTask = (taskName) => {
    axios
      .post("http://localhost:5000/tasks", { name: taskName })
      .then((response) => setTasks([...tasks, response.data]))
      .catch((error) => console.error("Error adding task:", error));
  };

  const completeTask = (id) => {
    const task = tasks.find((task) => task._id === id);
    axios
      .put(`http://localhost:5000/tasks/${id}`, {
        completed: !task.completed,
        name: task.name,
      })
      .then((response) =>
        setTasks(tasks.map((t) => (t._id === id ? response.data : t)))
      )
      .catch((error) => console.error("Error completing task:", error));
  };

  const editTask = (id) => {
    const newTaskName = prompt(
      "Edit task:",
      tasks.find((task) => task._id === id).name
    );
    if (newTaskName) {
      axios
        .put(`http://localhost:5000/tasks/${id}`, {
          name: newTaskName,
          completed: false,
        })
        .then((response) =>
          setTasks(tasks.map((t) => (t._id === id ? response.data : t)))
        )
        .catch((error) => console.error("Error editing task:", error));
    }
  };

  const deleteTask = (id) => {
    axios
      .delete(`http://localhost:5000/tasks/${id}`)
      .then(() => setTasks(tasks.filter((task) => task._id !== id)))
      .catch((error) => console.error("Error deleting task:", error));
  };

  return (
    <div className="container mx-auto p-4">
      <ThemeToggle />
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      <AddTask onAdd={addTask} />
      <TaskList
        tasks={tasks}
        onComplete={completeTask}
        onEdit={editTask}
        onDelete={deleteTask}
      />
    </div>
  );
}

export default App;
