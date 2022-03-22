import { LOGIN_SUCCESS, LOGIN_FAIL, RESET_LOGIN } from "./actionTypes.js";

import { loginUser } from "../../services/api";

//LOGIN
export const login = (newUser) => async (dispatch) => {
  try {
    let response = await loginUser(newUser);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: response.token,
    });
    return response.status;
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.errorMessage,
    });
    return error.status;
  }
};

export const resetLogin = () => async (dispatch) => {
  dispatch({ type: RESET_LOGIN });
};
