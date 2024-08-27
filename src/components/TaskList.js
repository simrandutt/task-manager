import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onDelete, onComplete }) => {
    return (
        <div className="task-list">
            {tasks.map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onDelete={onDelete}
                    onComplete={onComplete}
                />
            ))}
        </div>
    );
};

export default TaskList;
