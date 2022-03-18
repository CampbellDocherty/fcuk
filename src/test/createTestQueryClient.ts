import { QueryClient } from 'react-query';

const createTestQueryClient = () => {
  return new QueryClient({
    defaultOptions: { queries: { retry: 0 } },
  });
};

export default createTestQueryClient;
