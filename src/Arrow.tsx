import { useState } from 'react';
import { ArrowImage } from './styles';

const Arrow = ({
  src,
  altText,
  row,
  column,
}: {
  readonly src: any;
  readonly altText: string;
  readonly row: number;
  readonly column: number;
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
    />
  );
};

export default Arrow;
