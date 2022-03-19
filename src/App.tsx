import { FC } from 'react';
import LeftArrow from './assets/fcuk-arrow-left.png';
import RightArrow from './assets/fcuk-arrow-right.png';
import RandomButton from './assets/fcuk-random-button.png';
import Title from './assets/fcuk-title.png';
import Arrow from './components/Arrow';
import Body from './components/Body';
import Button from './components/Button';
import HeadRow from './components/HeadRow';
import Legs from './components/Legs';
import { Container, TitleImage, Wrapper } from './styles';

const App: FC = () => {
  return (
    <Container>
      <Wrapper>
        <TitleImage src={Title} alt="fcuk title" />
        <HeadRow />
        <Arrow
          src={LeftArrow}
          altText={'second left arrow'}
          row={3}
          column={2}
        />
        <Body />
        <Arrow
          src={RightArrow}
          altText={'second right arrow'}
          row={3}
          column={4}
        />
        <Arrow
          src={LeftArrow}
          altText={'third left arrow'}
          row={4}
          column={2}
        />
        <Legs />
        <Arrow
          src={RightArrow}
          altText={'third right arrow'}
          row={4}
          column={4}
        />
        <Button src={RandomButton} altText={'random button'} />
      </Wrapper>
    </Container>
  );
};

export default App;
