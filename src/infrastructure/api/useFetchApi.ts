import { useAuth0 } from '@auth0/auth0-react';
import axios, { AxiosResponseTransformer } from 'axios';
import { useCallback } from 'react';
import { FETCH_TIMEOUT } from './constants';
import { FetchApiOptions } from './types';

const getDefaultTransformArray =
  (): ReadonlyArray<AxiosResponseTransformer> => {
    if (!axios.defaults?.transformResponse) {
      return [];
    }

    if (Array.isArray(axios.defaults.transformResponse)) {
      return axios.defaults.transformResponse;
    }

    return [axios.defaults?.transformResponse];
  };

const useFetchApi = () => {
  const {
    isAuthenticated,
    isLoading: isLoadingAuth0,
    getAccessTokenSilently,
  } = useAuth0();

  const safeGetAccessToken = useCallback(async () => {
    try {
      const token = await getAccessTokenSilently();
      return token;
    } catch {
      return null;
    }
  }, [getAccessTokenSilently]);

  const fetchApi = useCallback(
    async <
      ResponseData extends Record<string, any>,
      TransformedResponseData = void
    >({
      anon = false,
      headers,
      responseType = 'json',
      timeout = FETCH_TIMEOUT,
      transformResponse,
      ...axiosOptions
    }: FetchApiOptions): Promise<
      TransformedResponseData extends void
        ? ResponseData
        : TransformedResponseData
    > => {
      const token =
        anon || (!isAuthenticated && !isLoadingAuth0)
          ? null
          : await safeGetAccessToken();

      return axios({
        ...axiosOptions,
        responseType,
        timeout,
        // https://github.com/axios/axios/issues/430#issuecomment-243481806
        ...(transformResponse
          ? {
              transformResponse:
                getDefaultTransformArray().concat(transformResponse),
            }
          : null),
        headers: {
          ...(token ? { Authorization: `Bearer ${token}` } : null),
          ...headers,
        },
      }).then((response) => {
        return response.data as TransformedResponseData extends void
          ? ResponseData
          : TransformedResponseData;
      });
    },
    [isAuthenticated, isLoadingAuth0, safeGetAccessToken]
  );

  return fetchApi;
};

export default useFetchApi;
