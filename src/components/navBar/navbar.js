import React, { useState } from "react";
import "./navbar.css";
import logo from "../../logo.png";
import { Link } from "react-scroll";
import contactImg from "../../contact.png";
import menu from "../../assets/menu.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenulistItem"
        >
          HOME
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-170}
          duration={500}
          className="desktopMenulistItem"
        >
          ABOUT
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenulistItem"
        >
          PORTFOLIO
        </Link>
      </div>
      <button
        className="desktopMenuButton"
        onClick={() => {
          document.getElementById("contact").scrollIntoView();
        }}
      >
        <img src={contactImg} alt="" className="desktopMenuImg" /> Contact Me{" "}
      </button>

      <img
        src={menu}
        alt="Logo"
        className="mobMenu"
        onClick={() => setShowMenu(!showMenu)}
      />
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          HOME
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-170}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          ABOUT
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-75}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          PORTFOLIO
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
