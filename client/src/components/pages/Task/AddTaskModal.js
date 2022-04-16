import React, { useState } from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AddTaskModal = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <>
      <div
        className='modal fade'
        id='exampleModal'
        aria-labelledby='exampleModalLabel'
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
                    selected={startDate}
                    onChange={(date: Date) => setStartDate(date)}
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
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
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
                    className='form-control'
                    id='recipient-name'
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor='message-text' className='col-form-label'>
                    Desciption:
                  </label>
                  <textarea
                    className='form-control'
                    id='message-text'
                  ></textarea>
                </div>
                <button type='button' className='btn btn-primary'>
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

export default AddTaskModal;
