import { GET_PROFILE, PROFILE_ERROR, ADD_SERIES, REMOVE_SERIES, RESET_MESSAGE } from '../actions/actionTypes';

const initialState = {
  profile: null,
  failErrorMessage: '',
  successMessage: '',
};

if (initialState.token) {
  initialState.isAuthenticated = true;
}
export default function profileReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
      // localStorage.setItem('profile', JSON.stringify(payload.series));
      return {
        ...state,
        profile: payload,
      };
    case RESET_MESSAGE:
      return {
        ...state,
        failErrorMessage: '',
        successMessage: '',
      };
    case ADD_SERIES:
    case REMOVE_SERIES:
    case PROFILE_ERROR:
      return {
        ...state,
        failErrorMessage: payload.errorMessage,
      };
    default:
      return state;
  }
}
