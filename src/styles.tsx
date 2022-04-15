import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1000px;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
`;

export const TitleImage = styled.img`
  width: 60%;
`;

export const TitleAccentImage = styled.img`
  width: 80%;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  max-width: 600px;
`;

export const FcukTitle = styled.h1`
  position: relative;
  z-index: 100;
  margin: 0;
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
`;

export const ArrowButton = styled.button`
  width: 70%;
  max-width: 150px;
  background-color: white;
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
  max-width: 60px;
  background-color: white;
  grid-column: 3;
  grid-row: 5;
  border: none;
  border-radius: 300px;
  padding: 0;

  :nth-of-type(1) {
    margin-right: 16px;
  }
  :nth-of-type(2) {
    margin-left: 16px;
  }
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
  margin-top: 48px;
`;

export const CharacterSelectorSection = styled.div`
  display: flex;
  width: 100%;
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
