import styled from "@emotion/styled";
import { colors } from "../global/styles/color";

export const Container = styled.div`
  position: fixed;
  left: 7.5vw;
  top: 7vh;
  width: 85vw;
  height: 85vh;
`;

export const InnerContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  align-items: center;
  justify-content: center;
  gap: 2vh;
`;
