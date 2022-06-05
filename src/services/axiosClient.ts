import axios from 'axios';
import qs from 'qs';
import { config } from '@/libs/constant';

const axiosClient = axios.create({
  baseURL: config.apiUrl,
  headers: {
    'Access-Control-Allow-Origin': `*`,
    'Access-Control-Allow-Methods': `GET,PUT,POST,DELETE,PATCH,OPTIONS`,
    'Access-Control-Allow-Headers': `Origin, X-Requested-With, Content-Type, Accept`,
    'Content-Type': `application/json`,
  },
  paramsSerializer: (params: any) => qs.stringify({ ...params }),
});

axiosClient.interceptors.request.use(async (config: any) => config);

axiosClient.interceptors.response.use(
  (response: { data: any }) => {
    if (response && response) {
      return response;
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    return response.data;
  },
  (error: { response: { data: any } }) => {
    throw error.response.data;
  },
);

export default axiosClient;
