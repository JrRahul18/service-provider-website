import React from "react";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <nav className="navBar" id="navbarCheck">
      <h1>Hello</h1>
      <div>
        <HashLink to={"/#home"} onClick={scrollToTop}>Home</HashLink>
        <HashLink to={"/#about"}>About Us</HashLink>
        <HashLink to={"/#brands"}>Brands</HashLink>
        <Link to={"/contact"} onClick={scrollToTop}>
          Contact
        </Link>
        <Link to={"/feedback"}>Feedback</Link>
      </div>
    </nav>
  );
};

export default Header;
