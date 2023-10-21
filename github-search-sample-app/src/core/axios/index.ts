import Axios, { AxiosRequestConfig, AxiosRequestHeaders } from 'axios';

type AdaptAxiosRequestConfig = AxiosRequestConfig & {
  headers: AxiosRequestHeaders;
};

const apiCaller = Axios.create({
  baseURL: import.meta.env.VITE_APP_API_ENDPOINT,
  headers: { Accept: 'application/json', 'Content-Type': 'application/json; charset=utf-8' },
});

apiCaller.interceptors.request.use(
  (config): AdaptAxiosRequestConfig => {
    return config;
  },
  (error): any => {
    return Promise.reject(error);
  },
);

apiCaller.interceptors.response.use(
  (response) => response,
  async (error) => {
    return Promise.reject(error);
  },
);

export default apiCaller;
