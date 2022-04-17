import { useState } from 'react';
import { bodyImages } from '../assets/body';
import Random from '../assets/fcuk-random-button.png';
import { headImages } from '../assets/head';
import { legsImages } from '../assets/legs';
import { StyledButton, RandomButtonImage } from '../styles';

const randomIntFromInterval = (min: number, max: number, excluded: number) => {
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  if (randomNumber === excluded && randomNumber === bodyImages.length)
    return randomNumber - 1;
  if (randomNumber === excluded) return randomNumber + 1;
  return randomNumber;
};

const RandomButton = ({
  count,
  setCount,
}: {
  readonly count: any;
  readonly setCount: any;
}) => {
  const [mouseDownOnButton, setMouseDownOnButton] = useState(false);

  const onMouseDown = () => {
    setMouseDownOnButton(true);
  };
  const onMouseUp = () => {
    setMouseDownOnButton(false);
  };

  const onClick = () => {
    const randomHeadCount = randomIntFromInterval(
      1,
      headImages.length,
      count.headCount
    );
    const randomBodyCount = randomIntFromInterval(
      1,
      bodyImages.length,
      count.bodyCount
    );
    const randomLegsCount = randomIntFromInterval(
      1,
      legsImages.length,
      count.legsCount
    );
    setCount({
      headCount: randomHeadCount,
      bodyCount: randomBodyCount,
      legsCount: randomLegsCount,
    });
  };

  return (
    <StyledButton
      onClick={onClick}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onKeyDown={onMouseDown}
      onKeyUp={onMouseUp}
    >
      <RandomButtonImage
        src={Random}
        alt={'random button'}
        mouseDown={mouseDownOnButton}
      />
    </StyledButton>
  );
};

export default RandomButton;
