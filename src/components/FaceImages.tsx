import React from 'react';
import { FacesImagesSection } from '../styles';

const FaceImages = React.forwardRef((props, ref: any) => {
  return <FacesImagesSection ref={ref}></FacesImagesSection>;
});

export default FaceImages;
