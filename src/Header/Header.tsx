// @ts-nocheck
import React, { useState } from "react";
import {
  Badge,
  Cart,
  CartContainer,
  CartImg,
  CartItem,
  CartText,
  CartTitle,
  CloseButton,
  Curtain,
  HeaderContainer,
  ItemsContainer,
  Logo,
  PrimaryText,
  SecondaryText,
  MoreDetailsButton,
  RemoveButton,
  FinishOrderButton,
  MoreDetailsContainer,
  DetailsImage,
  FinishOrderDiv,
  Input,
  SendButton,
  CloseButtonText,
} from "./Header.styles";
import { colors } from "../global/styles/color";
import { useDispatch, useSelector } from "react-redux";
import { onClickedStateChange } from "../app/store/landing";
import { useTransition, animated } from "react-spring";
import { onCartChange } from "../app/store/cart";

interface IMoreDetails {
  description: string;
  id: number | string;
  price: number | string;
  size: string;
  title: string;
  technique: string;
  image: string;
}

export const Header = () => {
  const [isCart, setIsCart] = useState(false);
  const [moreDetails, setMoreDetails] = useState<IMoreDetails | null>(null);
  const [isFinish, setIsFinish] = useState(false);

  const dispatch = useDispatch();

  // @ts-ignore
  const cart = useSelector((state) => state.cart.value);

  const cartTransition = useTransition(isCart, {
    from: { opacity: 0, zIndex: 1300, position: "fixed" },
    enter: { opacity: 1, zIndex: 1300, position: "fixed" },
    leave: { opacity: 0, zIndex: 1300, position: "fixed" },
    config: {
      duration: 800,
    },
  });

  const finishOrderTransition = useTransition(isFinish, {
    from: { opacity: 0, zIndex: 1400, position: "fixed" },
    enter: { opacity: 1, zIndex: 1400, position: "fixed" },
    leave: { opacity: 0, zIndex: 1400, position: "fixed" },
    config: {
      duration: 800,
    },
  });

  const handleRemoveItem = (id) => {
    let tempCart = cart.filter((i) => i.id !== id);
    dispatch(onCartChange(tempCart));
  };

  return (
    <>
      <HeaderContainer>
        <Logo
          className="logo"
          onClick={() => {
            dispatch(onClickedStateChange(""));
          }}
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
        <div>Ivan Radev - Traditional Painter</div>
        {cart.length > 0 && (
          <Cart className="button" onClick={() => setIsCart(true)}>
            <Badge>{cart.length}</Badge>
          </Cart>
        )}
      </HeaderContainer>
      {!!moreDetails && (
        <>
          <CloseButton className="button" onClick={() => setMoreDetails(null)}>
            X
          </CloseButton>
          <MoreDetailsContainer>
            <DetailsImage src={moreDetails.image} />
            <div style={{ textAlign: "center" }}>
              <SecondaryText>Description:</SecondaryText>
              <PrimaryText>{moreDetails.description}</PrimaryText>
            </div>
          </MoreDetailsContainer>
        </>
      )}
      {cartTransition((style, item) =>
        item ? (
          // @ts-ignore
          <animated.div style={style}>
            <Curtain
              onClick={() => {
                setIsCart(false);
                setMoreDetails(null);
                setIsFinish(false);
              }}
            />
            <CartContainer>
              <CloseButton className="button" onClick={() => setIsCart(false)}>
                X
              </CloseButton>
              <CartTitle>Your Cart:</CartTitle>
              {cart.length > 0 ? (
                <ItemsContainer>
                  {cart.map((item) => (
                    <CartItem>
                      <CartImg src={item.image} />
                      <CartText>
                        <SecondaryText>Title:</SecondaryText>
                        <PrimaryText>{item.title}</PrimaryText>
                      </CartText>
                      <CartText>
                        <SecondaryText>Technique:</SecondaryText>
                        <PrimaryText>{item.technique}</PrimaryText>
                      </CartText>
                      <CartText>
                        <SecondaryText>Size:</SecondaryText>
                        <PrimaryText>{item.size}</PrimaryText>
                      </CartText>
                      <CartText>
                        <SecondaryText>Price:</SecondaryText>
                        <PrimaryText>${item.price}</PrimaryText>
                      </CartText>
                      <MoreDetailsButton
                        className="button"
                        onClick={() =>
                          setMoreDetails({
                            id: item.id,
                            image: item.image,
                            title: item.title,
                            technique: item.technique,
                            size: item.size,
                            price: item.price,
                            description: item.description,
                          })
                        }
                      >
                        More Details
                      </MoreDetailsButton>
                      <RemoveButton
                        className="button"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        Remove Item
                      </RemoveButton>
                    </CartItem>
                  ))}
                </ItemsContainer>
              ) : (
                <SecondaryText>Your cart is empty.</SecondaryText>
              )}
              {cart.length > 0 ? (
                <FinishOrderButton
                  className="button"
                  onClick={() => setIsFinish(true)}
                >
                  Finish Order
                </FinishOrderButton>
              ) : null}
            </CartContainer>
          </animated.div>
        ) : (
          ""
        )
      )}
      {finishOrderTransition((style, item) =>
        item ? (
          <animated.div style={style}>
            <CartContainer>
              <PrimaryText>
                Thank you for your interest in my paintings! Due to the high
                variance in shipping cost depending on your location and the
                different paintings' sizes, I'd like to have a short chat with
                you to discuss the best way for you to purchase and receice your
                order.
              </PrimaryText>
              <FinishOrderDiv>
                <SecondaryText>Option 1:</SecondaryText>
                <PrimaryText>
                  Entering your contact email in the field below will forward
                  all the details of your order to me, and I will be contacting
                  you shortly.
                </PrimaryText>
                <Input placeholder="Email"></Input>
                <SendButton className="button">Send</SendButton>
              </FinishOrderDiv>

              <FinishOrderDiv>
                <SecondaryText>Option 2:</SecondaryText>
                <PrimaryText>
                  Feel free to message me at ivanrdv@gmail.com or through the
                  contact form on this site, including the IDs of the paintings
                  you want to purchase.
                </PrimaryText>
                <PrimaryText>
                  {cart.length > 1
                    ? `IDs: ${cart.map((item) => " " + item.id)}`
                    : `ID: ${cart[0].id}`}
                </PrimaryText>
              </FinishOrderDiv>
              <CloseButtonText
                className="button"
                onClick={() => setIsFinish(false)}
              >
                X Close
              </CloseButtonText>
            </CartContainer>
          </animated.div>
        ) : (
          ""
        )
      )}
    </>
  );
};
