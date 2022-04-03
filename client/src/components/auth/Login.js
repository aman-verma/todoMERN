import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loginUser, clearErrors } from '../../actions/authActions';
import { setAlert } from '../../actions/alertActions';

const Login = ({ history, loginUser, clearErrors, auth, setAlert }) => {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

  useEffect(() => {
    if (auth.error != null) {
      setAlert(auth.error, 'error');
      clearErrors();
    }
    if (auth.isAuthenticated) {
      navigate('/');
    }
  }, [auth.error, auth.isAuthenticated, history]);

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setAlert('Please enter all fields', 'error');
    } else {
      console.log({ email, password });
      loginUser({ email, password });
    }
  };

  return (
    <div className='form-container login'>
      <h1>
        Account <span className='text-primary'>Login</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input type='text' name='email' value={email} onChange={onChange} />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='text'
            name='password'
            value={password}
            onChange={onChange}
          />
        </div>
        <button type='submit' className='btn btn-primary btn-block'>
          {auth.loading ? (
            <i className='fa fa-spinner fa-pulse'></i>
          ) : (
            <span>Login</span>
          )}
        </button>
      </form>
    </div>
  );
};

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { loginUser, clearErrors, setAlert })(
  Login
);
