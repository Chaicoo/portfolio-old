import React from 'react';
import { Link } from "react-router-dom";

import { Container } from './styles';

export const About: React.FC = () => {
  return (
    <Container>
        <h1>About page</h1>
        <Link to="/">Home</Link>
    </Container>
  );
}
