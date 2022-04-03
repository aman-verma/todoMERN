import React from 'react';
import { NavLink } from 'react-router-dom';

import UserImage from '../../../Img/user.png';
import './SideDrawer.css';

export default function SideDrawer({ show }) {
  const user = {
    name: 'Dummy Demo',
    avatar: '',
  };

  let drawerClasses = 'side-drawer  bg-light';
  if (show) {
    drawerClasses = 'side-drawer  bg-light open';
  }

  return (
    <nav className={drawerClasses}>
      <div className='userInfoContainer'>
        {user.avatar ? (
          <img
            className='rounded-circle userImg'
            src={user.avatar}
            alt={user.name}
          ></img>
        ) : (
          <img
            className='rounded-circle userImg'
            src={UserImage}
            alt={user.name}
          ></img>
        )}
        <div>
          <span className='userName'>{user.name}</span>
        </div>
      </div>
      <ul>
        <li>
          <NavLink to='/'> Dashboard </NavLink>
        </li>
        <li>
          <NavLink to='/tasks'> Tasks </NavLink>
        </li>
        <li>
          <NavLink to='/about'> About </NavLink>
        </li>
        <li>
          <NavLink to='/login'> Signout </NavLink>
        </li>
      </ul>
    </nav>
  );
}
