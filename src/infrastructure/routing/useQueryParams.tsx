import { fromPairs } from 'ramda';
import { useLocation } from 'react-router-dom';

const useQueryParams = (): Record<string, string> => {
  const { search } = useLocation();
  const queryParams = fromPairs<string>([
    ...new URLSearchParams(search).entries(),
  ]);

  return queryParams;
};

export default useQueryParams;
