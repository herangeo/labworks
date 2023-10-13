import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Task 1' },
    { id: 2, name: 'Task 2' },
    { id: 3, name: 'Task 3' },
  ]);

  const handleAdd = taskName => {
    const newTask = { id: Date.now(), name: taskName };
    setTasks([...tasks, newTask]);
  };

  const handleEdit = taskId => {
    const updatedName = prompt('Enter the new task name:');
    if (updatedName !== null) {
      setTasks(tasks.map(task => (task.id === taskId ? { ...task, name: updatedName } : task)));
    }
  };

  const handleDelete = taskId => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm handleAdd={handleAdd} />
      <TaskList tasks={tasks} handleEdit={handleEdit} handleDelete={handleDelete} />
    </div>
  );
};

export default App;

