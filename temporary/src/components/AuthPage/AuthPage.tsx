import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { authUser } from '../../services/AuthService';

const AuthPage: React.FC = () => {
  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState('');
  const dispatch = useAppDispatch();
  const { users } = useAppSelector((state) => state.userReducer);
  const { isAuth, error } = useAppSelector((state) => state.authReducer);
  const authorize = () => {
    dispatch(authUser({ login, password }, users));
  };

  if (isAuth) return <Redirect to="/profile" />;

  return (
    <Container>
      <p>Войдите в свой профиль</p>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicLogin">
          <Form.Label>Логин пользователя</Form.Label>
          <Form.Control
            type="login"
            value={login}
            onChange={(event) => setLogin(event.target.value)}
            placeholder="Введите логин"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Пароль</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Пароль"
          />
          {error && <Form.Text>{error}</Form.Text>}
        </Form.Group>
        <Button variant="primary" onClick={authorize} type="button">
          Войти
        </Button>
      </Form>
    </Container>
  );
};

export default AuthPage;
