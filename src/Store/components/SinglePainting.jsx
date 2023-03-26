import { useRef, useState, useEffect } from "react";
import {
  Container,
  Image,
  Header,
  StaticText,
  DynamicText,
  Info,
  DynamicContainer,
  Curtain,
  CloseButton,
} from "./SinglePainting.styles";
import gsap from "gsap";
import { useTransition, animated } from "react-spring";
import { useDispatch, useSelector } from "react-redux";
import { onCartChange } from "../../app/store/cart";

const SinglePainting = ({
  id,
  image,
  title,
  technique,
  year,
  size,
  price,
  description,
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isTransition, setIsTransition] = useState(false);
  const [currentPos, setCurrentPos] = useState({ left: 0, top: 0 });

  const dispatch = useDispatch();
  // @ts-ignore
  const cart = useSelector((state) => state.cart.value);

  const ref = useRef(null);
  const dynamicRef = useRef(null);

  const handleSmallClick = () => {
    const pos = ref.current.getBoundingClientRect();
    setCurrentPos({ left: pos.left, top: pos.top });
    setIsTransition(true);
    setIsClicked(true);
  };

  const handleClose = () => {
    gsap.to(dynamicRef.current, {
      left: currentPos.left,
      top: currentPos.top,
      width: 500,
      height: 600,
    });
    setTimeout(() => setIsTransition(false), 700);
    setTimeout(() => setIsClicked(false), 1500);
  };

  const handleAddCart = () => {
    if (cart.some((p) => p.id === id)) return;
    dispatch(
      onCartChange([
        ...cart,
        {
          id: id,
          image: image,
          title: title,
          technique: technique,
          year: year,
          size: size,
          price: price,
          description: description,
        },
      ])
    );
  };

  useEffect(() => {
    const tl = gsap.timeline();
    if (isClicked && dynamicRef.current)
      tl.set(dynamicRef.current, {
        left: currentPos.left,
        top: currentPos.top,
      }).to(dynamicRef.current, {
        delay: 0.5,
        left: "7.5vw",
        top: "7vh",
        width: "80vw",
        height: "80vh",
      });

    tl.play();
  }, [isClicked, dynamicRef]);

  const curtainTransition = useTransition(isTransition, {
    from: { opacity: 0, zIndex: 200, position: "fixed" },
    enter: { opacity: 1, zIndex: 200, position: "fixed" },
    leave: { opacity: 0, zIndex: 200, position: "fixed" },
    config: {
      duration: 600,
    },
  });
  const closeButtonTransition = useTransition(isTransition, {
    from: { opacity: 0, zIndex: 1100, position: "fixed" },
    enter: { opacity: 1, zIndex: 1100, position: "fixed" },
    leave: { opacity: 0, zIndex: 1100, position: "fixed" },
    config: {
      duration: 800,
    },
  });

  return (
    <>
      <Container className="button" ref={ref} onClick={handleSmallClick}>
        <Image src={image} />
        <Info>
          <Header>
            <StaticText>Title: </StaticText>
            <DynamicText>{title}</DynamicText>
          </Header>
          <Header>
            <StaticText>Technique: </StaticText>
            <DynamicText>{technique}</DynamicText>
          </Header>
          <Header>
            <StaticText>Year: </StaticText>
            <DynamicText>{year}</DynamicText>
          </Header>
          <Header>
            <StaticText>Size: </StaticText>
            <DynamicText>{!!size ? size : "N/A"}</DynamicText>
          </Header>
          <Header>
            <StaticText>Price: </StaticText>
            <DynamicText>{`$${price}`}</DynamicText>
          </Header>
        </Info>
      </Container>
      {curtainTransition((style, item) =>
        item ? (
          <animated.div style={style}>
            <Curtain />
          </animated.div>
        ) : (
          ""
        )
      )}
      {isClicked && (
        <>
          <DynamicContainer
            className="button"
            ref={dynamicRef}
            onClick={() => handleAddCart()}
          >
            <Image src={image} />

            <Info>
              <Header>
                <StaticText>Title: </StaticText>
                <DynamicText>{title}</DynamicText>
              </Header>
              <Header>
                <StaticText>Technique: </StaticText>
                <DynamicText>{technique}</DynamicText>
              </Header>
              <Header>
                <StaticText>Year: </StaticText>
                <DynamicText>{year}</DynamicText>
              </Header>
              <Header>
                <StaticText>Size: </StaticText>
                <DynamicText>{size}</DynamicText>
              </Header>
              <Header>
                <StaticText>Price: </StaticText>
                <DynamicText>{`$${price}`}</DynamicText>
              </Header>
            </Info>
          </DynamicContainer>

          {closeButtonTransition((style, item) =>
            item ? (
              <animated.div style={style}>
                <CloseButton className="button" onClick={() => handleClose()}>
                  X
                </CloseButton>
              </animated.div>
            ) : (
              ""
            )
          )}
        </>
      )}
    </>
  );
};

export default SinglePainting;
