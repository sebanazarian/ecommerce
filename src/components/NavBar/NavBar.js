import React from "react";
import CartIcon from "../Icono/CartIcon";
import { Link, NavLink } from "react-router-dom";
import logoCompany from "../../assets/img/logo.png";
import imgPrincipal from "../../assets/img/image1.png";

const NavBar = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <img src={logoCompany} alt="asd" width="125px" />
          </div>
          <nav>
            <ul>
              <li className="nav-item active">
                <NavLink to={"/"} activeClassName="nav-link">
                  Home <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/"} activeClassName="nav-link">
                  Productos
                </NavLink>
              </li>
            </ul>
          </nav>
          <CartIcon width="30px" height="30px" />
        </div>
      </div>
    </div>
   
  );
};

export default NavBar;
