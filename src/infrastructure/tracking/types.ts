type SegmentCallback = () => void;
type SegmentFreeFormObject = Record<string, any>;

// based on https://segment.com/docs/connections/sources/catalog/libraries/website/javascript/
export type SegmentAnalyticsWindowObject = {
  readonly alias: (
    userId: string,
    previousId?: string,
    options?: SegmentFreeFormObject,
    callback?: SegmentCallback
  ) => void;
  readonly debug: (disable?: false) => void;
  readonly identify: (
    userId: string,
    traits?: SegmentFreeFormObject,
    options?: SegmentFreeFormObject,
    callback?: SegmentCallback
  ) => void;
  readonly initialized?: boolean;
  readonly load: (writeKey: string) => void;
  readonly page: (
    name?: string,
    properties?: SegmentFreeFormObject,
    options?: SegmentFreeFormObject,
    callback?: SegmentCallback
  ) => void;
  readonly ready: (callback: SegmentCallback) => void;
  readonly track: (
    name?: string,
    properties?: SegmentFreeFormObject,
    options?: SegmentFreeFormObject,
    callback?: SegmentCallback
  ) => void;
};
