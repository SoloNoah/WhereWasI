import axios from "axios";

const BASE_URL = "http://localhost:5000";
const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export async function getUserProfile() {
  const token = localStorage.getItem("accessToken");
  config["headers"]["x-auth-token"] = token;
  try {
    const res = await axios.get(BASE_URL + "/api/profile/get-profile", config);
    return res.data;
  } catch (error) {
    let response = error.response;
    if (response.status === 401 || response.status === 500) {
      throw response.data;
    }
  }
}
