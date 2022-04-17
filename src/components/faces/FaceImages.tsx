import React from 'react';
import { faceImages } from '../../assets/face';
import { FaceImage, FacesImagesSection } from '../../styles';

const FaceImages = React.forwardRef(
  ({ facesCount }: { readonly facesCount: any }, ref: any) => {
    return (
      <FacesImagesSection ref={ref}>
        {faceImages.map((src, index) => {
          return (
            <FaceImage
              key={index}
              src={src}
              alt={`face image ${index + 1}`}
              shouldDisplay={index + 1 === facesCount.faceCount}
            />
          );
        })}
      </FacesImagesSection>
    );
  }
);

export default FaceImages;
