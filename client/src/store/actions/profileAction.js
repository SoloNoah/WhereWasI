import { GET_PROFILE, PROFILE_ERROR } from "./actionTypes";

import { getUserProfile } from "../../services/profile";
export const getProfile = () => async (dispatch) => {
  try {
    let response = await getUserProfile();
    dispatch({
      type: GET_PROFILE,
      payload: response.userProfile,
    });
    console.log(response.userProfile);
    return response.userProfile;
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: error.errorMessage,
    });
    return error.status;
  }
};
