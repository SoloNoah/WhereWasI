import { PAGINATE_FAILURE, PAGINATE_SUCCESS, SET_SELECTED_SHOW } from '../actions/actionTypes.js';

const initialState = {
  show: {},
  episodesArray: [],
  failErrorMessage: '',
};

export default function selectedShowReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_SELECTED_SHOW:
      return {
        ...state,
        show: payload,
      };
    case PAGINATE_SUCCESS:
      let oldEpisodes = [...state.episodesArray];
      oldEpisodes.push(payload);
      return {
        ...state,
        episodesArray: [...oldEpisodes],
      };

    case PAGINATE_FAILURE:
      return {
        ...state,
        failErrorMessage: payload,
      };

    default:
      return state;
  }
}
