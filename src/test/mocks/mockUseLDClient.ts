import { LDClient } from 'launchdarkly-js-client-sdk';
import { useLDClient } from 'launchdarkly-react-client-sdk';

const mockUseLDClient = (opts: Partial<LDClient> = {}) => {
  const launchDarklyClient = {
    identify: jest.fn(),
    waitUntilReady: jest.fn(() => Promise.resolve()),
    ...(opts || null),
  };

  (useLDClient as jest.MockedFunction<any>).mockReturnValue(launchDarklyClient);
};

export default mockUseLDClient;
