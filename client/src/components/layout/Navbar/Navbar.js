import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from '../../../actions/authActions';

import UserImage from '../../../Img/user.png';
import './Navbar.css';

const Navbar = ({ icon, title, drawerToggleClickHandler, logout }) => {
  const onLogout = () => {
    logout();
    //clearContacts();
  };

  return (
    <nav
      className='navbar navbar-expand-lg navbar-light bg-light fixed-top'
      aria-label='Secondary navigation'
    >
      <div className='container-xxl d-flex align-items-md-center'>
        {/* <div> */}
        <button
          className='btn .btn-primary-outline rounded-circle me-2'
          onClick={drawerToggleClickHandler}
        >
          <i className='fa fa-bars' />
        </button>
        {/* Navbar brand  */}
        <Link to='/' className='navbar-brand'>
          <i className={icon} /> {title}
        </Link>
        {/* </div> */}

        <form className='position-relative m-auto input-group'>
          <input
            type='search'
            className='form-control ds-input'
            id='search-input'
            placeholder='Search Tasks...'
          />
          <span className='input-group-text' id='basic-addon1'>
            <i className='fa fa-search'></i>
          </span>
        </form>

        <div className='dropdown'>
          {/* <button
            className='btn btn-bd-light dropdown-toggle'
            id='bd-versions'
            data-bs-toggle='dropdown'
            aria-expanded='false'
            data-bs-display='static'
          >
            <span className='d-none d-lg-inline'>Bootstrap</span> v5.0
          </button> */}

          <span
            className='nav-link dropdown-toggle d-flex align-items-center'
            id='bd-versions'
            data-bs-toggle='dropdown'
            aria-expanded='false'
            data-bs-display='static'
          >
            <img
              className='rounded-circle userImg'
              src={UserImage}
              height='30'
              alt=''
              loading='lazy'
            />
          </span>

          <ul
            className='dropdown-menu dropdown-menu-end'
            aria-labelledby='bd-versions'
          >
            <li>
              <a className='dropdown-item'>Profile</a>
            </li>
            <li>
              <a onClick={onLogout} className='dropdown-item'>
                Signout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Learn React',
  icon: 'fa fa-book-open',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
};

export default connect(null, { logout })(Navbar);
