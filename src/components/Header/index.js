import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavLink, NavItem } from 'reactstrap';

const Header = () => (
  <Navbar color="light" light expand="md">
    <Link to="/" className="navbar-brand">
      Private Router
    </Link>
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
        <NavLink href="/signin">Log out</NavLink>
      </NavItem>
    </Nav>
  </Navbar>
);

export default Header;
