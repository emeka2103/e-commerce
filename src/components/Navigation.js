import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import styled from "styled-components";
import { ButtonHeader } from "./Button";

export default class Navigation extends Component {
  render() {
    return (
      <NavHolder className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/">
          <img src={logo} className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/product" className="nav-link">
              Products
            </Link>
          </li>
          {/* <li className="nav-item ml-5">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li> */}
          <li className="nav-item ml-5">
            <Link to="/signin" className="nav-link">
              Sign In
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonHeader>
            <span className="mr-2">
              <i class="fas fa-cart-plus"></i>
              {/* To Cart */}
            </span>
          </ButtonHeader>
        </Link>
      </NavHolder>
    );
  }
}

const NavHolder = styled.nav`
  background: red;
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 20px;
  }
`;
