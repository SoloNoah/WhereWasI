import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  RESET_REGISTER,
} from "../actions/actionTypes.js";
import { getCookie, setCookie, eraseCookie } from "../../helper/cookies";

const initialState = {
  token: getCookie("accessToken"),
  registerSuccess: null,
  loading: true,
  failErrorMessage: "",
};

export default function authReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case RESET_REGISTER:
      return {
        ...state,
        registerSuccess: null,
      };
    case REGISTER_SUCCESS:
      setCookie("accessToken", payload);
      return {
        ...state,
        token: payload,
        registerSuccess: true,
        loading: false,
        failErrorMessage: "",
      };
    case REGISTER_FAIL:
      eraseCookie("accessToken");
      return {
        ...state,
        token: null,
        registerSuccess: false,
        loading: false,
        failErrorMessage: payload,
      };

    default:
      return state;
  }
}
