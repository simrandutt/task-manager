import React, { useState } from 'react';

const TaskForm = ({ onAdd }) => {
    const [taskName, setTaskName] = useState('');
    const [category, setCategory] = useState('');
    const [dueDate, setDueDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({ taskName, category, dueDate, completed: false });
        setTaskName('');
        setCategory('');
        setDueDate('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Task Name"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
            />
            <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                required
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;
