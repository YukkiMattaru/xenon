import React from 'react';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { searchSlice } from '../../store/reducers/search';

const HeaderNavbar: React.FC = () => {
  const { searchString } = useAppSelector((state) => state.searchReducer);
  const dispatch = useAppDispatch();
  const { setSearch } = searchSlice.actions;

  const handleChangeSearch = (value: string) => {
    dispatch(setSearch(value));
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Xenon</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="">Home</Nav.Link>
            <Nav.Link href="shop">Shop</Nav.Link>
            <Nav.Link href="cart">Cart</Nav.Link>
            <Nav.Link href="profile">Profile</Nav.Link>
          </Nav>

          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchString}
              onChange={(event) => handleChangeSearch(event.target.value)}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderNavbar;
