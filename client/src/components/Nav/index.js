import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <header>
      <nav className="">
        <div className="nav-wrapper container white-text">
          <ul className="right">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
          </ul>
          <Link
            to="/"
            className="brand-logo center"
            style={{ fontSize: "150%" }}
          >
            Kathryn Hansen
          </Link>
          <ul className="left">
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/">Shop</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
