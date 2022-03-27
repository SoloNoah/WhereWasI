import { GET_SEASON, GET_TODAY, GET_TOP } from "../actions/actionTypes";

const initialState = {
  todayList: [],
  seasonList: [],
  topList: [],
  failErrorMessage: "",
};

export default function exploreReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_TODAY:
      return {
        ...state,
        todayList: payload,
      };
    case GET_SEASON:
      return {
        ...state,
        seasonList: payload,
      };
    case GET_TOP:
      return {
        ...state,
        topList: payload,
      };

    default:
      return state;
  }
}
