import { SET_ALERT } from './types';

//set Alert
export const setAlert = (msg, type) => async (dispatch) => {
  dispatch({
    type: SET_ALERT,
    payload: { msg, type },
  });

  //   setTimeout(() => {
  //     dispatch({
  //       type: REMOVE_ALERT,
  //     });
  //   }, 5000);
};
