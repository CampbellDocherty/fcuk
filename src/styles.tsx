import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  margin: 0 10rem 0 10rem;
  justify-content: center;
  align-content: center;
  justify-items: center;
  align-items: center;
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
  object-fit: contain;
  width: 40rem;
  height: 20rem;
  grid-column: 3;
`;

export const ArrowImage = styled.img<{
  readonly column: number;
  readonly row: number;
}>`
  object-fit: contain;
  width: 10rem;
  height: 6rem;
  grid-column: ${(props) => props.column};
  grid-row: ${(props) => props.row};
  cursor: pointer;
`;

export const RandomButtonImage = styled.img`
  object-fit: contain;
  width: 20rem;
  height: 12rem;
  grid-column: 3;
  grid-row: 5;
  cursor: pointer;
`;
