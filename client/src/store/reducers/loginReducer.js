import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "../actions/actionTypes";

const initialState = {
  token: localStorage.getItem("accessToken"),
  isAuthenticated: null,
  loading: true,
  failErrorMessage: "",
};

export default function loginReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGOUT:
      window.localStorage.removeItem("accessToken");
      return {
        ...state,
        isAuthenticated: null,
        token: null,
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
