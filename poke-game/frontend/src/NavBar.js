/* NavBar Component - renders the navbar for the site.
 * Props: None
 * State: None
 * App -> NavBar
 * 
 * NavBar is rendered by App
 */

import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.css";

function NavBar() {
	return (
		<div>
			<Navbar className="Navbar" expand="md">
				<NavLink exact to="/" className="navbar-brand">
				<img src={`${process.env.PUBLIC_URL}/pokeball-icon.png`} alt="pokeball" className="homepage-image" />
				Pokemon Challenge
				</NavLink>
				<Nav className="ml-auto mb-2 mb-lg-0" navbar>
					<NavItem>
						<NavLink to="/">Game</NavLink>
					</NavItem>
					<NavItem>
            			<NavLink to="/pokedex">My PokeDex</NavLink>
          			</NavItem>
				</Nav>
			</Navbar>
		</div>
	);
}
export default NavBar;