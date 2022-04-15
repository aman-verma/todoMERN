import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';

import { GET_TASKS, TASK_ERROR } from './types';

//GET CONTACTS
export const getContacts = () => async (dispatch) => {
  console.log('getContacts start');
  if (localStorage.ckToken) {
    setAuthToken(localStorage.ckToken);
  }

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
