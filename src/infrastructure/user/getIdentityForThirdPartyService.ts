import { User } from '../../domain/user/types';

const getIdentityForThirdPartyService = (user: User) => ({
  email: user.email,
  id: `${process.env.NODE_ENV}:${user.id}`,
  isFluidlyAdmin: user.isAdmin,
  isPartnerUser: !!user.partnerId,
  ...(user.partnerId
    ? {
        userPartnerId: user.partnerId,
        userPartnerName: user.partnerName,
      }
    : null),
});

export default getIdentityForThirdPartyService;
