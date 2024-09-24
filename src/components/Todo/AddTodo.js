import React, { useState } from 'react';
import { createTask } from '../../api';

const AddTodo = ({ token, refreshTasks }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createTask(token, { title });
        refreshTasks(); // Call function to refresh tasks after adding
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="New Task" onChange={(e) => setTitle(e.target.value)} required />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default AddTodo;
