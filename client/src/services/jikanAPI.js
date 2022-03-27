import axios from "axios";
//TODO CAN MAKE THIS MORE GENERIC,
//RIGHT NOW  ITS VERY SPECIFIC AND CAN BE DONE MUCH BETTER + REPEATING LOTS OF ROWS.
const days = {
  0: "sunday",
  1: "monday",
  2: "tuesday",
  3: "wednesday",
  4: "thursday",
  5: "friday",
  6: "saturday",
};
const seasons = ["winter", "spring", "summer", "autumn"];
const getSeason = (d) => Math.floor((d.getMonth() / 12) * 4) % 4;

const jikanURL = process.env.REACT_APP_jikanURL;
const jikanApiKey = process.env.REACT_APP_jikanApiKey;
const jikanHeaderHost = process.env.REACT_APP_jikanHeaderHost;
const headers = {
  "X-RapidAPI-Host": jikanHeaderHost,
  "X-RapidAPI-Key": jikanApiKey,
};

export async function getToday() {
  const dayNum = new Date().getDay();
  const day = days[dayNum];
  const path = jikanURL + "schedule/" + day;
  let optionsRequest = {
    method: "GET",
    url: path,
    headers,
  };
  const res = await axios.request(optionsRequest);
  const data = await res.data[day];
  return data;
}

export async function getTop() {
  const path = jikanURL + "top/anime/1/upcoming";
  let optionsRequest = {
    method: "GET",
    url: path,
    headers,
  };
  const res = await axios.request(optionsRequest);
  const data = await res.data;
  return data;
}

export async function getSeasonAnime() {
  const currSeason = getSeason(new Date());
  const path = jikanURL + "season/2022/" + seasons[currSeason];
  let optionsRequest = {
    method: "GET",
    url: path,
    headers,
  };
  const res = await axios.request(optionsRequest);
  console.log(res.data.anime);

  //   return data;
}
