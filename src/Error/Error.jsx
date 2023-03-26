import styled from "@emotion/styled";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header";
import { Logo } from "../Header/Header.styles";
import { colors } from "../global/styles/color";

const ErrorContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 10vh;
  top: 45vh;
  left: 0;
  color: white;
  font-size: 2vh;
  text-align: center;
  text-shadow: 2px 2px 4px #afafaf55;
`;

const LinkContainer = styled.div`
  font-size: 1.5vh;
  margin-top: 3vh;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 1vw;
  transition: 300ms;
  &:hover {
    gap: 2vw;
  }
`;

export const Error = () => {
  return (
    <>
      <Header />
      <ErrorContainer>
        There was an error accessing this page.
        <LinkContainer>
          <Logo
            className="logo"
            onClick={() => dispatch(onClickedStateChange(""))}
          >
            {Object.keys(colors).map((c, i) =>
              i !== 0 ? (
                <div
                  key={i}
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: colors[c],
                  }}
                />
              ) : null
            )}
          </Logo>
          <span className="link">Back to Home</span>
        </LinkContainer>
      </ErrorContainer>

      <Footer />
    </>
  );
};
