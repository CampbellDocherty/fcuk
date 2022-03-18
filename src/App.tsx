import React, { FC } from 'react';
import LeftArrow from './assets/fcuk-arrow-left.png';
import RightArrow from './assets/fcuk-arrow-right.png';

const App: FC = () => {
  return (
    <>
      <img src={LeftArrow} alt="first left arrow" />;
      <img src={LeftArrow} alt="second left arrow" />;
      <img src={LeftArrow} alt="third left arrow" />;
      <img src={RightArrow} alt="first right arrow" />;
      <img src={RightArrow} alt="second right arrow" />;
      <img src={RightArrow} alt="third right arrow" />;
    </>
  );
};

export default App;
