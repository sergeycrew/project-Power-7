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

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status == 401) {
      const refreshToken = localStorage.getItem('persist:auth');
      try {
        const { data } = await axios.post('/auth/refresh', { refreshToken });
        setToken(data.accessToken);
        localStorage.setItem('persist:auth', data.refreshToken);
        return axios(error.config);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

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

export const getCurrent = async (token) => {
  try {
    setToken(token);
    const { data } = await axios.get('/users/current');
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

// export default instance;
