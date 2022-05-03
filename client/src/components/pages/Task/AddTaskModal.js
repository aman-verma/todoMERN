import React, { useState, useEffect } from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { connect } from 'react-redux';
import {
  addTask,
  clearCurrentTask,
  updateTask,
} from '../../../actions/taskActions';

const AddTaskModal = ({ addTask, clearCurrentTask, updateTask, current }) => {
  const [from, setFromDate] = useState(new Date());
  const [to, setToDate] = useState(new Date());
  const [formValues, setFormValues] = useState({
    title: '',
    description: '',
  });

  useEffect(() => {
    if (current != null) {
      console.log(current);
      setFormValues(current);
      setFromDate(new Date(current.from));
      setToDate(new Date(current.to));
    } else {
      setFormValues({
        title: '',
        description: '',
      });
      setFromDate(new Date());
      setToDate(new Date());
    }
  }, [current]);

  const handleErrors = (formValues) => {
    console.log(formValues);
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!formValues.email) {
      errors.email = 'Email is required';
    } else if (!regex.test(formValues.email)) {
      errors.email = 'This is not a valid email format!';
    }
    if (!formValues.password) {
      errors.password = 'Password is required';
    } else if (formValues.password.length < 6) {
      errors.password = 'Password can not be lesser than 6 characters';
    } else if (formValues.password.length > 10) {
      errors.password = 'Password can not be bigger than 10 characters';
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      console.log('submit', formValues);
      addTask({
        ...formValues,
        from: from.toString(),
        to: to.toString(),
      });
    } else {
      console.log('submit', formValues);

      updateTask({
        ...formValues,
        from: from.toString(),
        to: to.toString(),
      });
    }
    clearCurrentTask();
  };

  const clearAll = () => {
    clearCurrentTask();
  };

  return (
    <>
      <div
        className='modal fade'
        id='addModal'
        aria-labelledby='addModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-lg modal-dialog-centered'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title text-primary' id='exampleModalLabel'>
                {current ? 'Edit Task' : 'Add Task'}
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
                onClick={clearAll}
              ></button>
            </div>
            <div className='modal-body'>
              <form onSubmit={onSubmit}>
                <div className='mb-3'>
                  <label htmlFor='recipient-name' className='col-form-label'>
                    Start Date:
                  </label>
                  <DatePicker
                    popperPlacement='bottom'
                    selected={from}
                    onChange={(date: Date) => setFromDate(date)}
                    showTimeSelect
                    dateFormat='d MMMM  yyyy - HH:mm'
                    timeFormat='p'
                    timeIntervals={15}
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor='recipient-name' className='col-form-label'>
                    End Date:
                  </label>
                  <DatePicker
                    popperPlacement='bottom'
                    selected={to}
                    onChange={(date: Date) => setToDate(date)}
                    startDate={formValues.startDate}
                    endDate={to}
                    minDate={from}
                    showTimeSelect
                    dateFormat='d MMMM  yyyy - HH:mm'
                    timeFormat='p'
                    timeIntervals={15}
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor='recipient-name' className='col-form-label'>
                    Title:
                  </label>
                  <input
                    type='text'
                    name='title'
                    value={formValues.title}
                    onChange={handleChange}
                    className='form-control'
                    id='title'
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor='message-text' className='col-form-label'>
                    Description:
                  </label>
                  <textarea
                    name='description'
                    value={formValues.description}
                    onChange={handleChange}
                    className='form-control'
                    id='description'
                  ></textarea>
                </div>
                <button type='submit' className='btn btn-primary'>
                  {current ? 'Update Task' : 'Add Task'}
                </button>
                {current && (
                  <button
                    className='btn btn-light btn-block'
                    onClick={clearAll}
                  >
                    Clear
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

AddTaskModal.propTypes = {};

const mapStateToProps = (state) => ({
  current: state.task.current,
});

export default connect(mapStateToProps, {
  addTask,
  clearCurrentTask,
  updateTask,
})(AddTaskModal);
