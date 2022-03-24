import RightArrow from '../assets/fcuk-arrow-right.png';
import { bodyImages, headImages, legsImages } from '../assets/images';
import { ArrowsSection } from '../styles';
import Arrow from './Arrow';

const RightArrows = ({
  count,
  setCount,
}: {
  readonly count: any;
  readonly setCount: any;
}) => {
  const onNextHeadClick = () => {
    if (count.headCount === headImages.length) {
      return setCount({ ...count, headCount: 1 });
    }
    setCount({ ...count, headCount: count.headCount + 1 });
  };

  const onNextBodyClick = () => {
    if (count.bodyCount === bodyImages.length) {
      return setCount({ ...count, bodyCount: 1 });
    }
    setCount({ ...count, bodyCount: count.bodyCount + 1 });
  };

  const onNextLegsClick = () => {
    if (count.legsCount === legsImages.length) {
      return setCount({ ...count, legsCount: 1 });
    }
    setCount({ ...count, legsCount: count.legsCount + 1 });
  };

  return (
    <ArrowsSection>
      <Arrow
        src={RightArrow}
        altText={'first right arrow'}
        onClick={onNextHeadClick}
      />
      <Arrow
        src={RightArrow}
        altText={'second right arrow'}
        onClick={onNextBodyClick}
      />
      <Arrow
        src={RightArrow}
        altText={'third right arrow'}
        onClick={onNextLegsClick}
      />
    </ArrowsSection>
  );
};

export default RightArrows;
