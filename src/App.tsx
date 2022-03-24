import { FC, useState } from 'react';
import Random from './assets/fcuk-random-button.png';
import Title from './assets/fcuk-title.png';
import Button from './components/Button';
import ImagesSection from './components/ImagesSection';
import LeftArrows from './components/LeftArrows';
import RightArrows from './components/RightArrows';
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
        <RightArrows />
      </CharacterSelectorSection>
      <Footer>
        <Button src={Random} altText={'random button'} />
      </Footer>
    </Container>
  );
};

export default App;
