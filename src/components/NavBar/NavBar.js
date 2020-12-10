import React from "react";
import CartIcon from "../Icono/CartIcon";
import {Link, NavLink} from "react-router-dom";

const NavBar = () => {
  return (
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      
      <a class="navbar-brand" href="#">
        E-Commerce
      </a>
      <CartIcon />
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <NavLink to={'/'} activeClassName="nav-link" >
              Home <span class="sr-only">(current)</span>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to={'/'} activeClassName="nav-link" >
              Nosotros
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;