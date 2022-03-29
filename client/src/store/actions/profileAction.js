import { GET_PROFILE, PROFILE_ERROR, REMOVE_SERIES, ADD_SERIES } from './actionTypes';

import { getUserProfile, addSeriesToProfile, removeSeriesFromProfile } from '../../services/profile';

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
      payload: error.errorMessage,
    });
    return error.status;
  }
};

export const addSeries = (id, episodesNum) => async (dispatch) => {
  try {
    let response = await addSeriesToProfile(id, episodesNum);
    dispatch({
      type: ADD_SERIES,
      payload: response,
    });
  } catch (error) {
    console.log(error);
  }
};

export const removeSeries = (id) => async (dispatch) => {
  try {
    console.log('?');
    let response = await removeSeriesFromProfile(id);
    dispatch({
      type: REMOVE_SERIES,
      payload: response,
    });
  } catch (error) {
    console.log(error);
  }
};
