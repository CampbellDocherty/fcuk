import { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useUser from '../user/useUser';
import { SEGMENT_KEY } from './constants';
import embedSegment from './embedSegment';
import identifyUserToSegment from './identifyUserToSegment';
import useTracking from './useTracking';

const FluidlySegmentProvider: FC = ({ children }) => {
  const [isReady, setIsReady] = useState<boolean>(false);
  const [hasUnmounted, setHasUnmounted] = useState<boolean>(false);
  const { pathname } = useLocation();
  const { trackPage } = useTracking();
  const { user } = useUser();
  const [lastTrackedOnPathname, setLastTrackedOnPathname] = useState<string>();

  useEffect(() => {
    return () => setHasUnmounted(true);
  }, []);

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      embedSegment();
    }

    if (window.analytics) {
      window.analytics.load(SEGMENT_KEY);
      window.analytics.ready(() => {
        if (hasUnmounted) return;
        setIsReady(true);
      });
    }
  }, [hasUnmounted]);

  useEffect(() => {
    if (!isReady || pathname === lastTrackedOnPathname) return;
    setLastTrackedOnPathname(pathname);
    trackPage();
  }, [lastTrackedOnPathname, isReady, pathname, trackPage]);

  useEffect(() => {
    if (!isReady || !user) return;
    identifyUserToSegment(user);
  }, [isReady, user]);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};

export default FluidlySegmentProvider;
