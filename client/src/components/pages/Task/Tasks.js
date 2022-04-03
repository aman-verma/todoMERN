import React from 'react';

import TaskItem from './TaskItem';
import AddTaskModal from './AddTaskModal';

const Tasks = () => {
  const tasks = [
    { id: 1, title: 'Task 1', description: 'Task 1 description' },
    { id: 2, title: 'Task 2', description: 'Task 2 description' },
    { id: 3, title: 'Task 3', description: 'Task 3 description' },
    { id: 4, title: 'Task 4', description: 'Task 4 description' },
  ];
  return (
    <>
      <AddTaskModal />
      <div className='compContainer'>
        <div className='compContainer-header bg-transparent px-4'>
          <div className='d-flex justify-content-between align-items-center'>
            <div className='me-4'>
              <div className='compContainer-header-title mb-0'>Tasks</div>
            </div>
            <div className='d-flex gap-2'>
              <button
                className='btn btn-md btn-primary btn-icon'
                type='button'
                data-bs-toggle='modal'
                data-bs-target='#exampleModal'
              >
                <i className='fa fa-plus'></i>
              </button>
            </div>
          </div>
        </div>
        <div class='compContainer-body p-4'>
          {tasks.map((task) => {
            return <TaskItem key={task.id} task={task} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Tasks;
