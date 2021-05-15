import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavLink, NavItem } from "reactstrap";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

function Navigation() {
  return (
    <Navbar light expand="md" style={{ background: "transparent", position: "absolute"}} fixed="top">
      <Nav className="container-fluid" navbar style={{ width: "20%" }}>
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

      <NavbarBrand style={{ marginLeft: "10px", marginRight: "10px", fontSize: "40px" }}>
        KATHRYN HANSEN
      </NavbarBrand>

      <Nav className="container-fluid" navbar style={{ width: "20%" }}>
        <NavItem className="mr-auto">
          <StyledLink to="/contact">CONTACT</StyledLink>
        </NavItem>
        <NavItem className="mr-auto">
          <StyledLink to="/events">EVENTS</StyledLink>
        </NavItem>
        <NavItem className="mr-auto">
          <NavLink
            href="https://fineartamerica.com/profiles/kathryn-hansen"
            style={{ color: "black" }}
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