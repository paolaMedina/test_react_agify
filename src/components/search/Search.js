import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Select from 'react-select';
import { TableResponse } from './TableResponse';
import { useForm } from '../../hooks/useForm';
import { getPrediction } from '../../selectors/getPrediction';
import { countryData } from '../../data/countryData';

export const Search = () => {
  const [result, setResult] = useState([]);
  const [searchCountry, setCountry] = useState('');
  const [formValues, handleInputChange] = useForm({ searchNames: '', searchCountry: '' });
  const { searchNames } = formValues;

  const handleChangeCountry = (selectCountry) => {
    setCountry(selectCountry);
    console.log(`Option selected:`, searchCountry);
  };
  const handleSearch = async (e) => {
    e.preventDefault();
    const arraySearchNames = searchNames.split(';');
    setResult(await getPrediction(arraySearchNames, searchCountry.value));
  };

  return (
    <Container>
      <h2>Consulta</h2>
      <Row className="justify-content-md-center">
        <Col xs={7}>
          <Form onSubmit={handleSearch}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre(s)</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                required
                name="searchNames"
                value={searchNames}
                onChange={handleInputChange}
              />
              <Form.Text className="text-muted">
                Ingresar el nombre de la persona, si es mas de una separar por ";" Ejemplo ana;sofia;andres
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Select name="searchCountry" value={searchCountry} onChange={handleChangeCountry} options={countryData} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Predecir
            </Button>
          </Form>
        </Col>
        <Col xs={5}>
          <h4> Resultado </h4>
          <hr />
          {result.length === 0 && (
            <div className="alert alert-info">
              Para ver resultados, ingresa al menos un nombre y dar 'Enter' o click en el boton 'Predecir'{' '}
            </div>
          )}
          {result.length > 0 && <TableResponse data={result} />}
        </Col>
      </Row>
    </Container>
  );
};
