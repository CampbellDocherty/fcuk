import { useFlags } from 'launchdarkly-react-client-sdk';
import { FeatureFlags } from './types';

const useFeatureFlags = () => {
  const flags = useFlags() as FeatureFlags;

  return flags;
};

export default useFeatureFlags;
