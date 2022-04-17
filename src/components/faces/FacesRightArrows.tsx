import RightArrow from '../../assets/fcuk-arrow-right.png';
import { FacesArrowsSection } from '../../styles';
import Arrow from '../Arrow';

const FacesRightArrows = () => {
  return (
    <FacesArrowsSection>
      <Arrow
        src={RightArrow}
        altText={'first faces right arrow'}
        onClick={() => {}}
      />
      <Arrow
        src={RightArrow}
        altText={'second faces right arrow'}
        onClick={() => {}}
      />
      <Arrow
        src={RightArrow}
        altText={'third faces right arrow'}
        onClick={() => {}}
      />
    </FacesArrowsSection>
  );
};

export default FacesRightArrows;
