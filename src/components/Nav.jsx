import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";

// Define the styled Nav component
const StyledNav = styled.nav`
  .navbar-lists {
    display: flex;
    gap: 4.8rem;
    justify-content: center;

    .navbar-link {
      &:link,
      &:visited {
        display: inline-block;
        text-decoration: none;
        font-size: 1.8rem;
        font-weight: 500;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.black};
        transition: color 0.3s linear;
      }

      &:hover,
      &:active {
        color: ${({ theme }) => theme.colors.helper};
      }
    }
  }

  .mobile-navbar-btn {
    display: none;
    background-color: transparent;
    cursor: pointer;
    border: none;
  }

  .mobile-nav-icon {
    font-size: 4.2rem;
    color: ${({ theme }) => theme.colors.black};
  }

  .close-outline {
    display: none;
  }

  .cart-trolley--link {
    position: relative;

    .cart-trolley {
      position: relative;
      font-size: 3.2rem;
    }

    .cart-total--item {
      width: 2.4rem;
      height: 2.4rem;
      position: absolute;
      background-color: #000;
      color: #000;
      border-radius: 50%;
      display: grid;
      place-items: center;
      top: -20%;
      left: 70%;
      background-color: ${({ theme }) => theme.colors.helper};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    .mobile-navbar-btn {
      display: inline-block;
      z-index: 9999;
    }

    .navbar-lists {
      flex-direction: column;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: #fff;
      justify-content: center;
      align-items: center;
      transform: translateX(100%);
      transition: transform 0.3s ease-in-out;
    }

    .navbar-lists.active {
      transform: translateX(0);
    }

    .navbar-link {
      font-size: 2.4rem;
    }

    .cart-trolley--link .cart-trolley {
      font-size: 4.2rem;
    }

    .cart-trolley--link .cart-total--item {
      width: 3.2rem;
      height: 3.2rem;
      font-size: 1.6rem;
    }
  }
`;

const Nav = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <StyledNav>
      <div className="mobile-navbar-btn" onClick={() => setMenuActive(!menuActive)}>
        {menuActive ? (
          <CgClose className="mobile-nav-icon close-outline" />
        ) : (
          <CgMenu className="mobile-nav-icon" />
        )}
      </div>
      <ul className={`navbar-lists ${menuActive ? "active" : ""}`}>
        <li>
          <NavLink to="/" className="navbar-link" onClick={() => setMenuActive(false)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="navbar-link" onClick={() => setMenuActive(false)}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" className="navbar-link" onClick={() => setMenuActive(false)}>
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="navbar-link" onClick={() => setMenuActive(false)}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className="navbar-link cart-trolley--link" onClick={() => setMenuActive(false)}>
            <FiShoppingCart className="cart-trolley" />
            <span className="cart-total--item">10</span>
          </NavLink>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Nav;
