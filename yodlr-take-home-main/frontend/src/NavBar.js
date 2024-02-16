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

function NavBar() {
	return (
		<div>
			<Navbar expand="md">
				<NavLink exact to="/" className="navbar-brand">
					Yodlr
				</NavLink>
				<Nav className="ml-auto" navbar>
					<NavItem>
						<NavLink to="/">Home</NavLink>
					</NavItem>
					<NavItem>
            			<NavLink to="/signup">Signup</NavLink>
          			</NavItem>
          			<NavItem>
            			<NavLink to="/admin">Admin</NavLink>
          			</NavItem>
				</Nav>
			</Navbar>
		</div>
	);
}
export default NavBar;