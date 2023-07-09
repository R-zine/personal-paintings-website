import styled from "@emotion/styled";
import { colors } from "../global/styles/color";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3vh;
  background-color: ${colors.darkBackground};
  color: white;
  z-index: 3000;
`;

export const Text = styled.div`
  font-size: 2vmin;
`;

export const SquareContainer = styled.div`
  display: flex;
  gap: 1vw;
  align-items: center;
  justify-content: center;

  & > div {
    width: 2vh;
    height: 2vh;
    filter: grayscale(100%);
  }
`;
