import { GET_SEASON, GET_TODAY, GET_TOP, SEARCH_SUCCESS, SEARCH_FAILURE, RESET_MESSAGE } from '../actions/actionTypes';

const initialState = {
  todayList: [],
  seasonList: [],
  topList: [],
  searchResponseList: [],
  failErrorMessage: '',
  successMessage: '',
};

export default function exploreReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_TODAY:
      return {
        ...state,
        searchResponseList: [],
        failErrorMessage: '',
        todayList: payload,
      };
    case GET_SEASON:
      return {
        ...state,
        searchResponseList: [],
        failErrorMessage: '',
        seasonList: payload,
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        failErrorMessage: '',
        searchResponseList: payload,
      };
    case GET_TOP:
      return {
        ...state,
        searchResponseList: [],
        failErrorMessage: '',
        topList: payload,
      };

    case SEARCH_FAILURE:
      return {
        ...state,
        failErrorMessage: payload.errorMessage,
      };
    case RESET_MESSAGE:
      return {
        ...state,
        failErrorMessage: '',
        successMessage: '',
      };
    default:
      return state;
  }
}
