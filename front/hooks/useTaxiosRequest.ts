import { AxiosResponse } from 'axios';

interface AJAXError {
  message: string;
  errorStack: string[]; // @NOTE: порядок возникновения ошибок справа налево
  errorType: ErrorType;
}

export enum ErrorType {
  regular = 'regular',
  duplicate = 'duplicate'
}

export interface TaxiosResponse<T> {
  data?: T;
  error?: AJAXError;
  statusCode?: number;
}

export class TaxiosResponseError<T> extends Error {
  response: TaxiosResponse<T>;

  constructor(response: TaxiosResponse<T>) {
    super(response.error?.errorStack.join('\n'));
    this.response = response;
  }
}

const useTaxiosRequest = () => {
  const sendAjaxRequest = async <T>(taxiosFunction: () => Promise<AxiosResponse<T>>, setIsFetchingCallback?: (isFetching: boolean) => void): Promise<TaxiosResponse<T>> => {
    setIsFetchingCallback?.(true);
    let result: TaxiosResponse<T>;
    try {
      const response = await taxiosFunction();
      result = {
        data: response.data,
        statusCode: response.status,
      };
    } catch (e) {
      result = (e as TaxiosResponseError<T>)?.response;
    }
    setIsFetchingCallback?.(false);
    return result;
  };

  return { sendAjaxRequest };
};

export default useTaxiosRequest;
