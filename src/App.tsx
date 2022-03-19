import React, { FC } from 'react';
import Arrow from './Arrow';
import Body from './Body';
import Button from './Button';
import Head from './Head';
import Legs from './Legs';
import LeftArrow from './assets/fcuk-arrow-left.png';
import RightArrow from './assets/fcuk-arrow-right.png';
import RandomButton from './assets/fcuk-random-button.png';
import Title from './assets/fcuk-title.png';
import { Container, TitleImage, Wrapper } from './styles';

const App: FC = () => {
  return (
    <Container>
      <Wrapper>
        <TitleImage src={Title} alt="fcuk title" />
        <Arrow
          src={LeftArrow}
          altText={'first left arrow'}
          row={2}
          column={2}
        />
        <Head />
        <Arrow
          src={RightArrow}
          altText={'first right arrow'}
          row={2}
          column={4}
        />
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
