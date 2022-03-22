import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  RESET_REGISTER,
} from "../actions/actionTypes.js";

const initialState = {
  token: localStorage.getItem("accessToken"),
  isAuthenticated: null,
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
      localStorage.setItem("accessToken", payload);
      return {
        ...state,
        token: payload,
        isAuthenticated: true,
        registerSuccess: true,
        loading: false,
        failErrorMessage: "",
      };
    case REGISTER_FAIL:
      localStorage.removeItem("accessToken");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        registerSuccess: false,
        loading: false,
        failErrorMessage: payload,
      };

    default:
      return state;
  }
}
