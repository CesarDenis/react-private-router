import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavLink, NavItem } from 'reactstrap';

const Header = () => (
  <Navbar color="light" light expand="md">
    <NavbarBrand href="/">Private Router</NavbarBrand>
    <Nav className="ml-auto" navbar>
      <NavItem>
        <Link to="/" className="nav-link">
          Home
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/users" className="nav-link">
          Users
        </Link>
      </NavItem>
      <NavItem>
        <NavLink href="#">Some Page</NavLink>
      </NavItem>
    </Nav>
  </Navbar>
);

export default Header;
