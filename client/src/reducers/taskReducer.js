import {
  GET_TASKS,
  TASK_ERROR,
  ADD_TASK,
  DELETE_TASK,
  SET_CURRENT_TASK,
  UPDATE_TASK,
  DONE_TASK,
  CLEAR_CURRENT_TASK,
} from '../actions/types';

const initialState = {
  tasks: [],
  loading: false,
  current: null,
  filtered: null,
  error: null,
};

export default (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload,
        loading: false,
        error: null,
      };
    case ADD_TASK:
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
        loading: false,
        error: null,
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => {
          return task._id !== action.payload;
        }),
        loading: false,
        error: null,
      };
    case SET_CURRENT_TASK:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT_TASK:
      return {
        ...state,
        current: null,
      };
    case DONE_TASK:
      return {
        ...state,
        current: 'done',
      };
    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          return task._id === action.payload._id ? action.payload : task;
        }),
        loading: false,
      };
    case TASK_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
