import axios from 'axios';

import config from 'src/helper/config';

const domain = config.apiUrl;

export async function getRequest<T>(path: string): Promise<T> {
  return axios.request<T>({ url: `${ domain }${ path }` })
    .then((response) => response.data)
    .catch(err => {
      throw err;
    });
}

export async function postRequest<T>(path: string, data: any): Promise<T> {
  return axios.request<T>({
    data,
    method: 'POST',
    url: `${ domain }${ path }`,
  })
    .then((response) => response.data)
    .catch(err => {
      throw err;
    });
}
