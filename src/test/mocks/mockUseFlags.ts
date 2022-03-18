import { useFlags } from 'launchdarkly-react-client-sdk';
import { FeatureFlags } from '../../infrastructure/featureFlags/types';

const mockUseFlags = (flagOverrides?: Partial<FeatureFlags>) => {
  const allFlags = {
    test: true,
    ...(flagOverrides || null),
  } as FeatureFlags;

  (useFlags as jest.MockedFunction<any>).mockReturnValue(allFlags);
};

export default mockUseFlags;
