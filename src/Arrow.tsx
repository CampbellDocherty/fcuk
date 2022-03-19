import { useState } from 'react';
import { ArrowImage } from './styles';

const Arrow = ({
  src,
  altText,
  row,
  column,
  onClick = () => {},
}: {
  readonly src: any;
  readonly altText: string;
  readonly row: number;
  readonly column: number;
  readonly onClick?: any;
}) => {
  const [mouseDown, setMouseDown] = useState<boolean>(false);
  const onMouseDown = () => {
    setMouseDown(true);
  };
  const onMouseUp = () => {
    setMouseDown(false);
  };
  return (
    <ArrowImage
      mouseDown={mouseDown}
      src={src}
      alt={altText}
      row={row}
      column={column}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onClick={onClick}
    />
  );
};

export default Arrow;
