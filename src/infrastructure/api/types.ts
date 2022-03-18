import { AxiosError, AxiosRequestConfig } from 'axios';

export type FetchApiOptions = AxiosRequestConfig & {
  readonly anon?: boolean;
};

export type QueryError = Error | AxiosError;
