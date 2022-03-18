import { useState } from 'react';
import { RandomButtonImage } from './styles';

const Button = ({
  src,
  altText,
}: {
  readonly src: any;
  readonly altText: string;
}) => {
  const [mouseDownOnButton, setMouseDownOnButton] = useState<boolean>(false);
  const onButtonMouseDown = () => {
    setMouseDownOnButton(true);
  };
  const onButtonMouseUp = () => {
    setMouseDownOnButton(false);
  };
  return (
    <RandomButtonImage
      src={src}
      alt={altText}
      mouseDown={mouseDownOnButton}
      onMouseDown={onButtonMouseDown}
      onMouseUp={onButtonMouseUp}
    />
  );
};

export default Button;
