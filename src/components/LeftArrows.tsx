import { bodyImages } from '../assets/body';
import LeftArrow from '../assets/fcuk-arrow-left.png';
import { headImages } from '../assets/head';
import { legsImages } from '../assets/legs';
import { ArrowsSection } from '../styles';
import Arrow from './Arrow';

const LeftArrows = ({
  count,
  setCount,
}: {
  readonly count: any;
  readonly setCount: any;
}) => {
  const onPreviousHeadClick = () => {
    if (count.headCount === 1) {
      return setCount({ ...count, headCount: headImages.length });
    }
    setCount({ ...count, headCount: count.headCount - 1 });
  };

  const onPreviousBodyClick = () => {
    if (count.bodyCount === 1) {
      return setCount({ ...count, bodyCount: bodyImages.length });
    }
    setCount({ ...count, bodyCount: count.bodyCount - 1 });
  };

  const onPreviousLegsClick = () => {
    if (count.legsCount === 1) {
      return setCount({ ...count, legsCount: legsImages.length });
    }
    setCount({ ...count, legsCount: count.legsCount - 1 });
  };
  return (
    <ArrowsSection>
      <Arrow
        src={LeftArrow}
        altText={'first left arrow'}
        onClick={onPreviousHeadClick}
      />
      <Arrow
        src={LeftArrow}
        altText={'second left arrow'}
        onClick={onPreviousBodyClick}
      />
      <Arrow
        src={LeftArrow}
        altText={'third left arrow'}
        onClick={onPreviousLegsClick}
      />
    </ArrowsSection>
  );
};

export default LeftArrows;
