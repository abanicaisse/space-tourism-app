import { React, useState } from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

import logo from "../../assets/shared/logo.svg";
import iconMenuOpen from "../../assets/shared/icon-hamburger.svg";
import iconMenuClose from "../../assets/shared/icon-close.svg";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleNavMenu = () => {
    if (toggleMenu) {
      console.log("Show Menu Links");
    } else {
      console.log("Hide Menu Links");
    }
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className="navbar component-maxwidth">
      <div className="navbar__logo">
        <Link to={"/"}>
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <div className="navbar__line"></div>

      <div className="navbar__links">
        <Link to={"/"} className="active-link">
          <strong>01</strong>Home
        </Link>
        <Link to={"/crew"}>
          <strong>02</strong>Crew
        </Link>
        <Link to={"/destination"}>
          <strong>03</strong>Destination
        </Link>
        <Link to={"/technology"}>
          <strong>04</strong>Technology
        </Link>
      </div>

      <div className="navbar__menu">
        {!toggleMenu ? (
          <img src={iconMenuOpen} alt="Menu" onClick={toggleNavMenu} />
        ) : (
          <div className="navbar__menu-links">
            <img src={iconMenuClose} alt="Close menu" onClick={toggleNavMenu} />
            <div>
              <Link to={"/"} className="active-link">
                <strong>01</strong>Home
              </Link>
              <Link to={"/crew"}>
                <strong>02</strong>Crew
              </Link>
              <Link to={"/destination"}>
                <strong>03</strong>Destination
              </Link>
              <Link to={"/technology"}>
                <strong>04</strong>Technology
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
