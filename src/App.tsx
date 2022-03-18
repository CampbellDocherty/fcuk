import React, { FC, Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components/macro';
import { theme as fluidlyTheme } from '@fluidly/ui-components';
import { theme as fluidlyPageTheme } from '@fluidly/ui-patterns';
import AppRouter from './AppRouter';
import QueryProvider from './infrastructure/api/QueryProvider';
import queryClientInstance from './infrastructure/api/queryClient';
import FluidlyAuth0Provider from './infrastructure/auth/FluidlyAuth0Provider';
import FluidlyLaunchDarklyProvider from './infrastructure/featureFlags/FluidlyLaunchDarklyProvider';
import { FluidlySegmentProvider } from './infrastructure/tracking';
import UserProvider from './infrastructure/user/UserProvider';
import FontsGlobalStyle from './styles/FontsGlobalStyle';
import createTestQueryClient from './test/createTestQueryClient';

const App: FC = () => {
  const queryClient =
    process.env.NODE_ENV === 'test'
      ? createTestQueryClient()
      : queryClientInstance;

  const Router = process.env.NODE_ENV === 'test' ? Fragment : BrowserRouter;

  return (
    <ThemeProvider theme={{ ...fluidlyTheme, ...fluidlyPageTheme }}>
      {process.env.NODE_ENV === 'test' ? null : <FontsGlobalStyle />}
      <Router>
        <QueryProvider client={queryClient}>
          <FluidlyAuth0Provider>
            <UserProvider>
              <FluidlySegmentProvider>
                <FluidlyLaunchDarklyProvider>
                  <AppRouter />
                </FluidlyLaunchDarklyProvider>
              </FluidlySegmentProvider>
            </UserProvider>
          </FluidlyAuth0Provider>
        </QueryProvider>
      </Router>
    </ThemeProvider>
  );
};

export default App;
