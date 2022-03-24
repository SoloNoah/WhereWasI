import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  RESET_REGISTER,
} from "./actionTypes.js";

import { registerNewUser } from "../../services/auth";

//REGISTER
export const register = (newUser) => async (dispatch) => {
  try {
    let response = await registerNewUser(newUser);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: response.token,
    });
    return response.status;
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.errorMessage,
    });
    return error.status;
  }
};

export const resetRegister = () => async (dispatch) => {
  dispatch({ type: RESET_REGISTER });
};
