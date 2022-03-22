import { LOGIN_SUCCESS, LOGIN_FAIL, RESET_LOGIN } from "../actions/actionTypes";

const initialState = {
  token: localStorage.getItem("accessToken"),
  isAuthenticated: null,
  loading: true,
  failErrorMessage: "",
};

export default function loginReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case RESET_LOGIN:
      return {
        ...state,
        isAuthenticated: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: payload,
        isAuthenticated: true,
      };
    case LOGIN_FAIL:
      return {
        isAuthenticated: false,
        failErrorMessage: payload,
      };
    default:
      return state;
  }
}
