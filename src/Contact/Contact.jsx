import {
  Container,
  InnerContainer,
  Title,
  SocialsContainer,
  ContactForm,
  IconButton,
  SocialLink,
  Input,
  Textarea,
  SendButton,
} from "./Contact.styles";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { colors } from "../global/styles/color";
import dA from "./icons/da.svg";
import twitter from "./icons/twitter.svg";
import pinterest from "./icons/pint.svg";
import insta from "./icons/insta.svg";
import reddit from "./icons/reddit.svg";
import emailjs from "@emailjs/browser";

emailjs.init("D0ctY-SwJYajvmMel");

export const Contact = () => {
  const [buttonText, setButtonText] = useState("Send");

  const titleRef = useRef(null);
  const innerContRef = useRef(null);
  const socialsRef = useRef(null);
  const contactFormRef = useRef(null);

  const emailRef = useRef(null);
  const subjectRef = useRef(null);
  const nameRef = useRef(null);
  const bodyRef = useRef(null);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleFormSend = () => {
    if (buttonText !== "Send") return;
    if (
      subjectRef.current.value &&
      nameRef.current.value &&
      validateEmail(emailRef.current.value) &&
      bodyRef.current.value
    ) {
      emailjs
        .send("service_0lnz0ab", "template_dw76dor", {
          subject: subjectRef.current.value,
          name: nameRef.current.value,
          email: emailRef.current.value,
          message: bodyRef.current.value,
        })
        .then(
          function (response) {
            setButtonText("Message sent!");
          },
          function (error) {
            setButtonText("Sending failed");
          }
        );
    } else {
      setButtonText("All fields are required");
    }
  };

  useEffect(() => {
    if (buttonText !== "Send" && buttonText !== "Message sent!")
      setTimeout(() => setButtonText("Send"), 5000);
  }, [buttonText]);

  const entryTl = gsap.timeline();

  useEffect(() => {
    entryTl
      .to(titleRef.current, { delay: 0.5, opacity: 1, duration: 0.7 })
      .to(innerContRef.current, { opacity: 1 })
      .to(socialsRef.current.children, { opacity: 1, stagger: 0.3 })
      .to(contactFormRef.current.children, {
        delay: 0.2,
        opacity: 1,
        stagger: 0.3,
      });
  }, []);

  const handleSocialButtonClick = (url) => window.open(url, "_blank");

  return (
    <Container>
      <Title ref={titleRef}>Contact me</Title>
      <InnerContainer ref={innerContRef}>
        <SocialsContainer ref={socialsRef}>
          <div
            style={{
              width: "30%",
              padding: 20,
              border: `1px solid ${colors.orange}`,
              textAlign: "center",
              borderRadius: 5,
              marginBottom: "2%",
              opacity: 0,
              fontSize: "1.5vmin",
            }}
          >
            Find me on social media:
          </div>
          <SocialLink
            className="button"
            onClick={() =>
              handleSocialButtonClick("https://www.deviantart.com/ivanradev")
            }
          >
            <IconButton>
              <img src={dA} />
            </IconButton>
            <span>deviantArt</span>
          </SocialLink>
          <SocialLink
            className="button"
            onClick={() =>
              handleSocialButtonClick("https://twitter.com/IvanMusings")
            }
          >
            <IconButton>
              <img src={twitter} />
            </IconButton>
            <span>twitter</span>
          </SocialLink>
          <SocialLink
            className="button"
            onClick={() =>
              handleSocialButtonClick("https://www.instagram.com/radev2559/")
            }
          >
            <IconButton>
              <img src={insta} />
            </IconButton>
            <span>instagram</span>
          </SocialLink>
          <SocialLink
            className="button"
            onClick={() =>
              handleSocialButtonClick("https://www.pinterest.com/ivanradev/")
            }
          >
            <IconButton>
              <img src={pinterest} />
            </IconButton>
            <span>pinterest</span>
          </SocialLink>
          <SocialLink
            className="button"
            onClick={() =>
              handleSocialButtonClick(
                "https://www.reddit.com/user/IvanRadevHorror"
              )
            }
          >
            <IconButton>
              <img src={reddit} />
            </IconButton>
            <span>reddit</span>
          </SocialLink>
        </SocialsContainer>
        <div
          style={{
            width: "0.3vw",
            height: "90%",
            backgroundColor: colors.orange,
          }}
        />
        <ContactForm ref={contactFormRef}>
          <div
            style={{
              width: "30%",
              padding: 20,
              color: colors.darkBackground,
              textAlign: "center",
              borderRadius: 5,
              marginBottom: "2%",
              backgroundColor: colors.orange,
              fontWeight: 700,
              opacity: 0,
              fontSize: "1.5vmin",
            }}
          >
            Or leave me a message:
          </div>
          <Input placeholder="Email" color={colors.blue} ref={emailRef} />
          <Input placeholder="Name" color={colors.purple} ref={nameRef} />
          <Input placeholder="Subject" color={colors.green} ref={subjectRef} />
          <Textarea placeholder="Message" color={colors.orange} ref={bodyRef} />
          <SendButton className="button" onClick={() => handleFormSend()}>
            {buttonText}
          </SendButton>
        </ContactForm>
      </InnerContainer>
    </Container>
  );
};
