import React from 'react';
import { Container, Button, Row } from 'react-bootstrap';

export const About = () => {
  const go = () => console.log('/search');

  return (
    <Container>
      <Row>About</Row>
      <Row>
        <Button variant="primary" onClick={go}>
          Comenzar
        </Button>
      </Row>
    </Container>
  );
};
