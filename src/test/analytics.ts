import { waitFor } from '@testing-library/react/pure';

type MockCallArgs = ReadonlyArray<any>;
type MockCalls = ReadonlyArray<MockCallArgs>;
type MockedSegmentMethod = jest.MockedFunction<
  typeof window.analytics.track | typeof window.analytics.page
>;

type SegmentTrackAssertion<T> = (
  expectedName: string,
  expectedProperties?: Record<string, any>
) => T;

const getSegmentMockCalls = (
  method: MockedSegmentMethod,
  expectedName: string
): MockCalls =>
  method.mock.calls.filter(
    ([eventType]: ReadonlyArray<any>) => eventType === expectedName
  );

const expectToTrackOnce = (
  segmentMethodName: 'page' | 'track',
  expectedName: string,
  expectedProperties?: Record<string, any>
) => {
  const callsToEventType =
    getSegmentMockCalls(
      window.analytics[segmentMethodName] as MockedSegmentMethod,
      expectedName
    ) || [];

  try {
    expect(callsToEventType).toHaveLength(1);
  } catch (_error) {
    /* eslint-disable-next-line functional/no-throw-statement */
    throw new Error(
      `Expected window.analytics.${segmentMethodName} to be called once with ${expectedName}, but it was called ${callsToEventType.length} time(s)`
    );
  }

  if (expectedProperties) {
    expect(callsToEventType[0].length).toBeGreaterThan(1);
    expect(callsToEventType[0][1]).toMatchObject(expectedProperties);
  }
};
const expectToTrackEventOnce: SegmentTrackAssertion<any> = (
  expectedName,
  expectedProperties
) => expectToTrackOnce('track', expectedName, expectedProperties);

const waitForEventToBeTrackedOnce: SegmentTrackAssertion<Promise<void>> = (
  expectedName,
  expectedProperties
) => waitFor(() => expectToTrackEventOnce(expectedName, expectedProperties));

const expectToTrackPageOnce: SegmentTrackAssertion<any> = (
  expectedName,
  expectedProperties
) => expectToTrackOnce('page', expectedName, expectedProperties);

const waitForPageToBeTrackedOnce: SegmentTrackAssertion<Promise<void>> = (
  expectedName,
  expectedProperties
) => waitFor(() => expectToTrackPageOnce(expectedName, expectedProperties));

export {
  expectToTrackEventOnce,
  expectToTrackPageOnce,
  waitForEventToBeTrackedOnce,
  waitForPageToBeTrackedOnce,
};
