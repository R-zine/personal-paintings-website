import styled from "@emotion/styled";

const FooterContainer = styled.footer`
  position: fixed;
  top: 97.5vh;
  min-width: 40vw;
  left: 30vw;
  color: white;
  text-align: center;
  font-weight: 200;
  font-size: 0.7vw;
  &:before {
    content: "";
    width: 40vw;
    height: 2px;
    background-color: white;
    position: fixed;
    top: 97vh;
    border-radius: 4px;
    left: 30vw;
  }
`;

export const Footer = () => {
  return (
    <FooterContainer>
      Copyright &copy; {new Date().getFullYear()} Ivan Radev. All Rights
      Reserved.
    </FooterContainer>
  );
};
