import { GET_SEASON, GET_TODAY, GET_TOP, SEARCH_SUCCESS } from '../actions/actionTypes';

const initialState = {
  todayList: [],
  seasonList: [],
  topList: [],
  searchResponseList: [],
  failErrorMessage: '',
};

export default function exploreReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_TODAY:
      return {
        ...state,
        searchResponseList: [],
        todayList: payload,
      };
    case GET_SEASON:
      return {
        ...state,
        searchResponseList: [],
        seasonList: payload,
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        searchResponseList: payload,
      };
    case GET_TOP:
      return {
        ...state,
        searchResponseList: [],
        topList: payload,
      };

    default:
      return state;
  }
}
