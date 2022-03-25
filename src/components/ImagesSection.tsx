import React from 'react';
import { bodyImages, headImages, legsImages } from '../assets/images';
import {
  BodyImage,
  CharacterImagesSection,
  HeadImage,
  LegsImage,
} from '../styles';

const ImagesSection = React.forwardRef(
  ({ count }: { readonly count: any }, ref: any) => {
    return (
      <CharacterImagesSection ref={ref}>
        {headImages.map((src, index) => {
          return (
            <HeadImage
              key={index}
              src={src}
              alt={`head image ${index + 1}`}
              shouldDisplay={index + 1 === count.headCount}
            />
          );
        })}
        {bodyImages.map((src, index) => {
          return (
            <BodyImage
              key={index}
              src={src}
              alt={`body image ${index + 1}`}
              shouldDisplay={index + 1 === count.bodyCount}
            />
          );
        })}
        {legsImages.map((src, index) => {
          return (
            <LegsImage
              key={index}
              src={src}
              alt={`legs image ${index + 1}`}
              shouldDisplay={index + 1 === count.legsCount}
            />
          );
        })}
      </CharacterImagesSection>
    );
  }
);

export default ImagesSection;
