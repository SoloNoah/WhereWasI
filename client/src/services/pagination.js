import axios from 'axios';

const LIMIT = 4;
const jikanURL = process.env.REACT_APP_jikanURL;

export const getAllEpisodesDetails = async (id, episodesNum, page = 1) => {
  let startIndex = (page - 1) * LIMIT === 0 ? 1 : (page - 1) * LIMIT;

  let endIndex = page * LIMIT + 1 > episodesNum ? episodesNum : page * LIMIT + 1;

  try {
    let tasks = [];

    for (let i = startIndex; i < endIndex; i++) {
      const delay = 700 * i;
      let path = jikanURL + 'anime/' + id + '/episodes/' + i;
      let optionsRequest = {
        method: 'GET',
        url: path,
      };
      let promise = new Promise(async function (resolve) {
        await new Promise((res) => setTimeout(res, delay));
        let result = axios.request(optionsRequest);
        resolve(result);
      });

      tasks.push(promise);
    }

    return Promise.all(tasks)
      .then((results) => {
        let episodeList = [];
        results.forEach((subResult) => {
          episodeList.push(subResult.data.data);
        });
        return { episodeList, page };
      })
      .catch((e) => console.log(e));
  } catch (error) {}
};
