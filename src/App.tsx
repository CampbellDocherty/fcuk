import { createRef, FC, useState } from 'react';
import Title from './assets/fcuk-title.png';
import PresentsSubtitle from './assets/presents-title.png';
import Accent from './assets/title-accent.png';
import ImagesSection from './components/ImagesSection';
import LeftArrows from './components/LeftArrows';
import RandomButton from './components/RandomButton';
import RightArrows from './components/RightArrows';
import ScreenshotButton from './components/ScreenshotButton';
import {
  CharacterSelectorSection,
  Container,
  FcukTitle,
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
    <Container>
      <Header>
        <TitleImage src={Title} alt="no format title" />
        <SubtitleImage src={PresentsSubtitle} alt="presents title" />
        <TitleWithAccent>
          <FcukTitle>FC-UK</FcukTitle>
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
  );
};

export default App;
