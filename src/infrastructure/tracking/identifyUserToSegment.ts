import { User } from '../../domain/user/types';

const getIdentityForThirdPartyService = (user: User) => ({
  email: user.email,
  id: `${process.env.NODE_ENV}:${user.id}`,
  isFluidlyAdmin: user.isAdmin,
});

const identifyUserToSegment = (user: User) => {
  if (!window.analytics?.initialized) return;

  const { id, ...identity } = getIdentityForThirdPartyService(user);

  window.analytics.alias(id);
  window.analytics.identify(id, identity);
};

export default identifyUserToSegment;
