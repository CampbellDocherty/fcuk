import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.7fr 1.6fr 0.7fr 1fr;
  grid-template-rows: 1.2fr 0.9fr 0.9fr 0.9fr 1.1fr;
  justify-content: center;
  align-content: center;
  justify-items: center;
  align-items: center;
`;

export const TitleImage = styled.img`
  width: 40%;
`;

export const ArrowImage = styled.img<{
  readonly mouseDown: boolean;
}>`
  width: ${(props) => (props.mouseDown ? '97%' : '100%')};
  cursor: pointer;
`;

export const ArrowButton = styled.button<{
  readonly column: number;
  readonly row: number;
}>`
  grid-column: ${(props) => props.column};
  grid-row: ${(props) => props.row};
  width: 70%;
  background-color: white;
  padding: 0;
  border: none;
  display: flex;
  align-items: center;
`;

export const RandomButtonImage = styled.img<{ readonly mouseDown: boolean }>`
  width: ${(props) => (props.mouseDown ? '97%' : '100%')};
  cursor: pointer;
`;

export const RandomButton = styled.button`
  width: 30%;
  background-color: white;
  grid-column: 3;
  grid-row: 5;
  border: none;
  border-radius: 300px;
  padding: 0;
`;

export const HeadImage = styled.img<{ readonly shouldDisplay: boolean }>`
  width: 100%;
  display: ${(props) => (props.shouldDisplay ? 'initial' : 'none')};
`;

export const BodyImage = styled.img<{ readonly shouldDisplay: boolean }>`
  width: 100%;
  display: ${(props) => (props.shouldDisplay ? 'initial' : 'none')};
`;

export const LegsImage = styled.img<{ readonly shouldDisplay: boolean }>`
  width: 100%;
  display: ${(props) => (props.shouldDisplay ? 'initial' : 'none')};
`;

export const AspectRatioBox = styled.div`
  height: 0;
  overflow: hidden;
  padding-top: calc(1 / 1 * 100%);
  background: white;
  position: relative;
`;

export const AspectRatioBoxInside = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const ArrowsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 150px;
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20vh;
`;

export const CharacterSelectorSection = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20vh;
`;

export const CharacterImagesSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 400px;
  height: 100%;
`;
