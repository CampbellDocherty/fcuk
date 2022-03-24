import { useState } from 'react';
import { ArrowButton, ArrowImage } from '../styles';

const Arrow = ({
  src,
  altText,
  onClick,
}: {
  readonly src: any;
  readonly altText: string;
  readonly onClick: any;
}) => {
  const [mouseDown, setMouseDown] = useState<boolean>(false);
  const onMouseDown = () => {
    setMouseDown(true);
  };
  const onMouseUp = () => {
    setMouseDown(false);
  };
  return (
    <ArrowButton
      onKeyDown={onMouseDown}
      onKeyUp={onMouseUp}
      onClick={onClick}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    >
      <ArrowImage mouseDown={mouseDown} src={src} alt={altText} />
    </ArrowButton>
  );
};

export default Arrow;
