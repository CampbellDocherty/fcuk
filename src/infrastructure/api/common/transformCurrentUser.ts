import { pick, pipe } from 'ramda';
import { User } from '../../../domain/user/types';
import { CommonCurrentUserResponse } from './CommonCurrentUserResponse';

const pickProps = (rawUser: Omit<CommonCurrentUserResponse, 'partner'>): User =>
  pick(
    [
      'email',
      'firstName',
      'id',
      'isAdmin',
      'lastName',
      'partner',
      'permissions',
      'role',
      'phoneNumber',
    ],
    rawUser
  );

const transformUser = (rawUser: CommonCurrentUserResponse): User =>
  pipe(pickProps)(rawUser);

export default transformUser;
