import React from "react";

// Styling
import lightLogo from "../light-logo.png";
import darkLogo from "../dark-logo.png";
import { Nav, ThemeButton, Logo, NavItem } from "../styles";
import { Link } from "react-router-dom";

const NavBar = ({ currentTheme, toggleTheme }) => {
  return (
    <Nav className="navbar navbar-expand-lg">
      <Logo className="navbar-brand" to="/">
        <img src={currentTheme === "light" ? lightLogo : darkLogo} alt="logo" />
      </Logo>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <NavItem className="nav-item" to="/cookies">
            Cookies
          </NavItem>
          <ThemeButton className="nav-item" onClick={toggleTheme}>
            {currentTheme === "light" ? "Dark" : "Light"} Mode
          </ThemeButton>
        </div>
      </div>
    </Nav>
  );
};

export default NavBar;
