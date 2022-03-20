import { FC } from 'react';
import Random from './assets/fcuk-random-button.png';
import Title from './assets/fcuk-title.png';
import BodyRow from './components/BodyRow';
import Button from './components/Button';
import HeadRow from './components/HeadRow';
import LegsRow from './components/LegsRow';
import { Container, TitleImage, Wrapper } from './styles';

const App: FC = () => {
  return (
    <Container>
      <Wrapper>
        <TitleImage src={Title} alt="fcuk title" />
        <HeadRow />
        <BodyRow />
        <LegsRow />
        <Button src={Random} altText={'random button'} />
      </Wrapper>
    </Container>
  );
};

export default App;
