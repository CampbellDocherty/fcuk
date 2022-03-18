import React, { FC } from 'react';
import LeftArrow from './assets/fcuk-arrow-left.png';
import RightArrow from './assets/fcuk-arrow-right.png';
import RandomButton from './assets/fcuk-random-button.png';
import Title from './assets/fcuk-title.png';
import {
  ArrowImage,
  Container,
  RandomButtonImage,
  TitleImage,
  Wrapper,
} from './styles';

const App: FC = () => {
  return (
    <Container>
      <Wrapper>
        <TitleImage src={Title} alt="fcuk title" />
        <ArrowImage src={LeftArrow} alt="first left arrow" row={2} column={2} />
        <ArrowImage
          src={LeftArrow}
          alt="second left arrow"
          row={3}
          column={2}
        />
        <ArrowImage src={LeftArrow} alt="third left arrow" row={4} column={2} />
        <ArrowImage
          src={RightArrow}
          alt="first right arrow"
          row={2}
          column={4}
        />
        <ArrowImage
          src={RightArrow}
          alt="second right arrow"
          row={3}
          column={4}
        />
        <ArrowImage
          src={RightArrow}
          alt="third right arrow"
          row={4}
          column={4}
        />
        <RandomButtonImage src={RandomButton} alt="random button" />
      </Wrapper>
    </Container>
  );
};

export default App;
