import React from 'react';
import PropTypes from 'prop-types';
import { Container, Table } from 'react-bootstrap';

const TableResponse = ({ data }) => {
  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>País</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ name, age, country_id = '' }, index) => (
            <tr key={index}>
              <td>{name}</td>
              <td>{age > 0 ? age : 'Sin Resultado'}</td>
              <td>{country_id}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

TableResponse.propTypes = {
  data: PropTypes.array,
};
TableResponse.defaultProps = {
  data: [],
};

export { TableResponse };
