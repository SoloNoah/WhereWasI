import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, GET_PROFILE } from './actionTypes.js';

import { loginUser } from '../../services/auth';
import { getProfile } from './profileAction';
//LOGIN
export const login = (newUser) => async (dispatch) => {
  try {
    const loginResponse = await loginUser(newUser);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: loginResponse.token,
    });

    dispatch(getProfile());
    return loginResponse.status;
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.errorMessage,
    });
    return error.status;
  }
};

//LOGOUT
export const logoutUser = () => async (dispatch) => {
  dispatch({ type: LOGOUT });
};
