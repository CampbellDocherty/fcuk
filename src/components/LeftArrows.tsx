import { useState } from 'react';
import LeftArrow from '../assets/fcuk-arrow-left.png';
import { bodyImages, headImages, legsImages } from '../assets/images';
import { LeftArrowsSection } from '../styles';
import Arrow from './Arrow';

const LeftArrows = () => {
  const [bodyCount, setBodyCount] = useState<number>(1);
  const [headCount, setHeadCount] = useState<number>(1);
  const [legsCount, setLegsCount] = useState<number>(1);

  const onPreviousBodyClick = () => {
    if (bodyCount === 1) {
      return setBodyCount(bodyImages.length);
    }
    setBodyCount(bodyCount - 1);
  };

  const onPreviousHeadClick = () => {
    if (headCount === 1) {
      return setHeadCount(headImages.length);
    }
    setHeadCount(headCount - 1);
  };

  const onPreviousLegsClick = () => {
    if (legsCount === 1) {
      return setLegsCount(legsImages.length);
    }
    setLegsCount(legsCount - 1);
  };
  return (
    <LeftArrowsSection>
      <Arrow
        src={LeftArrow}
        altText={'first left arrow'}
        row={2}
        column={2}
        onClick={onPreviousHeadClick}
      />
      <Arrow
        src={LeftArrow}
        altText={'second left arrow'}
        row={3}
        column={2}
        onClick={onPreviousBodyClick}
      />
      <Arrow
        src={LeftArrow}
        altText={'third left arrow'}
        row={4}
        column={2}
        onClick={onPreviousLegsClick}
      />
    </LeftArrowsSection>
  );
};

export default LeftArrows;
