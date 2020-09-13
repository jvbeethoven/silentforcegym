import React from 'react';
import IO from 'components/io';
import { Container, UrenSubtitle, Title, UrenContainer } from './io-example.css';

// <IO> uses a render prop to pass down `isVisible` and `hasBeenVisible`.
// In this example, we only care about `isVisible` and reset the styles
// every time we scroll back up. Use `hasBeenVisible` to keep the styles
// after scrolling back up and down again.
const IOExample = () => (
  <IO rootMargin="-50px">
    {({ isVisible }) => (
      <Container isVisible={isVisible} className="uren">
        <Title tag="span" >Trainingsuren</Title>
        <UrenContainer>
          <UrenSubtitle>Kinderen (6-12 jaar)</UrenSubtitle>
          <p>Maandag: 18u30-19u30</p>
          <p>Donderdag: 17u30-18u30</p>
          <p>Zaterdag: 16u-17u</p>
        </UrenContainer>
        <UrenContainer>
          <UrenSubtitle>Volwassenen (13-60 jaar)</UrenSubtitle>
          <p>Maandag: 19u30-20u30</p>
          <p>Donderdag: 18u30-20u00</p>
          <p>Zaterdag: 17u30-19u</p>
        </UrenContainer>
      </Container>
    )}
  </IO>
);

export default IOExample;
