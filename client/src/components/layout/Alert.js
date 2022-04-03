import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import { connect } from 'react-redux';
//import {} from '../../actions/alertActions';

const Alert = ({ alert }) => {
  useEffect(() => {
    if (alert != null && alert.type === 'error') {
      toast.error(alert.msg);
    }
    if (alert != null && alert.type === 'success') {
      toast.success(alert.msg);
    }
    if (alert != null && alert.type === 'info') {
      toast.info(alert.msg);
    }
    if (alert != null && alert.type === 'warning') {
      toast.warn(alert.msg);
    }
  }, [alert]);

  return (
    alert != null && (
      <>
        <ToastContainer theme='dark' className='p-3' />
      </>
    )
  );
};

const mapStateToProps = (state) => ({
  alert: state.alert,
});

export default connect(mapStateToProps, {})(Alert);
