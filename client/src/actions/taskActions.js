import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';

import {
  GET_TASKS,
  TASK_ERROR,
  ADD_TASK,
  DELETE_TASK,
  SET_CURRENT_TASK,
  DONE_TASK,
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
      payload: error.response.data.errors,
    });
  }
};

//DELETE TASK
export const deleteTask = (id) => async (dispatch) => {
  console.log(id);
  try {
    await axios.delete(`/api/tasks/${id}`);
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
export const updateTask = (task) => async (dispatch) => {
  console.log(task);
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.put(`/api/tasks/${task._id}`, task, config);
    dispatch({
      type: UPDATE_TASK,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: TASK_ERROR,
      payload: error.response.data.errors,
    });
  }
};

export const setCurrentTask = (task) => (dispatch) => {
  dispatch({ type: SET_CURRENT_TASK, payload: task });
};

//CLEAR CURRENT CONTACTS
export const clearCurrentTask = () => (dispatch) => {
  console.log('clearCurrentTask action');
  dispatch({ type: CLEAR_CURRENT_TASK });
};
