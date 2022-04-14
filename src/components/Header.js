import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Nav>
      <Logo>
        <img src="./images/logo.svg" alt="logo-img" />
      </Logo>
      <Menu>
        <a href="/">
          <img src="/images/home-icon.svg" alt=""></img>
          <span>Início</span>
        </a>
        <a href="/">
          <img src="/images/search-icon.svg" alt=""></img>
          <span>Pesquisa</span>
        </a>
        <a href="/">
          <img src="/images/watchlist-icon.svg" alt=""></img>
          <span>Minha Lista</span>
        </a>
        <a href="/">
          <img src="/images/original-icon.svg" alt=""></img>
          <span>Originais</span>
        </a>
        <a href="/">
          <img src="/images/movie-icon.svg" alt=""></img>
          <span>Filmes</span>
        </a>
        <a href="/">
          <img src="/images/series-icon.svg" alt=""></img>
          <span>Séries</span>
        </a>
      </Menu>
      <UserImg>
        <img src="/images/user.jpeg" alt="user-img" />
      </UserImg>
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`  
  height: 70px;
  width: 100vw;
  background-color: #090b13;
  display: flex;
  align-items: center;
  flex: 1;
`;

const Logo = styled.div`
  margin-left: 15px;

  img {
    width: 80px;
  }
`;

const Menu = styled.div`
  display: flex;
  margin-left: 20px;
  flex: 1;
  align-items: center;

  a {
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 12px;
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;

    img {
      height: 20px;
      margin-right: 3px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background-color: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.div`
  img {
    height: 60px;
    border-radius: 50%;
    margin-right: 15px;
    cursor: pointer;
  }
`;
