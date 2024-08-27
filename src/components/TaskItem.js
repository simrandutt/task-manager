import React from 'react';

const TaskItem = ({ task, onDelete, onComplete }) => {
    return (
        <div className={`task-item ${task.completed ? 'completed' : ''}`}>
            <h3>{task.taskName}</h3>
            <p>Category: {task.category}</p>
            <p>Due Date: {task.dueDate}</p>
            <button onClick={() => onComplete(task.id)}>
                {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => onDelete(task.id)}>Delete</button>
        </div>
    );
};

export default TaskItem;
