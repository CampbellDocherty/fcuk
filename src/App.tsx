import { FC, useState } from 'react';
import Title from './assets/fcuk-title.png';
import ImagesSection from './components/ImagesSection';
import LeftArrows from './components/LeftArrows';
import RandomButton from './components/RandomButton';
import RightArrows from './components/RightArrows';
import ScreenshotButton from './components/ScreenshotButton';
import {
  CharacterSelectorSection,
  Container,
  Footer,
  Header,
  TitleImage,
} from './styles';

const App: FC = () => {
  const [count, setCount] = useState({
    headCount: 1,
    bodyCount: 1,
    legsCount: 1,
  });

  return (
    <Container>
      <Header>
        <TitleImage src={Title} alt="fcuk title" />
      </Header>
      <CharacterSelectorSection>
        <LeftArrows count={count} setCount={setCount} />
        <ImagesSection count={count} />
        <RightArrows count={count} setCount={setCount} />
      </CharacterSelectorSection>
      <Footer>
        <RandomButton count={count} setCount={setCount} />
        <ScreenshotButton />
      </Footer>
    </Container>
  );
};

export default App;
