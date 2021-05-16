import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavLink, NavItem } from "reactstrap";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  :hover {
    color: #CE9584;
  }
  font-weight: lighter;
`;

function Navigation() {
  return (
    <Navbar light expand="md" style={{ background: "transparent", position: "absolute"}} fixed="top">
      <Nav className="container-fluid" navbar style={{ width: "18%" }}>
        <NavItem className="ml-auto">
          <StyledLink to="/">HOME</StyledLink>
        </NavItem>
        <NavItem className="ml-auto">
          <StyledLink to="/about">ABOUT</StyledLink>
        </NavItem>
        <NavItem className="ml-auto">
          <StyledLink to="/gallery">GALLERY</StyledLink>
        </NavItem>
      </Nav>

      <NavbarBrand style={{ marginLeft: "10px", marginRight: "10px", fontSize: "40px", fontWeight: "200" }}>
        K A T H R Y N &nbsp;  H A N S E N
      </NavbarBrand>

      <Nav className="container-fluid" navbar style={{ width: "18%" }}>
        <NavItem className="mr-auto">
          <StyledLink to="/contact">CONTACT</StyledLink>
        </NavItem>
        <NavItem className="mr-auto">
          <StyledLink to="/events">EVENTS</StyledLink>
        </NavItem>
        <NavItem className="mr-auto">
          <NavLink
            href="https://fineartamerica.com/profiles/kathryn-hansen"
            style={{ color: "black", fontWeight: "lighter" }}
          >
            SHOP
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}
export default Navigation;

// each component should have 100vh style={{height: "100vh"}}

// 