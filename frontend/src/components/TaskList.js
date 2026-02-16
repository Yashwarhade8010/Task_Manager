import React from 'react';

function TaskList({ tasks, onEdit, onDelete }) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <h3>No tasks found</h3>
        <p>Create your first task to get started!</p>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div key={task.id} className="task-card">
          <div className="task-header">
            <div>
              <h3 className="task-title">{task.title}</h3>
              <div className="task-badges">
                <span className={`badge badge-status ${task.status}`}>
                  {task.status.replace('_', ' ')}
                </span>
                <span className={`badge badge-priority ${task.priority}`}>
                  {task.priority}
                </span>
              </div>
            </div>
          </div>

          {task.description && (
            <p className="task-description">{task.description}</p>
          )}

          <div className="task-actions">
            <button 
              onClick={() => onEdit(task)} 
              className="btn btn-primary btn-sm"
            >
              Edit
            </button>
            <button 
              onClick={() => onDelete(task.id)} 
              className="btn btn-danger btn-sm"
            >
              Delete
            </button>
          </div>

          <div className="task-meta">
            Created: {formatDate(task.created_at)}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
