import React, { FC } from 'react';
import styled from 'styled-components/macro';
import { BodyRegular, Title2 } from '@fluidly/ui-components';
import { Page, Section6Col } from '@fluidly/ui-patterns';
import useUser from '../infrastructure/user/useUser';

const StyledPageTitle = styled(Title2).attrs({ as: 'h1' })`
  margin-bottom: ${(props) => props.theme.fluidly.space.unit.s2};
`;

const ExamplePrivatePage: FC = () => {
  const { user } = useUser();

  return (
    <Page>
      <Section6Col>
        <StyledPageTitle>
          If you can see this, you are authenticated!
        </StyledPageTitle>
        {!!user && (
          <>
            <BodyRegular as="p">
              And, if you can see this, you can access{' '}
              <code>https://api.fluidly.com/v1/user-management/me</code> from
              this origin.
            </BodyRegular>
            <BodyRegular as="p">Your Fluidly user ID is {user.id}.</BodyRegular>
          </>
        )}
      </Section6Col>
    </Page>
  );
};

export default ExamplePrivatePage;
