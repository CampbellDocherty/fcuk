import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { Link, MemoryRouter } from 'react-router-dom';
import createTestQueryClient from '../../test/createTestQueryClient';
import { mockWindowAnalytics } from '../../test/mocks/mockWindowAnalytics';
import QueryProvider from '../api/QueryProvider';
import UserProvider from '../user/UserProvider';
import FluidlySegmentProvider from './FluidlySegmentProvider';

const mockReadyImmediately = () =>
  mockWindowAnalytics({
    ready: jest.fn((x) => x()),
  });

const mockNeverReady = () =>
  mockWindowAnalytics({
    ready: jest.fn(() => {}),
  });

const renderProviderWithinRequiredWrappers = () =>
  act(() => {
    render(
      <MemoryRouter initialEntries={['/foo']}>
        <QueryProvider client={createTestQueryClient()}>
          <UserProvider>
            <FluidlySegmentProvider>
              <span>Hello world</span>
              <Link to="/bar">Go somewhere</Link>
            </FluidlySegmentProvider>
          </UserProvider>
        </QueryProvider>
      </MemoryRouter>
    );

    return Promise.resolve();
  });

describe('when the provider is rendered', () => {
  beforeEach(async () => {
    await renderProviderWithinRequiredWrappers();
  });

  it('calls window.analytics.load', () => {
    expect(window.analytics.load).toHaveBeenCalledTimes(1);
    expect(window.analytics.load).toHaveBeenCalledWith('FILL_ME_IN');
  });
});

describe('when segment is not yet ready', () => {
  beforeEach(async () => {
    mockNeverReady();
    await renderProviderWithinRequiredWrappers();
  });

  it('does not block rendering its children', () => {
    expect(screen.getByText('Hello world')).toBeInTheDocument();
  });
});

describe('when segment is ready', () => {
  beforeEach(async () => {
    mockReadyImmediately();
    await renderProviderWithinRequiredWrappers();
  });

  it('calls window.analytics.page', async () => {
    await waitFor(() => expect(window.analytics.page).toHaveBeenCalled());
    expect(window.analytics.page).toHaveBeenCalledWith(
      '/foo',
      expect.anything()
    );
  });
});

describe('when segment is ready and fluidly user data has been fetched', () => {
  beforeEach(async () => {
    mockReadyImmediately();
    await renderProviderWithinRequiredWrappers();
  });

  it('calls window.analytics.alias', async () => {
    await waitFor(() => expect(window.analytics.alias).toHaveBeenCalled());
    expect(window.analytics.alias).toHaveBeenCalledWith('test:12345');
  });

  it('calls window.analytics.identify', async () => {
    await waitFor(() => expect(window.analytics.identify).toHaveBeenCalled());
    expect(window.analytics.identify).toHaveBeenCalledWith('test:12345', {
      email: 'thierry.henry@arsenal.com',
      isFluidlyAdmin: false,
    });
  });
});

describe('when the location pathname changes', () => {
  beforeEach(async () => {
    mockReadyImmediately();
    await renderProviderWithinRequiredWrappers();
    fireEvent.click(screen.getByText('Go somewhere'));
  });

  it('calls window.analytics.page', () => {
    expect(window.analytics.page).toHaveBeenLastCalledWith(
      '/bar',
      expect.anything()
    );
  });
});
