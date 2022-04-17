import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  height: 100vh;
  max-height: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

export const TitleImage = styled.img`
  width: 60%;
  max-width: 200px;
`;

export const SubtitleImage = styled.img`
  width: 40%;
  max-width: 100px;
  margin: 16px;
`;

export const TitleAccentImage = styled.img`
  width: 90%;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  max-width: 500px;
`;

export const FcukTitleImage = styled.img`
  z-index: 100;
  margin: 0;
  width: 60%;
  max-width: 250px;
`;

export const TitleWithAccent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const ArrowImage = styled.img<{
  readonly mouseDown: boolean;
}>`
  width: ${(props) => (props.mouseDown ? '97%' : '100%')};
  cursor: pointer;
  background: transparent;
`;

export const ArrowButton = styled.button`
  width: 80%;
  max-width: 150px;
  background-color: transparent;
  padding: 0;
  border: none;
  display: flex;
  align-items: center;
  align-self: center;
  justify-self: center;
`;

export const RandomButtonImage = styled.img<{ readonly mouseDown: boolean }>`
  width: ${(props) => (props.mouseDown ? '97%' : '100%')};
  cursor: pointer;
`;

export const ScreenshotButtonImage = styled.img<{
  readonly mouseDown: boolean;
}>`
  width: ${(props) => (props.mouseDown ? '97%' : '100%')};
  cursor: pointer;
`;

export const StyledButton = styled.button`
  max-width: 50px;
  background-color: transparent;
  grid-column: 3;
  grid-row: 5;
  border: none;
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

export const ArrowsSection = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  max-width: 150px;
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 16px;
`;

export const CharacterSelectorSection = styled.div`
  display: flex;
  width: 100%;
  max-width: 500px;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  margin-top: 16px;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  max-width: 500px;
  margin-bottom: 72px;
  margin-top: 8px;
`;

export const CharacterImagesSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 400px;
  height: 100%;
`;

export const Canvas = styled.canvas`
  opacity: 0.4;
  left: 50%;
  transform: translate(-50%, 0);
  position: absolute;
  z-index: -100;
`;
