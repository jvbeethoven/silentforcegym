import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/about">Foto&apos;s</Link>
      </li>
      <li>
        <a href="https://www.facebook.com/Silent-Force-Gym-396523934476726/" target="_blank" rel="noreferrer">Facebook</a>
      </li>
      <li>
        <a href="https://www.instagram.com/silentforce_gym/" target="_blank" rel="noreferrer">Instagram</a>
      </li>
    </ul>
  </Container>
);

export default Nav;
