import { render as rtlRender, RenderOptions } from '@testing-library/react';
import React, { ReactElement } from 'react';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components/macro';
import { theme as fluidlyTheme } from '@fluidly/ui-components';
import { theme as fluidlyPageTheme } from '@fluidly/ui-patterns';
import QueryProvider from '../infrastructure/api/QueryProvider';
import { FeatureFlags } from '../infrastructure/featureFlags/types';
import UserProvider from '../infrastructure/user/UserProvider';
import createTestQueryClient from './createTestQueryClient';
import { mockUseAuth0, mockUseFlags } from './mocks';

const render = async (
  node: ReactElement,
  {
    asAnonymous,
    featureFlags,
    pathname,
  }: {
    readonly asAnonymous?: boolean;
    readonly featureFlags?: Partial<FeatureFlags>;
    readonly pathname?: string;
  } = {},
  rtlOpts: RenderOptions = {}
) => {
  if (asAnonymous) {
    mockUseAuth0({ isAuthenticated: false });
  }

  if (featureFlags) {
    mockUseFlags(featureFlags);
  }

  const rendered = await act((): Promise<any> => {
    const renderResult = rtlRender(
      <ThemeProvider theme={{ ...fluidlyTheme, ...fluidlyPageTheme }}>
        <QueryProvider client={createTestQueryClient()}>
          <UserProvider>
            <MemoryRouter initialEntries={[pathname || '/']}>
              <>{node}</>
            </MemoryRouter>
          </UserProvider>
        </QueryProvider>
      </ThemeProvider>,
      rtlOpts
    );

    return Promise.resolve(renderResult);
  });

  return rendered;
};

export default render;
