import React, { useLayoutEffect, useState, useRef, useEffect } from "react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import { useTransition, animated } from "react-spring";
// @ts-ignore
import PurplePainting from "../../assets/purple.jpg";
// @ts-ignore
import BluePainting from "../../assets/pink.jpg";
// @ts-ignore
import GreenPainting from "../../assets/green.jpg";
// @ts-ignore
import OrangePainting from "../../assets/orange.jpg";
import { ColorCont, ImgCont, TextCont } from "./LandingStyles";
import { colors } from "../../global/styles/color";
import { useDispatch, useSelector } from "react-redux";
import { onClickedStateChange } from "../../app/store/landing";

const MenuItem = ({ color }) => {
  const [delay, setDelay] = useState(0);
  const [previousPage, setPreviousPage] = useState("");
  const [menuObj, setMenuObj] = useState({
    img: null,
    color: "",
    defaultPos: { top: "", left: "" },
    text: "",
    menu: {
      blue: { x: "", y: "" },
      green: { x: "", y: "" },
      purple: { x: "", y: "" },
      orange: { x: "", y: "" },
    },
  });

  // @ts-ignore
  const currentlyClicked = useSelector((state) => state.landing.value);
  const dispatch = useDispatch();

  gsap.registerPlugin(CustomEase);

  const customEase = CustomEase.create(
    "custom",
    "M0,0 C0.266,0.412 0.655,0.307 0.784,0.428 0.828,0.469 0.78,1 1,1 "
  );

  const contRef = useRef(null);
  const imgRef = useRef(null);
  const textContRef = useRef(null);

  const textTransition = useTransition(!currentlyClicked, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const onEnter = () =>
    gsap.to(textContRef.current, {
      height: "100%",
      ease: customEase,
    });
  const onLeave = () =>
    !currentlyClicked && gsap.to(textContRef.current, { height: "4%" });

  const tl = gsap.timeline();
  const tl1 = gsap.timeline();
  const tl2 = gsap.timeline();

  useEffect(() => {
    !!previousPage ? setDelay(1.1) : setDelay(0);
    if (!!contRef.current && !!imgRef.current && !!textContRef.current) {
      if (currentlyClicked === color && color !== "purple") {
        tl.set(imgRef.current, { outlineWidth: "0px", pointerEvents: "none" })
          .to(textContRef.current, {
            delay: delay,
            width: "100%",
            height: "100%",
            ease: customEase,
          })
          .to(contRef.current, {
            width: "83vw",
            height: "85vh",
            top: "8vh",
            left: "9vw",
            zIndex: 19,
          })
          .set(imgRef.current, { display: "hidden" });
        tl.play();
      }
      if (
        (currentlyClicked && currentlyClicked !== color) ||
        (currentlyClicked && color === "purple")
      ) {
        gsap.to(textContRef.current, {
          delay: delay,
          width: "100%",
          height: "100%",
          ease: customEase,
        });
        tl1
          .set(imgRef.current, { outlineWidth: "0px" })
          .to(imgRef.current, { delay: delay, opacity: 0 })
          .to(contRef.current, {
            width: "2vh",
            height: "2vh",
            top: menuObj.menu[currentlyClicked].y,
            left: menuObj.menu[currentlyClicked].x,
            zIndex: 30,
          })
          .set(imgRef.current, { display: "hidden", pointerEvents: "none" })
          .set(contRef.current, { zIndex: 1500 });
        tl1.play();
      }
      if (!currentlyClicked) {
        tl2
          .to(contRef.current, {
            delay: delay,
            width: "40vw",
            height: "40vh",
            top: menuObj.defaultPos.top,
            left: menuObj.defaultPos.left,
          })
          .set(imgRef.current, {
            display: "visible",
            pointerEvents: "all",
            opacity: 1,
          })
          .set(imgRef.current, { outlineWidth: "4px" })
          .to(textContRef.current, { width: "25%", ease: customEase })
          .to(textContRef.current, { height: "4%", ease: customEase })
          .set(contRef.current, { zIndex: 1 });

        tl2.play();
      }
      if (previousPage !== currentlyClicked) {
        setTimeout(() => setPreviousPage(currentlyClicked), 800);
      }
    }
  }, [currentlyClicked, color, previousPage]);

  useLayoutEffect(() => {
    switch (color) {
      case "blue":
        setMenuObj({
          img: BluePainting,
          color: colors.blue,
          defaultPos: { top: "8vh", left: "9vw" },
          text: "Selected Works",
          menu: {
            blue: { x: "", y: "" },
            green: { x: "6vw", y: "4vh" },
            purple: { x: "94vw", y: "4vh" },
            orange: { x: "6vw", y: "90vh" },
          },
        });
        break;
      case "green":
        setMenuObj({
          img: GreenPainting,
          color: colors.green,
          defaultPos: { top: "53vh", left: "52vw" },
          text: "About",
          menu: {
            blue: { x: "94vw", y: "96vh" },
            green: { x: "", y: "" },
            purple: { x: "94vw", y: "7vh" },
            orange: { x: "6vw", y: "96vh" },
          },
        });
        break;
      case "purple":
        setMenuObj({
          img: PurplePainting,
          color: colors.purple,
          defaultPos: { top: "53vh", left: "9vw" },
          text: "Store",
          menu: {
            blue: { x: "94vw", y: "93vh" },
            green: { x: "6vw", y: "7vh" },
            purple: { x: "94vw", y: "13vh" },
            orange: { x: "6vw", y: "93vh" },
          },
        });
        break;
      case "orange":
        setMenuObj({
          img: OrangePainting,
          color: colors.orange,
          defaultPos: { top: "8vh", left: "52vw" },
          text: "Contact me",
          menu: {
            blue: { x: "94vw", y: "90vh" },
            green: { x: "6vw", y: "10vh" },
            purple: { x: "94vw", y: "10vh" },
            orange: { x: "", y: "" },
          },
        });
        break;
    }
  }, [color]);

  if (menuObj?.img)
    return (
      <div
        ref={contRef}
        className={color}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        onClick={(e) => {
          setPreviousPage(currentlyClicked);
          dispatch(onClickedStateChange(color));
        }}
        // @ts-ignore
        style={{
          overflow: "hidden",
          ...ColorCont,
          ...menuObj.defaultPos,
        }}
      >
        <img
          ref={imgRef}
          src={menuObj.img}
          // @ts-ignore
          style={{
            ...ImgCont,
            ...menuObj.defaultPos,
            outline: `4px solid ${menuObj.color}`,
          }}
        />
        <div
          ref={textContRef}
          // @ts-ignore
          style={{
            ...TextCont,
            backgroundColor: menuObj.color,
          }}
        >
          {textTransition((style, item) =>
            item ? (
              <animated.span style={style}>{menuObj.text}</animated.span>
            ) : (
              ""
            )
          )}
        </div>
      </div>
    );
  return null;
};

export default MenuItem;
