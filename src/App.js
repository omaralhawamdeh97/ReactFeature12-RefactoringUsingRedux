import React, { useState } from "react";
import { Route, Switch } from "react-router";

// Components
import CookieDetail from "./components/CookieDetail";
import CookieList from "./components/CookieList";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

// Styling
import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";

const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");

  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/cookies/:cookieSlug">
          <CookieDetail />
        </Route>
        <Route path="/cookies">
          <CookieList />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
