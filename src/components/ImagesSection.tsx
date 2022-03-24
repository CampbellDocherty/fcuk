import { bodyImages, headImages, legsImages } from '../assets/images';
import {
  BodyImage,
  CharacterImagesSection,
  HeadImage,
  LegsImage,
} from '../styles';

const ImagesSection = () => {
  const headCount = 1;
  const bodyCount = 1;
  const legsCount = 1;
  return (
    <CharacterImagesSection>
      {headImages.map((src, index) => {
        return (
          <HeadImage
            key={index}
            src={src}
            alt={`head image ${index + 1}`}
            shouldDisplay={index + 1 === headCount}
          />
        );
      })}
      {bodyImages.map((src, index) => {
        return (
          <BodyImage
            key={index}
            src={src}
            alt={`body image ${index + 1}`}
            shouldDisplay={index + 1 === bodyCount}
          />
        );
      })}
      {legsImages.map((src, index) => {
        return (
          <LegsImage
            key={index}
            src={src}
            alt={`legs image ${index + 1}`}
            shouldDisplay={index + 1 === legsCount}
          />
        );
      })}
    </CharacterImagesSection>
  );
};

export default ImagesSection;
