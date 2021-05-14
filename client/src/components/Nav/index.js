import React from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
function Navigation() {
  return (
      <Navbar>
        <div>
          <Nav>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/about">About</Link>
            </NavItem>
            <NavItem>
              <Link to="/gallery">Gallery</Link>
            </NavItem>
          </Nav>
          <Link
            to="/"
          >
            Kathryn Hansen
          </Link>
          <Nav>
            <NavItem>
              <Link to="/contact">Contact</Link>
            </NavItem>
            <NavItem>
              <Link to="/events">Events</Link>
            </NavItem>
            <NavItem>
              <Link to="/">Shop</Link>
            </NavItem>
          </Nav>
        </div>
      </Navbar>
  );
}
export default Navigation;