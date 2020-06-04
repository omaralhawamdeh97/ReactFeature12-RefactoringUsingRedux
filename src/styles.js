import styled, { createGlobalStyle } from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const CookieWrapper = styled.div`
  text-decoration: none;
  text-align: center;

  img {
    width: 12em;
    height: 12em;
  }

  p {
    &.cookie-name {
      color: ${(props) => props.theme.mainColor};
    }

    &.cookie-price {
      color: ${(props) => props.theme.pink};
    }
  }
`;

export const CreateButton = styled.button`
  color: ${(props) => props.theme.backgroundColor};
  background-color: ${(props) => props.theme.mainColor};

  &:hover {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;

export const DeleteButton = styled.p`
  color: ${(props) => props.theme.red};
`;

export const Description = styled.h4`
  text-align: center;
`;

export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  img {
    width: 40%;
    float: left;
  }

  p {
    vertical-align: middle;
  }
`;

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor}
  }
`;

export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const Logo = styled(Link)`
  img {
    width: 8rem;
  }
`;

export const Nav = styled.nav`
  background-color: ${(props) => props.theme.backgroundColor};
`;

export const NavItem = styled(NavLink)`
  color: ${(props) => props.theme.mainColor};
  padding: 0.25em 1em;

  &.active {
    color: ${(props) => props.theme.pink};
  }
`;

export const Search = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;

export const modalStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    width: "40%",
  },
};

export const ThemeButton = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;

export const Title = styled.h1`
  text-align: center;
`;

export const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;
