import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import { userSlice } from '../../store/reducers/user';

const IndexPage: React.FC = () => {
  const { isAuth, user } = useAppSelector((state) => state.authReducer);
  const { init } = useAppSelector((state) => state.appReducer);
  const { editProfile } = userSlice.actions;
  const [isEdit, setIsEdit] = useState(false);

  const [name, setName] = useState(user?.name ?? '');
  const [lastName, setLastName] = useState(user?.lastName ?? '');
  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber ?? '');
  const [mail, setMail] = useState(user?.mail ?? '');

  const handleEdit = () => {
    if (user) {
      editProfile({
        name,
        lastName,
        mail,
        phoneNumber,
        id: user.id,
      });
    }
  };

  if (init && !isAuth) return <Redirect to="/auth" />;

  const toggleIsEdit = () => {
    if (isEdit) {
      setName(user?.name ?? '');
      setLastName(user?.lastName ?? '');
      setPhoneNumber(user?.phoneNumber ?? '');
      setMail(user?.mail ?? '');
    }
    setIsEdit((edit) => !edit);
  };

  return (
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="formPlainTextLogin">
        <Form.Label column sm="2">
          Логин
        </Form.Label>
        <Col sm="10">
          <Form.Control
            defaultValue={user?.login ?? ''}
            disabled
            plaintext
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
        <Form.Label column sm="2">
          Имя
        </Form.Label>
        <Col sm="10">
          <Form.Control value={name} onChange={(e) => setName(e.target.value)} plaintext={!isEdit} disabled={!isEdit} readOnly={!isEdit} />
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
            disabled={!isEdit}
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
            disabled={!isEdit}
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
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            plaintext={!isEdit}
            disabled={!isEdit}
            readOnly={!isEdit}
          />
        </Col>
      </Form.Group>
      <Button variant="primary" onClick={toggleIsEdit}>
        {isEdit ? 'Отменить' : 'Редактировать'}
      </Button>
      {isEdit && <Button onClick={handleEdit}>Принять</Button>}
      <Button variant="danger">Выйти</Button>
    </Form>
  );
};

export default IndexPage;
