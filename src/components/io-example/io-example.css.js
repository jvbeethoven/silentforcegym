import styled from 'styled-components';
import { accent } from 'constants/theme';

export const Container = styled.div`
  border-radius: 10px;
  position: relative;
  text-align: center;
  color: #fff;
  transition: background-color 0.3s ease;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 4rem;
  padding: 4rem;
  margin: 4rem;
  align-self: center;

  background-color: ${({ isVisible }) => (isVisible ? accent : ' #757575')};
`;

export const Title = styled.h2`
  color: #fff;
  font-size: 2rem;
  padding: 2rem 0 1rem 0;
  font-weight: bold;
`;

export const UrenSubtitle = styled.h3`
  color: #fff;
  font-size: 1.8rem;
  padding: 2rem 0 2rem 0;
  font-weight: bold;
`;
