import { SegmentAnalyticsWindowObject } from '../../infrastructure/tracking';

const createWindowAnalyticsMockObject = (
  opts?: Partial<SegmentAnalyticsWindowObject>
): SegmentAnalyticsWindowObject => ({
  alias: jest.fn(),
  debug: jest.fn(),
  identify: jest.fn(),
  initialized: true,
  load: jest.fn(),
  page: jest.fn(),
  ready: jest.fn((callback: () => void) => {
    // simulate async behaviour
    setTimeout(callback, 0);
  }),
  track: jest.fn(),
  ...(opts || null),
});

const mockWindowAnalytics = (opts?: Partial<SegmentAnalyticsWindowObject>) => {
  /* eslint-disable-next-line functional/immutable-data */
  window.analytics = createWindowAnalyticsMockObject(opts);
};

export { mockWindowAnalytics, createWindowAnalyticsMockObject };
