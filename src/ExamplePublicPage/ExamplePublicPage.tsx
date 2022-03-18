import React, { FC } from 'react';
import { Title2 } from '@fluidly/ui-components';
import { Page, Section6Col } from '@fluidly/ui-patterns';

const ExamplePublicPage: FC = () => {
  return (
    <Page>
      <Section6Col>
        <Title2 as="h1">If you can see this, the router is working</Title2>
      </Section6Col>
    </Page>
  );
};

export default ExamplePublicPage;
