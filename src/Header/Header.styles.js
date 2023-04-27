import styled from "@emotion/styled";
import { colors } from "../global/styles/color";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: center;
  align-items: center;
  justify-content: center;
  gap: 1vw;
  position: fixed;
  width: 100vw;
  top: 1vh;
  color: white;
  font-size: 40px;
  text-shadow: 2px 2px 4px #afafaf55;
  z-index: 100;
  &:after {
    content: "";
    width: 40vw;
    height: 2px;
    background-color: white;
    position: fixed;
    top: calc(1vh + 2vw);
    border-radius: 4px;
  }
`;

export const Title = styled.div`
  font-size: 1.5vw;
`;

export const Logo = styled.div`
  height: 1.5vw;
  width: 1.5vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 15%;
  align-items: center;
  justify-items: center;
  z-index: 30;
  transition: 200ms;
  &:hover {
    gap: 5%;
  }
`;

export const Cart = styled.div`
  width: 40px;
  height: 20px;
  background-color: white;
  border: 3px solid ${colors.darkBackground};
  outline: 2px solid white;
  transition: 500ms;
  &:hover {
    border-color: ${colors.blue};
  }
`;

export const Badge = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 2.5px;
  left: 12.5px;
  width: 15px;
  height: 15px;
  background-color: ${colors.orange};
  font-size: 16px;
`;

export const Curtain = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: ${colors.darkBackground};
  opacity: 0.7;
`;

export const CartContainer = styled.div`
  position: fixed;
  width: 81vw;
  height: 88.2vh;
  top: 4.7vh;
  left: 7.5vw;
  border: 2px solid white;
  border-radius: 5px;
  z-index: 1300;
  background-color: ${colors.darkBackground};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 2vh 2vw;
`;

export const CloseButton = styled.div`
  position: fixed;
  top: 7vh;
  left: 89vw;
  display: flex;
  align-items: center;
  padding-left: 1vh;
  width: 2vh;
  height: 2vh;
  pointer-events: auto;
  border: 1px solid white;
  border-radius: 3px;
  transition: 500ms;
  z-index: 2000;
  color: white;
  font-size: 1.5vh;
  &:hover {
    background-color: white;
    color: ${colors.darkBackground};
  }
`;

export const CartTitle = styled.div`
  font-size: 3vh;
  color: white;
`;

export const ItemsContainer = styled.div`
  width: 90%;
  border: 1px solid white;
  border-radius: 5px;
`;

export const CartItem = styled.div`
  display: grid;
  padding: 0.5vh;
  grid-template-columns: 2fr 2fr 2fr 2fr 2fr 1fr 1fr;
  align-items: center;
  gap: 10px;
`;

export const CartImg = styled.img`
  height: 8vh;
`;

export const CartText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SecondaryText = styled.div`
  color: #ffffff99;
`;

export const PrimaryText = styled.div`
  color: white;
`;

export const MoreDetailsButton = styled.div`
  border: 2px solid ${colors.blue};
  border-radius: 3px;
  color: ${colors.blue};
  width: 70%;
  height: 90%;
  font-size: 0.8vw;
  display: flex;
  align-items: center;
  text-align: center;
  justify-self: flex-end;
  transition: 500ms;
  &:hover {
    color: ${colors.darkBackground};
    background-color: ${colors.blue};
  }
`;

export const RemoveButton = styled.div`
  border: 2px solid ${colors.orange};
  border-radius: 3px;
  font-weight: 600;
  width: 70%;
  height: 90%;
  font-size: 0.8vw;
  display: flex;
  align-items: center;
  text-align: center;
  justify-self: flex-start;
  transition: 500ms;
  color: ${colors.darkBackground};
  background-color: ${colors.orange};
  &:hover {
    color: ${colors.orange};
    background-color: ${colors.darkBackground};
  }
`;

export const FinishOrderButton = styled.div`
  border: 2px solid ${colors.purple};
  border-radius: 3px;
  font-weight: 600;
  width: 25%;
  height: 10%;
  font-size: 120%;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  transition: 500ms;
  color: ${colors.purple};

  &:hover {
    color: ${colors.darkBackground};
    background-color: ${colors.purple};
  }
`;
export const MoreDetailsContainer = styled.div`
  position: fixed;
  width: 85vw;
  height: 92.2vh;
  top: 4.7vh;
  left: 7.5vw;
  border: 2px solid white;
  border-radius: 5px;
  z-index: 1400;
  background-color: ${colors.darkBackground};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const DetailsImage = styled.img`
  width: 90%;
  max-height: 80%;
  object-fit: contain;
`;

export const FinishOrderDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2vh;
`;

export const Input = styled.input`
  min-height: 3vh;
  width: 15vw;
  background-color: ${colors.darkBackground};
  border: 2px solid ${colors.blue};
  text-align: center;
  color: white;
  transition: 100ms;

  &:focus {
    outline: 2px solid ${colors.green};
  }
`;

export const SendButton = styled.div`
  border: 2px solid ${colors.green};
  border-radius: 3px;
  color: ${colors.green};
  width: 6vw;
  height: 3vh;
  font-size: 120%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  transition: 500ms;
  &:hover {
    color: ${colors.darkBackground};
    background-color: ${colors.green};
  }
`;

export const CloseButtonText = styled.div`
  border: 2px solid ${colors.orange};
  border-radius: 3px;
  color: ${colors.orange};
  width: 6vw;
  height: 3vh;
  font-size: 120%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  transition: 500ms;
  &:hover {
    color: ${colors.darkBackground};
    background-color: ${colors.orange};
  }
`;
