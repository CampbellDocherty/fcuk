import { useState } from 'react';
import { RandomButton, RandomButtonImage } from '../styles';

const Button = ({
  src,
  altText,
}: {
  readonly src: any;
  readonly altText: string;
}) => {
  const [mouseDownOnButton, setMouseDownOnButton] = useState(false);
  const onMouseDown = () => {
    setMouseDownOnButton(true);
  };
  const onMouseUp = () => {
    setMouseDownOnButton(false);
  };
  return (
    <RandomButton
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
