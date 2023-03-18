import { signOut } from "firebase/auth";
import { MdOutlinePowerSettingsNew } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setPokemonTab, setToast, setUserStatus } from "../app/slices/AppSlice";
import { pokemonTabs } from "../utils/Constants";
import { firebaseAuth } from "../utils/firebase";

const Footer = () => {
	const location = useLocation();
	const currentPokemonTab = useAppSelector(
		({ app: { currentPokemonTab } }) => currentPokemonTab
	);
	const dispatch = useAppDispatch();

	const logout = () => {
		signOut(firebaseAuth);
		dispatch(setUserStatus(undefined));
		dispatch(setToast("Logged out successfully."));
	};

	const routes = [
		{
			name: pokemonTabs.description,
			value: "description",
		},
		{
			name: pokemonTabs.evolution,
			value: "evolution",
		},
		{
			name: pokemonTabs.locations,
			value: "Catching",
		},
		{
			name: pokemonTabs.moves,
			value: "Capable Moves",
		},
	];
	return (
		<footer>
			<div className="block"></div>
			<div className="data">
				{location.pathname.includes("/pokemon") && (
					<ul>
						{routes.map((route) => (
							<li
								key={route.name}
								className={`${
									currentPokemonTab === route.name ? "active" : ""
								}`}
								onClick={() => dispatch(setPokemonTab(route.name))}
							>
								{route.value}
							</li>
						))}
					</ul>
				)}
			</div>
			<div className="block">
				<MdOutlinePowerSettingsNew onClick={logout} />
			</div>
		</footer>
	);
};

export default Footer;
