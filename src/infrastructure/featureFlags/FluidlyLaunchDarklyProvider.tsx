import { withLDProvider, useLDClient } from 'launchdarkly-react-client-sdk';
import React, { FC, useEffect, useState } from 'react';
import useUser from '../user/useUser';
import { LAUNCH_DARKLY_CLIENT_SIDE_ID } from './constants';

const FluidlyLaunchDarklyProvider: FC = ({ children }) => {
  const [isReady, setIsReady] = useState<boolean>(false);
  const [hasUnmounted, setHasUnmounted] = useState<boolean>(false);
  const launchDarkly = useLDClient();
  const { user } = useUser();

  useEffect(() => {
    return () => setHasUnmounted(true);
  }, []);

  useEffect(() => {
    if (isReady || !launchDarkly) return;

    const waitForReady = async () => {
      await launchDarkly.waitUntilReady();
      if (hasUnmounted) return;
      setIsReady(true);
    };

    waitForReady();
  }, [hasUnmounted, isReady, launchDarkly]);

  useEffect(() => {
    if (!isReady || !user) return;

    const { email, partnerId, isAdmin: isFluidlyAdmin } = user;

    launchDarkly?.identify({
      email,
      key: `${process.env.NODE_ENV}:${user.id}`,
      custom: {
        isFluidlyAdmin,
        isPartnerUser: !!partnerId,
        ...(partnerId ? { partnerId } : null),
      },
    });
  }, [isReady, launchDarkly, user]);

  return <>{children}</>;
};

export default withLDProvider({
  clientSideID: LAUNCH_DARKLY_CLIENT_SIDE_ID,
})(FluidlyLaunchDarklyProvider);
