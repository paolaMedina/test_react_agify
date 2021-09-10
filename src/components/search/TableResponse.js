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
          </tr>
        </thead>
        <tbody>
          {data.map(({ name, age }, index) => (
            <tr>
              <td>{name}</td>
              <td>{age}</td>
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
