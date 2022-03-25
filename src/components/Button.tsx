import { useState } from 'react';
import { bodyImages, headImages, legsImages } from '../assets/images';
import { RandomButton, RandomButtonImage } from '../styles';

const randomIntFromInterval = (min: number, max: number, excluded: number) => {
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  if (randomNumber === excluded && randomNumber === bodyImages.length)
    return randomNumber - 1;
  if (randomNumber === excluded) return randomNumber + 1;
  return randomNumber;
};

const Button = ({
  src,
  altText,
  count,
  setCount,
}: {
  readonly src: any;
  readonly altText: string;
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
    <RandomButton
      onClick={onClick}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onKeyDown={onMouseDown}
      onKeyUp={onMouseUp}
    >
      <RandomButtonImage
        src={src}
        alt={altText}
        mouseDown={mouseDownOnButton}
      />
    </RandomButton>
  );
};

export default Button;
