import { createContext } from 'react';
import { User } from '../../domain/user/types';

type UserContextData = {
  readonly user: User | null;
  readonly isLoadingUser: boolean;
  readonly isError: boolean;
};

const UserContext = createContext<UserContextData>({
  user: null,
  isLoadingUser: false,
  isError: false,
});

export default UserContext;
