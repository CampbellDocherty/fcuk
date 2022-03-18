import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import useQueryParams from '../routing/useQueryParams';

const addTestFlagToTrackingPropsIfNessecary = (
  queryParams: Record<string, string>,
  props: Record<string, any> = {}
) => {
  if (!queryParams.isFluidlyUser) return props;

  return {
    ...(props || {}),
    isFluidlyUser: true,
  };
};

const useTracking = () => {
  const { pathname } = useLocation();
  const queryParams = useQueryParams();

  /* eslint-disable functional/functional-parameters */
  const trackEvent: typeof window.analytics.track = useCallback(
    (name, props = {}, ...rest) => {
      if (!window.analytics?.initialized) return;

      window.analytics.track(
        name,
        addTestFlagToTrackingPropsIfNessecary(queryParams, props),
        ...rest
      );
    },
    [queryParams]
  );

  const trackPage: typeof window.analytics.page = useCallback(
    (name, props, ...rest) => {
      if (!window.analytics?.initialized) return;

      window.analytics.page(
        name || pathname.replace(/\/(\d)+/g, '/*'),
        addTestFlagToTrackingPropsIfNessecary(queryParams, props),
        ...rest
      );
    },
    [pathname, queryParams]
  );
  /* eslint-enable functional/functional-parameters */

  return { trackEvent, trackPage };
};

export default useTracking;
