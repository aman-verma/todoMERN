import React from 'react';

import { connect } from 'react-redux';

import { setCurrentTask, deleteTask } from '../../../actions/taskActions';

const TaskItem = ({ task, deleteTask, setCurrentTask }) => {
  const { title, description, from, to, _id } = task;

  const onSetCurrentTask = () => {
    setCurrentTask(task);
  };

  const onDelete = () => {
    deleteTask(_id);
  };

  return (
    <>
      <div className='card mb-2 p-2'>
        <div class='card-body'>
          <h5 className='card-title'>{title}</h5>
          <p className='card-text'>
            <large>Start Date - {from}</large>
          </p>
          <p className='card-text'>
            <large>End Date - {from}</large>
          </p>
          <p className='card-text'>{description}</p>
          <btn class='btn btn-link mr-1'>Done</btn>
          <btn
            class='btn btn-link mr-1'
            data-bs-toggle='modal'
            data-bs-target='#addModal'
            onClick={onSetCurrentTask}
          >
            Edit
          </btn>
          <btn class='btn btn-link' onClick={onDelete}>
            Delete
          </btn>
        </div>
      </div>
    </>
  );
};

export default connect(null, {
  setCurrentTask,
  deleteTask,
})(TaskItem);
