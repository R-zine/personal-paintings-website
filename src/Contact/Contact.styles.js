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
  z-index: 2000;
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
  grid-template-columns: 20fr 1fr 20fr;
  align-items: center;
  justify-content: center;
`;

export const SocialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${colors.orange};
  gap: 2vh;
`;

export const SocialLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1vw;
  width: max(30%, 200px);
  border-radius: 5px;
  padding: 5px;
  transition: 700ms;
  opacity: 0;
  &:hover {
    color: ${colors.darkBackground};
    background-color: ${colors.orange};
    & > div {
      background-color: ${colors.darkBackground};
      & > img {
        filter: invert(64%) sepia(50%) saturate(2869%) hue-rotate(320deg)
          brightness(97%) contrast(108%);
      }
    }
  }
`;

export const IconButton = styled.div`
  width: 2vw;
  height: 2vw;
  background-color: ${colors.orange};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5%;
  transition: 700ms;
  & > img {
    width: 1.7vw;
    height: 1.7vw;
    filter: invert(6%) sepia(7%) saturate(5408%) hue-rotate(184deg)
      brightness(96%) contrast(95%);
    transition: 700ms;
  }
`;

export const ContactForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${colors.orange};
  gap: 2vh;
`;

export const Input = styled.input`
  width: max(30%, 200px);
  height: 3vh;
  background-color: ${(props) => props.color};
  border-color: ${colors.orange};
  border-radius: 5px;
  transition: 700ms;
  color: ${colors.darkBackground};
  font-size: 1.2vmin;
  font-weight: 700;
  text-indent: 5px;
  opacity: 0;
  &::placeholder {
    color: ${colors.darkBackground};
    text-align: center;
  }
  &:focus {
    background-color: ${colors.darkBackground};
    color: white;
    &::placeholder {
      color: white;
    }
  }
`;

export const Textarea = styled.textarea`
  width: max(50%, 200px);
  height: 9vh;
  background-color: ${(props) => props.color};
  border-color: ${colors.orange};
  border-radius: 5px;
  transition: 700ms;
  color: ${colors.darkBackground};
  font-size: 1.2vmin;
  font-weight: 700;
  text-indent: 5px;
  padding: 5px;
  opacity: 0;
  &::placeholder {
    color: ${colors.darkBackground};
    text-align: center;
  }
  &:focus {
    background-color: ${colors.darkBackground};
    color: white;
    &::placeholder {
      color: white;
    }
  }
`;

export const SendButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.blue};
  width: 30%;
  height: 3vh;
  color: ${colors.darkBackground};
  border: 2px solid ${colors.orange};
  border-radius: 5px;
  transition: 700ms;
  opacity: 0;
  font-size: 1.2vmin;
  &:hover {
    color: ${colors.blue};
    background-color: ${colors.darkBackground};
  }
`;
