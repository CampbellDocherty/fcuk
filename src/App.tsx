import { createRef, FC, useState } from 'react';
import NoFormatTitle from './assets/fcuk-no-format-title.png';
import FcukTitle from './assets/fcuk-title.png';
import PresentsSubtitle from './assets/presents-title.png';
import Accent from './assets/title-accent.png';
import Background from './components/Background';
import RandomButton from './components/RandomButton';
import ScreenshotButton from './components/ScreenshotButton';
import ImagesSection from './components/outfits/ImagesSection';
import LeftArrows from './components/outfits/LeftArrows';
import RightArrows from './components/outfits/RightArrows';
import {
  CharacterSelectorSection,
  Container,
  FcukTitleImage,
  Footer,
  Header,
  SubtitleImage,
  TitleAccentImage,
  TitleImage,
  TitleWithAccent,
} from './styles';

const App: FC = () => {
  const ref = createRef();
  const [count, setCount] = useState({
    headCount: 1,
    bodyCount: 1,
    legsCount: 1,
  });

  return (
    <>
      <Background />
      <Container>
        <Header>
          <TitleImage src={NoFormatTitle} alt="no format title" />
          <SubtitleImage src={PresentsSubtitle} alt="presents title" />
          <TitleWithAccent>
            <FcukTitleImage src={FcukTitle} alt="fcuk title" />
            <TitleAccentImage src={Accent} alt="title accent" />
          </TitleWithAccent>
        </Header>

        <CharacterSelectorSection>
          <LeftArrows count={count} setCount={setCount} />
          <ImagesSection count={count} ref={ref} />
          <RightArrows count={count} setCount={setCount} />
        </CharacterSelectorSection>
        <Footer>
          <RandomButton count={count} setCount={setCount} />
          <ScreenshotButton ref={ref} />
        </Footer>
      </Container>
    </>
  );
};

export default App;
