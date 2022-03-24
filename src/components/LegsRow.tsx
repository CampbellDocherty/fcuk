import { useState } from 'react';
import LeftArrow from '../assets/fcuk-arrow-left.png';
import RightArrow from '../assets/fcuk-arrow-right.png';
import { legsImages } from '../assets/images';
import { LegsImage } from '../styles';
import Arrow from './Arrow';

const LegsRow = () => {
  const [legsCount, setLegsCount] = useState<number>(1);

  const onNextLegsClick = () => {
    if (legsCount === legsImages.length) {
      return setLegsCount(1);
    }
    setLegsCount(legsCount + 1);
  };

  const onPreviousLegsClick = () => {
    if (legsCount === 1) {
      return setLegsCount(legsImages.length);
    }
    setLegsCount(legsCount - 1);
  };
  return (
    <>
      <Arrow
        src={LeftArrow}
        altText={'third left arrow'}
        row={4}
        column={2}
        onClick={onPreviousLegsClick}
      />
      {legsImages.map((src, index) => {
        return (
          <LegsImage
            key={index}
            src={src}
            alt={`legs image ${index + 1}`}
            shouldDisplay={index + 1 === legsCount}
          />
        );
      })}
      <Arrow
        src={RightArrow}
        altText={'third right arrow'}
        row={4}
        column={4}
        onClick={onNextLegsClick}
      />
    </>
  );
};

export default LegsRow;
