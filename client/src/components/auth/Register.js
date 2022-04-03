import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { registerUser } from '../../actions/authActions';
import { setAlert } from '../../actions/alertActions';

const Register = ({ history, registerUser, setAlert, auth }) => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (auth.error != null) {
      setAlert(auth.error, 'error');
    }
    if (auth.isAuthenticated) {
      navigate('/');
    }
  }, [auth.error, auth.isAuthenticated, history]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      setAlert('Please enter all fields', 'error');
    } else if (password !== password2) {
      setAlert('Password does not match', 'error');
    } else {
      registerUser({ name, email, password });
    }
  };

  return (
    <>
      <div className='form-container register'>
        <h1>
          Account <span className='text-primary'>Register</span>
        </h1>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' value={name} onChange={onChange} />
          </div>
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
              minLength='6'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password2'>Password2</label>
            <input
              type='text'
              name='password2'
              value={password2}
              onChange={onChange}
              minLength='6'
            />
          </div>
          <input
            type='submit'
            className='btn btn-primary btn-block'
            value='Register'
          />
        </form>
      </div>
    </>
  );
};

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { registerUser, setAlert })(Register);
