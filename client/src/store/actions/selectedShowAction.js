import { PAGINATE_SUCCESS, PAGINATE_FAILURE, SET_SELECTED_SHOW } from '../actions/actionTypes.js';

import { getAllEpisodesDetails } from '../../services/pagination';

export const getEpisodesForPage =
  (mal_id, episodes, page = 1) =>
  async (dispatch) => {
    try {
      const response = await getAllEpisodesDetails(mal_id, episodes, page);

      dispatch({
        type: PAGINATE_SUCCESS,
        payload: response,
      });
      return response.episodeList;
    } catch (error) {
      dispatch({
        type: PAGINATE_FAILURE,
        payload: error.errorMessage,
      });
    }
  };

export const setSelectedShow = (show) => async (dispatch) => {
  dispatch({
    type: SET_SELECTED_SHOW,
    payload: show,
  });
};
