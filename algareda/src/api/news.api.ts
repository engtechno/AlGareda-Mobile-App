import {AxiosError} from 'axios';

// API Instance
import api from '.';

// Models
import {NewsAPIParams} from '../models/api.model';

// Utils
import {toQueryString} from '../utils/function.util';

export const getNews = async (options?: NewsAPIParams) => {
  const params = options ? `&${toQueryString(options)}` : '';

  try {
    const response = await api().get(
      `/everything?pageSize=20${params}${
        !options?.q ? '&sources=engadget,bbc-news,cnn-es' : ''
      }`,
    );
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    return axiosError.response?.data;
  }
};
