import { faceImages } from '../../assets/face';
import LeftArrow from '../../assets/fcuk-arrow-left.png';
import { FacesArrowsSection } from '../../styles';
import Arrow from '../Arrow';

const FacesLeftArrows = ({
  facesCount,
  setFacesCount,
}: {
  readonly facesCount: any;
  readonly setFacesCount: any;
}) => {
  const onPreviousFaceClick = () => {
    if (facesCount.faceCount === 1) {
      return setFacesCount({ ...facesCount, faceCount: faceImages.length });
    }
    setFacesCount({ ...facesCount, faceCount: facesCount.faceCount - 1 });
  };
  return (
    <FacesArrowsSection>
      <Arrow
        src={LeftArrow}
        altText={'first faces left arrow'}
        onClick={onPreviousFaceClick}
      />
      <Arrow
        src={LeftArrow}
        altText={'second faces left arrow'}
        onClick={() => {}}
      />
    </FacesArrowsSection>
  );
};

export default FacesLeftArrows;
