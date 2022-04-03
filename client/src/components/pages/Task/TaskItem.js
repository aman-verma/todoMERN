import React from 'react';

const TaskItem = ({ task }) => {
  const { title, description } = task;
  return (
    <>
      <div className='card mb-2 p-2'>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text'>{description}</p>
        <a href='#' className='card-link'>
          Card link
        </a>
      </div>
    </>
  );
};

export default TaskItem;
