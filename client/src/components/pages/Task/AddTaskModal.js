import React from 'react';

const AddTaskModal = () => {
  return (
    <>
      <div
        className='modal fade'
        id='exampleModal'
        tabindex='-1'
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
                  <label for='recipient-name' className='col-form-label'>
                    Start:
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='recipient-name'
                  />
                </div>
                <div className='mb-3'>
                  <label for='recipient-name' className='col-form-label'>
                    End:
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='recipient-name'
                  />
                </div>
                <div className='mb-3'>
                  <label for='recipient-name' className='col-form-label'>
                    Title:
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='recipient-name'
                  />
                </div>
                <div className='mb-3'>
                  <label for='message-text' className='col-form-label'>
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
