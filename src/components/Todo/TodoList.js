import React, { useEffect, useState } from "react";
import { getTasks, updateTask, deleteTask } from "../../api";
import AddTodo from "./AddTodo";

const TodoList = ({ token }) => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const tasks = await getTasks(token);
    setTasks(tasks);
  };

  useEffect(() => {
    fetchTasks();
  }, [token]);

  const handleUpdate = async (task) => {
    const updatedStatus = task.status === "done" ? "pending" : "done"; // Toggle status
    await updateTask(token, {
      id: task.id,
      title: task.title,
      status: updatedStatus,
    });
    fetchTasks();
  };

  const handleDelete = async (id) => {
    await deleteTask(token, id);
    fetchTasks();
  };

  return (
    <div>
      <h2>Todo List</h2>
      <AddTodo token={token} refreshTasks={fetchTasks} />
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span>
              {task.title} - {task.status}
            </span>
            <button onClick={() => handleUpdate(task)}>Toggle Status</button>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
