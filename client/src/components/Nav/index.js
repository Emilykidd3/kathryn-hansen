import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
} from "reactstrap";
import styled from "styled-components";
import Auth from "../../utils/auth";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  :hover {
    color: #ce9584;
  }
  font-weight: lighter;
`;

const phone = {
  "max-width": "768px",
};

function Navigation() {
  // const [collapsed, setCollapsed] = useState(true);

  // const toggleNavbar = () => setCollapsed(!collapsed);
  function showLoggedIn() {
    if (Auth.loggedIn()) {
      return (
        <UncontrolledDropdown setActiveFromChild>
          <DropdownToggle
            tag="a"
            className="nav-link, hover"
            style={{
              color: "#79B791",
              fontWeight: "lighter",
              padding: "0",
              textDecoration: "none",
            }}
            caret
          ></DropdownToggle>
          <DropdownMenu>
            <DropdownItem
              tag="a"
              href="/dashboard"
              style={{
                backgroundColor: "white",
                color: "#A66D60",
                fontWeight: "lighter",
              }}
              active
            >
              Dashboard
            </DropdownItem>
            <DropdownItem
              tag="a"
              href="/blah"
              style={{
                backgroundColor: "white",
                color: "black",
                fontWeight: "lighter",
              }}
              active
            >
              <a
                href="/"
                onClick={() => Auth.logout()}
                style={{
                  backgroundColor: "white",
                  color: "#A66D60",
                  textDecoration: "none",
                }}
              >
                Logout
              </a>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      );
    }
  }

  return (
    <Navbar
      light
      expand="md"
      style={{ background: "transparent", position: "absolute" }}
      fixed="top"
    >
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

      <NavbarBrand
        style={{
          marginLeft: "10px",
          marginRight: "10px",
          fontSize: "40px",
          fontWeight: "200",
        }}
      >
        K A T H R Y N &nbsp; H A N S E N
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
            className="hover"
            href="https://fineartamerica.com/profiles/kathryn-hansen"
            style={{ color: "black", fontWeight: "lighter", padding: "0" }}
          >
            SHOP
          </NavLink>
        </NavItem>
        {showLoggedIn()}
      </Nav>
    </Navbar>
  );
}
export default Navigation;

// each component should have 100vh style={{height: "100vh"}}

//
