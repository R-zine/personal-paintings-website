import styled from "@emotion/styled";

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

export const Title = styled.div`
  position: fixed;
  top: 3vh;
  left: 10vw;
  color: white;
  text-shadow: 2px 2px 4px #0f0f0f55;
  font-size: 1.5vw;
  opacity: 1;
  z-index: 1501;
`;

export const InnerContainer = styled.div`
  padding-top: 2vh;
  padding-bottom: 2vh;
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
