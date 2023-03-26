import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { chooseLeftColors, chooseRightColors, Paintings } from "./utils";
import {
  Container,
  InnerContainer,
  PaintingContainer,
  Title,
  Button,
  Details,
} from "./SelectedWork.styles";

export const SelectedWork = () => {
  const [count, setCount] = useState(0);
  const [helperCount, setHelperCount] = useState(0);
  const [currentDirection, setCurrentDirection] = useState(1);
  const [isInitial, setIsInitial] = useState(true);
  const [isActive, setIsActive] = useState(true);

  const titleRef = useRef(null);
  const innerContRef = useRef(null);
  const currentImg = useRef(null);
  const leftImg = useRef(null);
  const rightImg = useRef(null);
  const detailsRef = useRef(null);

  console.log(innerContRef);

  const handleClick = (direction) => {
    if (direction !== currentDirection) setCurrentDirection(direction);
    if (count === 0 && direction === -1) {
      setHelperCount(Paintings.length - 1);
    } else if (count === Paintings.length - 1 && direction === 1) {
      setHelperCount(0);
    } else setHelperCount((prev) => prev + direction);
  };

  const chooseLeftImgIndex = () =>
    count === 0 ? Paintings.length - 1 : count - 1;

  const chooseRightImgIndex = () =>
    count === Paintings.length - 1 ? 0 : count + 1;

  useEffect(() => {
    setTimeout(() => setIsInitial(false), 1000);
  }, []);

  useEffect(() => {
    const entryTl = gsap.timeline();
    entryTl
      .to(titleRef.current, { opacity: 1 })
      .to(innerContRef.current, { opacity: 1, duration: 1, ease: "power3" })
      .to(innerContRef.current.children, {
        opacity: 1,
        stagger: 0.4,
        ease: "power3",
      })
      .to(detailsRef.current.children, {
        opacity: 1,
        stagger: 0.4,
        ease: "power3",
      });
    entryTl.pause();
    if (!isInitial) {
      entryTl.play();
    }
  }, [isInitial]);

  const tl = gsap.timeline();

  useEffect(() => {
    if (currentDirection === -1 && !isInitial) {
      setIsActive(false);
      gsap.to(leftImg.current, {
        opacity: 1,
        transform: "translateX(100%)",
        duration: 0.7,
      });
      gsap.to(currentImg.current, {
        opacity: 0,
        transform: "translateX(100%)",
        duration: 0.7,
      });

      setTimeout(() => {
        gsap.set(leftImg.current, {
          opacity: 0,
          transform: "translateX(-100%)",
        });
        gsap.set(currentImg.current, {
          opacity: 1,
          transform: "translateX(0)",
          duration: 0,
        });
        setIsActive(true);
        if (helperCount <= Paintings.length - 1 && helperCount >= 0)
          setCount(helperCount);
      }, 750);
    } else if (!isInitial) {
      setIsActive(false);
      gsap.to(rightImg.current, {
        opacity: 1,
        transform: "translateX(-100%)",
        duration: 0.7,
      });
      gsap.to(currentImg.current, {
        opacity: 0,
        transform: "translateX(-100%)",
        duration: 0.7,
      });

      setTimeout(() => {
        gsap.set(rightImg.current, {
          opacity: 0,
          transform: "translateX(100%)",
        });
        gsap.set(currentImg.current, {
          opacity: 1,
          transform: "translateX(0)",
          duration: 0,
        });
        setIsActive(true);
        if (helperCount <= Paintings.length - 1 && helperCount >= 0)
          setCount(helperCount);
      }, 750);
    }
    if (!isInitial) {
      tl.to(detailsRef.current, { opacity: 0, duration: 0.7 }).to(
        detailsRef.current,
        { opacity: 1, duration: 0.7 }
      );
    }
  }, [helperCount]);

  return (
    <Container>
      <Title ref={titleRef}>Selected Works</Title>
      <InnerContainer ref={innerContRef}>
        <Button
          className="button"
          left
          onClick={() => isActive && handleClick(1)}
        >
          {Array(8)
            .fill("")
            .map((e, i) => (
              <div
                key={i * Math.random()}
                style={{ backgroundColor: chooseLeftColors(i) }}
              />
            ))}
        </Button>
        <PaintingContainer>
          <img
            ref={leftImg}
            src={Paintings[chooseLeftImgIndex()].url}
            style={{
              minWidth: "81vw",
              height: "100%",
              objectFit: "contain",
              transform: "translateX(-100%)",
              opacity: 0,
            }}
          />
          <img
            ref={currentImg}
            src={Paintings[count].url}
            style={{
              minWidth: "81vw",
              height: "100%",
              objectFit: "contain",
            }}
          />
          <img
            ref={rightImg}
            src={Paintings[chooseRightImgIndex()].url}
            style={{
              minWidth: "81vw",
              height: "100%",
              objectFit: "contain",
              transform: "translateX(100%)",
              opacity: 0,
            }}
          />
        </PaintingContainer>
        <Button onClick={() => isActive && handleClick(-1)}>
          {Array(8)
            .fill("")
            .map((e, i) => (
              <div
                key={i * Math.random()}
                style={{ backgroundColor: chooseRightColors(i) }}
              />
            ))}
        </Button>
      </InnerContainer>
      <Details ref={detailsRef}>
        <div>{Paintings[count].name}</div>
        <div>
          {Paintings[count].tech}, {Paintings[count].year}
        </div>
      </Details>
    </Container>
  );
};
