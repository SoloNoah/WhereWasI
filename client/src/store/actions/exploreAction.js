import { GET_SEASON, GET_TODAY, GET_TOP } from "./actionTypes.js";

import { getToday, getSeasonAnime, getTop } from "../../services/jikanAPI.js";

//Get Today's schedules
export const getTodaySchedule = () => async (dispatch) => {
  try {
    let response = await getToday();
    dispatch({
      type: GET_TODAY,
      payload: response,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getSeasonalAnime = () => async (dispatch) => {
  try {
    let response = await getSeasonAnime();
    dispatch({
      type: GET_SEASON,
      payload: response,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getTopRated = () => async (dispatch) => {
  try {
    console.log("getting top");
    let response = await getTop();
    dispatch({
      type: GET_TOP,
      payload: response,
    });
  } catch (error) {
    console.log(error);
  }
};
