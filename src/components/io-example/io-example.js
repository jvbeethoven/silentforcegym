import React from 'react';
import IO from 'components/io';
import Title from 'components/title';
import { Container } from './io-example.css';

// <IO> uses a render prop to pass down `isVisible` and `hasBeenVisible`.
// In this example, we only care about `isVisible` and reset the styles
// every time we scroll back up. Use `hasBeenVisible` to keep the styles
// after scrolling back up and down again.
const IOExample = () => (
  <IO rootMargin="-50px">
    {({ isVisible }) => (
      <Container isVisible={isVisible}>
        <Title tag="span">Trainingsuren</Title>
        <h3>Kinderen (6-12 jaar)</h3>
        <p>Maaandag: 18u30-19u30</p>
        <p>Donderdag: 17u30-18u30</p>
        <p>Zaterdag: 16u-17u</p>
        <h3>Volwassenen (13-60 jaar)</h3>
        <p>Maaandag: 19u30-20u30</p>
        <p>Donderdag: 18u30-20u00</p>
        <p>Zaterdag: 17u30-19u</p>
      </Container>
    )}
  </IO>
);

export default IOExample;
