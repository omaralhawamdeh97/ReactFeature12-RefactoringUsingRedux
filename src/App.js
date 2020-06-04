import React, { useState } from "react";
import { Route, Switch } from "react-router";
import { useHistory } from "react-router-dom";

// Components
import CookieDetail from "./components/CookieDetail";
import CookieList from "./components/CookieList";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

// Data
import cookies from "./cookies";

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
  const [_cookies, setCookies] = useState(cookies);
  const history = useHistory();

  const createCookie = (newCookie) => {
    setCookies((oldCookies) => [...oldCookies, newCookie]);
  };

  const deleteCookie = (event, cookieId) => {
    event.preventDefault();
    const updatedCookies = _cookies.filter((cookie) => cookie.id !== +cookieId);
    setCookies(updatedCookies);
    history.push("/cookies");
  };

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
        <Route path="/cookies/:cookieId">
          <CookieDetail cookies={_cookies} deleteCookie={deleteCookie} />
        </Route>
        <Route path="/cookies">
          <CookieList
            cookies={_cookies}
            createCookie={createCookie}
            deleteCookie={deleteCookie}
          />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
