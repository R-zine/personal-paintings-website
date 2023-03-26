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
} from "./Contact.styles";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { colors } from "../global/styles/color";
import dA from "./icons/da.svg";
import twitter from "./icons/twitter.svg";
import pinterest from "./icons/pint.svg";
import insta from "./icons/insta.svg";
import reddit from "./icons/reddit.svg";

export const Contact = () => {
  const titleRef = useRef(null);
  const innerContRef = useRef(null);
  const socialsRef = useRef(null);
  const contactFormRef = useRef(null);

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
            }}
          >
            Find me on social media:
          </div>
          <SocialLink className="button">
            <IconButton>
              <img src={dA} />
            </IconButton>
            <span>deviantArt</span>
          </SocialLink>
          <SocialLink className="button">
            <IconButton>
              <img src={twitter} />
            </IconButton>
            <span>twitter</span>
          </SocialLink>
          <SocialLink className="button">
            <IconButton>
              <img src={insta} />
            </IconButton>
            <span>instagram</span>
          </SocialLink>
          <SocialLink className="button">
            <IconButton>
              <img src={pinterest} />
            </IconButton>
            <span>pinterest</span>
          </SocialLink>
          <SocialLink className="button">
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
            }}
          >
            Or leave me a message:
          </div>
          <Input placeholder="Email" color={colors.blue} />
          <Input placeholder="Name" color={colors.purple} />
          <Input placeholder="Subject" color={colors.green} />
          <Textarea placeholder="Message" color={colors.orange} />
        </ContactForm>
      </InnerContainer>
    </Container>
  );
};
