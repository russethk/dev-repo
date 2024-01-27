/* NavBar Component - renders the navbar for the site.
 * Props: None
 * State: None
 * App -> NavBar
 * 
 * NavBar is rendered by App
 */

import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar() {
	return (
		<div>
			<Navbar expand="md">
				<NavLink exact to="/" className="navbar-brand">
					Snack or Booze
				</NavLink>

				<Nav className="ml-auto" navbar>
					<NavItem>
						<NavLink to="/">Home</NavLink>
					</NavItem>
					<NavItem>
            			<NavLink to="/snacks">Snacks</NavLink>
          			</NavItem>
          			<NavItem>
            			<NavLink to="/drinks">Drinks</NavLink>
          			</NavItem>
					<NavItem>
						<NavLink to="/add">Add Item</NavLink>
					</NavItem>
					<NavItem>
						<NavLink to="/contact">Contact</NavLink>
					</NavItem>
				</Nav>
			</Navbar>
		</div>
	);
}
export default NavBar;
