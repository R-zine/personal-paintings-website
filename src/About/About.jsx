import { useRef } from "react";
import gsap from "gsap";
import TypewriterComponent from "typewriter-effect";
import {
  ColorImg,
  Container,
  GrayScaleImg,
  InnerContainer,
  PhotoContainer,
  Title,
} from "./About.styles";
import photo from "./assets/2.jpg";

export const About = () => {
  const photoRef = useRef(null);

  const tl = gsap.timeline();

  const handleMouseEnter = (e) => {
    const top =
      100 -
      Math.round(
        (100 * (e.clientY - photoRef.current.offsetTop)) /
          photoRef.current.height
      );

    const top2 = 100 - top - 10 >= 0 ? 100 - top - 10 : 0;

    const direction =
      e.clientX < photoRef.current.offsetLeft + photoRef.current.width / 2;

    tl.set(photoRef.current, {
      clipPath: `inset(${top2}% ${direction ? 100 : 0}% ${top}%  ${
        direction ? 0 : 100
      }%)`,
    })
      .to(photoRef.current, {
        clipPath: `inset(${top2}% 0% ${top}% 0%)`,
        duration: 0.6,
      })
      .to(photoRef.current, {
        clipPath: `inset(0% 0% 0% 0%)`,
      });
  };

  return (
    <Container>
      <Title>About me</Title>
      <InnerContainer>
        <PhotoContainer
          onMouseEnter={(e) => handleMouseEnter(e)}
          onMouseLeave={() =>
            gsap.to(photoRef.current, {
              clipPath: "inset(0% 0% 0% 100%)",
              duration: 1,
            })
          }
        >
          <GrayScaleImg src={photo} />
          <ColorImg ref={photoRef} src={photo} />
        </PhotoContainer>

        <TypewriterComponent
          options={{
            autoStart: true,
            delay: 0.05,
          }}
          onInit={(tw) =>
            tw
              .typeString(
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error nulla assumenda aliquam sequi necessitatibus asperiores labore reiciendis dolorum ipsam. Ab?"
              )
              .pause()
              .typeString(
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error nulla assumenda aliquam sequi necessitatibus asperiores labore reiciendis dolorum ipsam. Ab?"
              )
              .start()
          }
        />
      </InnerContainer>
    </Container>
  );
};
