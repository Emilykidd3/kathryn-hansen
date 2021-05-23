import React, { useState } from "react";
import {
  Navbar,
  Nav,
  NavLink,
  NavItem,
  Collapse,
  NavbarToggler,
  Container,
  Col,
  Row,
} from "reactstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  :hover {
    color: #ce9584;
  }
  font-weight: lighter;
`;

function CollapsedNav() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <Container>
      <Row>
        <Col xs="2">
          <Navbar style={{ color: "black" }} light>
            <NavbarToggler onClick={toggleNavbar} className="mr-2" />
            <Collapse isOpen={!collapsed} navbar>
              <Nav navbar>
                <NavItem className="ml-auto">
                  <StyledLink onClick={toggleNavbar} to="/">HOME</StyledLink>
                </NavItem>
                <NavItem className="ml-auto">
                  <StyledLink onClick={toggleNavbar} to="/about">ABOUT</StyledLink>
                </NavItem>
                <NavItem className="ml-auto">
                  <StyledLink onClick={toggleNavbar} to="/gallery">GALLERY</StyledLink>
                </NavItem>
                <NavItem className="mr-auto">
                  <StyledLink onClick={toggleNavbar} to="/contact">CONTACT</StyledLink>
                </NavItem>
                <NavItem className="mr-auto">
                  <StyledLink onClick={toggleNavbar} to="/events">EVENTS</StyledLink>
                </NavItem>
                <NavItem className="mr-auto">
                  <NavLink
                    onClick={toggleNavbar}
                    className="hover"
                    href="https://fineartamerica.com/profiles/kathryn-hansen"
                    style={{
                      color: "black",
                      fontWeight: "lighter",
                      padding: "0",
                    }}
                  >
                    SHOP
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Col>
        <Col xs="10" style={{display: "flex"}}>
          <h1
            style={{
              margin: "auto 10px",
              fontSize: "33px",
              fontWeight: "200",
              alignItems: "center"
            }}
          >
            KATHRYN HANSEN
          </h1>
        </Col>
      </Row>
    </Container>
  );
}

export default CollapsedNav;
