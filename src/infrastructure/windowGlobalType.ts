import { SegmentAnalyticsWindowObject } from './tracking';

/* eslint-disable functional/prefer-readonly-type */
declare global {
  interface Window {
    // @ts-ignore
    analytics: SegmentAnalyticsWindowObject;
  }
}
/* eslint-enable functional/prefer-readonly-type */
