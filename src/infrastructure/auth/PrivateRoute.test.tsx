import { useAuth0 } from '@auth0/auth0-react';
import { screen } from '@testing-library/react';
import React from 'react';
import { userManagementApi } from '../../test/fakeServer';
import { mockUseAuth0 } from '../../test/mocks';
import render from '../../test/render';
import PrivateRoute from './PrivateRoute';

describe('when auth0 is not yet ready', () => {
  beforeEach(async () => {
    mockUseAuth0({
      isLoading: true,
    });

    await render(
      <PrivateRoute>
        <span>Hello world</span>
      </PrivateRoute>
    );
  });

  it('renders the loading page', () => {
    expect(screen.getByText('Almost there')).toBeInTheDocument();
  });

  it('does not render its children', () => {
    expect(() => screen.getByText('Hello world')).toThrow();
  });
});

describe('when the user is not authenticated in auth0', () => {
  beforeEach(async () => {
    mockUseAuth0({
      isAuthenticated: false,
    });

    await render(
      <PrivateRoute>
        <span>Hello world</span>
      </PrivateRoute>,
      { pathname: '/test' }
    );
  });

  it('shows that it is redirecting', async () => {
    await screen.findByText('Redirecting you to login');
  });

  it('does not render its children', () => {
    expect(() => screen.getByText('Hello world')).toThrow();
  });

  it('calls the useAuth0 hook loginWithRedirect method', () => {
    expect(useAuth0()?.loginWithRedirect).toHaveBeenCalledTimes(1);
    expect(useAuth0()?.loginWithRedirect).toHaveBeenCalledWith({
      appState: {
        returnTo: '/test',
      },
    });
  });
});

describe('when the user is authenticated in auth0 but their fluidly user data is not yet ready', () => {
  beforeEach(async () => {
    userManagementApi.me.getDefaultTestUserAfterDelay();
    await render(
      <PrivateRoute>
        <span>Hello world</span>
      </PrivateRoute>
    );
  });

  it('renders the loading page', () => {
    expect(screen.getByText('Almost there')).toBeInTheDocument();
  });

  it('does not render its children', () => {
    expect(() => screen.getByText('Hello world')).toThrow();
  });
});

describe('when the user is authenticated in auth0 and their fluidly user data has been fetched', () => {
  beforeEach(async () => {
    await render(
      <PrivateRoute>
        <span>Hello world</span>
      </PrivateRoute>
    );
  });

  it('renders its children', async () => {
    await screen.findByText('Hello world');
  });
});
