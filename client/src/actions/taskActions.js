import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';

import {
  GET_TASKS,
  TASK_ERROR,
  ADD_TASK,
  DELETE_TASK,
  SET_CURRENT_TASK,
  UPDATE_TASK,
  CLEAR_CURRENT_TASK,
} from './types';

//GET TASKS
export const getTasks = () => async (dispatch) => {
  // console.log('getTasks start');
  // if (localStorage.ckToken) {
  //   setAuthToken(localStorage.ckToken);
  // }
  try {
    const res = await axios.get('/api/tasks');
    dispatch({
      type: GET_TASKS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: TASK_ERROR,
      payload: error.response.data.msg,
    });
  }
};

//ADD TASK
export const addTask = (task) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.post('/api/tasks', task, config);
    dispatch({
      type: ADD_TASK,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.response);
    dispatch({
      type: TASK_ERROR,
      payload: error.response.msg,
    });
  }
};

//DELETE TASK
const deleteTask = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/contacts/${id}`);
    dispatch({
      type: DELETE_TASK,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: TASK_ERROR,
      payload: error.response.msg,
    });
  }
};

//UPDATE TASK
const updateTask = (task) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.put(`/api/contacts/${task._id}`, task, config);
    dispatch({
      type: UPDATE_TASK,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: TASK_ERROR,
      payload: error.response.msg,
    });
  }
};

//SET CURRENT CONTACTS
const setCurrentTask = (task) => async (dispatch) => {
  dispatch({ type: SET_CURRENT_TASK, payload: task });
};

//CLEAR CURRENT CONTACTS
const clearCurrentTask = () => async (dispatch) => {
  dispatch({ type: CLEAR_CURRENT_TASK });
};
