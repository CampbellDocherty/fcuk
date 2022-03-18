import React, { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const QueryProvider: FC<{ readonly client: QueryClient }> = ({
  client,
  children,
}) => {
  return (
    <QueryClientProvider client={client} contextSharing>
      {children}
      {process.env.NODE_ENV === 'development' && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </QueryClientProvider>
  );
};

export default QueryProvider;
