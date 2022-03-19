import { useState } from 'react';
import LeftArrow from '../assets/fcuk-arrow-left.png';
import RightArrow from '../assets/fcuk-arrow-right.png';
import Arrow from './Arrow';
import Head from './Head';

const HeadRow = () => {
  const [headCount, setHeadCount] = useState<number>(1);
  const onNextHeadClick = () => {
    setHeadCount(headCount + 1);
  };
  const onPreviousHeadClick = () => {
    setHeadCount(headCount - 1);
  };
  return (
    <>
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
    </>
  );
};

export default HeadRow;
