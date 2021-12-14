import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';

const IndexPage: React.FC = () => {
  const { isAuth } = useAppSelector((state) => state.authReducer);
  const { init } = useAppSelector((state) => state.appReducer);
  const [isEdit, setIsEdit] = useState(false);
  // if (init && !isAuth) return <Redirect to="/auth" />;

  const [login, setLogin] = useState('Login');
  const [name, setName] = useState('Name');
  const [lastName, setLastName] = useState('Last Name');
  const [phoneNumber, setPhoneNumber] = useState('88005553535');
  const [email, setEmail] = useState('Email@email.com');

  return (
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="formPlainTextLogin">
        <Form.Label column sm="2">
          Логин
        </Form.Label>
        <Col sm="10">
          <Form.Control
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            plaintext={!isEdit}
            readOnly={!isEdit}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
        <Form.Label column sm="2">
          Имя
        </Form.Label>
        <Col sm="10">
          <Form.Control value={name} onChange={(e) => setName(e.target.value)} plaintext={!isEdit} readOnly={!isEdit} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextLastName">
        <Form.Label column sm="2">
          Фамилия
        </Form.Label>
        <Col sm="10">
          <Form.Control
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            plaintext={!isEdit}
            readOnly={!isEdit}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPhoneNumber">
        <Form.Label column sm="2">
          Номер Телефона
        </Form.Label>
        <Col sm="10">
          <Form.Control
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            plaintext={!isEdit}
            readOnly={!isEdit}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            plaintext={!isEdit}
            readOnly={!isEdit}
          />
        </Col>
      </Form.Group>
      <Button variant="primary" onClick={() => setIsEdit((edit) => !edit)}>
        {isEdit ? 'Отменить' : 'Редактировать'}
      </Button>
      {isEdit && <Button>Принять</Button>}
      <Button variant="danger">Выйти</Button>
    </Form>
  );
};

export default IndexPage;
