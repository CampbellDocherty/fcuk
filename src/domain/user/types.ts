export type RawUser = {
  readonly activatedAt: string;
  readonly createdAt: string;
  readonly email: string;
  readonly firstName: string;
  readonly firstSignInAt: string;
  readonly id: string;
  readonly isAdmin: boolean;
  readonly lastName: string;
  readonly partnerId?: string;
  readonly partnerName?: string;
  readonly partnerOnboardingComplete?: boolean;
  readonly passwordSet: boolean;
};

export type User = {
  readonly email: RawUser['email'];
  readonly firstName: RawUser['firstName'];
  readonly id: RawUser['id'];
  readonly isAdmin: RawUser['isAdmin'];
  readonly lastName: RawUser['lastName'];
  readonly partnerId?: RawUser['partnerId'];
  readonly partnerName?: RawUser['partnerName'];
};
