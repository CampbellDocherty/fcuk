import { useState } from 'react';
import LeftArrow from '../assets/fcuk-arrow-left.png';
import RightArrow from '../assets/fcuk-arrow-right.png';
import { bodyImages } from '../assets/images';
import { BodyImage } from '../styles';
import Arrow from './Arrow';

const BodyRow = () => {
  const [bodyCount, setBodyCount] = useState<number>(1);

  const onNextBodyClick = () => {
    if (bodyCount === bodyImages.length) {
      return setBodyCount(1);
    }
    setBodyCount(bodyCount + 1);
  };

  const onPreviousBodyClick = () => {
    if (bodyCount === 1) {
      return setBodyCount(bodyImages.length);
    }
    setBodyCount(bodyCount - 1);
  };
  return (
    <>
      <Arrow
        src={LeftArrow}
        altText={'second left arrow'}
        row={3}
        column={2}
        onClick={onPreviousBodyClick}
      />
      {bodyImages.map((src, index) => {
        return (
          <BodyImage
            key={index}
            src={src}
            alt={`body image ${index + 1}`}
            shouldDisplay={index + 1 === bodyCount}
          />
        );
      })}
      <Arrow
        src={RightArrow}
        altText={'second right arrow'}
        row={3}
        column={4}
        onClick={onNextBodyClick}
      />
    </>
  );
};

export default BodyRow;
