import { useAuth0 } from '@auth0/auth0-react';
import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components/macro';
import {
  BodyRegular,
  TertiaryButton,
  TertiaryRouterLink,
  Title2,
} from '@fluidly/ui-components';
import { Page, Section6Col } from '@fluidly/ui-patterns';
import useFeatureFlags from '../infrastructure/featureFlags/useFeatureFlags';
import { useTracking } from '../infrastructure/tracking';

const StyledPageTitle = styled(Title2).attrs({ as: 'h1' })`
  margin-bottom: ${(props) => props.theme.fluidly.space.unit.s2};
`;

const ExampleHomePage: FC = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const { test } = useFeatureFlags();
  const { pathname } = useLocation();
  const { trackEvent } = useTracking();

  return (
    <Page>
      <Section6Col>
        <StyledPageTitle>Coming soon</StyledPageTitle>

        {test && (
          <BodyRegular>
            If you can see this, feature flags are working
          </BodyRegular>
        )}

        {isAuthenticated ? (
          <TertiaryButton
            flushLeft
            type="button"
            onClick={() => logout({ returnTo: window.location.origin })}
          >
            Logout
          </TertiaryButton>
        ) : (
          <TertiaryButton
            data-testid="login"
            flushLeft
            type="button"
            onClick={() =>
              loginWithRedirect({
                appState: { returnTo: pathname },
              })
            }
          >
            Login
          </TertiaryButton>
        )}

        <TertiaryRouterLink
          to="/public"
          flushLeft
          onClick={() => {
            trackEvent('CLICKED_EXAMPLE_LINK', { exampleType: 'public-route' });
          }}
        >
          Test a public route
        </TertiaryRouterLink>
        <TertiaryRouterLink
          to="/private"
          flushLeft
          onClick={() => {
            trackEvent('CLICKED_EXAMPLE_LINK', {
              exampleType: 'private-route',
            });
          }}
        >
          Test a private route
        </TertiaryRouterLink>
      </Section6Col>
    </Page>
  );
};

export default ExampleHomePage;
