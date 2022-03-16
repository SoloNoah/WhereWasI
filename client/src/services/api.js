import axios from 'axios';

const BASE_URL = 'http://localhost:5000';
const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export async function registerNewUser(newUser) {
  const body = JSON.stringify(newUser);
  const res = await axios.post(BASE_URL + '/api/auth/register', body, config).catch((error) => {
    let response = error.response;
    if (response.status === 401 || response.status === 500) {
      console.log(response.data.errorMessage);
      return;
    }
  });

  window.localStorage.setItem('accessToken', res.data.token);
  return { status: 200 };
}

export async function loginUser(newUser) {
  const body = JSON.stringify(newUser);
  const res = await axios.post(BASE_URL + '/api/auth/login', body, config).catch((error) => {
    let response = error.response;
    if (response.status === 401 || response.status === 500) {
      console.log(response.data.errorMessage);
      return;
    }
  });

  window.localStorage.setItem('accessToken', res.data.token);
  return { status: 200 };
}
