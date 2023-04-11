import styled from "@emotion/styled";
import { colors } from "../../global/styles/color";

export const Container = styled.div`
  height: 600px;
  width: 500px;
  border: 1px solid white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-self: center;
  color: white;
  padding-top: 1vh;
  padding-bottom: 1vh;
  padding-left: 0.2vw;
  padding-right: 0.2vw;
  transition: 500ms;
  gap: 1.5vh;
  &:hover {
    background: #00000044;
    color: #ffffff99;
    &:after {
      width: 70%;
      color: white;
    }
  }
  &:after {
    content: "Click to enlarge";
    width: 50%;
    max-height: 100%;
    height: 30px;
    background-color: ${colors.purple};
    text-align: center;
    padding-top: 5px;
    border-radius: 5px;
    transition: 500ms;
  }
`;

export const Image = styled.img`
  width: 95%;
  max-height: 50%;
  object-fit: scale-down;
`;

export const Info = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  width: 90%;
  max-width: 40vw;
  gap: 1vh;
  justify-self: center;
  align-self: center;
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: minmax(3fr, 100px) minmax(5fr, 250px);
  margin: 0.2vh 0;
`;

export const StaticText = styled.div`
  color: #ffffff99;
`;

export const DynamicText = styled.div``;

export const DynamicContainer = styled.div`
  position: fixed;
  height: 600px;
  width: 500px;
  border: 1px solid white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-self: center;
  color: white;
  padding-top: 1vh;
  padding-bottom: 1vh;
  padding-left: 0.2vw;
  padding-right: 0.2vw;
  transition: 500ms;
  gap: 1.5vh;
  z-index: 1000;
  pointer-events: none;
  &:hover {
    background: #00000044;
    color: #ffffff99;
    &:after {
      width: 70%;
      color: white;
    }
  }

  &:after {
    content: "Add to Cart";
    width: 50%;
    max-height: 100%;
    height: 30px;
    background-color: ${colors.purple};
    text-align: center;
    padding-top: 5px;
    border-radius: 5px;
    transition: 500ms;
    pointer-events: auto;
  }
`;

export const Curtain = styled.div`
  position: fixed;
  left: 7.5vw;
  top: 6vh;
  width: 85vw;
  height: 87vh;
  background-color: ${colors.darkBackground};
`;

export const CloseButton = styled.div`
  position: fixed;
  top: 9vh;
  left: 85vw;
  display: flex;
  align-items: center;
  padding-left: 1vh;
  width: 2vh;
  height: 2vh;
  pointer-events: auto;
  border: 1px solid white;
  border-radius: 3px;
  transition: 500ms;
  z-index: 1100;
  color: white;
  &:hover {
    background-color: white;
    color: ${colors.darkBackground};
  }
`;
