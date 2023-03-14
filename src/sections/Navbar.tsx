import React from "react";
import pokeballIcon from "../assets/pokeball-icon.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
	return (
		<nav>
			<div className="block">
				<img src={pokeballIcon} alt="icon" />
			</div>
			<div className="data">Navbar</div>
			<div className="block">
				<GiHamburgerMenu />
			</div>
		</nav>
	);
};

export default Navbar;
