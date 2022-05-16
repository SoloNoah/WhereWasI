import axios from "axios";
import { getCookie } from "../helper/cookies";
const BASE_URL = "http://localhost:5000";
const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export async function getUserProfile() {
  const token = getCookie("accessToken");
  config["headers"]["x-auth-token"] = token;
  try {
    const res = await axios.get(BASE_URL + "/api/profile/get-profile", config);
    console.log(res);
    return res.data;
  } catch (error) {
    let response = error.response;
    if (response.status === 401 || response.status === 500) {
      throw response.data;
    }
  }
}

export async function addSeriesToProfile(id, episodes, synopsis, image_url) {
  const token = getCookie("accessToken");
  const body = JSON.stringify({ mal_id: id, episodes, synopsis, image_url });

  config["headers"]["x-auth-token"] = token;
  try {
    const res = await axios.post(
      BASE_URL + "/api/profile/add-series",
      body,
      config
    );
  } catch (error) {
    let response = error.response;
    throw response.data;
  }
}
//TODO convert getting cookie and appending to config into a more generic function and avoid repeatition

export async function removeSeriesFromProfile(id) {
  const token = getCookie("accessToken");
  const body = JSON.stringify({ mal_id: id });

  config["headers"]["x-auth-token"] = token;
  try {
    const res = await axios.post(
      BASE_URL + "/api/profile/remove-series",
      body,
      config
    );
  } catch (error) {
    let response = error.response;
    throw response.data;
  }
}
