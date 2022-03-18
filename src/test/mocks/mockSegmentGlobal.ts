import { SegmentAnalyticsWindowObject } from '../../infrastructure/tracking/types';
import mockSegmentObject from './mockSegmentObject';

const mockSegmentGlobal = (opts?: Partial<SegmentAnalyticsWindowObject>) => {
  /* eslint-disable-next-line functional/immutable-data */
  window.analytics = mockSegmentObject(opts);
};

export default mockSegmentGlobal;
