import { AxiosError } from 'axios';
import { useQuery, UseQueryOptions } from 'react-query';
import { User } from '../../../../domain/user/types';
import { CommonCurrentUserResponse } from '../../common/CommonCurrentUserResponse';
import transformCurrentUser from '../../common/transformCurrentUser';
import { USER_MANAGEMENT_API_URL } from '../../constants';
import useFetchApi from '../../useFetchApi';

export const ME_QUERY_KEY = 'GET_USER_MANAGEMENT_ME';

type UntransformedMeResponse = CommonCurrentUserResponse;

type MeResponse = User;

const useQueryMe = (
  options?: UseQueryOptions<MeResponse, Error | AxiosError>
) => {
  const fetchApi = useFetchApi();

  const query = useQuery<MeResponse, Error | AxiosError>(
    ME_QUERY_KEY,
    () => {
      return fetchApi<UntransformedMeResponse, MeResponse>({
        url: `${USER_MANAGEMENT_API_URL}/me`,
        transformResponse: transformCurrentUser,
      });
    },
    options
  );

  return query;
};

export default useQueryMe;
