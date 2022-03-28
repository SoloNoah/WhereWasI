import axios from 'axios';
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
  const data = res.data.data;
  return data;
}

export async function getTop() {
  const path = jikanURL + 'top/anime';
  let optionsRequest = {
    method: 'GET',
    url: path,
  };
  const res = await axios.request(optionsRequest);
  const data = res.data.data;
  return data;
}

export async function getSeasonAnime() {
  const path = jikanURL + 'seasons/now';
  let optionsRequest = {
    method: 'GET',
    url: path,
  };
  const res = await axios.request(optionsRequest);
  const data = res.data.data;
  return data;
}
