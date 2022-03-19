import { headImages } from '../assets/images';
import { HeadImage } from '../styles';

const Head = ({ headCount }: { readonly headCount: number }) => {
  return (
    <>
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
    </>
  );
};

export default Head;
