import React, { useState } from "react";
import styled from "styled-components";
function Header() {
  const [burgetStatus, setBurgerStatus] = useState(false);
  function menuClickHandler(event) {
    setBurgerStatus(true);
  }
  function closeMenuHandler(event) {
    setBurgerStatus(false);
  }
  return (
    <Container>
      <a href="index.html">
        <img src="./images/logo.svg" alt="Logo" />
      </a>
      <Menu>
        <a href="index.html">Model S</a>
        <a href="index.html">Model 3</a>
        <a href="index.html">Model X</a>
        <a href="index.html">Model Y</a>
        <a href="index.html">Solar Roof</a>
        <a href="index.html">Solar Panels</a>
      </Menu>

      <RightMenu>
        <span>
          <a href="index.html">Shop</a>
          <a href="index.html">Account</a>
        </span>
        <a href="#0" onClick={menuClickHandler}>
          Menu
        </a>
      </RightMenu>
      <BurgerNav show={burgetStatus}>
        <CloseBtn>
          <img src="./images/closeIcon.svg" alt="" onClick={closeMenuHandler} />
        </CloseBtn>
        <li>
          <a href="index.html">Existing Inventory</a>
        </li>
        <li>
          <a href="index.html">Used Inventory</a>
        </li>
        <li>
          <a href="index.html">Trade-In</a>
        </li>
        <li>
          <a href="index.html">Test Drive</a>
        </li>
        <li>
          <a href="index.html">Insaurance</a>
        </li>
        <li>
          <a href="index.html">Cybertruck</a>
        </li>
        <li>
          <a href="index.html">Roadster</a>
        </li>
        <li>
          <a href="index.html">Semi</a>
        </li>
        <li>
          <a href="index.html">Charing</a>
        </li>
        <li>
          <a href="index.html">Powerwall</a>
        </li>
        <li>
          <a href="index.html">Commercial Energy</a>
        </li>
        <li>
          <a href="index.html">Utilities</a>
        </li>
        <li>
          <a href="index.html">Find Us</a>
        </li>
        <li>
          <a href="index.html">Suppot</a>
        </li>
        <li>
          <a href="index.html">Inverstor Relations</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 786px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    font-weight: 600;
    padding: 0 10px;
    flex-wrap: nowrap;
    cursor: pointer;
  }
  @media (max-width: 786px) {
    span {
      display: none;
    }
    a {
      background-color: rgba(92, 103, 117, 0.2);
      padding: 7px 10px;
      border-radius: 4px;
    }
  }
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  list-style: none;
  padding: 20px;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s;

  img {
    width: 1.7rem;
    cursor: pointer;
  }

  li {
    padding: 12px 0;
    margin-left: 10px;

    a {
      font-weight: 600;
    }
  }
`;

const CloseBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 50px;
`;
