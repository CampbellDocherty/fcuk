import React, { FC, useMemo } from 'react';
import useQueryMe from '../api/userManagement/me/useQueryMe';
import UserContext from './UserContext';

const UserProvider: FC = ({ children }) => {
  const { isSuccess, data, isLoading, isError } = useQueryMe();
  const value = useMemo(
    () => ({
      user: isSuccess && data ? data : null,
      isLoadingUser: isLoading,
      isError,
    }),
    [isSuccess, data, isLoading, isError]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
