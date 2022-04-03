import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT,
  CLEAR_ERRORS,
  SET_LOADING,
} from './types';

//register user
export const registerUser = (formData) => async (dispatch) => {
  //const  = async () => {
  console.log(formData);
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.post('/api/auth/register', formData, config);
    console.log(res.data);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response.data.msg,
    });
  }
};

//login user
export const loginUser = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    dispatch(setLoading());
    const res = await axios.post('/api/auth', formData, config);
    console.log('=====');
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data.msg,
    });
  }
};

//load user
export const loadUser = () => async (dispatch) => {
  // load token into global headers
  if (localStorage.ckToken) {
    setAuthToken(localStorage.ckToken);
  }
  try {
    const res = await axios.get('/api/auth');
    console.log(res);
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (error) {
    dispatch({ type: AUTH_ERROR });
  }
};

//logout user
export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT });
};

//clear errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};

//set loading to true
export const setLoading = () => {
  return { type: SET_LOADING };
};
