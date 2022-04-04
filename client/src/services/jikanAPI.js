import axios from 'axios';

import { getUserProfile } from './profile';

//TODO CAN MAKE THIS MORE GENERIC,
//RIGHT NOW  ITS VERY SPECIFIC AND CAN BE DONE MUCH BETTER + REPEATING LOTS OF ROWS.
const days = {
  0: 'sunday',
  1: 'monday',
  2: 'tuesday',
  3: 'wednesday',
  4: 'thursday',
  5: 'friday',
  6: 'saturday',
};

const jikanURL = process.env.REACT_APP_jikanURL;

export async function getToday() {
  const dayNum = new Date().getDay();
  const day = days[dayNum];
  const path = jikanURL + 'schedules/' + day;
  let optionsRequest = {
    method: 'GET',
    url: path,
  };
  const res = await axios.request(optionsRequest);
  let data = res.data.data;
  const profile = await callToProfile();
  if (profile) {
    data = getShowsAlreadyInProfile(data, profile);
  }
  return data;
}

export async function getTop() {
  const path = jikanURL + 'top/anime';
  let optionsRequest = {
    method: 'GET',
    url: path,
  };
  const res = await axios.request(optionsRequest);
  let data = res.data.data;
  const profile = await callToProfile();
  console.log(profile);
  if (profile) {
    data = getShowsAlreadyInProfile(data, profile);
  }
  return data;
}

export async function getSeasonAnime() {
  const path = jikanURL + 'seasons/now';
  let optionsRequest = {
    method: 'GET',
    url: path,
  };
  const res = await axios.request(optionsRequest);
  let data = res.data.data;
  const profile = await callToProfile();
  if (profile) {
    data = getShowsAlreadyInProfile(data, profile);
  }
  return data;
}

export async function getAnimeByName(query) {
  const path = jikanURL + 'anime';
  let params = {
    q: query,
    order_by: 'score',
    sort: 'desc',
  };
  let optionsRequest = {
    method: 'GET',
    url: path,
    params,
  };
  const res = await axios.request(optionsRequest);
  let data = res.data.data;
  const profile = await callToProfile();
  if (profile) {
    data = getShowsAlreadyInProfile(data, profile);
  }
  return data;
}

async function callToProfile() {
  console.log('?');

  var profile = JSON.parse(localStorage.getItem('profile'));
  if (!profile) {
    try {
      console.log('fetching profile');
      let response = await getUserProfile();
      console.log(response);
      profile = [...response.userProfile.series];
    } catch (error) {
      return null;
    }
  }
  return profile;
}
export function getShowsAlreadyInProfile(data, profile) {
  let idsFromProfile = profile.map((show) => show.mal_id);
  const updatedData = data.map((show) => {
    if (idsFromProfile.indexOf(show.mal_id) >= 0) {
      return { ...show, inProfile: true };
    } else {
      return { ...show, inProfile: false };
    }
  });

  return updatedData;
}
