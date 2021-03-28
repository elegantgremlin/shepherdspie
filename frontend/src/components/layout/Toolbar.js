import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const Toolbar = () => (
  <div>
    <Navbar color="dark" dark expand>
      <NavbarBrand className="logo" href="/">shepherd</NavbarBrand>
      <Nav />
      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink href="/about">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/users">Users</NavLink>
        </NavItem>
      </Nav>
      <Nav className="pull-right" navbar>
        <NavItem>
          <NavLink href="/about">Profile</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/login">Login</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  </div>
);

export default Toolbar;
