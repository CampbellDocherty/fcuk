import LeftArrow from '../../assets/fcuk-arrow-left.png';
import { FacesArrowsSection } from '../../styles';
import Arrow from '../Arrow';

const FacesLeftArrows = () => {
  return (
    <FacesArrowsSection>
      <Arrow
        src={LeftArrow}
        altText={'first faces left arrow'}
        onClick={() => {}}
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
