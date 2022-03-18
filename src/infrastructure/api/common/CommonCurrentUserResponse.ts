import { User } from '../../../domain/user/types';

export type CommonCurrentUserResponse = Omit<User, 'partner'> & {
  readonly activatedAt: string;
  readonly createdAt: string;
  readonly firstSignInAt: string;
  readonly partnerId?: string;
  readonly partnerName?: string;
  readonly partnerOnboardingComplete?: boolean;
  readonly passwordSet: boolean;
  readonly phoneNumber?: string;
};
