import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

export const NavbarApp = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Inicio</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="search">Predicción</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
