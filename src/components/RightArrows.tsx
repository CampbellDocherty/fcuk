import { useState } from 'react';
import RightArrow from '../assets/fcuk-arrow-right.png';
import { bodyImages, headImages, legsImages } from '../assets/images';
import { ArrowsSection } from '../styles';
import Arrow from './Arrow';

const RightArrows = () => {
  const [headCount, setHeadCount] = useState<number>(1);
  const [bodyCount, setBodyCount] = useState<number>(1);
  const [legsCount, setLegsCount] = useState<number>(1);

  const onNextLegsClick = () => {
    if (legsCount === legsImages.length) {
      return setLegsCount(1);
    }
    setLegsCount(legsCount + 1);
  };

  const onNextBodyClick = () => {
    if (bodyCount === bodyImages.length) {
      return setBodyCount(1);
    }
    setBodyCount(bodyCount + 1);
  };

  const onNextHeadClick = () => {
    if (headCount === headImages.length) {
      return setHeadCount(1);
    }
    setHeadCount(headCount + 1);
  };
  return (
    <ArrowsSection>
      <Arrow
        src={RightArrow}
        altText={'first right arrow'}
        onClick={onNextHeadClick}
      />
      <Arrow
        src={RightArrow}
        altText={'second right arrow'}
        onClick={onNextBodyClick}
      />
      <Arrow
        src={RightArrow}
        altText={'third right arrow'}
        onClick={onNextLegsClick}
      />
    </ArrowsSection>
  );
};

export default RightArrows;
