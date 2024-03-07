import axios from 'axios';
axios.defaults.baseURL = 'https://backend-power-pulse-7.onrender.com/api/';

// const instance = axios.create({
//   baseURL: 'https://backend-power-pulse-7.onrender.com/api/',
// });

const setToken = (token) => {
  if (token) {
    return (axios.defaults.headers.common.authorization = `Bearer ${token}`);
  }
  axios.defaults.headers.common.authorization = '';
};

// axios.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     if (error.response.status === 401) {
//       const token = localStorage.getItem('persist:auth');
//       const refreshToken = JSON.parse(token).token.split('"')[1];
//       console.log(refreshToken.split('"')[1]);
//       try {
//         const data = await axios.post('/users/refresh', {
//           refreshToken,
//         });
//         console.log(data.tokens.accessToken);
//         setToken(data.tokens.accessToken);
//         localStorage.setItem('persist:auth', data.tokens.refreshToken);
//         return axios(error.config);
//       } catch (error) {
//         return Promise.reject(error);
//       }
//     }
//     return Promise.reject(error);
//   }
// );

export const register = async (data) => {
  const { data: result } = await axios.post('/users/register', data);
  return result;
};

export const login = async (data) => {
  const { data: result } = await axios.post('/users/login', data);
  setToken(result.accessToken);
  localStorage.setItem('refreshToken', data.refreshToken);
  return result;
};

export const logout = async () => {
  const data = await axios.post('/users/logout');
  setToken();
  return data;
};

export const getCurrent = async () => {
  try {
    const { data } = await axios.get('/users/current');
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

export const refresh = async (persistorToken) => {
  try {
    const tokens = await axios.post('/users/refresh', {
      refreshToken: persistorToken,
    });
    console.log(tokens);
    setToken(tokens.data.accessToken);
    return { token: tokens.data.refreshToken };
  } catch (error) {
    return;
  }
};

// export default instance;
