import { REGISTER_SUCCESS, REGISTER_FAIL } from '../actions/actionTypes.js';

import { registerNewUser } from '../../services/api';

//REGISTER
export const register = (newUser) => async (dispatch) => {
  try {
    let response = await registerNewUser(newUser);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: response.token,
    });
    return;
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.errorMessage
    });
  }
};
