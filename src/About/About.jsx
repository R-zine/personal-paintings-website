import { useRef, useEffect } from "react";
import gsap from "gsap";
import TypewriterComponent from "typewriter-effect";
import {
  ColorImg,
  Container,
  OriginalImg,
  InnerContainer,
  PhotoContainer,
  Title,
} from "./About.styles";
import photo from "../assets/photo.jpg";
import photoAI from "../assets/photoAI.jpg";

export const About = () => {
  const photoRef = useRef(null);
  const titleRef = useRef(null);
  const innerContainerRef = useRef(null);

  const tl = gsap.timeline();
  const tl2 = gsap.timeline();

  useEffect(() => {
    tl2
      .to(titleRef.current, { opacity: 1, delay: 1 })
      .to(innerContainerRef.current, { opacity: 1, delay: 1 });
    tl2.play();
  }, []);

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
      <Title ref={titleRef}>About me</Title>
      <InnerContainer ref={innerContainerRef}>
        <PhotoContainer
          onMouseEnter={(e) => handleMouseEnter(e)}
          onMouseLeave={() =>
            gsap.to(photoRef.current, {
              clipPath: "inset(0% 0% 0% 100%)",
              duration: 1,
            })
          }
        >
          <OriginalImg src={photo} />
          <ColorImg ref={photoRef} src={photoAI} />
        </PhotoContainer>

        <TypewriterComponent
          options={{
            autoStart: true,
            delay: 0.1,
          }}
          onInit={(tw) =>
            tw
              .pauseFor(2000)
              .typeString(
                "I was born in 1990 in Sofia, Bulgaria. Ever since I was young I was obssessed with the arts. The first step on the long journey were the philosophical essays I wrote in high school, which were greatly inspired by the likes of Nietsche and Camus. My next infatuation was the piano, mostly playing romantic pieces in front of family and friends. I started painting when I was 19 and haven't stopped thereafter. <br><br><br><br>"
              )
              .pauseFor(2000)
              .typeString(
                "For the first few years I experimented with different techniques, though most of my work I did in oils. At some point, as I've always loved being around mountains, I moved to a small, hilly town where I've been living since. I discovered the beauty of acrylics here, since they are much more managable when painting in the great outdoors. This is especially true when you live in a place where it rains the majority of the year! <br><br><br><br>"
              )
              .pauseFor(2000)
              .typeString(
                "As for my favorite artists, I really admire the works of Van Gogh, Edward Munch, Georges Seurat, Claude Monet, as well as many other impressionists and post-impressionists. My taste in music is very ecclectic, everything from romantic piano music, of which most notably Chopin, through soul, prog-rock, and melodic metal. My favorite writer is Antoine de Saint-Exupéry. <br><br><br><br>"
              )
              .pauseFor(2000)
              .typeString(
                "If you have any questions, please don't hesitate to reach out to me through the options in the orange menu."
              )
              .start()
          }
        />
      </InnerContainer>
    </Container>
  );
};
