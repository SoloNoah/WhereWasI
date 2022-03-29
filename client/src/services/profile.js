import axios from 'axios';
import { getCookie } from '../helper/cookies';
const BASE_URL = 'http://localhost:5000';
const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export async function getUserProfile() {
  const token = getCookie('accessToken');
  config['headers']['x-auth-token'] = token;
  try {
    const res = await axios.get(BASE_URL + '/api/profile/get-profile', config);
    return res.data;
  } catch (error) {
    let response = error.response;
    if (response.status === 401 || response.status === 500) {
      throw response.data;
    }
  }
}

export async function addSeriesToProfile(id, episodes) {
  const token = getCookie('accessToken');
  const body = JSON.stringify({ mal_id: id, episodes });

  config['headers']['x-auth-token'] = token;
  try {
    const res = await axios.post(BASE_URL + '/api/profile/add-series', body, config);
    console.log('done?');
  } catch (error) {
    console.log(error);
  }
}
