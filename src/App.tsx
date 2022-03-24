import { FC } from 'react';
import Random from './assets/fcuk-random-button.png';
import Title from './assets/fcuk-title.png';
import Button from './components/Button';
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
  return (
    <Container>
      {/* <Wrapper> */}
      <Header>
        <TitleImage src={Title} alt="fcuk title" />
      </Header>
      <CharacterSelectorSection>
        <LeftArrows />
        <RightArrows />
      </CharacterSelectorSection>
      {/* <HeadRow />
        <BodyRow />
        <LegsRow /> */}
      <Footer>
        <Button src={Random} altText={'random button'} />
      </Footer>
      {/* </Wrapper> */}
    </Container>
  );
};

export default App;
