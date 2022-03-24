import { FC } from 'react';
// import Random from './assets/fcuk-random-button.png';
import Title from './assets/fcuk-title.png';
// import Button from './components/Button';
import LeftArrows from './components/LeftArrows';
import {
  CharacterSelectorSection,
  Container,
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
      </CharacterSelectorSection>
      {/* <HeadRow />
        <BodyRow />
        <LegsRow /> */}
      {/* <Button src={Random} altText={'random button'} /> */}
      {/* </Wrapper> */}
    </Container>
  );
};

export default App;
