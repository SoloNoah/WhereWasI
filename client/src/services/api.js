import axios from 'axios';

const BASE_URL = 'http://localhost:5000';
const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export async function registerNewUser(newUser) {
  const body = JSON.stringify(newUser);

  await axios
    .post(BASE_URL + '/api/auth/register', body, config)
    .then((res) => {
      console.log(res);
      window.localStorage.setItem('accessToken', res.data.token);
      return { status: 200 };
    })
    .catch((error) => {
      let response = error.response;
      console.log(response);
      if (response.status === 401 || response.status === 500) {
        throw response.data;
      }
    });
}

export async function loginUser(newUser) {
  const body = JSON.stringify(newUser);
  const res = await axios.post(BASE_URL + '/api/auth/login', body, config).catch((error) => {
    let response = error.response;
    console.log(response);
    if (response.status === 401 || response.status === 500) {
      throw response.data;
    }
  });
  //TODO: set logged in value in redux to true so the nav bac can change its displayed links
  window.localStorage.setItem('accessToken', res.data.token);
  return { status: 200 };
}
