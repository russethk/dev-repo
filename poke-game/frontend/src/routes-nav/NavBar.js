import React,{ useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../auth/UserContext";
import * as Icon from 'react-bootstrap-icons';
import "./NavBar.css";

function NavBar ({logout}) {
    const { currentUser } = useContext(UserContext);
    console.debug("NavBar", "currentUser=", currentUser);

    function loggedInNav() {
        return (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item mr-4">
                    <NavLink className="nav-link" to="/game">
                         Game
                    </NavLink>
                </li>
                <li className="nav-item mr-4">
                    <NavLink className="nav-link" to="/pokedex">
                        PokeDex
                    </NavLink>
                </li>
                <li className="nav-item mr-4">
                    <NavLink className="nav-link" to="/profile">
                        <Icon.PersonSquare /> Profile
                    </NavLink>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/" onClick={logout}>
                        <Icon.BoxArrowRight /> Log Out  {currentUser.first_name || currentUser.username}
                    </Link>
                </li>
            </ul>
        );
    }

    function loggedOutNav() {
        return (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item mr-4">
                    <NavLink className="nav-link" to="/login">
                        <Icon.BoxArrowLeft />  Login
                    </NavLink>
                </li>
                <li className="nav-item mr-4">
                    <NavLink className="nav-link" to="/signup">
                        <Icon.People /> Sign Up
                    </NavLink>
                </li>
            </ul>
        );
    }
    return (
        <nav className="NavBar navbar navbar-expand-md">
            <Link className="navbar-brand" to="/">
            <img src={`${process.env.PUBLIC_URL}/pokeball-icon.png`} alt="pokeball" className="homepage-image" />
            </Link>
            {currentUser ? loggedInNav() : loggedOutNav()}
        </nav>
    );
}

export default NavBar;