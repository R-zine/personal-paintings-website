import styled from "@emotion/styled";
import { colors } from "../global/styles/color";

const photoScaleModifier = 70;

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
  display: grid;
  grid-template-columns: 1fr 10fr;
  gap: 2vw;
  align-items: center;
  justify-content: center;

  .Typewriter {
    margin-left: 20vw;
    width: 50vw !important;

    br {
      margin-top: 1vh;
    }
  }

  .Typewriter__wrapper {
    color: white;
    text-align: justify !important;
  }
`;

export const PhotoContainer = styled.div`
  margin-left: 3vw;
`;

export const GrayScaleImg = styled.img`
  width: ${0.57 * photoScaleModifier}vh;
  height: ${photoScaleModifier}vh;
  position: fixed;
  top: 15vh;
  filter: grayscale(100%) opacity(1);
  background-color: ${colors.green};
`;

export const ColorImg = styled.img`
  width: ${0.57 * photoScaleModifier}vh;
  height: ${photoScaleModifier}vh;
  position: fixed;
  top: 15vh;
  clip-path: inset(50% 0 50% 0);
`;
