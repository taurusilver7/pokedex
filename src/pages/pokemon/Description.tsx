import React from "react";
import { useAppSelector } from "../../app/hooks";
import { Info, PokemonContainer } from "../../components";

const Description = () => {
	const { currentPokemon } = useAppSelector(({ pokemon }) => pokemon);
	return (
		<div className="description">
			{/* Pokemon Info */}
			<Info data={currentPokemon} />
			{currentPokemon && <PokemonContainer image={currentPokemon.image} />}
		</div>
	);
};

export default Description;
