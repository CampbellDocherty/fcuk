import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  margin: 0 20% 0 20%;
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
  width: 100%;
  grid-column: 3;
`;

export const ArrowImage = styled.img<{
  readonly column: number;
  readonly row: number;
  readonly mouseDown: boolean;
}>`
  width: ${(props) => (props.mouseDown ? '67%' : '70%')};
  grid-column: ${(props) => props.column};
  grid-row: ${(props) => props.row};
  cursor: pointer;
`;

export const RandomButtonImage = styled.img<{ readonly mouseDown: boolean }>`
  width: ${(props) => (props.mouseDown ? '57%' : '60%')};
  grid-column: 3;
  grid-row: 5;
  cursor: pointer;
`;

export const HeadImage = styled.img<{ readonly shouldDisplay: boolean }>`
  width: 100%;
  grid-column: 3;
  grid-row: 2;
  visibility: ${(props) => (props.shouldDisplay ? 'visible' : 'hidden')};
  padding: 5% 5% 0px 5%;
`;

export const BodyImage = styled.img<{ readonly shouldDisplay: boolean }>`
  width: 100%;
  grid-column: 3;
  grid-row: 3;
  visibility: ${(props) => (props.shouldDisplay ? 'visible' : 'hidden')};
  padding: 0px 5% 0px 5%;
`;

export const LegsImage = styled.img<{ readonly shouldDisplay: boolean }>`
  width: 100%;
  grid-column: 3;
  grid-row: 4;
  visibility: ${(props) => (props.shouldDisplay ? 'visible' : 'hidden')};
  padding: 0px 5% 5% 5%;
`;
