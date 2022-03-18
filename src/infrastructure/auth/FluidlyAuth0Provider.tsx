import { Auth0Provider, AppState } from '@auth0/auth0-react';
import React, { FC } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AUTH0_CLIENT_ID, AUTH0_DOMAIN, AUTHO_AUDIENCE } from './constants';

const FluidlyAuth0Provider: FC = ({ children }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  if (process.env.NODE_ENV === 'test') {
    return <>{children}</>;
  }

  return (
    <Auth0Provider
      audience={AUTHO_AUDIENCE}
      clientId={AUTH0_CLIENT_ID}
      domain={AUTH0_DOMAIN}
      onRedirectCallback={(appState: AppState) => {
        navigate(appState?.returnTo || pathname);
      }}
      redirectUri={window.location.origin}
    >
      {children}
    </Auth0Provider>
  );
};

export default FluidlyAuth0Provider;
