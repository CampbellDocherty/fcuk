import React from 'react';
import { bodyImages } from '../../assets/body';
import { headImages } from '../../assets/head';
import { legsImages } from '../../assets/legs';
import {
  BodyImage,
  CharacterImagesSection,
  HeadImage,
  LegsImage,
} from '../../styles';

const ImagesSection = React.forwardRef(
  ({ count }: { readonly count: any }, ref: any) => {
    return (
      <CharacterImagesSection ref={ref}>
        {headImages.map((src, index) => {
          return (
            <HeadImage
              data-testid={'head-image'}
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
              data-testid={'body-image'}
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
              data-testid={'legs-image'}
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
