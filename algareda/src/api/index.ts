import axios from 'axios';
import {API_BASE_URL, NEWSAPI_KEY} from '@env';

const api = () => {
  return axios.create({
    baseURL: API_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${NEWSAPI_KEY}`,
    },
    withCredentials: true,
  });
};

export default api;
