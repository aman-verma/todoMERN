import React, { useState } from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { connect } from 'react-redux';
import { addTask } from '../../../actions/taskActions';

const AddTaskModal = ({ addTask }) => {
  const [from, setFromDate] = useState(new Date());
  const [to, setToDate] = useState(new Date());

  const [formValues, setFormValues] = useState({
    title: '',
    description: '',
  });

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
    console.log(e.target.name, e.target.value);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({
      ...formValues,
      from: from.toString(),
      to: to.toString(),
    });
    console.log('submit', formValues);
    addTask({
      ...formValues,
      from: from.toString(),
      to: to.toString(),
    });
    // addTask({
    //   title: 'Post test 2 updated',
    //   description: 'Post test description',
    //   from: '2022-04-12T19:15:00.937Z',
    //   to: '2022-04-01T19:11:44.000Z',
    //   status: 'Pending',
    // });
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
              <h5 className='modal-title' id='exampleModalLabel'>
                ADD Task
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              <form>
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
                    onChange={handleChange}
                    className='form-control'
                    id='description'
                  ></textarea>
                </div>
                <button
                  type='button'
                  className='btn btn-primary'
                  onClick={onSubmit}
                >
                  Save changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

AddTaskModal.propTypes = {};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { addTask })(AddTaskModal);
