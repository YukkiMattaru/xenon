import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link, RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { searchSlice } from '../../store/reducers/search';
import { authSlice } from '../../store/reducers/auth';

const HeaderNavbar: React.FC<RouteComponentProps> = ({ location, history }) => {
  const { searchString } = useAppSelector((state) => state.searchReducer);
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.authReducer);
  const { setSearch } = searchSlice.actions;
  const { logout } = authSlice.actions;

  const handleChangeSearch = (value: string) => {
    dispatch(setSearch(value));
  };

  const search = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    history.push('/');
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <HeaderContainer>
      <div style={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
        <Navbar.Brand href="#home">Xenon</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/shop">
              Shop
            </Link>
            <Link className="nav-link" to="/cart">
              Cart
            </Link>
            <Link className="nav-link" to="/profile">
              Profile
            </Link>
          </Nav>
        </Navbar.Collapse>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
        {user && <b className="nav-link">{user.name}</b>}
        {user && <Button onClick={handleLogout}>Выйти</Button>}
        {location.pathname !== '/auth' && (
        <Form onSubmit={(e) => search(e)} className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            value={searchString}
            onChange={(event) => handleChangeSearch(event.target.value)}
          />
          {location.pathname !== '/' && <Button type="submit">Найти</Button>}
        </Form>
        )}
      </div>
    </HeaderContainer>
  );
};

const HeaderContainer = styled(Navbar)`
   display: flex;
  justify-content: space-between;
`;
export default HeaderNavbar;
