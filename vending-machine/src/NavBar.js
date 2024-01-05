import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className="NavBar">
        <NavLink exact activeClassName="Navbar-active" to="/">
          Home
        </NavLink>
        <NavLink exact activeClassName="Navbar-active" to="/chips">
          Chips
        </NavLink>
        <NavLink exact activeClassName="Navbar-active" to="/soda">
          Soda
        </NavLink>
        <NavLink exact activeClassName="Navbar-active" to="/candy">
          Candy
        </NavLink>
      </div>
    );
  }
}