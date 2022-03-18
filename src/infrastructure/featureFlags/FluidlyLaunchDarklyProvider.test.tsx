import { screen, waitFor } from '@testing-library/react';
import { useLDClient } from 'launchdarkly-react-client-sdk';
import React from 'react';
import createTestQueryClient from '../../test/createTestQueryClient';
import { mockUseLDClient } from '../../test/mocks';
import render from '../../test/render';
import QueryProvider from '../api/QueryProvider';
import FluidlyLaunchDarklyProvider from './FluidlyLaunchDarklyProvider';

const mockNeverReady = () =>
  mockUseLDClient({
    waitUntilReady: jest.fn(() => new Promise(() => {})),
  });

describe('when launch darkly is not yet ready', () => {
  beforeEach(async () => {
    mockNeverReady();

    await render(
      <FluidlyLaunchDarklyProvider>
        <span>Hello world</span>
      </FluidlyLaunchDarklyProvider>
    );
  });

  it('does not block rendering its children', () => {
    expect(screen.getByText('Hello world')).toBeInTheDocument();
  });
});

describe('when launch darkly is ready and fluidly user data has been fetched', () => {
  beforeEach(async () => {
    await render(
      <QueryProvider client={createTestQueryClient()}>
        <FluidlyLaunchDarklyProvider>
          <span>Hello world</span>
        </FluidlyLaunchDarklyProvider>
      </QueryProvider>
    );
  });

  it('calls the useLDClient hook identify method', async () => {
    await waitFor(() => expect(useLDClient()?.identify).toHaveBeenCalled());
    expect(useLDClient()?.identify).toHaveBeenCalledWith({
      email: 'thierry.henry@arsenal.com',
      key: 'test:12345',
      custom: {
        isFluidlyAdmin: false,
        isPartnerUser: false,
      },
    });
  });
});
