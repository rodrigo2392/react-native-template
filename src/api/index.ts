import axios from 'axios';
import {API_URL} from '../constants';
import store from '../redux/Store';
import {setSignOut} from '../redux/slices/auth.slice';

const defaultOptions = {
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};

let axiosClient = axios.create(defaultOptions);

axiosClient.interceptors.request.use(function (config: any) {
  const state = store.getState();
  const token = state.userAuth.token;
  if (config && config.header && token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axios.interceptors.response.use(
  response => response,
  error => {
    let tries = 0;
    const originalRequest = error.config;
    if (error.response.status === 403) {
      store.dispatch(setSignOut());
    }

    if (tries !== 5) {
      tries++;
      return axiosClient(originalRequest);
    } else {
      return Promise.reject("Can't connect to the server");
    }
  },
);

export default axiosClient;
