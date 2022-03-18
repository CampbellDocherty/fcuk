import React, { FC } from 'react';
import { Title2 } from '@fluidly/ui-components';
import { Page, Section12Col } from '@fluidly/ui-patterns';

const LoadingPage: FC = () => {
  return (
    <Page>
      <Section12Col align="left">
        <Title2 as="h1">Almost there</Title2>
      </Section12Col>
    </Page>
  );
};

export default LoadingPage;
