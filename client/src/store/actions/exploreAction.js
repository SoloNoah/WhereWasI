import { GET_SEASON, GET_TODAY, GET_TOP, SEARCH_SUCCESS, SEARCH_FAILURE } from './actionTypes.js';

import { getToday, getSeasonAnime, getTop, getAnimeByName } from '../../services/jikanAPI.js';

//Get Today's schedules
export const getTodaySchedule = (userprofile) => async (dispatch) => {
  try {
    let response = await getToday(userprofile);

    dispatch({
      type: GET_TODAY,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: SEARCH_FAILURE,
      payload: error,
    });
  }
};

export const getSeasonalAnime = (userprofile) => async (dispatch) => {
  try {
    let response = await getSeasonAnime(userprofile);
    dispatch({
      type: GET_SEASON,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: SEARCH_FAILURE,
      payload: error,
    });
  }
};

export const getTopRated = (userprofile) => async (dispatch) => {
  try {
    let response = await getTop(userprofile);
    dispatch({
      type: GET_TOP,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: SEARCH_FAILURE,
      payload: error,
    });
  }
};

export const searchAnime = (query) => async (dispatch) => {
  try {
    let response = await getAnimeByName(query);
    dispatch({
      type: SEARCH_SUCCESS,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: SEARCH_FAILURE,
      payload: error,
    });
  }
};
