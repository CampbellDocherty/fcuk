import React, { FC, useState } from 'react';
import Arrow from './Arrow';
import LeftArrow from './assets/fcuk-arrow-left.png';
import RightArrow from './assets/fcuk-arrow-right.png';
import RandomButton from './assets/fcuk-random-button.png';
import Title from './assets/fcuk-title.png';
import { Container, RandomButtonImage, TitleImage, Wrapper } from './styles';

const App: FC = () => {
  const [mouseDownOnButton, setMouseDownOnButton] = useState<boolean>(false);
  const onButtonMouseDown = () => {
    setMouseDownOnButton(true);
  };
  const onButtonMouseUp = () => {
    setMouseDownOnButton(false);
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
        />
        <Arrow
          src={LeftArrow}
          altText={'second left arrow'}
          row={3}
          column={2}
        />
        <Arrow
          src={LeftArrow}
          altText={'third left arrow'}
          row={4}
          column={2}
        />
        <Arrow
          src={RightArrow}
          altText={'first right arrow'}
          row={2}
          column={4}
        />
        <Arrow
          src={RightArrow}
          altText={'second right arrow'}
          row={3}
          column={4}
        />
        <Arrow
          src={RightArrow}
          altText={'third right arrow'}
          row={4}
          column={4}
        />
        <RandomButtonImage
          src={RandomButton}
          alt="random button"
          mouseDown={mouseDownOnButton}
          onMouseDown={onButtonMouseDown}
          onMouseUp={onButtonMouseUp}
        />
      </Wrapper>
    </Container>
  );
};

export default App;
