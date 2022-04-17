import React, { useEffect } from 'react';
import TaskItem from './TaskItem';
import AddTaskModal from './AddTaskModal';

import { connect } from 'react-redux';
import { getTasks } from '../../../actions/taskActions';

const Tasks = ({ getTasks, auth, tasks }) => {
  useEffect(() => {
    getTasks();
  }, []);

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
        <div className='compContainer-body p-4'>
          {tasks.map((task) => {
            return <TaskItem key={task._id} task={task} />;
          })}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.task.tasks,
  auth: state.auth,
});

export default connect(mapStateToProps, { getTasks })(Tasks);
