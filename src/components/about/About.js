import { breakStatement } from '@babel/types';
import React from 'react';
import { Container, Row, Alert } from 'react-bootstrap';
import './About.css';

export const About = () => {
  return (
    <Container className="card-about">
      <Row>
        <Alert variant="success">
          <Alert.Heading>Predice tu edad!!!</Alert.Heading>
          <p>
            Predice la edad de una persona con solo ingresando su nombre. Si quieres hacer la predicción de varias
            personas en simultaneo, ingresa cada uno de los nombres separados por el carácter ";". <br /> Además si
            quieres mejorar la predicción puedes indicar un país en específico, para la búsqueda.
            <br /> No lo pienses mas comienza{' '}
            <Alert.Link className="mb-0" href="search">
              ahora
            </Alert.Link>
          </p>
          <p>
            *La predicción se realiza con ayuda de la API{' '}
            <Alert.Link className="mb-0" href="https://agify.io/">
              Agify
            </Alert.Link>
          </p>
          <hr />
          <div className="d-flex justify-content-end">Desarollado por: Angie paola medina</div>
        </Alert>
      </Row>
      <Row></Row>
    </Container>
  );
};
