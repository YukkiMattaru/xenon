import React from 'react';
import styled from 'styled-components';
import { Col, Form, Row } from 'react-bootstrap';
import { useAppSelector } from '../../hooks/redux';

const IndexPage: React.FC = () => {
  const { products } = useAppSelector((state) => state.productReducer);
  return (
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="formPlainTextLogin">
        <Form.Label column sm="2">
          Логин
        </Form.Label>
        <Col sm="10">
          <Form.Control plaintext readOnly defaultValue="Login" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
        <Form.Label column sm="2">
          Имя
        </Form.Label>
        <Col sm="10">
          <Form.Control plaintext readOnly defaultValue="Name" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextLastName">
        <Form.Label column sm="2">
          Фамилия
        </Form.Label>
        <Col sm="10">
          <Form.Control plaintext readOnly defaultValue="Last Name" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPhoneNumber">
        <Form.Label column sm="2">
          Номер Телефона
        </Form.Label>
        <Col sm="10">
          <Form.Control plaintext readOnly defaultValue="880055553535" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPhoneNumber">
        <Form.Label column sm="2">
          Номер Телефона
        </Form.Label>
        <Col sm="10">
          <Form.Control plaintext readOnly defaultValue="880055553535" />
        </Col>
      </Form.Group>
    </Form>
  );
};

export default IndexPage;
