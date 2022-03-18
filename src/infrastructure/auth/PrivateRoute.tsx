import { useAuth0 } from '@auth0/auth0-react';
import React, { FC, useEffect } from 'react';
import { RouteProps, useLocation } from 'react-router-dom';
import { Title2 } from '@fluidly/ui-components';
import { Page, Section12Col } from '@fluidly/ui-patterns';
import LoadingPage from '../../LoadingPage';
import useUser from '../user/useUser';

const PrivateRoute: FC<RouteProps> = ({ children }) => {
  const {
    isAuthenticated,
    isLoading: isLoadingAuth0,
    loginWithRedirect,
  } = useAuth0();
  const { pathname } = useLocation();
  const { isLoadingUser } = useUser();

  useEffect(() => {
    if (isLoadingAuth0 || isAuthenticated) return;

    loginWithRedirect({
      appState: { returnTo: pathname },
    });
  }, [isAuthenticated, isLoadingAuth0, loginWithRedirect, pathname]);

  if (isLoadingAuth0 || isLoadingUser) {
    return <LoadingPage />;
  }

  if (!isAuthenticated) {
    return (
      <Page>
        <Section12Col>
          <Title2 as="h1">Redirecting you to login</Title2>
        </Section12Col>
      </Page>
    );
  }

  // this is used in the context of a react router, so we want any and all props to flow down
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <>{children}</>;
};

export default PrivateRoute;
