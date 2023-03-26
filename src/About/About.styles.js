import styled from "@emotion/styled";
import { colors } from "../global/styles/color";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 21;
`;

export const Title = styled.div`
  position: fixed;
  top: 93vh;
  left: 82vw;
  color: white;
  text-shadow: 2px 2px 4px #0f0f0f55;
  font-size: 1.5vw;
  opacity: 1;
`;

export const InnerContainer = styled.div`
  position: fixed;
  top: 8.5vh;
  left: 9.3vw;
  width: 82.4vw;
  height: 84vh;
  background-color: ${colors.darkBackground};
  z-index: 21;
  opacity: 1;
  display: grid;
  grid-template-columns: 1fr 5fr;
  gap: 2vw;
  align-items: center;
  justify-content: center;
`;

export const PhotoContainer = styled.div`
  margin-left: 3vw;
`;

export const GrayScaleImg = styled.img`
  position: fixed;
  top: 20vh;
  filter: grayscale(100%) opacity(0);
  background-color: ${colors.green};
`;

export const ColorImg = styled.img`
  position: fixed;
  top: 20vh;
  clip-path: inset(50% 0 50% 0);
`;
