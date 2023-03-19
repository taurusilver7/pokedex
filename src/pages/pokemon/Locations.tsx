import React from "react";
import { useAppSelector } from "../../app/hooks";

const Locations = () => {
	const { currentPokemon } = useAppSelector(({ pokemon }) => pokemon);

	return (
		<div className="locations">
			<div className="locations-list">
				{currentPokemon?.encounters.map((encounter: string) => (
					<li className="location" key={encounter}>
						{encounter}
					</li>
				))}
			</div>
		</div>
	);
};

export default Locations;
