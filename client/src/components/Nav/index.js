import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const NavMain = styled.nav`
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
`

const StyledNavList = styled.ul`
    list-style-type: none;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #4C5760;
`

function Nav() {
  return (
      <NavMain>
        <div>
          <StyledNavList>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/about">About</StyledLink>
            </li>
            <li>
              <StyledLink to="/gallery">Gallery</StyledLink>
            </li>
          </StyledNavList>
          <StyledLink
            to="/"
          >
            Kathryn Hansen
          </StyledLink>
          <StyledNavList>
            <li>
              <StyledLink to="/contact">Contact</StyledLink>
            </li>
            <li>
              <StyledLink to="/events">Events</StyledLink>
            </li>
            <li>
              <StyledLink to="/">Shop</StyledLink>
            </li>
          </StyledNavList>
        </div>
      </NavMain>
  );
}

export default Nav;
