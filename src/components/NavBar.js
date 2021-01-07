import { Logo, NavItem, NavStyled, ThemeButton } from "../styles";

import darkLogo from "../dark-logo.png";
import lightLogo from "../light-logo.png";

const NavBar = ({ currentTheme, toggleTheme }) => {
  return (
    <NavStyled className="navbar navbar-expand">
      <Logo className="navbar-brand" to="/">
        <img src={currentTheme === "light" ? lightLogo : darkLogo} alt="logo" />
      </Logo>
      <div className="navbar-nav ml-auto">
        <NavItem className="nav-item" to="/products">
          Products
        </NavItem>
        <ThemeButton className="nav-item" onClick={toggleTheme}>
          {currentTheme === "light" ? "Dark" : "Light"} Mode
        </ThemeButton>
      </div>
    </NavStyled>
  );
};

export default NavBar;
