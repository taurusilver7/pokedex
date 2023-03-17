import React, { useEffect } from "react";
import pokeballIcon from "../assets/pokeball-icon.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";
import { useAppSelector } from "../app/hooks";

const Navbar = () => {
	const { compareQueue } = useAppSelector(({ pokemon }) => pokemon);
	const location = useLocation();
	const navRoutes = [
		{
			name: "Search",
			route: "/search",
			toast: false,
		},
		{
			name: "Pokemon",
			route: "/pokemon",
			toast: false,
		},
		{
			name: "Compare",
			route: "/compare",
			toast: true,
		},
		{
			name: "List",
			route: "/list",
			toast: false,
		},
	];

	const ul = (index: number) => {
		const underline = document.querySelectorAll<HTMLElement>(".underline");
		for (let i = 0; i < underline.length; i++) {
			underline[i].style.transform = "translate3d(" + index * 100 + "%,0,0)";
		}
	};
	useEffect(() => {
		const index = navRoutes.findIndex(({ route }) =>
			location.pathname.includes(route)
		);
		ul(index);
	}, [location.pathname, navRoutes]);

	return (
		<nav>
			<div className="block">
				<img src={pokeballIcon} alt="icon" />
			</div>
			<div className="data">
				<ul>
					<div className="underline"></div>
					<div className="underline"></div>
					<div className="underline"></div>
					{navRoutes.map(({ name, route, toast }, index) => (
						<Link to={route} key={index}>
							<li>{name}</li>
							{toast && compareQueue.length > 0 && (
								<div className="toast-notification">
									{compareQueue?.length}
								</div>
							)}
						</Link>
					))}
				</ul>
			</div>
			<div className="block">
				<GiHamburgerMenu />
			</div>
		</nav>
	);
};

export default Navbar;
