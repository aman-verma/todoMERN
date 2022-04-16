import React from 'react';

const TaskItem = ({ task }) => {
  const { title, description, from, to } = task;
  return (
    <>
      <div className='card mb-2 p-2'>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text'>
          <large>Start Date - {from}</large>
        </p>
        <p className='card-text'>
          <large>End Date - {from}</large>
        </p>
        <p className='card-text'>{description}</p>
        <a href='#' className='card-link'>
          Card link
        </a>
      </div>
    </>
  );
};

export default TaskItem;
