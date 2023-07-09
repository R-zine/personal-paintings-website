import { Container, SquareContainer, Text } from "./Loader.styles";
import { colors } from "../global/styles/color";
import gsap from "gsap";
import { useRef, useEffect } from "react";

export const Loader = ({ isReady }) => {
  const contRef = useRef(null);
  const ref = useRef(null);

  const loadingTL = gsap.timeline();
  const transitionTL = gsap.timeline();

  useEffect(() => {
    if (ref && !isReady)
      loadingTL
        .to(ref.current.children[0], { filter: "grayscale(0%)" })
        .to(ref.current.children[3], { filter: "grayscale(100%)" })
        .to(ref.current.children[1], { filter: "grayscale(0%)" })
        .to(ref.current.children[0], { filter: "grayscale(100%)" })
        .to(ref.current.children[2], { filter: "grayscale(0%)" })
        .to(ref.current.children[1], { filter: "grayscale(100%)" })
        .to(ref.current.children[3], { filter: "grayscale(0%)" })
        .to(ref.current.children[2], { filter: "grayscale(100%)" })
        .play()
        .repeat(Infinity);

    if (ref && isReady) {
      transitionTL
        .to(ref.current.children, {
          filter: "grayscale(0)",
          duration: 1,
        })
        .to(contRef.current, { opacity: 0, duration: 1, ease: "power4.out" })
        .set(contRef.current, { display: "none" });
    }

    return () => loadingTL.pause();
  }, [isReady, ref]);

  return (
    <Container ref={contRef}>
      <Text>Loading...</Text>
      <SquareContainer ref={ref}>
        {Object.keys(colors).map(
          (c, i) =>
            i !== 0 && (
              <div key={"loader" + c} style={{ background: colors[c] }} />
            )
        )}
      </SquareContainer>
    </Container>
  );
};
