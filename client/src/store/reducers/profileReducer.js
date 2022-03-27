import { GET_PROFILE, PROFILE_ERROR } from "../actions/actionTypes";

const initialState = {
  profile: null,
  failErrorMessage: "",
};

if (initialState.token) {
  initialState.isAuthenticated = true;
}
export default function profileReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
      };

    case PROFILE_ERROR:
      return {
        failErrorMessage: payload,
      };
    default:
      return state;
  }
}
