import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "./actionTypes.js";

import { loginUser } from "../../services/auth";

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

//LOGOUT
export const logoutUser = () => async (dispatch) => {
  dispatch({ type: LOGOUT });
};
