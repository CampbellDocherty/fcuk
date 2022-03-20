import { useState } from 'react';
import { ArrowButton, ArrowImage } from '../styles';

const Arrow = ({
  src,
  altText,
  row,
  column,
  onClick,
}: {
  readonly src: any;
  readonly altText: string;
  readonly row: number;
  readonly column: number;
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
      row={row}
      column={column}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    >
      <ArrowImage mouseDown={mouseDown} src={src} alt={altText} />
    </ArrowButton>
  );
};

export default Arrow;
