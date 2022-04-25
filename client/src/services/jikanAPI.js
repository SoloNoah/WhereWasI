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

export async function getShowEpisodes(id) {
  let path = jikanURL + 'anime/' + id + '/episodes';
  let optionsRequest = {
    method: 'GET',
    url: path,
  };
  const res = await axios.request(optionsRequest);
  let data = res.data.data;
  return data;
}

export async function getToday(userprofile) {
  const dayNum = new Date().getDay();
  const day = days[dayNum];
  const path = jikanURL + 'schedules/' + day;
  let optionsRequest = {
    method: 'GET',
    url: path,
  };
  const res = await axios.request(optionsRequest);
  let data = res.data.data;
  if (userprofile.length > 0) {
    data = getShowsAlreadyInProfile(data, userprofile);
  }
  return data;
}

export async function getTop(userprofile = null) {
  const path = jikanURL + 'top/anime';
  let optionsRequest = {
    method: 'GET',
    url: path,
  };
  const res = await axios.request(optionsRequest);
  let data = res.data.data;
  if (userprofile.length > 0) {
    data = getShowsAlreadyInProfile(data, userprofile);
  }
  return data;
}

export async function getSeasonAnime(userprofile) {
  const path = jikanURL + 'seasons/now';
  let optionsRequest = {
    method: 'GET',
    url: path,
  };
  const res = await axios.request(optionsRequest);
  let data = res.data.data;
  if (userprofile.length > 0) {
    data = getShowsAlreadyInProfile(data, userprofile);
  }
  return data;
}

export async function getAnimeByName(query, userprofile) {
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
  // if (userprofile.length > 0) {
  //   data = getShowsAlreadyInProfile(data, userprofile);
  // }
  return data;
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
