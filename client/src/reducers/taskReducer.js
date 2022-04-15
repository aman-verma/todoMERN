import { GET_TASKS, TASK_ERROR } from '../actions/types';

const initialState = {
  tasks: [],
  loading: false,
  current: null,
  filtered: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
