import Axios, { AxiosError } from 'axios';
import { Taxios } from '@simplesmiler/taxios';
import { config } from './config';
import { XenonAPI } from '../types/XenonAPI';
import { ErrorType, TaxiosResponseError } from '../hooks/useTaxiosRequest';

export const axios = Axios.create({
  // @NOTE: Put base config here
  baseURL: config.API_BASE_URL,
  withCredentials: true,
});

const requests = new Map<string, boolean>();

const requestAlreadySentErrorMessage = 'Запрос уже выполняется. Подождите';

axios.interceptors.request.use((conf) => {
  const key = `${conf.method}+${conf.url}`;
  if (requests.get(key)) {
    return Promise.reject(new Error(requestAlreadySentErrorMessage));
  }
  requests.set(key, true);
  return conf;
});

axios.interceptors.response.use(
  (response) => {
    const key = `${response.config.method}+${response.config.url}`;
    requests.delete(key);
    return response;
  },
  async <T>({ message, response }: AxiosError): Promise<TaxiosResponseError<T>> => {
    if (message === requestAlreadySentErrorMessage) {
      throw new TaxiosResponseError({
        error: {
          message: requestAlreadySentErrorMessage,
          errorStack: [message],
          errorType: ErrorType.duplicate,
        },
      });
    }

    const key = `${response?.config.method}+${response?.config.url}`;
    requests.delete(key);
    if (response?.request.responseType === 'blob') {
      throw new TaxiosResponseError({
        data: await response.data.text(),
        error: {
          message: (await response.data.text()) ?? message,
          errorStack: [message, await response.data.text()],
          errorType: ErrorType.regular,
        },
        statusCode: response?.status,
      });
    }

    throw new TaxiosResponseError({
      data: response?.data,
      error: {
        message: response?.data ?? message,
        errorStack: [message, response?.data],
        errorType: ErrorType.regular,
      },
      statusCode: response?.status,
    });
  },
);

export const taxios = new Taxios<XenonAPI>(axios);
