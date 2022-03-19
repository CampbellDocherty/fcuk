import React, { FC, useState } from 'react';
import LeftArrow from './assets/fcuk-arrow-left.png';
import RightArrow from './assets/fcuk-arrow-right.png';
import RandomButton from './assets/fcuk-random-button.png';
import Title from './assets/fcuk-title.png';
import Arrow from './components/Arrow';
import Body from './components/Body';
import Button from './components/Button';
import Head from './components/Head';
import Legs from './components/Legs';
import { Container, TitleImage, Wrapper } from './styles';

const App: FC = () => {
  const [headCount, setHeadCount] = useState<number>(1);
  const onNextHeadClick = () => {
    setHeadCount(headCount + 1);
  };
  const onPreviousHeadClick = () => {
    setHeadCount(headCount - 1);
  };
  return (
    <Container>
      <Wrapper>
        <TitleImage src={Title} alt="fcuk title" />
        <Arrow
          src={LeftArrow}
          altText={'first left arrow'}
          row={2}
          column={2}
          onClick={onPreviousHeadClick}
        />
        <Head headCount={headCount} />
        <Arrow
          src={RightArrow}
          altText={'first right arrow'}
          row={2}
          column={4}
          onClick={onNextHeadClick}
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
