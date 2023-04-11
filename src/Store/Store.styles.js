import styled from "@emotion/styled";
import { colors } from "../global/styles/color";

export const Container = styled.div`
  position: fixed;
  left: 7.5vw;
  top: 6vh;
  width: 85vw;
  height: 85vh;
`;

export const TopFade = styled.div`
  position: absolute;
  background: linear-gradient(180deg, #0d1321ff, #0d132100);
  height: 1.5vh;
  width: 100%;
  z-index: 1500;
`;

export const BottomFade = styled.div`
  position: absolute;
  background: linear-gradient(0deg, #0d1321ff, #0d132100);
  height: 2vh;
  width: 100%;
  z-index: 1500;
  top: 100%;
`;

export const InnerContainer = styled.div`
  padding-top: 2vh;
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  align-items: center;
  justify-content: center;
  gap: 2vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
