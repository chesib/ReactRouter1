import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="logo">Happy Pet</div>
			<ul className="nav-links">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/contact">contact</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
