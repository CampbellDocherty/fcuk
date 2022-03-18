// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { FC } from 'react';
import queryClient from './infrastructure/api/queryClient';
import { fakeServer, setDefaultResponses } from './test/fakeServer';
import {
  mockSegmentGlobal,
  mockSegmentObject,
  mockUseAuth0,
  mockUseLDClient,
} from './test/mocks';
import mockUseFlags from './test/mocks/mockUseFlags';
import { disableReactQueryLogger } from './test/reactQuery';

jest.mock('@auth0/auth0-react', () => ({ useAuth0: jest.fn() }));

jest.mock('launchdarkly-react-client-sdk', () => ({
  useFlags: jest.fn(),
  useLDClient: jest.fn(),
  withLDProvider: jest.fn(() => (x: FC<any>) => x),
}));

/* eslint-disable-next-line functional/immutable-data */
(global as any).analytics = mockSegmentObject();

beforeAll(() => fakeServer.listen());

afterAll(() => fakeServer.close());

beforeEach(() => {
  disableReactQueryLogger();
  mockSegmentGlobal();
  mockUseAuth0();
  mockUseFlags();
  mockUseLDClient();
  setDefaultResponses();
});

afterEach(() => {
  jest.clearAllMocks();
  fakeServer.resetHandlers();
  queryClient.resetQueries();
});
