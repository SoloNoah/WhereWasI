import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "../actions/actionTypes";
import { getCookie, eraseCookie } from "../../helper/cookies";
const initialState = {
  token: getCookie("accessToken"),
  isAuthenticated: null,
  loading: true,
  failErrorMessage: "",
};

if (initialState.token) {
  initialState.isAuthenticated = true;
}
export default function loginReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGOUT:
      // window.localStorage.removeItem("accessToken");
      eraseCookie("accessToken");
      return {
        ...state,
        isAuthenticated: null,
        token: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: payload,
        loading: false,
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
