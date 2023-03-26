import { useState } from "react";
import { useTransition, animated } from "react-spring";
import { useSelector } from "react-redux";
import "./App.css";
import { colors } from "./global/styles/color";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/";
import { Landing } from "./Landing/";
import { SelectedWork } from "./SelectedWork/SelectedWork";
import { Contact } from "./Contact";
import { About } from "./About";
import { Store } from "./Store/";

const followSize = 2;

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState(150);

  const currentPage = useSelector((state) => state.landing.value);

  const selectedTransition = useTransition(currentPage === "blue", {
    from: { opacity: 1, zIndex: 30, position: "fixed" },
    enter: { opacity: 1, zIndex: 30, position: "fixed" },
    leave: { opacity: 0, zIndex: 30, position: "fixed" },
    config: {
      duration: 800,
    },
  });

  const contactTransition = useTransition(currentPage === "orange", {
    from: { opacity: 1, zIndex: 30, position: "fixed" },
    enter: { opacity: 1, zIndex: 30, position: "fixed" },
    leave: { opacity: 0, zIndex: 30, position: "fixed" },
    config: {
      duration: 800,
    },
  });

  const aboutTransition = useTransition(currentPage === "green", {
    from: { opacity: 1, zIndex: 30, position: "fixed" },
    enter: { opacity: 1, zIndex: 30, position: "fixed" },
    leave: { opacity: 0, zIndex: 30, position: "fixed" },
    config: {
      duration: 800,
    },
  });

  const storeTransition = useTransition(currentPage === "purple", {
    from: { opacity: 1, zIndex: 30, position: "fixed" },
    enter: { opacity: 1, zIndex: 30, position: "fixed" },
    leave: { opacity: 0, zIndex: 30, position: "fixed" },
    config: {
      duration: 800,
    },
  });

  return (
    <div
      onMouseMove={(e) =>
        setMousePos({
          y: e.nativeEvent.clientX,
          x: e.nativeEvent.clientY,
        })
      }
      onMouseDown={() => setOffset(1000)}
      onMouseUp={() => setOffset(150)}
    >
      {Object.keys(colors).map((color, i) => (
        <div
          key={i}
          style={{
            position: "fixed",
            top: mousePos.x + (Math.random() - 0.5) * offset,
            left: mousePos.y + (Math.random() - 0.5) * offset,
            backgroundColor: colors[color],
            border: `2px solid ${colors.darkBackground}`,
            width: `${followSize}vh`,
            height: `${followSize}vh`,
            zIndex: 25,
            transition: "top 150ms, left 150ms",
            pointerEvents: "none",
          }}
        />
      ))}

      <Header />
      <Landing />
      {selectedTransition((style, item) =>
        item ? (
          <animated.div style={style}>
            <SelectedWork />
          </animated.div>
        ) : (
          ""
        )
      )}
      {contactTransition((style, item) =>
        item ? (
          <animated.div style={style}>
            <Contact />
          </animated.div>
        ) : (
          ""
        )
      )}
      {aboutTransition((style, item) =>
        item ? (
          <animated.div style={style}>
            <About />
          </animated.div>
        ) : (
          ""
        )
      )}
      {storeTransition((style, item) =>
        item ? (
          <animated.div style={style}>
            <Store />
          </animated.div>
        ) : (
          ""
        )
      )}
      <Footer />
    </div>
  );
}

export default App;