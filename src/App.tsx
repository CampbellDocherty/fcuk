import { FC } from 'react';
import Random from './assets/fcuk-random-button.png';
// import Title from './assets/fcuk-title.png';
import Button from './components/Button';
import LeftArrows from './components/LeftArrows';
import { Container } from './styles';

const App: FC = () => {
  return (
    <Container>
      {/* <Wrapper> */}
      {/* <TitleImage src={Title} alt="fcuk title" /> */}
      <LeftArrows />
      {/* <HeadRow />
        <BodyRow />
        <LegsRow /> */}
      <Button src={Random} altText={'random button'} />
      {/* </Wrapper> */}
    </Container>
  );
};

export default App;
