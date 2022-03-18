import { SegmentAnalyticsWindowObject } from '../../infrastructure/tracking/types';

const mockSegmentObject = (
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

export default mockSegmentObject;
