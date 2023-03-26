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
  top: 4vh;
  left: 10vw;
  color: white;
  text-shadow: 2px 2px 4px #0f0f0f55;
  font-size: 1.5vw;
  opacity: 0;
`;

export const InnerContainer = styled.div`
  position: fixed;
  top: 8.5vh;
  left: 9.3vw;
  width: 82.4vw;
  height: 84vh;
  background-color: ${colors.darkBackground};
  z-index: 21;
  opacity: 0;
`;

export const PaintingContainer = styled.div`
  position: fixed;
  top: 9.5vh;
  left: 10vw;
  width: 81vw;
  height: 82vh;
  display: flex;
  justify-content: center;
  z-index: 22;
  opacity: 0;
`;

export const Button = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(1fr, 4);
  position: fixed;
  left: ${(props) => (props.left ? "10vw" : "87.1vw")};
  width: 2vw;
  top: 46vh;
  height: 8vh;
  gap: 0.5vh;
  filter: grayscale(100);
  transition: 500ms;
  z-index: 100;
  opacity: 0;
  &:hover {
    filter: grayscale(0);
    gap: 0.3vh;
  }
`;

export const Details = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 95vh;
  left: 9.2vw;
  min-width: 82.4vw;
  color: white;
  text-shadow: 2px 2px 4px #0f0f0f55;
  & > div {
    opacity: 0;
  }
`;
