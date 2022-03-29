const config = require('config');
const axios = require('axios');
const Promise = require('es6-promise').Promise;

class SeriesRepository {
  constructor() {
    this.jikanURL = config.get('jikanURL');
  }
  /**
   * TODO: Once i finish adding the front end side "search" feature i should implement pulling episode status watched/unwatched into here and send it back in 1 get request for profile + add the title to the object sent to backend + schema
   */
  async getAllSeriesInProfile(idArray) {
    let tasks = [];
    const jikanURL = this.jikanURL;

    for (let i = 0; i < idArray.length; i++) {
      const delay = 500 * i;
      let path = jikanURL + 'anime/' + idArray[i] + '/episodes';
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
    return Promise.all(tasks).then((results) => {
      let episodeList = [];
      results.forEach((subResult) => {
        episodeList.push(subResult.data.data);
      });
      return episodeList;
    });
  }
}

module.exports = SeriesRepository;
