import React, { FC } from 'react';
import LeftArrow from './assets/fcuk-arrow-left.png';
import RightArrow from './assets/fcuk-arrow-right.png';
import RandomButton from './assets/fcuk-random-button.png';
import Title from './assets/fcuk-title.png';

const App: FC = () => {
  return (
    <>
      <img src={Title} alt="fcuk title" />;
      <img src={LeftArrow} alt="first left arrow" />;
      <img src={LeftArrow} alt="second left arrow" />;
      <img src={LeftArrow} alt="third left arrow" />;
      <img src={RightArrow} alt="first right arrow" />;
      <img src={RightArrow} alt="second right arrow" />;
      <img src={RightArrow} alt="third right arrow" />;
      <img src={RandomButton} alt="random button" />;
    </>
  );
};

export default App;
