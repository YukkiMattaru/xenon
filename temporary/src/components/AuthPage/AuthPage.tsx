import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const AuthPage: React.FC = () => {
  console.log('auth');
  return (
    <Container>
      <p>Войдите в свой профиль</p>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicLogin">
          <Form.Label>Логин пользователя</Form.Label>
          <Form.Control type="login" placeholder="Введите логин" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Пароль</Form.Label>
          <Form.Control type="password" placeholder="Пароль" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Войти
        </Button>
      </Form>
    </Container>
  );
};

export default AuthPage;
