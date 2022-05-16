import {
  GET_PROFILE,
  PROFILE_ERROR,
  REMOVE_SERIES,
  ADD_SERIES,
  RESET_MESSAGE,
} from "./actionTypes";

import {
  getUserProfile,
  addSeriesToProfile,
  removeSeriesFromProfile,
} from "../../services/profile";
import { getShowEpisodes } from "../../services/jikanAPI";

export const getProfile = () => async (dispatch) => {
  try {
    let response = await getUserProfile();
    dispatch({
      type: GET_PROFILE,
      payload: response.userProfile,
    });
    return response.userProfile;
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: error,
    });
    return error.status;
  }
};

export const addSeries =
  (id, episodesNum, synopsis, image_url) => async (dispatch) => {
    try {
      let response = await addSeriesToProfile(
        id,
        episodesNum,
        synopsis,
        image_url
      );
      let episodes = await getShowEpisodes(id);
      let addedShow = { mal_id: id, episodes };
      dispatch({
        type: ADD_SERIES,
        payload: addedShow,
      });

      // return response;
    } catch (error) {
      dispatch({
        type: PROFILE_ERROR,
        payload: error,
      });
      return error.status;
    }
  };

export const removeSeries = (id) => async (dispatch) => {
  try {
    let response = await removeSeriesFromProfile(id);
    dispatch({
      type: REMOVE_SERIES,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: error,
    });
  }
};

export const resetMessage = () => (dispatch) => {
  dispatch({
    type: RESET_MESSAGE,
  });
};
