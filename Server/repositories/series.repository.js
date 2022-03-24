const config = require("config");
const axios = require("axios");
const Promise = require("es6-promise").Promise;

class SeriesRepository {
  constructor() {
    this.jikanHeaderHost = config.get("jikanHeaderHost");
    this.jikanApiKey = config.get("jikanApiKey");
    this.jikanURL = config.get("jikanURL");
    this.headers = {
      "X-RapidAPI-Host": this.jikanHeaderHost,
      "X-RapidAPI-Key": this.jikanApiKey,
    };
  }

  sendRequestById(id) {
    console.log(id);
    let path = this.jikanURL + "anime/" + id + "/episodes";
    let headers = this.headers;
    let options = {
      method: "GET",
      url: path,
      headers,
    };
    return axios.request(options);
  }
  async getSeries(series) {
    const idArray = series.map((show) => show.mal_id);
    let promiseArray = [];
    let tasks = [];
    let jikanHeaderHost = config.get("jikanHeaderHost");
    let jikanApiKey = config.get("jikanApiKey");
    let jikanURL = config.get("jikanURL");
    let headers = {
      "X-RapidAPI-Host": jikanHeaderHost,
      "X-RapidAPI-Key": jikanApiKey,
    };
    console.log(idArray);

    for (let i = 0; i < idArray.length; i++) {
      const delay = 500 * i;
      let path = jikanURL + "anime/" + idArray[i] + "/episodes";
      let optionsRequest = {
        method: "GET",
        url: path,
        headers,
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
        episodeList.push(subResult.data.episodes);
      });
      return episodeList;
    });
    // try {
    //   for (let i = 0; i <= idArray.length - 1; i++) {
    //     let promise = this.sendRequestById(idArray[i]);
    //     promiseArray.push(promise);
    //   }
    // } catch (error) {
    //   console.log(error);
    // }

    // var callback = () =>
    //   Promise.all(promiseArray).then(function (values) {
    //     let results = [];
    //     values.forEach((value) => {
    //       results.push(value.data.episodes);
    //     });
    //     console.log(results.length);
    //   });

    // setTimeout(callback, 3000);
    // return results;
  }
}

module.exports = SeriesRepository;
