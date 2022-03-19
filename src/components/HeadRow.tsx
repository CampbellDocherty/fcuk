import { useState } from 'react';
import LeftArrow from '../assets/fcuk-arrow-left.png';
import RightArrow from '../assets/fcuk-arrow-right.png';
import { headImages } from '../assets/images';
import { HeadImage } from '../styles';
import Arrow from './Arrow';

const HeadRow = () => {
  const [headCount, setHeadCount] = useState<number>(1);
  const onNextHeadClick = () => {
    if (headCount === headImages.length) {
      return setHeadCount(1);
    }
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
      {headImages.map((src, index) => {
        return (
          <HeadImage
            key={index}
            src={src}
            alt={`head image ${index + 1}`}
            shouldDisplay={index + 1 === headCount}
          />
        );
      })}
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
