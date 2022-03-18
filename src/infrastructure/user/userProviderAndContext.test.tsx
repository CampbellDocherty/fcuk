import { render, screen } from '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';
import createTestQueryClient from '../../test/createTestQueryClient';
import { userManagementApi } from '../../test/fakeServer';
import QueryProvider from '../api/QueryProvider';
import UserProvider from './UserProvider';
import useUser from './useUser';

const renderObjectEntries = (obj: Record<string, any>, parentKey = ''): any => {
  if (obj) {
    return Object.entries(obj).map(([k, v]) =>
      typeof v === 'object' ? (
        renderObjectEntries(v, `${parentKey}${k}.`)
      ) : (
        <p key={`${parentKey}${k}`}>
          {`${parentKey}${k}`}: {`${v}`}
        </p>
      )
    );
  }
  return null;
};

const TestComponent = () => {
  const { user, isLoadingUser, isError } = useUser();
  return (
    <div>
      <h1>Hello world</h1>
      {isLoadingUser && <p>Loading</p>}
      {isError && <p>Error</p>}
      {!!user && renderObjectEntries(user)}
    </div>
  );
};

const renderProviderWithRequiredWrappers = () =>
  act(() => {
    render(
      <QueryProvider client={createTestQueryClient()}>
        <UserProvider>
          <TestComponent />
        </UserProvider>
      </QueryProvider>
    );
    return Promise.resolve();
  });

describe('when the provider receives user data from the /me API', () => {
  beforeEach(async () => {
    await renderProviderWithRequiredWrappers();
  });

  it('renders its children', () => {
    expect(screen.getByText('Hello world')).toBeInTheDocument();
  });

  it('provides user data as context', async () => {
    await screen.findByText('id: 12345');
    expect(
      screen.getByText('email: thierry.henry@arsenal.com')
    ).toBeInTheDocument();
    expect(screen.getByText('firstName: Thierry')).toBeInTheDocument();
    expect(screen.getByText('lastName: Henry')).toBeInTheDocument();
    expect(screen.getByText('isAdmin: false')).toBeInTheDocument();
  });

  it('does not provide user data as context if we do not need it', async () => {
    await screen.findByText('id: 12345');
    expect(() => screen.getByText('passwordSet:', { exact: false })).toThrow();
  });

  it('flags that it is loading as context', () => {
    expect(screen.getByText('Loading')).toBeInTheDocument();
  });
});

describe('when the provider fails to return user data from the api', () => {
  beforeEach(async () => {
    userManagementApi.me.failToGetUser();
    await renderProviderWithRequiredWrappers();
  });

  it('flags and error state as context', async () => {
    await screen.findByText('Error');
  });
});
