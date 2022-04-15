import { combineReducers } from 'redux';
import authReducer from './authReducer';
import alertReducer from './alertReducer';
import taskReducer from './taskReducer';

export default combineReducers({
  auth: authReducer,
  alert: alertReducer,
  task: taskReducer,
});
