import { HeadImage } from '../styles';
import HeadOne from './assets/head-one-test.png';
import HeadTwo from './assets/head-two-test.png';

const headImages = [HeadOne, HeadTwo];

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
