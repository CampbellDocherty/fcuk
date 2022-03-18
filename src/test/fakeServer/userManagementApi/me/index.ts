import { rest } from 'msw';
import { RawUser } from '../../../../domain/user/types';
import { USER_MANAGEMENT_API_URL } from '../../../../infrastructure/api/constants';
import fakeServer from '../../fakeServer';
import validateHasToken from '../../validateHasToken';

const URL = `${USER_MANAGEMENT_API_URL}/me`;

const defaultUser: RawUser = {
  activatedAt: '2021-01-02T03:04:05z',
  createdAt: '2021-01-02T03:04:05z',
  email: 'thierry.henry@arsenal.com',
  firstName: 'Thierry',
  firstSignInAt: '2021-01-02T03:04:05z',
  id: '12345',
  isAdmin: false,
  lastName: 'Henry',
  partnerId: '67890',
  partnerName: 'George Graham Accounting Inc',
  passwordSet: true,
};

const getDefaultTestUser = () =>
  fakeServer.use(
    rest.get(URL, (req, res, ctx) => {
      return res(ctx.json(defaultUser));
    })
  );

const getDefaultTestUserAfterDelay = () =>
  fakeServer.use(
    rest.get(URL, (req, res, ctx) => {
      return res(ctx.delay(1), ctx.json(defaultUser));
    })
  );

const failToGetUser = () =>
  fakeServer.use(
    rest.get(
      URL,
      validateHasToken((req, res, ctx) => {
        return res(
          ctx.status(404),
          ctx.json({ errorMessage: 'User does not exist' })
        );
      })
    )
  );

export { getDefaultTestUser, getDefaultTestUserAfterDelay, failToGetUser };
